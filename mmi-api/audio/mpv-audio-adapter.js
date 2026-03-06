const fs = require("fs");
const net = require("net");
const os = require("os");
const path = require("path");
const { EventEmitter } = require("events");
const { execFile, spawnSync } = require("child_process");

class MpvAudioAdapter extends EventEmitter {
  constructor(options = {}) {
    super();
    this.logger = options.logger || console;
    this.preferredAo = options.preferredAo || MpvAudioAdapter.defaultAoForPlatform();
    this.mpvBinary = options.mpvBinary || this.resolveMpvBinary();
    this.strictBackend =
      String(options.strictBackend ?? process.env.AUDIO_BACKEND_STRICT ?? "false").toLowerCase() ===
      "true";
    this.allowNoAudioFallback = !this.strictBackend;
    this.ipcEndpoint =
      process.platform === "win32"
        ? `\\\\.\\pipe\\mmi-audio-mpv-${process.pid}-${Date.now()}`
        : path.join(os.tmpdir(), `mmi-audio-mpv-${process.pid}-${Date.now()}.sock`);
    this.mpv = null;
    this.ipcClient = null;
    this.pending = new Map();
    this.ensureReadyPromise = null;
    this.nextRequestId = 1;
    this.lineBuffer = "";
    this.available = false;
    this.lastError = null;
    this.currentState = {
      backend: "mpv",
      backendAvailable: false,
      mode: "stopped",
      volume: 60,
      source: null,
      positionSec: 0,
      durationSec: null,
      paused: false,
      playing: false,
      lastError: null,
      backendWarning: null,
    };
  }

  static defaultAoForPlatform() {
    switch (process.platform) {
      case "linux":
        return "pipewire,pulse,alsa";
      case "win32":
        return "wasapi,auto";
      case "darwin":
        return "coreaudio,auto";
      default:
        return "auto";
    }
  }

  resolveMpvBinary() {
    if (process.env.MPV_PATH && fs.existsSync(process.env.MPV_PATH)) {
      return process.env.MPV_PATH;
    }
    if (this.checkBinaryAvailable("mpv")) {
      return "mpv";
    }
    if (process.platform === "win32") {
      const candidates = [
        "C:\\Program Files\\MPV Player\\mpv.exe",
        "C:\\Program Files\\mpv\\mpv.exe",
        "C:\\Program Files (x86)\\MPV Player\\mpv.exe",
      ];
      for (const candidate of candidates) {
        if (fs.existsSync(candidate)) {
          return candidate;
        }
      }
    }
    return "mpv";
  }

  getStatus() {
    return { ...this.currentState };
  }

  isNoAudioFallback() {
    return !this.available && this.allowNoAudioFallback;
  }

  async init() {
    try {
      await this.ensureReady();
    } catch (error) {
      if (!this.allowNoAudioFallback) {
        throw error;
      }
      this.currentState.backend = "stub";
      this.currentState.backendAvailable = false;
      this.currentState.backendWarning = "mpv binary not found in PATH.";
      this.currentState.lastError =
        "mpv unavailable, running in stub no-audio mode.";
    }
    this.emitState();
    return this.getStatus();
  }

  async ensureReady() {
    if (
      this.mpv &&
      !this.mpv.killed &&
      this.ipcClient &&
      !this.ipcClient.destroyed
    ) {
      return;
    }
    if (this.available && this.mpv && !this.mpv.killed) {
      return;
    }
    if (this.lastError && /ENOENT/.test(this.lastError)) {
      if (this.allowNoAudioFallback) {
        return;
      }
      throw new Error("mpv not available (No-Audio mode).");
    }
    if (this.ensureReadyPromise) {
      await this.ensureReadyPromise;
      return;
    }
    this.ensureReadyPromise = this.startMpv().finally(() => {
      this.ensureReadyPromise = null;
    });
    await this.ensureReadyPromise;
  }

  async startMpv() {
    this.cleanupSocket();
    return new Promise((resolve, reject) => {
      let settled = false;
      const finishError = (error) => {
        if (settled) {
          return;
        }
        settled = true;
        this.available = false;
        this.currentState.backendAvailable = false;
        this.currentState.lastError = `Audio backend init failed: ${error.message}`;
        this.cleanupFailedStartup();
        this.emitState();
        reject(error);
      };
      const finishSuccess = () => {
        if (settled) {
          return;
        }
        settled = true;
        resolve();
      };
      const args = [
        "--idle=yes",
        "--no-video",
        "--no-terminal",
        "--force-window=no",
        "--audio-display=no",
        `--ao=${this.preferredAo}`,
        `--input-ipc-server=${this.ipcEndpoint}`,
      ];
      this.mpv = require("child_process").spawn(this.mpvBinary, args, {
        stdio: ["ignore", "ignore", "pipe"],
      });

      this.mpv.on("error", (error) => {
        this.available = false;
        this.lastError = String(error.message || error);
        this.currentState.backendAvailable = false;
        this.currentState.backend = this.allowNoAudioFallback ? "stub" : "mpv";
        this.currentState.lastError =
          error.code === "ENOENT"
            ? "mpv not installed. Running in no-audio mode."
            : this.lastError;
        this.emitState();
        finishError(error);
      });

      this.mpv.stderr.on("data", (chunk) => {
        const text = String(chunk || "").trim();
        if (text) {
          this.logger.warn(`[audio/mpv] ${text}`);
        }
      });

      this.mpv.on("exit", () => {
        this.available = false;
        this.currentState.backendAvailable = false;
        if (!this.currentState.lastError) {
          this.currentState.lastError = "mpv process exited.";
        }
        this.emitState();
      });

      this.waitForSocket()
        .then(() => this.connectIpcWithRetry())
        .then(() => {
          this.available = true;
          this.lastError = null;
          this.currentState.backend = "mpv";
          this.currentState.backendAvailable = true;
          this.currentState.lastError = null;
          this.currentState.backendWarning = null;
          this.emitState();
          finishSuccess();
        })
        .catch((error) => finishError(error));
    });
  }

  waitForSocket(timeoutMs = 4000) {
    if (process.platform === "win32") {
      // On Windows mpv uses named pipes; the server endpoint is not a filesystem socket.
      return Promise.resolve();
    }
    const started = Date.now();
    return new Promise((resolve, reject) => {
      const poll = () => {
        if (fs.existsSync(this.ipcEndpoint)) {
          resolve();
          return;
        }
        if (Date.now() - started > timeoutMs) {
          reject(new Error("Timed out waiting for mpv IPC socket."));
          return;
        }
        setTimeout(poll, 50);
      };
      poll();
    });
  }

  connectIpc() {
    return new Promise((resolve, reject) => {
      const client = net.createConnection(this.ipcEndpoint);
      this.ipcClient = client;
      const onConnectError = (error) => {
        if (!client.destroyed) {
          client.destroy();
        }
        if (this.ipcClient === client) {
          this.ipcClient = null;
        }
        reject(error);
      };
      client.once("error", onConnectError);
      client.once("connect", () => {
        client.removeListener("error", onConnectError);
        client.on("data", (chunk) => this.handleIpcData(chunk));
        client.on("error", (error) => {
          this.currentState.lastError = `Audio IPC error: ${error.message}`;
          this.emitState();
        });
        client.on("close", () => {
          this.available = false;
          this.currentState.backendAvailable = false;
          if (this.ipcClient === client) {
            this.ipcClient = null;
          }
          this.emitState();
        });
        Promise.all([
          this.command(["observe_property", 1, "pause"]),
          this.command(["observe_property", 2, "time-pos"]),
          this.command(["observe_property", 3, "duration"]),
          this.command(["observe_property", 4, "volume"]),
          this.command(["observe_property", 5, "path"]),
        ])
          .then(() => resolve())
          .catch(reject);
      });
    });
  }

  connectIpcWithRetry(timeoutMs = 5000, retryDelayMs = 120) {
    const started = Date.now();
    const tryConnect = () =>
      this.connectIpc().catch((error) => {
        const transient = ["ENOENT", "ECONNREFUSED", "EPIPE", "ENOTFOUND"].includes(error.code);
        if (transient && Date.now() - started < timeoutMs) {
          if (this.ipcClient && !this.ipcClient.destroyed) {
            this.ipcClient.destroy();
          }
          this.ipcClient = null;
          return new Promise((resolve) => setTimeout(resolve, retryDelayMs)).then(tryConnect);
        }
        throw error;
      });
    return tryConnect();
  }

  handleIpcData(chunk) {
    this.lineBuffer += chunk.toString("utf8");
    let newlineIndex = this.lineBuffer.indexOf("\n");
    while (newlineIndex >= 0) {
      const line = this.lineBuffer.slice(0, newlineIndex).trim();
      this.lineBuffer = this.lineBuffer.slice(newlineIndex + 1);
      newlineIndex = this.lineBuffer.indexOf("\n");
      if (!line) {
        continue;
      }
      let parsed;
      try {
        parsed = JSON.parse(line);
      } catch {
        continue;
      }
      if (Number.isFinite(parsed.request_id) && this.pending.has(parsed.request_id)) {
        const { resolve, reject } = this.pending.get(parsed.request_id);
        this.pending.delete(parsed.request_id);
        if (parsed.error && parsed.error !== "success") {
          reject(new Error(parsed.error));
        } else {
          resolve(parsed.data);
        }
        continue;
      }
      this.handleEvent(parsed);
    }
  }

  handleEvent(event) {
    if (event.event === "start-file") {
      this.currentState.playing = true;
      this.currentState.paused = false;
      this.currentState.mode = "playing";
      this.emitState();
      return;
    }

    if (event.event === "end-file" || event.event === "idle") {
      this.currentState.playing = false;
      this.currentState.paused = false;
      this.currentState.mode = "stopped";
      this.currentState.positionSec = 0;
      this.emitState();
      return;
    }

    if (event.event !== "property-change") {
      return;
    }
    const value = event.data;
    switch (event.name) {
      case "pause":
        this.currentState.paused = !!value;
        this.currentState.mode = this.currentState.paused
          ? "paused"
          : this.currentState.playing
            ? "playing"
            : "stopped";
        break;
      case "time-pos":
        this.currentState.positionSec = Number.isFinite(value) ? Number(value) : 0;
        break;
      case "duration":
        this.currentState.durationSec = Number.isFinite(value) ? Number(value) : null;
        break;
      case "volume":
        if (Number.isFinite(value)) {
          this.currentState.volume = Math.max(0, Math.min(100, Number(value)));
        }
        break;
      case "path":
        this.currentState.source = value || this.currentState.source;
        break;
      default:
        break;
    }
    this.emitState();
  }

  command(command) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.ipcClient || this.ipcClient.destroyed) {
          await this.ensureReady();
        }
      } catch (error) {
        reject(error);
        return;
      }
      if (this.isNoAudioFallback()) {
        resolve(null);
        return;
      }
      if (!this.ipcClient || this.ipcClient.destroyed) {
        reject(new Error("Audio backend IPC not connected."));
        return;
      }
      const requestId = this.nextRequestId++;
      const timeoutHandle = setTimeout(() => {
        if (!this.pending.has(requestId)) {
          return;
        }
        this.pending.delete(requestId);
        reject(new Error("Audio backend command timed out."));
      }, 5000);
      this.pending.set(requestId, {
        resolve: (data) => {
          clearTimeout(timeoutHandle);
          resolve(data);
        },
        reject: (error) => {
          clearTimeout(timeoutHandle);
          reject(error);
        },
      });
      const payload = JSON.stringify({
        command,
        request_id: requestId,
      });
      this.ipcClient.write(`${payload}\n`, "utf8");
    });
  }

  async load(source) {
    if (!source) {
      throw new Error("source is required");
    }
    if (!this.isNoAudioFallback()) {
      await this.command(["loadfile", source, "replace"]);
    }
    this.currentState.source = source;
    this.currentState.mode = "stopped";
    this.currentState.positionSec = 0;
    this.currentState.lastError = null;
    this.emitState();
    return this.getStatus();
  }

  async play() {
    if (!this.isNoAudioFallback()) {
      await this.command(["set_property", "pause", false]);
    }
    this.currentState.playing = true;
    this.currentState.paused = false;
    this.currentState.mode = "playing";
    this.currentState.lastError = null;
    this.emitState();
    return this.getStatus();
  }

  async pause() {
    if (!this.isNoAudioFallback()) {
      await this.command(["set_property", "pause", true]);
    }
    this.currentState.paused = true;
    this.currentState.mode = "paused";
    this.currentState.lastError = null;
    this.emitState();
    return this.getStatus();
  }

  async stop() {
    if (!this.isNoAudioFallback()) {
      await this.command(["stop"]);
    }
    this.currentState.playing = false;
    this.currentState.paused = false;
    this.currentState.mode = "stopped";
    this.currentState.positionSec = 0;
    this.currentState.lastError = null;
    this.emitState();
    return this.getStatus();
  }

  async seek(positionSec) {
    const target = Number(positionSec);
    if (!Number.isFinite(target) || target < 0) {
      throw new Error("seek position must be a non-negative number");
    }
    if (!this.isNoAudioFallback()) {
      await this.command(["seek", target, "absolute"]);
    }
    this.currentState.positionSec = target;
    this.currentState.lastError = null;
    this.emitState();
    return this.getStatus();
  }

  async setVolume(volume) {
    const value = Number(volume);
    if (!Number.isFinite(value)) {
      throw new Error("volume must be a number");
    }
    const clamped = Math.max(0, Math.min(100, value));
    if (!this.isNoAudioFallback()) {
      await this.command(["set_property", "volume", clamped]);
    }
    this.currentState.volume = clamped;
    this.currentState.lastError = null;
    this.emitState();
    return this.getStatus();
  }

  async listDevices() {
    if (this.isNoAudioFallback()) {
      return {
        ok: true,
        backend: "stub",
        devices: [],
        warning: "No-audio stub backend active; device list unavailable.",
      };
    }
    return new Promise((resolve) => {
      execFile("wpctl", ["status", "-n"], (error, stdout) => {
        if (error) {
          resolve({
            ok: false,
            backend: "pipewire",
            error: "wpctl unavailable (device list disabled).",
            devices: [],
          });
          return;
        }
        const lines = String(stdout || "").split(/\r?\n/);
        const devices = [];
        let inSinkSection = false;
        for (const line of lines) {
          if (line.includes("Sinks:")) {
            inSinkSection = true;
            continue;
          }
          if (inSinkSection && /^\s*$/.test(line)) {
            break;
          }
          if (!inSinkSection) {
            continue;
          }
          const match = line.match(/^\s*([*]?)\s*(\d+)\.\s+(.+?)\s*(?:\[|$)/);
          if (!match) {
            continue;
          }
          devices.push({
            id: match[2],
            name: match[3].trim(),
            isDefault: match[1] === "*",
          });
        }
        resolve({
          ok: true,
          backend: "pipewire",
          devices,
        });
      });
    });
  }

  checkBinaryAvailable(binary, versionArg = "--version") {
    const result = spawnSync(binary, [versionArg], {
      stdio: "ignore",
      shell: false,
      windowsHide: true,
    });
    if (result.error) {
      return false;
    }
    return typeof result.status === "number" && result.status === 0;
  }

  async diagnostics() {
    return {
      backend: this.currentState.backend,
      backendAvailable: this.currentState.backendAvailable,
      strictBackend: this.strictBackend,
      platform: process.platform,
      mpvBinary: this.mpvBinary,
      mpvAvailableInPath: this.checkBinaryAvailable(this.mpvBinary),
      wpctlAvailableInPath: this.checkBinaryAvailable("wpctl"),
      preferredAo: this.preferredAo,
      backendWarning: this.currentState.backendWarning || null,
      lastError: this.currentState.lastError || null,
    };
  }

  emitState() {
    this.emit("state", this.getStatus());
  }

  cleanupFailedStartup() {
    if (this.ipcClient && !this.ipcClient.destroyed) {
      this.ipcClient.destroy();
    }
    this.ipcClient = null;
    if (this.mpv && !this.mpv.killed) {
      try {
        this.mpv.kill("SIGTERM");
      } catch {
        // Ignore kill failures during startup cleanup.
      }
    }
    this.mpv = null;
    this.cleanupSocket();
  }

  cleanupSocket() {
    if (process.platform === "win32") {
      return;
    }
    try {
      if (fs.existsSync(this.ipcEndpoint)) {
        fs.unlinkSync(this.ipcEndpoint);
      }
    } catch {
      // Ignore cleanup errors.
    }
  }

  async shutdown() {
    for (const [requestId, pending] of this.pending.entries()) {
      pending.reject(new Error("Audio adapter is shutting down."));
      this.pending.delete(requestId);
    }
    if (this.ipcClient && !this.ipcClient.destroyed) {
      this.ipcClient.destroy();
    }
    this.ipcClient = null;
    if (this.mpv && !this.mpv.killed) {
      this.mpv.kill("SIGTERM");
    }
    this.mpv = null;
    this.available = false;
    this.currentState.backendAvailable = false;
    this.cleanupSocket();
  }
}

module.exports = {
  MpvAudioAdapter,
};
