const cors = require("cors");
const express = require("express");
const fs = require("fs");
const http = require("http");
const path = require("path");
const { WebSocketServer } = require("ws");

const PORT = Number(process.env.PORT || 14713);
const HOST = process.env.HOST || "127.0.0.1";
const ENABLE_DEV_CORS =
  String(process.env.DEV_CORS || "true").toLowerCase() !== "false";
const RUDI_HOST = process.env.RUDI_HOST || "localhost";

const repoRoot = path.resolve(__dirname, "..");
const audiRoot = path.join(repoRoot, "audi");
const mediaRoot = path.join(audiRoot, "media");
const fixtureRoot = path.join(__dirname, "fixtures");
const indexHtmlPath = path.join(audiRoot, "index.html");

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadJsonFixture(fileName, fallback) {
  const fixturePath = path.join(fixtureRoot, fileName);
  try {
    return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
  } catch (error) {
    console.warn(`[fixture] using fallback for ${fileName}: ${error.message}`);
    return deepClone(fallback);
  }
}

const fixtureRudiConfig = loadJsonFixture("rudi.json", {
  use_registry: true,
  backends: ["rudi-ws"],
  service_registry_locators: [`rudi-ws://${RUDI_HOST}:${PORT}/registry`],
  services: [
    {
      path: "/registry",
      type: "registry",
      locators: [`rudi-ws://${RUDI_HOST}:${PORT}/registry`],
    },
  ],
  javascript: {
    use_plugin: false,
    ws_keepalive_interval: 1000,
  },
  ws_keepalive: true,
});

const fixtureTracingConfig = loadJsonFixture("tracing.json", {
  default: {
    enabled: true,
    backends: {
      ConsoleBackend: {
        enabled: true,
      },
      WebsocketBackend: {
        enabled: false,
        url: "ws://localhost:8080/",
      },
    },
  },
});

const fixtureResources = loadJsonFixture("rudi-resources.json", {});
const fixtureVehicleState = loadJsonFixture("vehicle-state.json", {
  speedKph: 0,
  rpm: 0,
  gear: "P",
  locale: "en_US",
  clock: "00:00",
});

function normalizePath(inputPath) {
  if (!inputPath || inputPath === ".") {
    return "/";
  }
  let normalized = String(inputPath).replace(/\\/g, "/");
  if (!normalized.startsWith("/")) {
    normalized = `/${normalized}`;
  }
  normalized = normalized.replace(/\/{2,}/g, "/");
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}

function buildRudiConfig() {
  const config = deepClone(fixtureRudiConfig);
  const registryLocator = `rudi-ws://${RUDI_HOST}:${PORT}/registry`;
  config.service_registry_locators = [registryLocator];
  if (!Array.isArray(config.services)) {
    config.services = [];
  }
  const registryService = config.services.find((service) => service.path === "/registry");
  if (registryService) {
    registryService.locators = [registryLocator];
    registryService.type = "registry";
  } else {
    config.services.unshift({
      path: "/registry",
      type: "registry",
      locators: [registryLocator],
    });
  }
  return config;
}

function listMediaFiles() {
  if (!fs.existsSync(mediaRoot)) {
    return [];
  }
  return fs
    .readdirSync(mediaRoot, { withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.(mp3|wav|m4a|aac)$/i.test(entry.name))
    .map((entry, index) => {
      const filename = entry.name;
      const ext = path.extname(filename);
      const title = path.basename(filename, ext).replace(/[_-]+/g, " ").trim();
      return {
        id: String(index + 1),
        filename,
        title: title || filename,
        url: `/media/${encodeURIComponent(filename)}`,
      };
    });
}

function streamAudioFile(filePath, req, res) {
  const stat = fs.statSync(filePath);
  const range = req.headers.range;
  const contentType = "audio/mpeg";

  if (!range) {
    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": stat.size,
      "Accept-Ranges": "bytes",
    });
    fs.createReadStream(filePath).pipe(res);
    return;
  }

  const matches = /bytes=(\d*)-(\d*)/.exec(range);
  if (!matches) {
    res.status(416).end();
    return;
  }

  const start = matches[1] ? Number(matches[1]) : 0;
  const end = matches[2] ? Number(matches[2]) : stat.size - 1;
  if (Number.isNaN(start) || Number.isNaN(end) || start > end || end >= stat.size) {
    res.status(416).set("Content-Range", `bytes */${stat.size}`).end();
    return;
  }

  res.writeHead(206, {
    "Content-Type": contentType,
    "Content-Length": end - start + 1,
    "Content-Range": `bytes ${start}-${end}/${stat.size}`,
    "Accept-Ranges": "bytes",
  });
  fs.createReadStream(filePath, { start, end }).pipe(res);
}

function decodeSerializablePayload(payload) {
  if (!payload || !payload.data) {
    return null;
  }
  try {
    const bytes = Array.isArray(payload.data)
      ? Buffer.from(payload.data)
      : Buffer.from(payload.data.data || payload.data);
    const mimeType = String(payload.mimeType || "");
    const raw = bytes.toString("utf8");
    if (mimeType.includes("json")) {
      return raw ? JSON.parse(raw) : {};
    }
    return raw;
  } catch {
    return null;
  }
}

function toSerializablePayload(value) {
  if (value === undefined || value === null) {
    return null;
  }
  const text = JSON.stringify(value);
  return {
    data: Array.from(Buffer.from(text, "utf8")),
    mimeType: "application/json",
  };
}

function inferServiceRoot(resourcePath) {
  const normalized = normalizePath(resourcePath);
  const segments = normalized.split("/").filter(Boolean);
  return segments.length > 0 ? `/${segments[0]}` : "/";
}

const knownServiceRoots = new Set(["/registry"]);
for (const resourcePath of Object.keys(fixtureResources)) {
  knownServiceRoots.add(inferServiceRoot(resourcePath));
}
for (const service of fixtureRudiConfig.services || []) {
  if (service && typeof service.path === "string") {
    knownServiceRoots.add(normalizePath(service.path));
  }
}

function serviceDefinition(servicePath) {
  const normalized = normalizePath(servicePath);
  return {
    path: normalized,
    type: normalized === "/registry" ? "registry" : "rsi",
    locators: [`rudi-ws://${RUDI_HOST}:${PORT}${normalized}`],
  };
}

function registryUpdate(servicePath) {
  return {
    updateType: "ADDED",
    element: serviceDefinition(servicePath),
  };
}

function resolveResourcePath(servicePath, requestPath) {
  const normalizedService = normalizePath(servicePath);
  const normalizedRequestPath = normalizePath(requestPath);
  if (normalizedService === "/registry") {
    return normalizedRequestPath;
  }
  if (normalizedRequestPath === "/") {
    return normalizedService;
  }
  if (
    normalizedRequestPath === normalizedService ||
    normalizedRequestPath.startsWith(`${normalizedService}/`)
  ) {
    return normalizedRequestPath;
  }
  return normalizePath(`${normalizedService}${normalizedRequestPath}`);
}

function resolveResourceBody(fullPath) {
  const normalized = normalizePath(fullPath);
  if (Object.prototype.hasOwnProperty.call(fixtureResources, normalized)) {
    return deepClone(fixtureResources[normalized]);
  }
  return {
    path: normalized,
    available: true,
    mocked: true,
  };
}

function buildRegistryBody(requestPath) {
  const normalizedPath = normalizePath(requestPath);
  if (normalizedPath === "/") {
    return Array.from(knownServiceRoots)
      .sort()
      .map((servicePath) => registryUpdate(servicePath));
  }
  return [registryUpdate(normalizedPath)];
}

const app = express();
app.disable("x-powered-by");

if (ENABLE_DEV_CORS) {
  const corsOptions = {
    origin: true,
    methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept", "X-Requested-With"],
    optionsSuccessStatus: 204,
  };
  app.use(cors(corsOptions));
  app.options(/.*/, cors(corsOptions));
}
app.use(express.json({ limit: "2mb" }));

// Some static dev servers accidentally request //etc/eso/rudi.json.
// Normalize duplicate slashes so route matching still works.
app.use((req, res, next) => {
  const original = req.url || "/";
  const queryIndex = original.indexOf("?");
  const pathPart = queryIndex >= 0 ? original.slice(0, queryIndex) : original;
  const queryPart = queryIndex >= 0 ? original.slice(queryIndex) : "";
  const normalizedPath = pathPart.replace(/\/{2,}/g, "/");
  if (normalizedPath !== pathPart) {
    req.url = `${normalizedPath}${queryPart}`;
  }
  next();
});

app.use((req, res, next) => {
  const started = process.hrtime.bigint();
  res.on("finish", () => {
    const elapsedMs = Number(process.hrtime.bigint() - started) / 1_000_000;
    console.log(
      `[http] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${elapsedMs.toFixed(1)} ms)`,
    );
  });
  next();
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "mmi-api",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/media/library", (req, res) => {
  const tracks = listMediaFiles();
  res.json({
    status: "ok",
    count: tracks.length,
    tracks,
  });
});

app.get("/api/media/stream/:id", (req, res) => {
  const tracks = listMediaFiles();
  const requestedId = req.params.id;
  const decoded = decodeURIComponent(requestedId);
  const track = tracks.find((item) => item.id === requestedId || item.filename === decoded);
  if (!track) {
    res.status(404).json({
      error: "track_not_found",
      id: requestedId,
    });
    return;
  }
  streamAudioFile(path.join(mediaRoot, track.filename), req, res);
});

app.get("/etc/eso/rudi.json", (req, res) => {
  res.json(buildRudiConfig());
});

app.get("/etc/eso/tracing.json", (req, res) => {
  res.json(deepClone(fixtureTracingConfig));
});

function sendGzipJson(filePath, res) {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Content-Encoding", "gzip");
  res.setHeader("Vary", "Accept-Encoding");
  fs.createReadStream(filePath).pipe(res);
}

app.get(/^\/i18n\/(ten-inch|eight-inch)\/([A-Za-z_]+)\.json(?:\.gz)?$/, (req, res, next) => {
  const requestedPath = decodeURIComponent(req.path);
  const absoluteRequested = path.join(audiRoot, requestedPath);
  if (requestedPath.endsWith(".json")) {
    const gzPath = `${absoluteRequested}.gz`;
    if (fs.existsSync(gzPath)) {
      sendGzipJson(gzPath, res);
      return;
    }
  }
  if (requestedPath.endsWith(".json.gz") && fs.existsSync(absoluteRequested)) {
    sendGzipJson(absoluteRequested, res);
    return;
  }
  next();
});

app.use(
  "/media",
  express.static(mediaRoot, {
    acceptRanges: true,
    fallthrough: true,
  }),
);

app.use(
  express.static(audiRoot, {
    index: false,
    fallthrough: true,
  }),
);

app.all(/^\/api(?:\/.*)?$/, (req, res) => {
  res.status(501).json({
    error: "not_implemented",
    method: req.method,
    path: req.path,
  });
});

app.get(/.*/, (req, res, next) => {
  if (
    req.path.startsWith("/api") ||
    req.path.startsWith("/etc/eso") ||
    req.path.startsWith("/media") ||
    req.path.startsWith("/ws")
  ) {
    next();
    return;
  }
  if (path.extname(req.path)) {
    res.status(404).json({
      error: "asset_not_found",
      path: req.path,
    });
    return;
  }
  res.sendFile(indexHtmlPath);
});

app.use((req, res) => {
  res.status(404).json({
    error: "not_found",
    path: req.path,
  });
});

const server = http.createServer(app);
const wsServer = new WebSocketServer({ noServer: true });
const vehicleFeedClients = new Set();

function sendVehicleState(client) {
  const now = new Date();
  const payload = {
    ...fixtureVehicleState,
    clock: now.toISOString(),
    speedKph: Number(((fixtureVehicleState.speedKph || 0) + Math.random() * 3).toFixed(1)),
    rpm: Math.round((fixtureVehicleState.rpm || 0) + Math.random() * 80),
  };
  client.send(
    JSON.stringify({
      type: "vehicle_state",
      payload,
    }),
  );
}

function sendRudiResponse(ws, service, requestId, statusCode, responseBody) {
  ws.send(
    JSON.stringify({
      type: "actionResponse",
      service,
      payload: {
        requestId,
        statusCode,
        body: toSerializablePayload(responseBody),
        headers: null,
      },
    }),
  );
  ws.send(
    JSON.stringify({
      type: "actionCompleted",
      service,
      payload: requestId,
    }),
  );
}

function handleActionRequest(ws, message) {
  const service = normalizePath(message.service || "/registry");
  const payload = message.payload || {};
  const requestId = Number.isFinite(payload.requestId) ? payload.requestId : 0;
  const command = String(payload.command || "retrieve").toLowerCase();
  const requestPath = normalizePath(payload.path || "/");
  const fullPath = resolveResourcePath(service, requestPath);
  const requestBody = decodeSerializablePayload(payload.body);

  if (service === "/registry" && command === "retrieve") {
    sendRudiResponse(ws, service, requestId, 200, buildRegistryBody(requestPath));
    return;
  }

  if (["update", "insert", "delete"].includes(command)) {
    sendRudiResponse(ws, service, requestId, 200, {
      accepted: true,
      command,
      path: fullPath,
      requestBody,
    });
    return;
  }

  sendRudiResponse(ws, service, requestId, 200, resolveResourceBody(fullPath));
}

function parseWebSocketMessage(rawData) {
  if (typeof rawData === "string") {
    return JSON.parse(rawData);
  }
  if (Buffer.isBuffer(rawData)) {
    return JSON.parse(rawData.toString("utf8"));
  }
  if (rawData instanceof ArrayBuffer) {
    return JSON.parse(Buffer.from(rawData).toString("utf8"));
  }
  return null;
}

wsServer.on("connection", (ws, request) => {
  let pathname = "/";
  try {
    pathname = new URL(request.url || "/", "http://localhost").pathname;
  } catch {
    pathname = "/";
  }
  ws.isVehicleFeed = pathname === "/ws";
  if (ws.isVehicleFeed) {
    vehicleFeedClients.add(ws);
    sendVehicleState(ws);
  }

  ws.on("message", (raw) => {
    let message;
    try {
      message = parseWebSocketMessage(raw);
    } catch (error) {
      console.warn(`[ws] invalid JSON payload: ${error.message}`);
      return;
    }
    if (!message || typeof message !== "object") {
      return;
    }
    if (message.type === "ping") {
      ws.send(
        JSON.stringify({
          type: "pong",
          service: message.service || "/registry",
          payload: message.payload || null,
        }),
      );
      return;
    }
    if (message.type === "actionRequest") {
      handleActionRequest(ws, message);
      return;
    }
    if (message.type === "action") {
      const topic = normalizePath(message.topic || "/");
      ws.send(
        JSON.stringify({
          action: "actionResponse",
          topic,
          status: "success",
          body: resolveResourceBody(topic),
        }),
      );
    }
  });

  ws.on("close", () => {
    vehicleFeedClients.delete(ws);
  });
});

server.on("upgrade", (request, socket, head) => {
  if (request.url && request.url.startsWith("/api")) {
    socket.destroy();
    return;
  }
  wsServer.handleUpgrade(request, socket, head, (ws) => {
    wsServer.emit("connection", ws, request);
  });
});

const vehicleTimer = setInterval(() => {
  for (const client of vehicleFeedClients) {
    if (client.readyState === client.OPEN) {
      sendVehicleState(client);
    }
  }
}, 2000);

server.on("error", (error) => {
  if (error && error.code === "EADDRINUSE") {
    console.error(
      `[boot] Port conflict: ${HOST}:${PORT} is already in use. Stop the other process or run with a different PORT.`,
    );
    process.exit(1);
  }
  console.error("[boot] Server error:", error);
  process.exit(1);
});

server.listen(PORT, HOST, () => {
  console.log(`[boot] UI root: ${audiRoot}`);
  console.log(`[boot] Server listening on http://${HOST}:${PORT}`);
  console.log(`[boot] DEV_CORS=${ENABLE_DEV_CORS}`);
});

function shutdown() {
  clearInterval(vehicleTimer);
  wsServer.clients.forEach((client) => client.close());
  server.close(() => process.exit(0));
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
