const fs = require("fs");
const path = require("path");
const { PlaybackState } = require("./playback-state");
const { MpvAudioAdapter } = require("./mpv-audio-adapter");

class MockMediaService {
  constructor(options = {}) {
    this.logger = options.logger || console;
    this.mediaRoot = options.mediaRoot;
    this.listTracks = options.listTracks || (() => []);
    this.onStateChanged = options.onStateChanged || (() => {});
    this.audioAdapter = options.audioAdapter || new MpvAudioAdapter({ logger: this.logger });
    this.playbackState = new PlaybackState({
      backend: "mpv",
      backendAvailable: false,
      mode: "stopped",
      volume: 60,
    });
    this.supportedEvents = new Set([
      "media.source.load",
      "media.play",
      "media.pause",
      "media.stop",
      "media.seek",
      "media.volume.set",
      "audio.device.list",
      "audio.backend.diagnostics",
    ]);
    this.playbackState.subscribe((state) => this.onStateChanged(state));
    this.audioAdapter.on("state", (adapterState) => {
      this.playbackState.update({
        backend: adapterState.backend || "mpv",
        backendAvailable: !!adapterState.backendAvailable,
        mode: adapterState.mode || this.playbackState.snapshot().mode,
        volume: Number.isFinite(adapterState.volume)
          ? adapterState.volume
          : this.playbackState.snapshot().volume,
        source: adapterState.source || this.playbackState.snapshot().source,
        positionSec: Number.isFinite(adapterState.positionSec) ? adapterState.positionSec : 0,
        durationSec: Number.isFinite(adapterState.durationSec)
          ? adapterState.durationSec
          : this.playbackState.snapshot().durationSec,
        lastError: adapterState.lastError || null,
      });
    });
  }

  async init() {
    try {
      const status = await this.audioAdapter.init();
      this.playbackState.update({
        backend: status.backend || "mpv",
        backendAvailable: !!status.backendAvailable,
        mode: status.mode || "stopped",
        volume: Number.isFinite(status.volume) ? status.volume : 60,
        lastError: status.lastError || null,
      });
    } catch (error) {
      this.playbackState.update({
        backend: "no-audio",
        backendAvailable: false,
        mode: "stopped",
        lastError: `Audio backend unavailable: ${error.message}`,
      });
    }
    return this.getState();
  }

  isSupportedEvent(type) {
    return this.supportedEvents.has(String(type || ""));
  }

  getState() {
    return this.playbackState.snapshot();
  }

  resolveLocalSource(payload = {}) {
    const tracks = this.listTracks();
    if (payload.id) {
      const track = tracks.find((item) => item.id === String(payload.id));
      if (!track) {
        throw new Error(`track id ${payload.id} not found`);
      }
      return {
        source: path.join(this.mediaRoot, track.filename),
        track,
      };
    }

    if (payload.filename) {
      const track = tracks.find((item) => item.filename === payload.filename);
      if (!track) {
        throw new Error(`track filename ${payload.filename} not found`);
      }
      return {
        source: path.join(this.mediaRoot, track.filename),
        track,
      };
    }

    if (payload.path) {
      const absolute = path.resolve(this.mediaRoot, payload.path);
      if (!absolute.startsWith(path.resolve(this.mediaRoot))) {
        throw new Error("path must stay within local media directory");
      }
      return {
        source: absolute,
        track: null,
      };
    }

    if (payload.url) {
      const url = new URL(payload.url);
      if (!["localhost", "127.0.0.1", "::1"].includes(url.hostname)) {
        throw new Error("only localhost stream URLs are allowed");
      }
      if (!["http:", "https:"].includes(url.protocol)) {
        throw new Error("only HTTP(S) stream URLs are allowed");
      }
      return {
        source: payload.url,
        track: null,
      };
    }

    throw new Error("missing source payload (id, filename, path or url required)");
  }

  async loadSource(payload = {}) {
    const resolved = this.resolveLocalSource(payload);
    if (!/^https?:\/\//i.test(resolved.source) && !fs.existsSync(resolved.source)) {
      throw new Error(`audio source not found: ${resolved.source}`);
    }
    await this.audioAdapter.load(resolved.source);
    this.playbackState.update({
      source: resolved.track
        ? {
            id: resolved.track.id,
            filename: resolved.track.filename,
            title: resolved.track.title,
            url: resolved.track.url,
          }
        : { path: resolved.source },
      mode: "stopped",
      positionSec: 0,
      lastError: null,
    });
    return this.getState();
  }

  async handleEvent(type, payload = {}) {
    try {
      switch (type) {
        case "media.source.load":
          await this.loadSource(payload);
          break;
        case "media.play":
          if (payload && (payload.id || payload.filename || payload.path || payload.url)) {
            await this.loadSource(payload);
          }
          await this.audioAdapter.play();
          break;
        case "media.pause":
          await this.audioAdapter.pause();
          break;
        case "media.stop":
          await this.audioAdapter.stop();
          break;
        case "media.seek":
          await this.audioAdapter.seek(payload.positionSec);
          break;
        case "media.volume.set":
          await this.audioAdapter.setVolume(payload.volume);
          this.playbackState.update({ volume: Math.max(0, Math.min(100, Number(payload.volume))) });
          break;
        case "audio.device.list": {
          const deviceResult = await this.audioAdapter.listDevices();
          this.playbackState.update({
            deviceCount: Array.isArray(deviceResult.devices) ? deviceResult.devices.length : 0,
          });
          return {
            ok: !!deviceResult.ok,
            devices: deviceResult.devices || [],
            error: deviceResult.error || null,
            warning: deviceResult.warning || null,
            state: this.getState(),
          };
        }
        case "audio.backend.diagnostics": {
          const diagnostics =
            typeof this.audioAdapter.diagnostics === "function"
              ? await this.audioAdapter.diagnostics()
              : { available: false };
          return {
            ok: true,
            diagnostics,
            state: this.getState(),
          };
        }
        default:
          return {
            ok: false,
            error: `unsupported_event:${type}`,
            state: this.getState(),
          };
      }
      const response = {
        ok: true,
        state: this.getState(),
      };
      if (response.state.backend === "stub") {
        response.warning = "Audio backend is running in no-audio stub mode.";
      }
      return response;
    } catch (error) {
      const message = String(error.message || error);
      this.playbackState.update({
        lastError: message,
      });
      return {
        ok: false,
        error: message,
        state: this.getState(),
      };
    }
  }

  async shutdown() {
    await this.audioAdapter.shutdown();
  }
}

module.exports = {
  MockMediaService,
};
