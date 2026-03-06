const cors = require("cors");
const express = require("express");
const fs = require("fs");
const http = require("http");
const path = require("path");
const { WebSocketServer } = require("ws");
const { MockMediaService } = require("./audio/mock-media-service");
const { SimulatorService } = require("./sim/simulator-service");

const PORT = Number(process.env.PORT || 14713);
const HOST = process.env.HOST || "127.0.0.1";
const ENABLE_DEV_CORS =
  String(process.env.DEV_CORS || "true").toLowerCase() !== "false";
function resolveRudiHost(host, configuredRudiHost) {
  if (configuredRudiHost && String(configuredRudiHost).trim()) {
    return String(configuredRudiHost).trim();
  }
  const currentHost = String(host || "").trim();
  if (!currentHost || currentHost === "0.0.0.0" || currentHost === "::" || currentHost === "::0") {
    return "127.0.0.1";
  }
  return currentHost;
}
const RUDI_HOST = resolveRudiHost(HOST, process.env.RUDI_HOST);

const repoRoot = path.resolve(__dirname, "..");
const audiRoot = path.join(repoRoot, "audi");
const mediaRoot = path.join(audiRoot, "media");
const fixtureRoot = path.join(__dirname, "fixtures");
const devUiRoot = path.join(__dirname, "public");
const indexHtmlPath = path.join(audiRoot, "index.html");
const balanceFaderAliasMap = new Map([
  [
    "BalanceFader_Interieur_AU0_LH.webp",
    path.join(
      audiRoot,
      "decorators",
      "W680_BalanceFader",
      "High",
      "BalanceFader_Interieur_AU53630_LH.webp",
    ),
  ],
  [
    "BalanceFader_Interieur_AU0_RH.webp",
    path.join(
      audiRoot,
      "decorators",
      "W680_BalanceFader",
      "High",
      "BalanceFader_Interieur_AU53630_RH.webp",
    ),
  ],
]);
const ALWAYS_ON_SERVICE_ROOTS = new Set([
  "/registry",
  "/mcppopupmanager",
  "/mcpdisplaymanager",
  "/mcpinputmanager",
]);
const MCP_SERVICE_ALIASES = [
  "/MCP_Popups",
  "/MCP_Displaymanager",
  "/MCP_InputRegions",
  "/mcp_popups",
  "/mcp_displaymanager",
  "/mcp_inputregions",
  "/mcpinputregions",
  "/mcp_input_regions",
  "/mcppopupmanager",
  "/mcpdisplaymanager",
  "/mcpinputmanager",
  "MCP_Popups",
  "MCP_Displaymanager",
  "MCP_InputRegions",
  "mcp_popups",
  "mcp_displaymanager",
  "mcp_inputregions",
  "mcpinputregions",
  "mcp_input_regions",
  "mcppopupmanager",
  "mcpdisplaymanager",
  "mcpinputmanager",
];

function sanitizeServicePathToken(inputPath) {
  if (inputPath === undefined || inputPath === null) {
    return "";
  }
  let normalized = String(inputPath).trim();
  const hashIndex = normalized.indexOf("#");
  if (hashIndex >= 0) {
    normalized = normalized.slice(0, hashIndex);
  }
  const queryIndex = normalized.indexOf("?");
  if (queryIndex >= 0) {
    normalized = normalized.slice(0, queryIndex);
  }
  return normalized.trim();
}

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
  let normalized = String(inputPath).trim().replace(/\\/g, "/");
  const hashIndex = normalized.indexOf("#");
  if (hashIndex >= 0) {
    normalized = normalized.slice(0, hashIndex);
  }
  const queryIndex = normalized.indexOf("?");
  if (queryIndex >= 0) {
    normalized = normalized.slice(0, queryIndex);
  }
  if (!normalized || normalized === ".") {
    return "/";
  }
  if (!normalized.startsWith("/")) {
    normalized = `/${normalized}`;
  }
  normalized = normalized.replace(/\/{2,}/g, "/");
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}

const SERVICE_PATH_ALIAS_LOOKUP = new Map([
  ["/mcppopupmanager", "/mcppopupmanager"],
  ["/mcp_popups", "/mcppopupmanager"],
  ["/mcpdisplaymanager", "/mcpdisplaymanager"],
  ["/mcp_displaymanager", "/mcpdisplaymanager"],
  ["/mcpinputmanager", "/mcpinputmanager"],
  ["/mcpinputregions", "/mcpinputmanager"],
  ["/mcp_inputregions", "/mcpinputmanager"],
  ["/mcp_input_regions", "/mcpinputmanager"],
]);
const SERVICE_PATH_ALIAS_PREFIXES = Object.freeze([
  ["/mcppopupmanager", "/mcppopupmanager"],
  ["/mcp_popups", "/mcppopupmanager"],
  ["/mcpdisplaymanager", "/mcpdisplaymanager"],
  ["/mcp_displaymanager", "/mcpdisplaymanager"],
  ["/mcpinputmanager", "/mcpinputmanager"],
  ["/mcpinputregions", "/mcpinputmanager"],
  ["/mcp_inputregions", "/mcpinputmanager"],
  ["/mcp_input_regions", "/mcpinputmanager"],
]);

function canonicalizeServicePath(inputPath) {
  const normalized = normalizePath(inputPath);
  const lower = normalized.toLowerCase();
  const exact = SERVICE_PATH_ALIAS_LOOKUP.get(lower);
  if (exact) {
    return exact;
  }
  for (const [aliasRoot, canonicalRoot] of SERVICE_PATH_ALIAS_PREFIXES) {
    if (lower === aliasRoot) {
      return canonicalRoot;
    }
    if (lower.startsWith(`${aliasRoot}/`)) {
      return canonicalRoot;
    }
  }
  return normalized;
}

function buildRudiConfig() {
  const config = deepClone(fixtureRudiConfig);
  const registryLocator = `rudi-ws://${RUDI_HOST}:${PORT}/registry`;
  config.service_registry_locators = [registryLocator];
  const serviceMap = new Map();

  function upsertService(pathValue, locatorPath = null, preserveRawPath = false) {
    if (pathValue === undefined || pathValue === null) {
      return;
    }
    const rawPath = sanitizeServicePathToken(pathValue);
    if (!rawPath) {
      return;
    }
    const service = preserveRawPath
      ? serviceDefinitionRaw(rawPath, locatorPath || rawPath)
      : serviceDefinition(locatorPath || rawPath);
    if (!serviceMap.has(service.path)) {
      serviceMap.set(service.path, service);
    }
  }

  if (Array.isArray(config.services)) {
    for (const service of config.services) {
      if (!service || typeof service.path !== "string") {
        continue;
      }
      const firstLocator =
        Array.isArray(service.locators) && service.locators.length > 0
          ? extractLocatorPath(service.locators[0])
          : null;
      upsertService(service.path, firstLocator || service.path, true);
    }
  }

  upsertService("/registry", "/registry", true);
  for (const servicePath of ALWAYS_ON_SERVICE_ROOTS) {
    if (servicePath === "/registry") {
      continue;
    }
    upsertService(servicePath);
  }
  // Keep MCP alias path variants so clients that key by raw path can connect.
  for (const alias of MCP_SERVICE_ALIASES) {
    const canonicalAlias = canonicalizeServicePath(alias || "/");
    upsertService(alias, alias, true);
    upsertService(canonicalAlias);
  }
  config.services = Array.from(serviceMap.values());
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
  if (payload === undefined || payload === null) {
    return null;
  }
  // JsonMsgSerializer sends JSON payloads as plain JSON values.
  if (typeof payload !== "object") {
    return payload;
  }
  if (!Object.prototype.hasOwnProperty.call(payload, "data")) {
    return deepClone(payload);
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
  // JsonMsgSerializer expects plain JSON values for application/json payloads.
  if (typeof value === "object") {
    return deepClone(value);
  }
  return value;
}

function inferServiceRoot(resourcePath) {
  const normalized = normalizePath(resourcePath);
  const segments = normalized.split("/").filter(Boolean);
  return canonicalizeServicePath(segments.length > 0 ? `/${segments[0]}` : "/");
}

function extractLocatorPath(locatorValue) {
  if (typeof locatorValue !== "string" || !locatorValue.trim()) {
    return null;
  }
  try {
    const parsed = new URL(locatorValue);
    return parsed.pathname || "/";
  } catch {
    return null;
  }
}

const knownServiceEntries = new Map();

function registerKnownService(pathValue, locatorPath = null) {
  const rawPath = sanitizeServicePathToken(pathValue);
  if (!rawPath) {
    return;
  }
  const normalizedLocator = normalizePath(locatorPath || rawPath);
  if (!knownServiceEntries.has(rawPath)) {
    knownServiceEntries.set(rawPath, {
      path: rawPath,
      locatorPath: normalizedLocator,
    });
  }
}

for (const servicePath of ALWAYS_ON_SERVICE_ROOTS) {
  registerKnownService(canonicalizeServicePath(servicePath));
}
for (const resourcePath of Object.keys(fixtureResources)) {
  registerKnownService(inferServiceRoot(resourcePath));
}
for (const service of fixtureRudiConfig.services || []) {
  if (service && typeof service.path === "string") {
    const locatorPath =
      Array.isArray(service.locators) && service.locators.length > 0
        ? extractLocatorPath(service.locators[0])
        : null;
    registerKnownService(service.path, locatorPath || service.path);
    registerKnownService(canonicalizeServicePath(service.path), locatorPath || service.path);
  }
}
for (const alias of MCP_SERVICE_ALIASES) {
  const canonicalAlias = canonicalizeServicePath(alias);
  registerKnownService(alias, alias);
  registerKnownService(canonicalAlias, canonicalAlias);
}

function serviceDefinition(servicePath) {
  const normalized = canonicalizeServicePath(servicePath);
  return {
    path: normalized,
    type: normalized === "/registry" ? "registry" : "rsi",
    locators: [`rudi-ws://${RUDI_HOST}:${PORT}${normalized}`],
  };
}

function serviceDefinitionRaw(rawPath, locatorPath = null) {
  const servicePath = sanitizeServicePathToken(rawPath || "/") || "/";
  const normalizedPathForType = canonicalizeServicePath(servicePath);
  const slashPath = normalizePath(locatorPath || rawPath || "/");
  return {
    path: servicePath,
    type:
      normalizedPathForType === "/registry" || servicePath === "registry" ? "registry" : "rsi",
    locators: [`rudi-ws://${RUDI_HOST}:${PORT}${slashPath}`],
  };
}

function registryUpdate(servicePath) {
  return {
    updateType: "ADDED",
    element: serviceDefinition(servicePath),
  };
}

function registryUpdateRaw(servicePath, locatorPath = null) {
  return {
    updateType: "ADDED",
    element: serviceDefinitionRaw(servicePath, locatorPath),
  };
}

function resolveResourcePath(servicePath, requestPath) {
  const normalizedService = canonicalizeServicePath(servicePath);
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

const MCP_DISPLAY_ROOT_RESOURCES = Object.freeze([
  "/annotations",
  "/config",
  "/displayables",
  "/displays",
  "/layerConfig",
]);
const MCP_INPUT_ROOT_RESOURCES = Object.freeze(["/keyhighlightings"]);
const MEDIA_ROOT_RESOURCES = Object.freeze([
  "/aspectratios",
  "/audiostreams",
  "/browserlistentries",
  "/browsers",
  "/childlocklevels",
  "/childlocks",
  "/displaysettings",
  "/players",
  "/playertimes",
  "/playerupdatehandles",
  "/playviewentries",
  "/regioncodes",
  "/searchinstances",
  "/streamingupdatehandles",
]);
const ENTERTAINMENTCONTROL_ROOT_RESOURCES = Object.freeze([
  "/activemediagroups",
  "/groups",
  "/sources",
  "/targets",
]);
const PLAYER_UPDATE_HANDLE_RETENTION_MS = 10 * 60 * 1000;
const MAX_PLAYER_UPDATE_HANDLES = 128;
const mediaPlayerUpdateHandles = new Map();
let mediaPlayerUpdateHandleCounter = 1;

function cleanupPlayerUpdateHandles(now = Date.now()) {
  for (const [handleId, entry] of mediaPlayerUpdateHandles.entries()) {
    if (!entry || !entry.createdAtMs || now - entry.createdAtMs > PLAYER_UPDATE_HANDLE_RETENTION_MS) {
      mediaPlayerUpdateHandles.delete(handleId);
    }
  }
  while (mediaPlayerUpdateHandles.size > MAX_PLAYER_UPDATE_HANDLES) {
    const oldest = mediaPlayerUpdateHandles.entries().next().value;
    if (!oldest) {
      break;
    }
    mediaPlayerUpdateHandles.delete(oldest[0]);
  }
}

function pickTrackIdFromPlayerUpdatePayload(payload) {
  if (!payload || typeof payload !== "object") {
    return null;
  }
  if (payload.titleId !== undefined && payload.titleId !== null && String(payload.titleId).trim()) {
    return String(payload.titleId).trim();
  }
  if (Array.isArray(payload.browserPath)) {
    for (let index = payload.browserPath.length - 1; index >= 0; index -= 1) {
      const element = payload.browserPath[index];
      if (element && element.browserListEntryId !== undefined && element.browserListEntryId !== null) {
        const value = String(element.browserListEntryId).trim();
        if (value) {
          return value;
        }
      }
      if (element && element.id !== undefined && element.id !== null) {
        const value = String(element.id).trim();
        if (value) {
          return value;
        }
      }
    }
  }
  return null;
}

function createPlayerUpdateHandle(payload) {
  cleanupPlayerUpdateHandles();
  const id = `playerupdate-${mediaPlayerUpdateHandleCounter++}`;
  const nowMs = Date.now();
  const trackId = pickTrackIdFromPlayerUpdatePayload(payload);
  const entry = {
    id,
    uri: `/media/playerupdatehandles/${encodeURIComponent(id)}`,
    name: "Local Player Update Handle",
    createdAtMs: nowMs,
    createdAtIso: new Date(nowMs).toISOString(),
    payload: payload && typeof payload === "object" ? deepClone(payload) : {},
    trackId,
  };
  mediaPlayerUpdateHandles.set(id, entry);
  return entry;
}

function getPlayerUpdateHandle(id) {
  cleanupPlayerUpdateHandles();
  if (!id) {
    return null;
  }
  return mediaPlayerUpdateHandles.get(String(id)) || null;
}

function serializePlayerUpdateHandle(entry) {
  if (!entry) {
    return null;
  }
  const payload = entry.payload && typeof entry.payload === "object" ? entry.payload : {};
  return {
    id: entry.id,
    uri: entry.uri,
    name: entry.name,
    titleId: payload.titleId || null,
    albumId: payload.albumId || null,
    artistId: payload.artistId || null,
    genreId: payload.genreId || null,
    browserPath: Array.isArray(payload.browserPath) ? payload.browserPath : [],
    onlinemediaActivationData: payload.onlinemediaActivationData || null,
  };
}

function listSerializedPlayerUpdateHandles() {
  cleanupPlayerUpdateHandles();
  return Array.from(mediaPlayerUpdateHandles.values()).map((entry) => serializePlayerUpdateHandle(entry));
}

function buildListPage(data) {
  const rows = Array.isArray(data) ? data : [];
  return {
    previous: null,
    next: null,
    total: rows.length,
    totalPages: rows.length > 0 ? 1 : 0,
    offset: 0,
    offsetId: null,
    data: rows,
  };
}

function mapMediaPlaybackState(mode) {
  const current = String(mode || "stopped").toLowerCase();
  if (current === "playing") {
    return "PLAYING";
  }
  if (current === "paused") {
    return "PAUSED";
  }
  return "STOPPED";
}

function createMediaSourceObject() {
  return {
    id: "local-sd",
    uri: "/entertainmentcontrol/sources/local-sd",
    name: "Local SD Card",
    activationState: "ACTIVE",
    sourceState: "ACTIVE",
    capabilities: ["RAW_BROWSER", "CONTENT_BROWSER", "PLAYBACK_MODES"],
    deviceIndex: 1,
    deviceName: "Local SD Card",
    partitionIndex: 1,
    relatedGroupType: "MEDIA",
    relatedTargetType: "MAIN",
    type: "USB",
    mediaType: "MASS_STORAGE_DEVICE",
    player: {
      id: "player-main",
      uri: "/media/players/player-main",
      name: "Local Player",
    },
  };
}

function createEntertainmentModels(source = null) {
  const mediaSource = source || createMediaSourceObject();
  const mediaGroup = {
    id: "group-media-main",
    uri: "/entertainmentcontrol/groups/group-media-main",
    name: "Media",
    type: "MEDIA",
    relatedTargetType: "MAIN",
    initializing: false,
    activeSource: mediaSource,
    sources: [mediaSource],
  };
  const mainTarget = {
    id: "target-main",
    uri: "/entertainmentcontrol/targets/target-main",
    name: "Main",
    type: "MAIN",
    qualifier: "MAIN",
    activeGroup: mediaGroup,
    groups: [mediaGroup],
  };
  const activeMediaGroup = {
    id: "activemedia-main",
    uri: "/entertainmentcontrol/activemediagroups/activemedia-main",
    name: "Active Media",
    groupType: "MEDIA",
  };
  return {
    source: mediaSource,
    group: mediaGroup,
    target: mainTarget,
    activeMediaGroup,
  };
}

function createBrowserListElement(track, source) {
  return {
    browserListEntryId: track.id,
    contentType: "AUDIO",
    filename: track.filename,
    source,
    title: track.title,
  };
}

function createMediaModels() {
  const tracks = listMediaFiles();
  const hasTracks = tracks.length > 0;
  const source = createMediaSourceObject();
  source.sourceState = hasTracks ? "ACTIVE" : "EMPTY";
  const entertainment = createEntertainmentModels(source);
  const browserRootEntries = tracks.map((track) => createBrowserListElement(track, source));
  const browser = {
    id: "browser-local-sd",
    uri: "/media/browsers/browser-local-sd",
    name: "Local SD",
    currentSource: source,
    path: [],
    rootEntries: browserRootEntries,
    syncReadyForFileSystem: true,
    syncReadyForMetaData: true,
  };
  const browserEntries = tracks.map((track) => ({
    id: track.id,
    uri: `/media/browserlistentries/${encodeURIComponent(track.id)}`,
    name: track.title,
    titleOriginalText: track.title,
    fileCount: 1,
    folderCount: 0,
    pathElement: createBrowserListElement(track, source),
    playbackActive: "IDLE",
  }));

  const playback = typeof mediaService?.getState === "function" ? mediaService.getState() : null;
  const stateSource = playback && playback.source ? playback.source : null;
  const selectedId =
    stateSource && typeof stateSource === "object" && stateSource.id ? String(stateSource.id) : null;
  const selectedTrack = selectedId
    ? tracks.find((track) => track.id === selectedId)
    : tracks.find((track) => {
        if (!stateSource) {
          return false;
        }
        const sourcePath = typeof stateSource === "string" ? stateSource : stateSource.path;
        return (
          typeof sourcePath === "string" &&
          sourcePath.toLowerCase().endsWith(`\\${track.filename.toLowerCase()}`)
        );
      }) || tracks[0] || null;

  const player = {
    id: "player-main",
    uri: "/media/players/player-main",
    name: "Local Player",
    type: "AUDIO",
    capabilities: ["PLAY_VIEW", "DETAIL_INFOS", "SET_PLAYLIST_ENTRY_INDEX", "PLAYTIME", "TOTAL_PLAYTIME"],
    playbackState: mapMediaPlaybackState(playback && playback.mode),
    currentPlaytime: Number.isFinite(playback && playback.positionSec) ? playback.positionSec : 0,
    currentPlaytimeMillis: Number.isFinite(playback && playback.positionSec)
      ? Math.round(playback.positionSec * 1000)
      : 0,
    totalPlayTime: Number.isFinite(playback && playback.durationSec) ? playback.durationSec : 0,
    totalPlayTimeMillis: Number.isFinite(playback && playback.durationSec)
      ? Math.round(playback.durationSec * 1000)
      : 0,
    numberOfPlayviewListEntries: browserEntries.length,
    trackDataState: ["DETAIL_INFO_VALID", "PLAYVIEW_INDEX_VALID"],
  };
  if (browserEntries.length > 0) {
    player.playviewListEntryIndex = selectedTrack
      ? Math.max(0, Number(selectedTrack.id) - 1)
      : 0;
  }
  if (selectedTrack) {
    player.fileName = selectedTrack.filename;
    player.titleOriginalText = selectedTrack.title;
    player.currentPlayviewListEntryId = selectedTrack.id;
  }
  source.player = {
    id: player.id,
    uri: player.uri,
    name: player.name,
  };

  const playerTime = {
    id: "playertime-main",
    uri: "/media/playertimes/playertime-main",
    name: "Local Playtime",
    currentPlaytime: player.currentPlaytime,
    totalPlaytime: player.totalPlayTime,
  };

  return {
    source,
    browser,
    browserEntries,
    player,
    playerTime,
    group: entertainment.group,
    target: entertainment.target,
    activeMediaGroup: entertainment.activeMediaGroup,
  };
}

function resolveResourceBody(fullPath) {
  const normalized = normalizePath(fullPath);
  const lower = normalized.toLowerCase();

  if (lower === "/media" || lower.startsWith("/media/")) {
    return resolveMediaBody(normalized);
  }
  if (lower === "/entertainmentcontrol" || lower.startsWith("/entertainmentcontrol/")) {
    return resolveEntertainmentcontrolBody(normalized);
  }
  if (lower === "/mcpdisplaymanager" || lower.startsWith("/mcpdisplaymanager/")) {
    return resolveDisplayManagerBody(normalized);
  }
  if (lower === "/mcpinputmanager" || lower.startsWith("/mcpinputmanager/")) {
    return resolveInputRegionsBody(normalized);
  }
  if (lower === "/mcppopupmanager" || lower.startsWith("/mcppopupmanager/")) {
    return resolvePopupsBody(normalized);
  }
  if (normalized.startsWith("/MCP_Displaymanager")) {
    return resolveDisplayManagerBody(normalized);
  }
  if (normalized.startsWith("/MCP_InputRegions")) {
    return resolveInputRegionsBody(normalized);
  }
  if (normalized.startsWith("/MCP_Popups")) {
    return resolvePopupsBody(normalized);
  }
  if (Object.prototype.hasOwnProperty.call(fixtureResources, normalized)) {
    return deepClone(fixtureResources[normalized]);
  }
  return {
    path: normalized,
    available: true,
    mocked: true,
  };
}

function resolveDisplayManagerBody(normalized) {
  const lower = normalized.toLowerCase();
  const defaultDisplay = {
    id: 0,
    name: "Driver_Display",
    touchSupport: true,
    terminal: 0,
    compositing: true,
    resolution: {
      width: 1920,
      height: 720,
    },
    updateRate: 60,
  };
  const defaultLayer = {
    id: 3,
    name: "Layer_Browser",
    active: true,
    zpos: 0,
  };
  const defaultDisplayable = {
    id: 2,
    name: "Displayable_Browser_Driver",
    type: 0,
    is_active: true,
    is_visible: true,
    layers: [defaultLayer],
  };

  if (lower === "/mcpdisplaymanager" || lower === "/mcp_displaymanager") {
    return MCP_DISPLAY_ROOT_RESOURCES.slice();
  }
  if (/\/displays\/[^/]+$/.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const displayName = decodeURIComponent(segments[segments.length - 1] || "Driver_Display");
    return {
      ...defaultDisplay,
      name: displayName,
    };
  }
  if (/\/displays$/.test(lower)) {
    return {
      infoForAllDisplays: [defaultDisplay],
    };
  }
  if (/\/displayables\/[^/]+$/.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const displayableName = decodeURIComponent(segments[segments.length - 1] || "Displayable");
    return {
      ...defaultDisplayable,
      name: displayableName,
    };
  }
  if (/\/displayables$/.test(lower)) {
    return {
      infoForAllDisplayables: [defaultDisplayable],
    };
  }
  if (/\/layerconfig\/[^/]+$/.test(lower)) {
    return {
      infoForAllLayers: [defaultLayer],
    };
  }
  if (/\/layerconfig$/.test(lower)) {
    return [
      {
        layersForDisplay: {
          display: defaultDisplay,
          layers: {
            infoForAllLayers: [defaultLayer],
          },
        },
      },
    ];
  }
  if (/\/annotations$/.test(lower)) {
    return {};
  }
  if (/\/config$/.test(lower)) {
    return {
      debug_mode: 0,
      performance_hud: 0,
    };
  }
  return {
    path: normalized,
    available: true,
    mocked: true,
  };
}

function resolveInputRegionsBody(normalized) {
  const lower = normalized.toLowerCase();
  if (lower === "/mcpinputmanager" || lower === "/mcp_inputregions") {
    return MCP_INPUT_ROOT_RESOURCES.slice();
  }
  if (/\/keyhighlightings$/.test(lower)) {
    return {
      highlightedKeys: [],
    };
  }
  if (/\/[^/]+\/force$/.test(lower)) {
    return {
      forceSupported: false,
      status: "STATUS_OK",
    };
  }
  if (/\/[^/]+\/proximity$/.test(lower)) {
    return false;
  }
  if (/\/[^/]+\/shutter$/.test(lower)) {
    return {
      shutterActive: false,
      status: "STATUS_OK",
    };
  }
  if (/\/[^/]+\/hapticfeedback$/.test(lower)) {
    return null;
  }
  if (/\/[^/]+\/[^/]+$/.test(lower) || /\/[^/]+$/.test(lower)) {
    return {
      regionInfoSorted: [],
      hapticInfoSorted: [],
    };
  }
  return {
    path: normalized,
    accepted: true,
    mocked: true,
  };
}

function resolvePopupsBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  if (lower === "/mcppopupmanager" || lower === "/mcp_popups") {
    return ["/Driver_Display"];
  }
  if (/\/[^/]+\/[^/]+$/.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const popupId = decodeURIComponent(segments[segments.length - 1] || "POPUP");
    return {
      name: popupId,
      requested: requestBody && Object.prototype.hasOwnProperty.call(requestBody, "requested")
        ? !!requestBody.requested
        : false,
      visible: requestBody && Object.prototype.hasOwnProperty.call(requestBody, "visible")
        ? !!requestBody.visible
        : false,
      requestData:
        requestBody && Object.prototype.hasOwnProperty.call(requestBody, "requestData")
          ? String(requestBody.requestData || "")
          : "",
      active: false,
      suppressed: false,
    };
  }
  if (/\/[^/]+$/.test(lower)) {
    return [];
  }
  return {
    path: normalized,
    available: true,
    mocked: true,
  };
}

function resolveEntertainmentcontrolBody(normalized) {
  const lower = normalized.toLowerCase();
  const { source, group, target, activeMediaGroup } = createMediaModels();
  if (lower === "/entertainmentcontrol") {
    return ENTERTAINMENTCONTROL_ROOT_RESOURCES.slice();
  }
  if (lower === "/entertainmentcontrol/sources") {
    return buildListPage([source]);
  }
  if (/^\/entertainmentcontrol\/sources\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || source.id);
    return {
      ...source,
      id,
      uri: `/entertainmentcontrol/sources/${encodeURIComponent(id)}`,
    };
  }
  if (lower === "/entertainmentcontrol/activemediagroups") {
    return buildListPage([activeMediaGroup]);
  }
  if (/^\/entertainmentcontrol\/activemediagroups\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || activeMediaGroup.id);
    return {
      ...activeMediaGroup,
      id,
      uri: `/entertainmentcontrol/activemediagroups/${encodeURIComponent(id)}`,
    };
  }
  if (lower === "/entertainmentcontrol/groups") {
    return buildListPage([group]);
  }
  if (/^\/entertainmentcontrol\/groups\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || group.id);
    return {
      ...group,
      id,
      uri: `/entertainmentcontrol/groups/${encodeURIComponent(id)}`,
    };
  }
  if (lower === "/entertainmentcontrol/targets") {
    return buildListPage([target]);
  }
  if (/^\/entertainmentcontrol\/targets\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || target.id);
    return {
      ...target,
      id,
      uri: `/entertainmentcontrol/targets/${encodeURIComponent(id)}`,
    };
  }
  return {
    path: normalized,
    available: true,
    mocked: true,
  };
}

function resolveMediaBody(normalized) {
  const lower = normalized.toLowerCase();
  const { browser, browserEntries, player, playerTime } = createMediaModels();
  const playerUpdateHandleList = listSerializedPlayerUpdateHandles();

  if (lower === "/media") {
    return MEDIA_ROOT_RESOURCES.slice();
  }
  if (lower === "/media/browsers") {
    return buildListPage([browser]);
  }
  if (/^\/media\/browsers\/[^/]+$/i.test(lower)) {
    return browser;
  }
  if (lower === "/media/browserlistentries") {
    return buildListPage(browserEntries);
  }
  if (/^\/media\/browserlistentries\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    const match = browserEntries.find((entry) => String(entry.id) === id);
    return (
      match || {
        id: id || "unknown",
        uri: `/media/browserlistentries/${encodeURIComponent(id || "unknown")}`,
        name: id || "Unknown Entry",
      }
    );
  }
  if (lower === "/media/players") {
    return buildListPage([player]);
  }
  if (/^\/media\/players\/[^/]+$/i.test(lower)) {
    return player;
  }
  if (lower === "/media/playertimes") {
    return buildListPage([playerTime]);
  }
  if (/^\/media\/playertimes\/[^/]+$/i.test(lower)) {
    return playerTime;
  }
  if (lower === "/media/playerupdatehandles") {
    return buildListPage(playerUpdateHandleList);
  }
  if (/^\/media\/playerupdatehandles\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    const handle = getPlayerUpdateHandle(id);
    if (handle) {
      return serializePlayerUpdateHandle(handle);
    }
    return {
      id: id || "unknown",
      uri: `/media/playerupdatehandles/${encodeURIComponent(id || "unknown")}`,
      name: "Unknown Player Update Handle",
    };
  }
  if (
    lower === "/media/searchinstances" ||
    lower === "/media/streamingupdatehandles" ||
    lower === "/media/aspectratios" ||
    lower === "/media/audiostreams" ||
    lower === "/media/childlocklevels" ||
    lower === "/media/childlocks" ||
    lower === "/media/displaysettings" ||
    lower === "/media/playviewentries" ||
    lower === "/media/regioncodes"
  ) {
    return buildListPage([]);
  }
  return {
    path: normalized,
    available: true,
    mocked: true,
  };
}

function toFiniteNumber(value) {
  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : null;
}

function getActiveTrackIdFromState(state) {
  if (!state || !state.source) {
    return null;
  }
  if (typeof state.source === "object" && state.source.id) {
    return String(state.source.id);
  }
  return null;
}

function enqueueMediaEvents(events) {
  if (!Array.isArray(events) || events.length === 0) {
    return;
  }
  (async () => {
    for (const event of events) {
      if (!event || !event.type) {
        continue;
      }
      await mediaService.handleEvent(event.type, event.payload || {});
    }
  })().catch((error) => {
    console.warn(`[media/rudi] failed to apply media mutation: ${error.message}`);
  });
}

function routeRudiMediaMutation(command, normalizedPath, requestBody) {
  if (!requestBody || typeof requestBody !== "object" || Array.isArray(requestBody)) {
    return;
  }
  if (command !== "update" && command !== "insert") {
    return;
  }
  const lowerPath = normalizedPath.toLowerCase();
  const state = mediaService.getState();
  const currentTrackId = getActiveTrackIdFromState(state);
  const events = [];

  if (/^\/entertainmentcontrol\/sources\/[^/]+$/i.test(lowerPath)) {
    const playerUpdateHandleId =
      requestBody && requestBody.playerUpdateHandle !== undefined && requestBody.playerUpdateHandle !== null
        ? String(requestBody.playerUpdateHandle)
        : null;
    if (playerUpdateHandleId) {
      const handle = getPlayerUpdateHandle(playerUpdateHandleId);
      if (handle && handle.trackId && handle.trackId !== currentTrackId) {
        events.push({
          type: "media.source.load",
          payload: { id: handle.trackId },
        });
      }
      if (
        handle &&
        handle.payload &&
        typeof handle.payload === "object" &&
        handle.payload.currentPlaytime !== undefined
      ) {
        const desiredPlaytime = toFiniteNumber(handle.payload.currentPlaytime);
        if (desiredPlaytime !== null) {
          events.push({
            type: "media.seek",
            payload: { positionSec: Math.max(0, desiredPlaytime) },
          });
        }
      }
    }
    const requestedActivationState =
      requestBody && typeof requestBody.activationState === "string"
        ? requestBody.activationState.trim().toUpperCase()
        : null;
    if (
      requestedActivationState === "ACTIVATION_RUNNING" ||
      requestedActivationState === "ACTIVE" ||
      playerUpdateHandleId
    ) {
      events.push({
        type: "media.play",
        payload: {},
      });
    }
  }

  const currentPlaytimeMillis = toFiniteNumber(requestBody.currentPlaytimeMillis);
  if (currentPlaytimeMillis !== null) {
    const targetSec = Math.max(0, currentPlaytimeMillis / 1000);
    if (!Number.isFinite(state.positionSec) || Math.abs(targetSec - state.positionSec) >= 1) {
      events.push({
        type: "media.seek",
        payload: { positionSec: targetSec },
      });
    }
  } else {
    const currentPlaytime = toFiniteNumber(requestBody.currentPlaytime);
    if (currentPlaytime !== null) {
      const targetSec = Math.max(0, currentPlaytime);
      if (!Number.isFinite(state.positionSec) || Math.abs(targetSec - state.positionSec) >= 1) {
        events.push({
          type: "media.seek",
          payload: { positionSec: targetSec },
        });
      }
    }
  }

  const targetVolume = toFiniteNumber(requestBody.volume);
  if (targetVolume !== null) {
    const clampedVolume = Math.max(0, Math.min(100, Math.round(targetVolume)));
    if (!Number.isFinite(state.volume) || Math.abs(clampedVolume - state.volume) >= 1) {
      events.push({
        type: "media.volume.set",
        payload: { volume: clampedVolume },
      });
    }
  }

  const playviewListEntryIndex = toFiniteNumber(requestBody.playviewListEntryIndex);
  if (Number.isInteger(playviewListEntryIndex) && playviewListEntryIndex >= 0) {
    const targetTrackId = String(playviewListEntryIndex + 1);
    if (targetTrackId !== currentTrackId) {
      events.push({
        type: "media.source.load",
        payload: { id: targetTrackId },
      });
    }
  }

  if (requestBody.currentPlayviewListEntryId !== undefined && requestBody.currentPlayviewListEntryId !== null) {
    const targetTrackId = String(requestBody.currentPlayviewListEntryId);
    if (targetTrackId && targetTrackId !== currentTrackId) {
      events.push({
        type: "media.source.load",
        payload: { id: targetTrackId },
      });
    }
  }

  if (/^\/media\/browserlistentries\/[^/]+$/i.test(lowerPath)) {
    const segments = normalizedPath.split("/").filter(Boolean);
    const entryId = segments.length > 0 ? decodeURIComponent(segments[segments.length - 1]) : null;
    if (entryId && entryId !== currentTrackId) {
      events.push({
        type: "media.source.load",
        payload: { id: String(entryId) },
      });
    }
  }

  const requestedPlaybackState =
    typeof requestBody.playbackState === "string"
      ? requestBody.playbackState.trim().toUpperCase()
      : null;
  if (requestedPlaybackState === "PLAYING" && state.mode !== "playing") {
    events.push({ type: "media.play", payload: {} });
  } else if (requestedPlaybackState === "PAUSED" && state.mode !== "paused") {
    events.push({ type: "media.pause", payload: {} });
  } else if (requestedPlaybackState === "SEEK_FWD") {
    events.push({
      type: "media.seek",
      payload: { positionSec: Math.max(0, (Number.isFinite(state.positionSec) ? state.positionSec : 0) + 10) },
    });
  } else if (requestedPlaybackState === "SEEK_BWD") {
    events.push({
      type: "media.seek",
      payload: { positionSec: Math.max(0, (Number.isFinite(state.positionSec) ? state.positionSec : 0) - 10) },
    });
  } else if (
    (requestedPlaybackState === "STOPPED" || requestedPlaybackState === "STOPPED_WITH_ERROR") &&
    state.mode !== "stopped"
  ) {
    events.push({ type: "media.stop", payload: {} });
  }

  enqueueMediaEvents(events);
}

function resolveMutationBody(command, service, fullPath, requestBody) {
  const normalizedService = canonicalizeServicePath(service);
  const normalizedPath = normalizePath(fullPath);
  const lowerPath = normalizedPath.toLowerCase();
  routeRudiMediaMutation(command, normalizedPath, requestBody);
  if (lowerPath.startsWith("/mcppopupmanager") || lowerPath.startsWith("/mcp_popups")) {
    return resolvePopupsBody(normalizedPath, requestBody);
  }
  if (lowerPath.startsWith("/media/") || normalizedService === "/media") {
    if (lowerPath === "/media/playerupdatehandles" && command === "insert") {
      return serializePlayerUpdateHandle(createPlayerUpdateHandle(requestBody));
    }
    if (/^\/media\/playerupdatehandles\/[^/]+$/i.test(lowerPath)) {
      const segments = normalizedPath.split("/").filter(Boolean);
      const id = decodeURIComponent(segments[segments.length - 1] || "");
      if (command === "delete") {
        mediaPlayerUpdateHandles.delete(String(id));
        return null;
      }
      const handle = getPlayerUpdateHandle(id);
      if (handle) {
        return serializePlayerUpdateHandle(handle);
      }
      return {
        id: id || "unknown",
        uri: `/media/playerupdatehandles/${encodeURIComponent(id || "unknown")}`,
        name: "Unknown Player Update Handle",
      };
    }
    if (command === "delete") {
      return null;
    }
    const segments = normalizedPath.split("/").filter(Boolean);
    return segments.length > 0 ? String(segments[segments.length - 1]) : "ok";
  }
  if (lowerPath.startsWith("/entertainmentcontrol/") || normalizedService === "/entertainmentcontrol") {
    if (command === "delete") {
      return null;
    }
    const segments = normalizedPath.split("/").filter(Boolean);
    return segments.length > 0 ? String(segments[segments.length - 1]) : "ok";
  }
  if (command === "delete") {
    return null;
  }
  return {
    accepted: true,
    command,
    path: normalizedPath,
    requestBody,
  };
}

function buildRegistryBody(requestPath) {
  const rawPath = sanitizeServicePathToken(requestPath || "/") || "/";
  const normalizedPath = normalizePath(rawPath);
  if (normalizedPath === "/") {
    return Array.from(knownServiceEntries.values())
      .sort((left, right) => left.path.localeCompare(right.path))
      .map((entry) => registryUpdateRaw(entry.path, entry.locatorPath));
  }
  const knownEntry = knownServiceEntries.get(rawPath);
  if (knownEntry) {
    return registryUpdateRaw(knownEntry.path, knownEntry.locatorPath);
  }
  const canonicalPath = canonicalizeServicePath(rawPath);
  const canonicalEntry = knownServiceEntries.get(canonicalPath);
  if (canonicalEntry) {
    return registryUpdateRaw(rawPath, canonicalEntry.locatorPath);
  }
  const fallbackLocatorPath = inferServiceRoot(canonicalPath);
  return registryUpdateRaw(rawPath, fallbackLocatorPath);
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
  res.setHeader("Cache-Control", "no-store");
  res.json(buildRudiConfig());
});

app.get("/etc/eso/tracing.json", (req, res) => {
  res.setHeader("Cache-Control", "no-store");
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

// Alias missing legacy asset variants requested by some UI builds.
app.get(/\/BalanceFader_Interieur_AU0_(LH|RH)\.webp$/, (req, res, next) => {
  const key = path.basename(req.path);
  const aliasPath = balanceFaderAliasMap.get(key);
  if (aliasPath && fs.existsSync(aliasPath)) {
    res.type("image/webp");
    res.sendFile(aliasPath);
    return;
  }
  next();
});

// Some builds request this JSON from different roots; always serve local mock config.
app.get(/^\/(?:assets\/)?myAudiLoginDevModeEnabled\.json$/, (req, res) => {
  const filePath = path.join(audiRoot, "assets", "myAudiLoginDevModeEnabled.json");
  res.type("application/json; charset=utf-8");
  res.sendFile(filePath);
});

app.use(
  "/dev",
  express.static(devUiRoot, {
    index: "control.html",
    fallthrough: true,
  }),
);

app.use(
  express.static(audiRoot, {
    index: false,
    fallthrough: true,
  }),
);

app.get("/api/audio/state", (req, res) => {
  res.json({
    ok: true,
    state: mediaService.getState(),
  });
});

app.get("/api/audio/devices", async (req, res) => {
  const result = await mediaService.handleEvent("audio.device.list");
  res.status(result.ok ? 200 : 503).json(result);
});

app.get("/api/audio/diagnostics", async (req, res) => {
  const result = await mediaService.handleEvent("audio.backend.diagnostics");
  res.status(result.ok ? 200 : 503).json(result);
});

app.post("/api/audio/event", async (req, res) => {
  const type = req.body && req.body.type;
  const payload = req.body && req.body.payload;
  if (!mediaService.isSupportedEvent(type)) {
    res.status(400).json({
      ok: false,
      error: "unsupported_audio_event",
      supportedEvents: Array.from(mediaService.supportedEvents),
    });
    return;
  }
  const result = await mediaService.handleEvent(type, payload || {});
  res.status(result.ok ? 200 : 400).json(result);
});

app.get("/api/sim/state", (req, res) => {
  res.json({
    ok: true,
    state: simulatorService.getState(),
  });
});

app.post("/api/sim/event", (req, res) => {
  const type = req.body && req.body.type;
  const payload = req.body && req.body.payload;
  if (!simulatorService.isSupportedEvent(type)) {
    res.status(400).json({
      ok: false,
      error: "unsupported_sim_event",
      supportedEvents: Array.from(simulatorService.supportedEvents),
    });
    return;
  }
  const result = simulatorService.handleEvent(type, payload || {});
  res.status(result.ok ? 200 : 400).json(result);
});

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
const devControlClients = new Set();
const mediaService = new MockMediaService({
  mediaRoot,
  listTracks: listMediaFiles,
  logger: console,
  onStateChanged: (state) => {
    broadcastDevWs({
      type: "audio.state.changed",
      payload: state,
    });
  },
});
const simulatorService = new SimulatorService({
  onStateChanged: (state) => {
    broadcastDevWs({
      type: "sim.state.changed",
      payload: state,
    });
  },
});

mediaService.init().then((state) => {
  console.log(
    `[audio] backend=${state.backend} available=${state.backendAvailable} mode=${state.mode}`,
  );
});

function sendWs(ws, message) {
  ws.send(JSON.stringify(message));
}

function broadcastDevWs(message) {
  const encoded = JSON.stringify(message);
  for (const client of devControlClients) {
    if (client.readyState === client.OPEN) {
      client.send(encoded);
    }
  }
}

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
      requestId,
      statusCode,
      body: toSerializablePayload(responseBody),
      headers: null,
    }),
  );
  ws.send(
    JSON.stringify({
      type: "actionCompleted",
      service,
      requestId,
    }),
  );
}

function parseActionRequest(message) {
  const payload = message && message.payload ? message.payload : null;
  if (payload && typeof payload === "object") {
    return {
      requestId: payload.requestId,
      command: payload.command,
      path: payload.path,
      body: payload.body,
      headers: payload.headers,
    };
  }
  return {
    requestId: message && message.requestId,
    command: message && message.command,
    path: message && message.path,
    body: message && message.body,
    headers: message && message.headers,
  };
}

function handleActionRequest(ws, message) {
  const fallbackService = ws && ws.rudiDefaultService ? ws.rudiDefaultService : "/registry";
  const wireService = message && message.service ? String(message.service) : fallbackService;
  const service = inferServiceRoot(wireService);
  const request = parseActionRequest(message || {});
  const requestId = Number.isFinite(request.requestId) ? request.requestId : 0;
  const command = String(request.command || "retrieve").toLowerCase();
  const rawRequestPath = request.path || "/";
  const requestPath = normalizePath(rawRequestPath);
  const fullPath = resolveResourcePath(service, requestPath);
  const requestBody = decodeSerializablePayload(request.body);

  if (service === "/registry" && command === "retrieve") {
    sendRudiResponse(ws, wireService, requestId, 200, buildRegistryBody(rawRequestPath));
    return;
  }
  if (service === "/registry" && command === "insert") {
    const requestedPath =
      requestBody && requestBody.path
        ? sanitizeServicePathToken(requestBody.path)
        : sanitizeServicePathToken(rawRequestPath || requestPath);
    const requestedServicePath = requestedPath || "/";
    const canonicalPath = canonicalizeServicePath(requestedServicePath);
    registerKnownService(requestedServicePath, requestedServicePath);
    registerKnownService(canonicalPath, canonicalPath);
    const serviceDef = serviceDefinitionRaw(requestedServicePath, requestedServicePath);
    sendRudiResponse(ws, wireService, requestId, 200, serviceDef);
    return;
  }

  if (["update", "insert", "delete"].includes(command)) {
    sendRudiResponse(
      ws,
      wireService,
      requestId,
      200,
      resolveMutationBody(command, service, fullPath, requestBody),
    );
    return;
  }

  sendRudiResponse(ws, wireService, requestId, 200, resolveResourceBody(fullPath));
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
  ws.isDevControl = pathname === "/dev/ws";
  ws.isVehicleFeed = pathname === "/ws";
  const normalizedPathname = normalizePath(pathname || "/");
  ws.rudiDefaultService =
    normalizedPathname && !["/", "/ws", "/dev/ws"].includes(normalizedPathname)
      ? inferServiceRoot(normalizedPathname)
      : "/registry";
  console.log(`[ws] connect path=${pathname} defaultService=${ws.rudiDefaultService}`);
  if (ws.isDevControl) {
    devControlClients.add(ws);
    sendWs(ws, {
      type: "audio.state.changed",
      payload: mediaService.getState(),
    });
    sendWs(ws, {
      type: "sim.state.changed",
      payload: simulatorService.getState(),
    });
  }
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
    if (ws.isDevControl && mediaService.isSupportedEvent(message.type)) {
      mediaService
        .handleEvent(message.type, message.payload || {})
        .then((result) => {
          sendWs(ws, {
            type: `${message.type}.result`,
            payload: result,
          });
        })
        .catch((error) => {
          sendWs(ws, {
            type: `${message.type}.result`,
            payload: {
              ok: false,
              error: String(error.message || error),
              state: mediaService.getState(),
            },
          });
        });
      return;
    }
    if (ws.isDevControl && simulatorService.isSupportedEvent(message.type)) {
      const result = simulatorService.handleEvent(message.type, message.payload || {});
      sendWs(ws, {
        type: `${message.type}.result`,
        payload: result,
      });
      return;
    }
    if (message.type === "ping") {
      const ping = parseActionRequest(message);
      sendWs(ws, {
        type: "pong",
        service: message.service || ws.rudiDefaultService || "/registry",
        requestId: Number.isFinite(ping.requestId) ? ping.requestId : 0,
        statusCode: 200,
        body: null,
        headers: null,
      });
      return;
    }
    if (message.type === "actionRequest") {
      handleActionRequest(ws, message);
      return;
    }
    if (message.type === "action") {
      const topic = normalizePath(message.topic || "/");
      sendWs(ws, {
        action: "actionResponse",
        topic,
        status: "success",
        body: resolveResourceBody(topic),
      });
    }
  });

  ws.on("close", (code, reason) => {
    const reasonText = reason ? String(reason) : "";
    console.log(`[ws] close path=${pathname} code=${code} reason=${reasonText}`);
    devControlClients.delete(ws);
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
  console.log(`[boot] Dev control UI: http://${HOST}:${PORT}/dev/`);
  console.log(`[boot] Server listening on http://${HOST}:${PORT}`);
  console.log(`[boot] DEV_CORS=${ENABLE_DEV_CORS}`);
});

function shutdown() {
  clearInterval(vehicleTimer);
  wsServer.clients.forEach((client) => client.close());
  mediaService.shutdown().finally(() => {
    server.close(() => process.exit(0));
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
