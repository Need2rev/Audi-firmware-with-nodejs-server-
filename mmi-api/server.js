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
const SERVE_AUDI_UI =
  String(process.env.SERVE_AUDI_UI || "false").toLowerCase() === "true";
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
const AUDI_UI_PORT = Number.parseInt(process.env.AUDI_UI_PORT || "5501", 10);
const AUDI_UI_ORIGIN = `http://${resolveRudiHost(HOST, process.env.AUDI_UI_HOST)}:${
  Number.isFinite(AUDI_UI_PORT) && AUDI_UI_PORT > 0 ? AUDI_UI_PORT : 5501
}`;

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
  "/maintenance",
  "/mcppopupmanager",
  "/mcpdisplaymanager",
  "/mcpinputmanager",
  "/phone",
  "/radio",
  "/smartphoneintegration",
  "/tv",
  "/language",
  "/media",
  "/entertainmentcontrol",
  "/gnss",
  "/kombisync",
  "/hmisync",
  "/navi",
  "/sound",
  "/system",
  "/textinput",
  "/perceivablecontext",
  "/usermanagement",
  "/vehicleinformation",
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
const SERVER_BUILD_TAG = "2026-03-07-home-r11";
const DEV_CONTROL_SAFE_UI_ROUTES = Object.freeze([
  {
    id: "home",
    label: "Home",
    hash: "#/main",
    domain: "ui",
    sourceHint: "audi/index.html",
  },
  {
    id: "media-source-selection",
    label: "Media Source Selection",
    hash: "#/main/media/source-selection",
    domain: "media",
    sourceHint: "audi/media-main-media-module-ngfactory.59ef8b4a464f92d1d621.js",
  },
  {
    id: "media-player",
    label: "Media Player",
    hash: "#/main/media/player",
    domain: "media",
    sourceHint: "audi/media-main-media-module-ngfactory.59ef8b4a464f92d1d621.js",
  },
  {
    id: "user-account-list",
    label: "User Account List",
    hash: "#/main/users/user-account-list",
    domain: "users",
    sourceHint: "audi/main.17a1455a44197c571024.js",
  },
  {
    id: "settings-sound",
    label: "Sound Settings",
    hash: "#/main/settings/sound",
    domain: "sound",
    sourceHint: "audi/main.17a1455a44197c571024.js",
  },
  {
    id: "settings-sound-balance-fader",
    label: "Sound Balance/Fader",
    hash: "#/main/settings/sound/sound-balance-fader",
    domain: "sound",
    sourceHint: "audi/main.17a1455a44197c571024.js",
  },
  {
    id: "settings-announcements",
    label: "Announcements",
    hash: "#/main/settings/announcements",
    domain: "sound",
    sourceHint: "audi/main.17a1455a44197c571024.js",
  },
  {
    id: "settings-language-selection",
    label: "Language Selection",
    hash: "#/main/settings/language-selection",
    domain: "language",
    sourceHint: "audi/main.17a1455a44197c571024.js",
  },
  {
    id: "settings-maintenance",
    label: "Maintenance",
    hash: "#/main/settings/maintenance",
    domain: "maintenance",
    sourceHint: "audi/main.17a1455a44197c571024.js",
  },
]);
const DEV_CONTROL_BLOCKED_DOMAINS = Object.freeze([
  {
    id: "climate",
    label: "Climate / HVAC",
    reason: "Blocked: safety-relevant vehicle function domain.",
  },
  {
    id: "parking",
    label: "Parking / PDC",
    reason: "Blocked: proximity and maneuvering domain.",
  },
  {
    id: "proximity",
    label: "Proximity Sensors",
    reason: "Blocked: sensor-driven vehicle assistance domain.",
  },
  {
    id: "rear-camera",
    label: "Rear Camera",
    reason: "Blocked: maneuvering camera domain.",
  },
  {
    id: "cockpit",
    label: "Cockpit / Cluster Control",
    reason: "Blocked: vehicle display control outside local UI routing.",
  },
]);
const DEV_CONTROL_SAFE_ACTIVITY_NAMES = new Set([
  "changeUser",
  "addOfflineUser",
  "deleteUser",
  "resetMainUser",
  "addOnlineAccount",
]);
const DEFAULT_DASHBOARD_TILE_CONFIG = JSON.stringify({
  start: "multi-media",
  center: "phone",
  end: "navi",
});
const DEV_CONTROL_UI_STORAGE_DEFAULTS = Object.freeze({
  "center.general.last-mode": JSON.stringify(["main", "home"]),
  "center.general.last-mode-homescreen": JSON.stringify("dashboard"),
  "center.general.dashboard-tile-config": DEFAULT_DASHBOARD_TILE_CONFIG,
  "center.general.direct-access": JSON.stringify([
    {
      app: {
        id: "native-radio",
        path: "/radio",
        type: 0,
        appC_type: 0,
      },
      index: 0,
      personalized: true,
    },
    {
      app: {
        id: "native-media",
        path: "/media",
        type: 0,
        appC_type: 0,
      },
      index: 1,
      personalized: true,
    },
    {
      app: {
        id: "native-phone",
        path: "/phone",
        type: 0,
        appC_type: 0,
      },
      index: 2,
      personalized: true,
    },
    {
      app: {
        id: "native-navi",
        path: "/navi",
        type: 0,
        appC_type: 0,
        systemComponentName: "navi",
      },
      index: 3,
      personalized: true,
    },
  ]),
  "center.general.home-screen": JSON.stringify([
    { app: { id: "native-radio", path: "/radio", type: 0, appC_type: 0 }, index: 0, personalized: true },
    { app: { id: "native-media", path: "/media", type: 0, appC_type: 0 }, index: 1, personalized: true },
    { app: { id: "native-phone", path: "/phone", type: 0, appC_type: 0 }, index: 2, personalized: true },
    { app: { id: "native-navi", path: "/navi", type: 0, appC_type: 0, systemComponentName: "navi" }, index: 3, personalized: true },
    { app: { id: "native-smart-phone-apps", path: "asi/video-stream", type: 0, appC_type: 0 }, index: 4, personalized: true },
    { app: { id: "native-car", path: "/car", type: 0, appC_type: 0 }, index: 5, personalized: true },
    { app: { id: "native-favorites", path: "/favorites", type: 0, appC_type: 0 }, index: 6, personalized: true },
    { app: { id: "native-settings", path: "/settings", type: 0, appC_type: 0 }, index: 7, personalized: true },
    { app: { id: "native-breakdowncall", path: "/help", type: 0, appC_type: 0 }, index: 8, personalized: true },
    { app: { id: "native-help", path: "/help", type: 0, appC_type: 0 }, index: 9, personalized: true },
    { app: { id: "native-users", path: "/users", type: 0, appC_type: 0 }, index: 10, personalized: true },
    { app: { id: "native-messaging", path: "/messaging", type: 0, appC_type: 0 }, index: 11, personalized: true },
    { app: { id: "native-poicall", path: "/navi", type: 0, appC_type: 0 }, index: 12, personalized: true },
  ]),
  "center.license.LicenseAsiTileAvailable": JSON.stringify(true),
  "center.car.FASProfileAvailable": JSON.stringify(false),
});
const DEV_CONTROL_EMULATOR_PROFILE_VERSION = "2026-03-07-r5-home";
const EXTRA_DISCOVERABLE_SERVICE_ROOTS = new Set([
  "/displaybehaviour",
  "/onlinemedia",
  "/power",
  "/webappmanagement",
]);
const DISCOVERABLE_SERVICE_ROOTS = new Set([
  ...Array.from(ALWAYS_ON_SERVICE_ROOTS),
  ...Array.from(EXTRA_DISCOVERABLE_SERVICE_ROOTS),
]);

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
const FIXTURE_ROOT_RESOURCE_EXTRAS = new Map([
  ["/gnss", ["/gnssModules", "/locations", "/svStatusInfos"]],
  ["/language", ["/changeRequests", "/components", "/system"]],
  ["/maintenance", ["/fluids", "/historyData", "/resetControls", "/resets", "/services", "/valueIndications"]],
  ["/navi", ["/carpositioninfos", "/locations"]],
  ["/onlinemedia", ["/activeprofiles", "/browserinstances", "/browserlistentries", "/identities", "/intentActions", "/provideractions", "/providers", "/searchinstances", "/searchresults", "/settings", "/speechSourcesMappings", "/triggeredprovideractions"]],
  ["/radio", ["/favorites", "/frequencytuners", "/recents", "/settings", "/stations", "/tuners"]],
  ["/system", ["/components", "/configurations", "/persistenceentries", "/resettables"]],
  ["/textinput", ["/inputfields", "/inputlanguages", "/inputproviders", "/status", "/userdictionaries"]],
  ["/tv", ["/favorites", "/recents", "/settings", "/stations", "/tuners"]],
  ["/usermanagement", ["/activities", "/identityProviders", "/settings", "/users", "/views"]],
  ["/webappmanagement", ["/appresources", "/apps", "/capabilities", "/deletelocks", "/entrypoints", "/events", "/icons", "/labels", "/services", "/tempdatasets", "/usages"]],
]);

function buildFixtureServiceRootResources(serviceRoot) {
  const normalizedRoot = normalizePath(serviceRoot);
  const prefix = normalizedRoot === "/" ? "/" : `${normalizedRoot}/`;
  const children = new Set(FIXTURE_ROOT_RESOURCE_EXTRAS.get(normalizedRoot) || []);
  for (const childPath of getBundleServiceChildHints(normalizedRoot)) {
    children.add(childPath);
  }
  for (const resourcePath of Object.keys(fixtureResources)) {
    const normalizedResourcePath = normalizePath(resourcePath);
    if (!normalizedResourcePath.startsWith(prefix) || normalizedResourcePath === normalizedRoot) {
      continue;
    }
    const remainder = normalizedResourcePath.slice(prefix.length);
    if (!remainder) {
      continue;
    }
    const firstSegment = remainder.split("/")[0];
    if (firstSegment) {
      children.add(`/${firstSegment}`);
    }
  }
  return Array.from(children).sort((left, right) => left.localeCompare(right));
}

function normalizeFixtureCollectionEntry(collectionPath, entry, index) {
  const normalizedCollectionPath = normalizePath(collectionPath);
  const collectionName = normalizedCollectionPath.split("/").filter(Boolean).pop() || "entry";
  if (entry && typeof entry === "object" && !Array.isArray(entry)) {
    const normalizedEntry = deepClone(entry);
    const derivedId =
      normalizedEntry.id !== undefined && normalizedEntry.id !== null && String(normalizedEntry.id).trim()
        ? String(normalizedEntry.id)
        : `${collectionName}-${index + 1}`;
    normalizedEntry.id = derivedId;
    if (!normalizedEntry.name || !String(normalizedEntry.name).trim()) {
      normalizedEntry.name =
        normalizedEntry.title ||
        normalizedEntry.componentName ||
        normalizedEntry.key ||
        normalizedEntry.filename ||
        derivedId;
    }
    if (!normalizedEntry.uri || !String(normalizedEntry.uri).trim()) {
      normalizedEntry.uri = `${normalizedCollectionPath}/${encodeURIComponent(derivedId)}`;
    }
    return normalizedEntry;
  }
  const derivedId = `${collectionName}-${index + 1}`;
  return {
    id: derivedId,
    name: String(entry),
    uri: `${normalizedCollectionPath}/${encodeURIComponent(derivedId)}`,
    value: entry,
  };
}

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

function buildAudiUiStubUrl(slug) {
  return `${AUDI_UI_ORIGIN}/webapp-stubs/${encodeURIComponent(String(slug || "stub"))}.html`;
}

function listBundleScriptFiles(rootDir) {
  if (!fs.existsSync(rootDir)) {
    return [];
  }
  const pending = [rootDir];
  const files = [];
  while (pending.length > 0) {
    const currentDir = pending.pop();
    let entries = [];
    try {
      entries = fs.readdirSync(currentDir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      const absolutePath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        pending.push(absolutePath);
        continue;
      }
      if (entry.isFile() && /\.js$/i.test(entry.name)) {
        files.push(absolutePath);
      }
    }
  }
  return files;
}

function extractBundlePathHints(rootDir) {
  const serviceRoots = new Set();
  const collectionPaths = new Set();
  const serviceChildren = new Map();
  const pathRegex = /Paths\.from\("([^"]+)"\)/g;
  for (const filePath of listBundleScriptFiles(rootDir)) {
    let source = "";
    try {
      source = fs.readFileSync(filePath, "utf8");
    } catch {
      continue;
    }
    let match;
    while ((match = pathRegex.exec(source)) !== null) {
      const rawPath = String(match[1] || "").trim();
      if (!rawPath.startsWith("/")) {
        continue;
      }
      const normalized = normalizePath(rawPath);
      const segments = normalized.split("/").filter(Boolean);
      if (segments.length === 0) {
        continue;
      }
      const serviceRoot = `/${segments[0]}`;
      serviceRoots.add(serviceRoot);
      if (segments.length > 1) {
        const childPath = `/${segments[1]}`;
        collectionPaths.add(`/${segments.slice(0, 2).join("/")}`);
        if (!serviceChildren.has(serviceRoot.toLowerCase())) {
          serviceChildren.set(serviceRoot.toLowerCase(), new Set());
        }
        serviceChildren.get(serviceRoot.toLowerCase()).add(childPath);
      }
    }
  }
  return {
    serviceRoots,
    collectionPathsLower: new Set(Array.from(collectionPaths, (entry) => entry.toLowerCase())),
    serviceChildren,
  };
}

const bundlePathHints = extractBundlePathHints(audiRoot);
const KNOWN_SERVICE_ROOT_HINTS_LOWER = new Set(
  [
    ...Array.from(ALWAYS_ON_SERVICE_ROOTS),
    ...Array.from(bundlePathHints.serviceRoots),
    ...(fixtureRudiConfig.services || [])
      .filter((service) => service && typeof service.path === "string")
      .map((service) => service.path),
    ...Object.keys(fixtureResources).map((resourcePath) => {
      const segments = normalizePath(resourcePath).split("/").filter(Boolean);
      return segments.length > 0 ? `/${segments[0]}` : null;
    }),
  ]
    .filter(Boolean)
    .map((entry) => normalizePath(entry).toLowerCase()),
);

function getBundleServiceChildHints(serviceRoot) {
  const normalizedRoot = normalizePath(serviceRoot).toLowerCase();
  if (!KNOWN_SERVICE_ROOT_HINTS_LOWER.has(normalizedRoot)) {
    return new Set();
  }
  return bundlePathHints.serviceChildren.get(normalizedRoot) || new Set();
}

function hasBundleCollectionHint(collectionPath) {
  const normalizedPath = normalizePath(collectionPath);
  const segments = normalizedPath.split("/").filter(Boolean);
  if (segments.length < 2 || !KNOWN_SERVICE_ROOT_HINTS_LOWER.has(`/${segments[0]}`.toLowerCase())) {
    return false;
  }
  return bundlePathHints.collectionPathsLower.has(normalizedPath.toLowerCase());
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
const DIRECT_RESOURCE_SERVICE_ALIASES = new Map([
  ["/targets", { service: "/entertainmentcontrol", prefix: "/targets" }],
  ["/groups", { service: "/entertainmentcontrol", prefix: "/groups" }],
  ["/sources", { service: "/entertainmentcontrol", prefix: "/sources" }],
  ["/activemediagroups", { service: "/entertainmentcontrol", prefix: "/activemediagroups" }],
  ["/persistenceentries", { service: "/system", prefix: "/persistenceentries" }],
  ["/configurations", { service: "/system", prefix: "/configurations" }],
  ["/resettables", { service: "/system", prefix: "/resettables" }],
  ["/activities", { service: "/usermanagement", prefix: "/activities" }],
  ["/users", { service: "/usermanagement", prefix: "/users" }],
  ["/identityproviders", { service: "/usermanagement", prefix: "/identityProviders" }],
  ["/childlocks", { service: "/media", prefix: "/childlocks" }],
  ["/childlocklevels", { service: "/media", prefix: "/childlocklevels" }],
  ["/players", { service: "/media", prefix: "/players" }],
  ["/playertimes", { service: "/media", prefix: "/playertimes" }],
  ["/playerupdatehandles", { service: "/media", prefix: "/playerupdatehandles" }],
  ["/browserlistentries", { service: "/media", prefix: "/browserlistentries" }],
  ["/browsers", { service: "/media", prefix: "/browsers" }],
  ["/searchinstances", { service: "/media", prefix: "/searchinstances" }],
  ["/searchresults", { service: "/media", prefix: "/searchresults" }],
  ["/displays", { service: "/mcpdisplaymanager", prefix: "/displays" }],
  ["/displayables", { service: "/mcpdisplaymanager", prefix: "/displayables" }],
  ["/layerconfig", { service: "/mcpdisplaymanager", prefix: "/layerConfig" }],
  ["/annotations", { service: "/mcpdisplaymanager", prefix: "/annotations" }],
  ["/config", { service: "/mcpdisplaymanager", prefix: "/config" }],
  ["/carpositioninfos", { service: "/navi", prefix: "/carpositioninfos" }],
  ["/services", { service: "/webappmanagement", prefix: "/services" }],
  ["/entrypoints", { service: "/webappmanagement", prefix: "/entrypoints" }],
  ["/icons", { service: "/webappmanagement", prefix: "/icons" }],
  ["/labels", { service: "/webappmanagement", prefix: "/labels" }],
  ["/events", { service: "/webappmanagement", prefix: "/events" }],
  ["/capabilities", { service: "/webappmanagement", prefix: "/capabilities" }],
  ["/appresources", { service: "/webappmanagement", prefix: "/appresources" }],
  ["/deletelocks", { service: "/webappmanagement", prefix: "/deletelocks" }],
  ["/tempdatasets", { service: "/webappmanagement", prefix: "/tempdatasets" }],
  ["/usages", { service: "/webappmanagement", prefix: "/usages" }],
  ["/applicationstates", { service: "/smartphoneintegration", prefix: "/applicationStates" }],
  ["/bluetooth", { service: "/smartphoneintegration", prefix: "/bluetooth" }],
  ["/callstate", { service: "/smartphoneintegration", prefix: "/callState" }],
  ["/displayconfiguration", { service: "/smartphoneintegration", prefix: "/displayconfiguration" }],
  ["/hardkeyevents", { service: "/smartphoneintegration", prefix: "/hardkeyEvents" }],
  ["/licence", { service: "/smartphoneintegration", prefix: "/licence" }],
  ["/player", { service: "/smartphoneintegration", prefix: "/player" }],
  ["/remotecontrol", { service: "/smartphoneintegration", prefix: "/remoteControl" }],
  ["/resourcestates", { service: "/smartphoneintegration", prefix: "/resourceStates" }],
  ["/telephonystate", { service: "/smartphoneintegration", prefix: "/telephonyState" }],
  ["/touchevents", { service: "/smartphoneintegration", prefix: "/touchEvents" }],
  ["/trackdata", { service: "/smartphoneintegration", prefix: "/trackData" }],
  ["/videostream", { service: "/smartphoneintegration", prefix: "/videoStream" }],
  ["/participants", { service: "/phone", prefix: "/participants" }],
  ["/groupedrecentcalls", { service: "/phone", prefix: "/groupedrecentcalls" }],
  ["/ringtonepreviews", { service: "/phone", prefix: "/ringtonepreviews" }],
  ["/volumesettings", { service: "/phone", prefix: "/volumesettings" }],
  ["/textindication", { service: "/vehicleinformation", prefix: "/textIndication" }],
  ["/valueindications", { service: "/vehicleinformation", prefix: "/valueIndications" }],
  ["/vehicledata", { service: "/vehicleinformation", prefix: "/vehicleData" }],
  ["/vehiclestates", { service: "/vehicleinformation", prefix: "/vehicleStates" }],
  ["/maintainances", { service: "/vehicleinformation", prefix: "/maintainances" }],
  ["/switchindications", { service: "/vehicleinformation", prefix: "/switchIndications" }],
  ["/environments", { service: "/vehicleinformation", prefix: "/environments" }],
]);
const DIRECT_RESOURCE_SERVICE_PATHS = Object.freeze(Array.from(DIRECT_RESOURCE_SERVICE_ALIASES.keys()));

function getDirectResourceServiceAlias(inputPath) {
  const normalized = normalizePath(inputPath);
  return DIRECT_RESOURCE_SERVICE_ALIASES.get(normalized.toLowerCase()) || null;
}

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

  for (const entry of Array.from(publishedRegistryEntries.values())) {
    upsertService(entry.path, entry.locatorPath, true);
    if (shouldPublishRegistryService(entry.path)) {
      upsertService(canonicalizeServicePath(entry.path), entry.locatorPath);
    }
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
  const directAlias = getDirectResourceServiceAlias(normalized);
  if (directAlias) {
    return directAlias.service;
  }
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
const publishedRegistryEntries = new Map();

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

function registerPublishedService(pathValue, locatorPath = null) {
  const rawPath = sanitizeServicePathToken(pathValue);
  if (!rawPath) {
    return;
  }
  const normalizedLocator = normalizePath(locatorPath || rawPath);
  if (!publishedRegistryEntries.has(rawPath)) {
    publishedRegistryEntries.set(rawPath, {
      path: rawPath,
      locatorPath: normalizedLocator,
    });
  }
}

function shouldPublishRegistryService(pathValue) {
  const rawPath = sanitizeServicePathToken(pathValue);
  if (!rawPath) {
    return false;
  }
  const normalized = normalizePath(rawPath);
  if (normalized === "/registry") {
    return true;
  }
  if (DIRECT_RESOURCE_SERVICE_ALIASES.has(normalized.toLowerCase())) {
    return true;
  }
  return DISCOVERABLE_SERVICE_ROOTS.has(canonicalizeServicePath(normalized));
}

function lookupPublishedRegistryEntry(pathValue) {
  const rawPath = sanitizeServicePathToken(pathValue || "/") || "/";
  if (publishedRegistryEntries.has(rawPath)) {
    return publishedRegistryEntries.get(rawPath);
  }
  const normalizedPath = normalizePath(rawPath);
  if (publishedRegistryEntries.has(normalizedPath)) {
    return publishedRegistryEntries.get(normalizedPath);
  }
  const canonicalPath = canonicalizeServicePath(normalizedPath);
  if (publishedRegistryEntries.has(canonicalPath)) {
    return publishedRegistryEntries.get(canonicalPath);
  }
  return null;
}

for (const servicePath of ALWAYS_ON_SERVICE_ROOTS) {
  registerKnownService(canonicalizeServicePath(servicePath));
}
for (const servicePath of bundlePathHints.serviceRoots) {
  registerKnownService(servicePath);
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
for (const directServicePath of DIRECT_RESOURCE_SERVICE_PATHS) {
  registerKnownService(directServicePath, directServicePath);
}
registerPublishedService("/registry", "/registry");
for (const servicePath of DISCOVERABLE_SERVICE_ROOTS) {
  registerPublishedService(canonicalizeServicePath(servicePath));
}
for (const service of fixtureRudiConfig.services || []) {
  if (!service || typeof service.path !== "string" || !shouldPublishRegistryService(service.path)) {
    continue;
  }
  const locatorPath =
    Array.isArray(service.locators) && service.locators.length > 0
      ? extractLocatorPath(service.locators[0])
      : null;
  registerPublishedService(service.path, locatorPath || service.path);
  registerPublishedService(canonicalizeServicePath(service.path), locatorPath || service.path);
}
for (const alias of MCP_SERVICE_ALIASES) {
  const canonicalAlias = canonicalizeServicePath(alias);
  registerPublishedService(alias, alias);
  registerPublishedService(canonicalAlias, canonicalAlias);
}
for (const directServicePath of DIRECT_RESOURCE_SERVICE_PATHS) {
  registerPublishedService(directServicePath, directServicePath);
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
  const rawServicePath = normalizePath(servicePath);
  const directAlias = getDirectResourceServiceAlias(rawServicePath);
  const normalizedService = directAlias
    ? normalizePath(directAlias.service)
    : canonicalizeServicePath(rawServicePath);
  const normalizedRequestPath = normalizePath(requestPath);
  if (normalizedService === "/registry") {
    return normalizedRequestPath;
  }
  if (directAlias) {
    const aliasPrefix = normalizePath(directAlias.prefix || "/");
    if (normalizedRequestPath === "/") {
      return normalizePath(`${normalizedService}${aliasPrefix}`);
    }
    if (normalizedRequestPath.toLowerCase() === normalizedService.toLowerCase()) {
      return normalizedService;
    }
    if (normalizedRequestPath.toLowerCase().startsWith(`${normalizedService.toLowerCase()}/`)) {
      return normalizedRequestPath;
    }
    if (normalizedRequestPath.toLowerCase() === aliasPrefix.toLowerCase()) {
      return normalizePath(`${normalizedService}${aliasPrefix}`);
    }
    if (normalizedRequestPath.toLowerCase().startsWith(`${aliasPrefix.toLowerCase()}/`)) {
      return normalizePath(`${normalizedService}${normalizedRequestPath}`);
    }
    return normalizePath(`${normalizedService}${aliasPrefix}${normalizedRequestPath}`);
  }
  if (normalizedRequestPath === "/") {
    return normalizedService;
  }
  const requestSegments = normalizedRequestPath.split("/").filter(Boolean);
  if (requestSegments.length > 0) {
    const requestRoot = `/${requestSegments[0]}`;
    const canonicalRequestRoot = canonicalizeServicePath(requestRoot);
    if (canonicalRequestRoot === normalizedService) {
      if (requestSegments.length === 1) {
        return normalizedService;
      }
      return normalizePath(`${normalizedService}/${requestSegments.slice(1).join("/")}`);
    }
  }
  if (normalizedRequestPath.toLowerCase() === normalizedService.toLowerCase()) {
    return normalizedService;
  }
  if (normalizedRequestPath.toLowerCase().startsWith(`${normalizedService.toLowerCase()}/`)) {
    return normalizePath(`${normalizedService}${normalizedRequestPath.slice(normalizedService.length)}`);
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
const MCP_DISPLAY_DEFINITIONS = Object.freeze([
  {
    id: 0,
    name: "Driver_Display",
    touchSupport: true,
    terminal: 0,
    compositing: true,
    resolution: { width: 1920, height: 720 },
    updateRate: 60,
  },
  {
    id: 1,
    name: "Cluster_Display",
    touchSupport: false,
    terminal: 2,
    compositing: true,
    resolution: { width: 1920, height: 720 },
    updateRate: 60,
  },
  {
    id: 2,
    name: "Co_Driver_Display",
    touchSupport: true,
    terminal: 1,
    compositing: true,
    resolution: { width: 1920, height: 720 },
    updateRate: 60,
  },
  {
    id: 4,
    name: "Lower_Display",
    touchSupport: true,
    terminal: 3,
    compositing: true,
    resolution: { width: 1920, height: 720 },
    updateRate: 60,
  },
  {
    id: 80,
    name: "Cluster_Display_Subframe",
    touchSupport: false,
    terminal: 4,
    compositing: true,
    resolution: { width: 1920, height: 720 },
    updateRate: 60,
  },
  {
    id: 90,
    name: "Virtual_Display_Cluster_MOST",
    touchSupport: false,
    terminal: 5,
    compositing: true,
    resolution: { width: 1920, height: 720 },
    updateRate: 60,
  },
  {
    id: 92,
    name: "Virtual_Display_Cluster_ETH",
    touchSupport: false,
    terminal: 6,
    compositing: true,
    resolution: { width: 1920, height: 720 },
    updateRate: 60,
  },
  {
    id: 100,
    name: "HUD_Display",
    touchSupport: false,
    terminal: 7,
    compositing: true,
    resolution: { width: 1920, height: 720 },
    updateRate: 60,
  },
]);
const MCP_DISPLAYABLE_DEFINITIONS = Object.freeze([
  { id: 1, name: "Displayable_Dmminimal" },
  { id: 2, name: "Displayable_Browser_Driver" },
  { id: 3, name: "Displayable_Browser_Driver_Popup" },
  { id: 4, name: "Displayable_Browser_Co_Driver" },
  { id: 5, name: "Displayable_Browser_Co_Driver_Popup" },
  { id: 6, name: "Displayable_Browser_Lower" },
  { id: 7, name: "Displayable_Browser_Lower_Popup" },
  { id: 8, name: "Displayable_Browser_Cluster" },
  { id: 9, name: "Displayable_Browser_Cluster_Subframe" },
  { id: 10, name: "Displayable_Native_Driver" },
  { id: 11, name: "Displayable_Native_Driver_Popup" },
  { id: 12, name: "Displayable_Native_Co_Driver" },
  { id: 13, name: "Displayable_Native_Co_Driver_Popup" },
  { id: 14, name: "Displayable_Native_Lower" },
  { id: 15, name: "Displayable_Native_Lower_Popup" },
  { id: 16, name: "Displayable_Engineering_Menu" },
  { id: 20, name: "Displayable_Map" },
  { id: 21, name: "Displayable_Map_Route_Guidance" },
  { id: 22, name: "Displayable_Google_Earth" },
  { id: 23, name: "Displayable_Street_View" },
  { id: 24, name: "Displayable_Kanban" },
  { id: 35, name: "Displayable_Invalid" },
  { id: 40, name: "Displayable_Cluster_Map" },
  { id: 41, name: "Displayable_Cluster_Google_Earth_Map" },
  { id: 42, name: "Displayable_Cluster_Map_Route_Guidance" },
  { id: 60, name: "Displayable_Hud_Map" },
  { id: 80, name: "Displayable_Dvd_Video" },
  { id: 81, name: "Displayable_Tv_Tuner" },
  { id: 82, name: "Displayable_Ami" },
  { id: 83, name: "Displayable_Tv_Aux1" },
  { id: 84, name: "Displayable_Tv_Aux2" },
  { id: 85, name: "Displayable_Tv_Videotext" },
  { id: 86, name: "Displayable_External_Dvd_Video" },
  { id: 87, name: "Displayable_File_Video" },
  { id: 88, name: "Displayable_Digital_Videoplayer_1" },
  { id: 89, name: "Displayable_Digital_Videoplayer_2" },
  { id: 90, name: "Displayable_Fbas_1" },
  { id: 91, name: "Displayable_Fbas_2" },
  { id: 92, name: "Displayable_Fbas_3" },
  { id: 93, name: "Displayable_External_Smarthphone" },
  { id: 94, name: "Displayable_Digital_Video_Player_Undefined" },
  { id: 95, name: "Displayable_Digital_Video_Player_3" },
  { id: 96, name: "Displayable_Digital_Video_Player_4" },
  { id: 120, name: "Displayable_Rear_View_Cam" },
  { id: 137, name: "Displayable_Debug_1" },
  { id: 138, name: "Displayable_Debug_2" },
  { id: 139, name: "Displayable_Debug_3" },
  { id: 140, name: "Displayable_Debug_4" },
  { id: 141, name: "Displayable_Debug_5" },
  { id: 142, name: "Displayable_Debug_6" },
  { id: 143, name: "Displayable_Debug_7" },
  { id: 144, name: "Displayable_Debug_8" },
  { id: 145, name: "Displayable_Debug_9" },
]);
const MCP_LAYER_DEFINITIONS = Object.freeze([
  { id: 1, name: "Layer_ARHUD" },
  { id: 2, name: "Layer_Cluster_Subframe" },
  { id: 3, name: "Layer_Browser" },
  { id: 4, name: "Layer_Navigation_Map_Overlay" },
  { id: 5, name: "Layer_Navigation_Map_Base" },
  { id: 6, name: "Layer_Map_Route_Guidance" },
  { id: 7, name: "Layer_Navi_Statusline" },
  { id: 8, name: "Layer_Phone_Flap" },
  { id: 9, name: "Layer_Special_Debug_Key_Combos" },
  { id: 10, name: "Layer_Engineering_Menu" },
  { id: 11, name: "Layer_Native_Debug" },
  { id: 12, name: "Layer_Browser_Debug" },
  { id: 13, name: "Layer_Popup_SLOT_TOAST_PARKING" },
  { id: 14, name: "Layer_Popup_SLOT_TOAST_PARKING_Background" },
  { id: 15, name: "Layer_Popup_SLOT_DIALOG_DRIVER_PARKING" },
  { id: 16, name: "Layer_Popup_SLOT_DIALOG_DRIVER_PARKING_Background" },
  { id: 17, name: "Layer_Popup_SLOT_DIALOG_CODRIVER_PARKING" },
  { id: 18, name: "Layer_Popup_SLOT_DIALOG_CODRIVER_PARKING_Background" },
  { id: 19, name: "Layer_Popup_SLOT_DIALOG_PARKING" },
  { id: 20, name: "Layer_Popup_SLOT_DIALOG_PARKING_Background" },
  { id: 21, name: "Layer_Popup_SLOT_PARKING" },
  { id: 22, name: "Layer_Popup_SLOT_PARKING_Background" },
  { id: 23, name: "Layer_Popup_SLOT_FULLSCREEN_PARKING" },
  { id: 24, name: "Layer_Popup_SLOT_FULLSCREEN_PARKING_Background" },
  { id: 25, name: "Layer_Rvc" },
  { id: 26, name: "Layer_Popup_SLOT_BEHIND_RVC" },
  { id: 27, name: "Layer_Popup_SLOT_DISPLAY_HANDLING" },
  { id: 28, name: "Layer_Popup_SLOT_DISPLAY_HANDLING_Background" },
  { id: 29, name: "Layer_Popup_SLOT_TOAST_CODRIVER" },
  { id: 30, name: "Layer_Popup_SLOT_TOAST_CODRIVER_Background" },
  { id: 31, name: "Layer_Popup_SLOT_TOAST_DRIVER" },
  { id: 32, name: "Layer_Popup_SLOT_TOAST_DRIVER_Background" },
  { id: 33, name: "Layer_Popup_SLOT_TOAST" },
  { id: 34, name: "Layer_Popup_SLOT_TOAST_Background" },
  { id: 35, name: "Layer_Popup_SLOT_TOAST_SYNC" },
  { id: 36, name: "Layer_Popup_SLOT_TOAST_SYNC_Background" },
  { id: 37, name: "Layer_Popup_SLOT_NOTIFICATION" },
  { id: 38, name: "Layer_Popup_SLOT_NOTIFICATION_Background" },
  { id: 39, name: "Layer_Popup_SLOT_DIALOG_CODRIVER" },
  { id: 40, name: "Layer_Popup_SLOT_DIALOG_CODRIVER_Background" },
  { id: 41, name: "Layer_Popup_SLOT_DIALOG_DRIVER" },
  { id: 42, name: "Layer_Popup_SLOT_DIALOG_DRIVER_Background" },
  { id: 43, name: "Layer_Popup_SLOT_DIALOG" },
  { id: 44, name: "Layer_Popup_SLOT_DIALOG_Background" },
  { id: 45, name: "Layer_Popup_SLOT_FULLSCREEN" },
  { id: 46, name: "Layer_Popup_SLOT_FULLSCREEN_Background" },
  { id: 47, name: "Layer_Native" },
  { id: 48, name: "Layer_Popup_AED_TOASTS" },
  { id: 49, name: "Layer_Popup_AED_TOASTS_Background" },
  { id: 50, name: "Layer_Popup_AED_NOTIFICATIONS" },
  { id: 51, name: "Layer_Popup_AED_NOTIFICATIONS_Background" },
  { id: 52, name: "Layer_Popup_AED_DIALOGS" },
  { id: 53, name: "Layer_Popup_AED_DIALOGS_Background" },
  { id: 54, name: "Layer_Popup_AED_FULLSCREEN" },
  { id: 55, name: "Layer_Popup_AED_FULLSCREEN_Background" },
  { id: 56, name: "Layer_AED_Notification_Center" },
  { id: 57, name: "Layer_Browser_Push_Notification" },
  { id: 58, name: "Layer_AED_Direct_Access" },
  { id: 59, name: "Layer_AED_Content" },
  { id: 60, name: "Layer_Media_Filebased" },
  { id: 61, name: "Layer_Media_Overlay" },
  { id: 62, name: "Layer_Media_Base" },
  { id: 63, name: "Layer_Background" },
  { id: 64, name: "Layer_ARA" },
  { id: 65, name: "Layer_Browser_Keyboard" },
  { id: 66, name: "Layer_AED_Keyboard" },
  { id: 67, name: "Layer_Browser_Presets" },
]);
const MCP_DISPLAY_LOOKUP = new Map(
  MCP_DISPLAY_DEFINITIONS.map((entry) => [String(entry.name || "").toLowerCase(), entry]),
);
const MCP_DISPLAY_RESOURCE_PATHS = Object.freeze(
  MCP_DISPLAY_DEFINITIONS.map((entry) => `/${String(entry.name || "").trim()}`).filter(
    (entry) => entry !== "/",
  ),
);
const MCP_DISPLAYABLE_LOOKUP = new Map(
  MCP_DISPLAYABLE_DEFINITIONS.map((entry) => [String(entry.name || "").toLowerCase(), entry]),
);
const MCP_LAYER_LOOKUP = new Map(
  MCP_LAYER_DEFINITIONS.map((entry) => [String(entry.name || "").toLowerCase(), entry]),
);
const MCP_INPUT_ROOT_RESOURCES = Object.freeze([...MCP_DISPLAY_RESOURCE_PATHS, "/keyhighlightings"]);
const MCP_INPUT_DEFAULT_HMI_BY_DISPLAY = Object.freeze({
  driver_display: "HMI_ID_BROWSER_DRIVER",
  co_driver_display: "HMI_ID_BROWSER_CODRIVER",
  lower_display: "HMI_ID_BROWSER_LOWER",
  cluster_display: "HMI_ID_BROWSER_FPK",
  cluster_display_subframe: "HMI_ID_BROWSER_FPK_SUBFRAMES",
  virtual_display_cluster_most: "HMI_ID_BROWSER_FPK",
  virtual_display_cluster_eth: "HMI_ID_BROWSER_FPK",
  hud_display: "HMI_ID_BROWSER_DRIVER",
});
const mcpInputRegionState = new Map();
const KOMBISYNC_RESOURCE_COLLECTIONS = Object.freeze([
  "kombidisplayrequests",
  "kombidisplayresponses",
  "kombipopupactionrequests",
  "mmidisplayrequests",
  "mmidisplayresponses",
  "mmidisplaystatuses",
  "mmipopupregisterrequests",
  "mmipopupstatuses",
]);
const KOMBISYNC_COLLECTION_ALIASES = new Map([
  ["mmi_displaystatus", "mmidisplaystatuses"],
  ["mmi_display_status", "mmidisplaystatuses"],
  ["mmi_popupstatus", "mmipopupstatuses"],
  ["mmi_popup_status", "mmipopupstatuses"],
]);
const KOMBISYNC_ROOT_RESOURCES = Object.freeze([
  ...KOMBISYNC_RESOURCE_COLLECTIONS.map((name) => `/${name}`),
  "/MMI_DisplayStatus",
  "/MMI_PopupStatus",
]);
const HMISYNC_RESOURCE_COLLECTIONS = Object.freeze([
  "ambientLightBackgroundColors",
  "displaystates",
  "shortcuts",
  "switchControls",
]);
const HMISYNC_ROOT_RESOURCES = Object.freeze([
  ...HMISYNC_RESOURCE_COLLECTIONS.map((name) => `/${name}`),
]);
const SOUND_RESOURCE_COLLECTIONS = Object.freeze([
  "activevolumes",
  "capabilities",
  "settings",
  "speechqualities",
  "status",
  "toneplayers",
  "volumes",
]);
const SOUND_ROOT_RESOURCES = Object.freeze([
  ...SOUND_RESOURCE_COLLECTIONS.map((name) => `/${name}`),
]);
const PERCEIVABLE_CONTEXT_RESOURCE_COLLECTIONS = Object.freeze([
  "displayelements",
  "displays",
  "locks",
]);
const PERCEIVABLE_CONTEXT_ROOT_RESOURCES = Object.freeze([
  ...PERCEIVABLE_CONTEXT_RESOURCE_COLLECTIONS.map((name) => `/${name}`),
]);
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
const MEDIA_DEFAULT_CHILDLOCK_LEVEL = Object.freeze({
  id: "childlocklevel-main",
  uri: "/media/childlocklevels/childlocklevel-main",
  name: "Media Child Lock Level",
  activePml: "OFF",
  pmlList: ["OFF", "AGE_6", "AGE_12", "AGE_16", "AGE_18"],
});
const mediaRuntimeState = {
  childlocks: new Map(),
  nextChildlockIndex: 1,
  childlocklevels: new Map([
    [MEDIA_DEFAULT_CHILDLOCK_LEVEL.id, deepClone(MEDIA_DEFAULT_CHILDLOCK_LEVEL)],
  ]),
  displaysettings: new Map(),
  nextDisplaysettingIndex: 1,
};
const KOMBISYNC_COLLECTIONS = new Set(KOMBISYNC_RESOURCE_COLLECTIONS);
const kombiSyncStore = new Map();
const kombiSyncCounters = new Map();
for (const collection of KOMBISYNC_COLLECTIONS) {
  kombiSyncStore.set(collection, new Map());
  kombiSyncCounters.set(collection, 1);
}

const hmiSyncStore = Object.freeze({
  ambientLightBackgroundColors: [
    {
      id: "ambient-1",
      name: "Ambient",
      uri: "/hmisync/ambientLightBackgroundColors/ambient-1",
      color: "#0A1E3A",
      state: "ON",
    },
  ],
  displaystates: [
    {
      id: "display-main",
      name: "MainDisplay",
      uri: "/hmisync/displaystates/display-main",
      cleanDisplayMode: "INACTIVE",
      disableDisplayButton: false,
    },
  ],
  shortcuts: [
    {
      id: "shortcut-main",
      name: "MainShortcut",
      uri: "/hmisync/shortcuts/shortcut-main",
      initialized: true,
      state: "CLOSED",
    },
  ],
  switchControls: [
    {
      id: "switch-main",
      name: "MainSwitch",
      uri: "/hmisync/switchControls/switch-main",
      switchValue: "off",
      switchValueConfiguration: ["off", "on"],
    },
  ],
});
const SOUND_VOLUME_ID = "00000000-0000-0000-0000-00000000000a";
const SOUND_ACTIVE_VOLUME_ID = "00000000-0000-0000-0000-000000000001";
const SOUND_CAPABILITY_ID = "00000000-0000-0000-0000-000000000000";
const SOUND_STATUS_ID = "00000000-0000-0000-0000-000000000000";
const SOUND_SPEECH_QUALITY_ID = "471e2f49-e378-4b44-b222-9e5637d235c0";
const SOUND_PURPOSE_ALIAS_MAP = new Map([
  ["ENTERTAINMENT_ATTENUATION_APS", ["ENTERTAINMENTATTENUATIONAPS"]],
  ["ENTERTAINMENT_ATTENUATION_NAVIGATION", ["ENTERTAINMENTATTENUATIONNAVIGATION"]],
  ["SOUND_FOKUS", ["SOUNDFOKUS", "SOUND_FOCUS", "SOUNDFOCUS"]],
  ["THREE_D", ["THREED"]],
  ["GALA", ["SPEED_DEPENDENT_VOLUME"]],
]);

function createInitialSoundSettings() {
  return [
    {
      id: "00000000-0000-0006-0000-000000000002",
      purpose: "GALA",
      nature: "INTERVAL_1D",
      minValueX: 0,
      maxValueX: 7,
      valueX: 1,
      name: "Sound setting for GALA",
      changeActive: false,
    },
    {
      id: "00000000-0000-0000-0000-000000000002",
      purpose: "BALANCE",
      nature: "INTERVAL_1D",
      minValueX: -9,
      maxValueX: 9,
      valueX: 0,
      name: "Sound setting for BALANCE",
      changeActive: false,
    },
    {
      id: "00000000-0000-000f-0000-000000000002",
      purpose: "FADER",
      nature: "INTERVAL_1D",
      minValueX: -9,
      maxValueX: 9,
      valueX: 0,
      name: "Sound setting for FADER",
      changeActive: false,
    },
    {
      id: "00000000-0000-0001-0000-000000000002",
      purpose: "BASS",
      nature: "INTERVAL_1D",
      minValueX: -9,
      maxValueX: 9,
      valueX: 0,
      name: "Sound setting for BASS",
      changeActive: false,
    },
    {
      id: "00000000-0000-000d-0000-000000000002",
      purpose: "TREBLE",
      nature: "INTERVAL_1D",
      minValueX: -9,
      maxValueX: 9,
      valueX: 0,
      name: "Sound setting for TREBLE",
      changeActive: false,
    },
    {
      id: "00000000-0000-000b-0000-000000000002",
      purpose: "SUBWOOFER",
      nature: "INTERVAL_1D",
      minValueX: -9,
      maxValueX: 9,
      valueX: 0,
      name: "Sound setting for SUBWOOFER",
      changeActive: false,
    },
    {
      id: "00000000-0000-000a-0000-000000000002",
      purpose: "SURROUND",
      nature: "INTERVAL_1D",
      minValueX: -9,
      maxValueX: 9,
      valueX: 0,
      name: "Sound setting for SURROUND",
      changeActive: false,
    },
    {
      id: "00000000-0000-0002-0000-000000000001",
      purpose: "ENTERTAINMENT_ATTENUATION_APS",
      nature: "DISCRETE_VALUES",
      discreteValue: "LOW",
      possibleDiscreteValues: ["OFF", "LOW", "MID", "HIGH"],
      menuConnectionActive: false,
      name: "Sound setting for ENTERTAINMENT_ATTENUATION_APS",
      changeActive: false,
    },
    {
      id: "00000000-0000-0003-0000-000000000001",
      purpose: "ENTERTAINMENT_ATTENUATION_NAVIGATION",
      nature: "DISCRETE_VALUES",
      discreteValue: "MID",
      possibleDiscreteValues: ["OFF", "LOW", "MID", "HIGH"],
      menuConnectionActive: false,
      name: "Sound setting for ENTERTAINMENT_ATTENUATION_NAVIGATION",
      changeActive: false,
    },
    {
      id: "00000000-0000-000e-0000-000000000001",
      purpose: "SOUND_FOKUS",
      nature: "DISCRETE_VALUES",
      discreteValue: "POSITION1",
      possibleDiscreteValues: [
        "POSITION1",
        "POSITION2",
        "POSITION3",
        "POSITION4",
        "POSITION5",
        "POSITION6",
        "POSITION7",
        "POSITION8",
      ],
      name: "Sound setting for SOUND_FOKUS",
      changeActive: false,
    },
    {
      id: "00000000-0000-0010-0000-000000000001",
      purpose: "THREE_D",
      nature: "DISCRETE_VALUES",
      discreteValue: "OFF",
      possibleDiscreteValues: ["OFF", "LOW", "MID", "HIGH"],
      name: "Sound setting for THREE_D",
      changeActive: false,
    },
  ];
}

function createInitialToneplayers() {
  return [
    {
      id: "tone-touch-feedback",
      name: "TouchFeedback",
      type: "TOUCH_FEEDBACK",
      playingState: "STOPPED",
      possibleVolumes: ["OFF", "LOW", "MID", "HIGH"],
      volume: "MID",
      volumeNature: "DISCRETE_VALUES",
      minContinuousVolume: 0,
      maxContinuousVolume: 100,
      continuousVolume: 50,
    },
  ];
}

const soundRuntimeState = {
  userMuted: false,
  valueChangeActive: false,
  settings: createInitialSoundSettings(),
  toneplayers: createInitialToneplayers(),
  status: "AVAILABLE",
};
const displayBehaviourState = new Map([
  [
    "display-state-display1",
    {
      id: "display-state-display1",
      uri: "/displaybehaviour/displaystates/display-state-display1",
      name: "Display1",
      state: "ON",
      reason: "",
      disableDisplayButton: false,
      cleanDisplayMode: "IDLE",
    },
  ],
]);
const phoneRuntimeState = {
  calls: new Map(),
  devices: new Map(),
  groupedrecentcalls: new Map(),
  participants: new Map(),
  recentcalls: new Map(),
  ringtonepreviews: new Map(),
  settings: new Map(),
  volumesettings: new Map(),
  nextParticipantIndex: 1,
};
const smartphoneintegrationRuntimeState = {
  applicationStates: new Map(),
  bluetooth: new Map(),
  callState: new Map(),
  devices: new Map(),
  displayconfiguration: new Map(),
  hardkeyEvents: new Map(),
  licence: new Map(),
  player: new Map(),
  remoteControl: new Map(),
  resourceStates: new Map(),
  telephonyState: new Map(),
  touchEvents: new Map(),
  trackData: new Map(),
  videoStream: new Map(),
};
const vehicleinformationRuntimeState = {
  environments: new Map(),
  maintainances: new Map(),
  switchIndications: new Map(),
  textIndication: new Map(),
  valueIndications: new Map(),
  vehicleData: new Map(),
  vehicleStates: new Map(),
};

function normalizePerceivableDisplayElements(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .map((entry) => {
      if (entry === null || entry === undefined) {
        return null;
      }
      if (typeof entry === "string" || typeof entry === "number") {
        return { id: String(entry) };
      }
      if (typeof entry !== "object") {
        return null;
      }
      if (entry.id !== undefined && entry.id !== null && String(entry.id).trim()) {
        return {
          ...deepClone(entry),
          id: String(entry.id),
        };
      }
      if (
        entry.displayElement &&
        entry.displayElement.id !== undefined &&
        entry.displayElement.id !== null &&
        String(entry.displayElement.id).trim()
      ) {
        return { id: String(entry.displayElement.id) };
      }
      return null;
    })
    .filter(Boolean);
}

function createDefaultPerceivableMainDisplay(id = "main") {
  const cleanId = String(id || "main");
  return {
    id: cleanId,
    name: "MAIN",
    uri: `/perceivablecontext/displays/${encodeURIComponent(cleanId)}`,
    domain: "MEDIA",
    currentPage: "SINGLE",
    displayElements: [],
    focusedPhone: null,
  };
}

const perceivableContextStore = {
  displays: new Map([
    [
      "main",
      createDefaultPerceivableMainDisplay("main"),
    ],
  ]),
  displayelements: new Map(),
  locks: new Map(),
};

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

function ensureMediaRuntimeState() {
  if (!(mediaRuntimeState.childlocklevels instanceof Map) || mediaRuntimeState.childlocklevels.size === 0) {
    mediaRuntimeState.childlocklevels = new Map([
      [MEDIA_DEFAULT_CHILDLOCK_LEVEL.id, deepClone(MEDIA_DEFAULT_CHILDLOCK_LEVEL)],
    ]);
  }
  if (!(mediaRuntimeState.childlocks instanceof Map)) {
    mediaRuntimeState.childlocks = new Map();
  }
  if (!(mediaRuntimeState.displaysettings instanceof Map)) {
    mediaRuntimeState.displaysettings = new Map();
  }
}

function getEntertainmentTargetReference(targetToken = null) {
  const models = createEntertainmentModels();
  const token = String(targetToken || "").trim();
  if (!token) {
    return deepClone(models.targets[0] || null);
  }
  const normalized = token.toUpperCase();
  const target =
    models.targets.find((entry) => {
      const entryId = String(entry.id || "").toUpperCase();
      const entryUri = String(entry.uri || "").toUpperCase();
      const entryName = String(entry.name || "").toUpperCase();
      const entryType = String(entry.type || "").toUpperCase();
      return (
        entryId === normalized ||
        entryUri === normalized ||
        entryName === normalized ||
        entryType === normalized
      );
    }) || models.targets[0] || null;
  return deepClone(target);
}

function createMediaChildlockObject(id, payload = null, existing = null) {
  const input = isPlainObject(payload) ? payload : {};
  const current = existing && typeof existing === "object" ? deepClone(existing) : {};
  const normalizedId = String(id || current.id || `childlocks-${mediaRuntimeState.nextChildlockIndex}`);
  return {
    id: normalizedId,
    uri: `/media/childlocks/${encodeURIComponent(normalizedId)}`,
    name:
      input.name !== undefined && input.name !== null && String(input.name).trim()
        ? String(input.name)
        : current.name || normalizedId,
    logonState:
      input.logonState !== undefined && input.logonState !== null
        ? String(input.logonState)
        : current.logonState || "LOGGED_OFF",
    password:
      input.password !== undefined
        ? String(input.password)
        : current.password || "",
    passwordChangeState:
      input.passwordChangeState !== undefined && input.passwordChangeState !== null
        ? String(input.passwordChangeState)
        : current.passwordChangeState || null,
  };
}

function createMediaDisplaysettingObject(id, payload = null, existing = null) {
  const input = isPlainObject(payload) ? payload : {};
  const current = existing && typeof existing === "object" ? deepClone(existing) : {};
  const normalizedId = String(id || current.id || `displaysetting-${mediaRuntimeState.nextDisplaysettingIndex}`);
  const height = toFiniteNumber(input.heigth !== undefined ? input.heigth : current.heigth);
  const width = toFiniteNumber(input.width !== undefined ? input.width : current.width);
  const rawTarget = input.target !== undefined ? input.target : current.target;
  const targetRef =
    isPlainObject(rawTarget)
      ? getEntertainmentTargetReference(rawTarget.id || rawTarget.uri || rawTarget.name || rawTarget.type)
      : getEntertainmentTargetReference(rawTarget);
  return {
    id: normalizedId,
    uri: `/media/displaysettings/${encodeURIComponent(normalizedId)}`,
    name:
      input.name !== undefined && input.name !== null && String(input.name).trim()
        ? String(input.name)
        : current.name || "displaysetting",
    heigth: height === null ? 720 : height,
    width: width === null ? 1920 : width,
    target: targetRef,
  };
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

const MEDIA_SOURCE_BASE_DEFINITIONS = Object.freeze([
  {
    id: "local-sd",
    name: "SD Card",
    deviceName: "SD Card",
    type: "USB",
    mediaType: "MASS_STORAGE_DEVICE",
    deviceIndex: 1,
    partitionIndex: 1,
  },
  {
    id: "local-jukebox",
    name: "Jukebox",
    deviceName: "Jukebox",
    type: "USB",
    mediaType: "MASS_STORAGE_DEVICE",
    deviceIndex: 2,
    partitionIndex: 1,
  },
]);

const mediaSourceRuntimeState = {
  activeSourceId: MEDIA_SOURCE_BASE_DEFINITIONS[0].id,
};

function getActiveMediaSourceId() {
  const configured = String(mediaSourceRuntimeState.activeSourceId || "").trim();
  if (MEDIA_SOURCE_BASE_DEFINITIONS.some((entry) => entry.id === configured)) {
    return configured;
  }
  mediaSourceRuntimeState.activeSourceId = MEDIA_SOURCE_BASE_DEFINITIONS[0].id;
  return mediaSourceRuntimeState.activeSourceId;
}

function setActiveMediaSourceId(candidateId) {
  const normalized = String(candidateId || "").trim();
  if (!normalized) {
    return false;
  }
  const exists = MEDIA_SOURCE_BASE_DEFINITIONS.some((entry) => entry.id === normalized);
  if (!exists) {
    return false;
  }
  mediaSourceRuntimeState.activeSourceId = normalized;
  return true;
}

const LANGUAGE_VOICE_OPTIONS = Object.freeze([
  { language: "de_DE", voice: "default", label: "Deutsch" },
  { language: "en_US", voice: "default", label: "English (US)" },
]);
const languageRuntimeState = {
  currentLanguage:
    typeof fixtureVehicleState?.locale === "string" && fixtureVehicleState.locale.trim()
      ? fixtureVehicleState.locale.trim()
      : "en_US",
  currentVoice: "default",
  changeRequests: [],
};
const textinputRuntimeState = {
  currentStateOfOperation: "IDLE",
};
const systemRuntimeState = {
  persistenceentries: new Map([
    [
      "center.general.last-mode",
      {
        id: "center.general.last-mode",
        name: "center.general.last-mode",
        uri: "/system/persistenceentries/center.general.last-mode",
        key: "center.general.last-mode",
        context: "general",
        exportId: 0,
        instance: "center",
        isPrivacyRelevant: false,
        maxSize: 8192,
        personalized: true,
        valueContainer: JSON.stringify(["main", "home"]),
        version: "0",
      },
    ],
    [
      "center.general.last-mode-homescreen",
      {
        id: "center.general.last-mode-homescreen",
        name: "center.general.last-mode-homescreen",
        uri: "/system/persistenceentries/center.general.last-mode-homescreen",
        key: "center.general.last-mode-homescreen",
        context: "general",
        exportId: 0,
        instance: "center",
        isPrivacyRelevant: false,
        maxSize: 8192,
        personalized: true,
        valueContainer: JSON.stringify("dashboard"),
        version: "0",
      },
    ],
    [
      "center.general.dashboard-tile-config",
      {
        id: "center.general.dashboard-tile-config",
        name: "center.general.dashboard-tile-config",
        uri: "/system/persistenceentries/center.general.dashboard-tile-config",
        key: "center.general.dashboard-tile-config",
        context: "general",
        exportId: 1358973966,
        instance: "center",
        isPrivacyRelevant: false,
        maxSize: 8192,
        personalized: true,
        valueContainer: DEV_CONTROL_UI_STORAGE_DEFAULTS["center.general.dashboard-tile-config"],
        version: "0",
      },
    ],
    [
      "center.general.direct-access",
      {
        id: "center.general.direct-access",
        name: "center.general.direct-access",
        uri: "/system/persistenceentries/center.general.direct-access",
        key: "center.general.direct-access",
        context: "general",
        exportId: 0,
        instance: "center",
        isPrivacyRelevant: false,
        maxSize: 8192,
        personalized: true,
        valueContainer: DEV_CONTROL_UI_STORAGE_DEFAULTS["center.general.direct-access"],
        version: "0",
      },
    ],
    [
      "center.general.home-screen",
      {
        id: "center.general.home-screen",
        name: "center.general.home-screen",
        uri: "/system/persistenceentries/center.general.home-screen",
        key: "center.general.home-screen",
        context: "general",
        exportId: 0,
        instance: "center",
        isPrivacyRelevant: false,
        maxSize: 8192,
        personalized: true,
        valueContainer: DEV_CONTROL_UI_STORAGE_DEFAULTS["center.general.home-screen"],
        version: "0",
      },
    ],
    [
      "center.license.LicenseAsiTileAvailable",
      {
        id: "center.license.LicenseAsiTileAvailable",
        name: "center.license.LicenseAsiTileAvailable",
        uri: "/system/persistenceentries/center.license.LicenseAsiTileAvailable",
        key: "center.license.LicenseAsiTileAvailable",
        context: "license",
        exportId: 0,
        instance: "center",
        isPrivacyRelevant: false,
        maxSize: 128,
        personalized: true,
        valueContainer: DEV_CONTROL_UI_STORAGE_DEFAULTS["center.license.LicenseAsiTileAvailable"],
        version: "0",
      },
    ],
    [
      "center.car.FASProfileAvailable",
      {
        id: "center.car.FASProfileAvailable",
        name: "center.car.FASProfileAvailable",
        uri: "/system/persistenceentries/center.car.FASProfileAvailable",
        key: "center.car.FASProfileAvailable",
        context: "car",
        exportId: 0,
        instance: "center",
        isPrivacyRelevant: false,
        maxSize: 128,
        personalized: true,
        valueContainer: JSON.stringify(false),
        version: "0",
      },
    ],
  ]),
};
const USERMANAGEMENT_ROOT_RESOURCES = Object.freeze([
  "/activities",
  "/identityProviders",
  "/settings",
  "/users",
  "/views",
]);
const RADIO_ROOT_RESOURCES = Object.freeze([
  "/favorites",
  "/frequencytuners",
  "/recents",
  "/settings",
  "/stations",
  "/tuners",
]);
const TV_ROOT_RESOURCES = Object.freeze([
  "/favorites",
  "/recents",
  "/settings",
  "/stations",
  "/tuners",
]);
const POWER_ROOT_RESOURCES = Object.freeze([
  "/clampstates",
  "/displays",
  "/mmistates",
  "/ramblocks",
  "/warnings",
]);
const MAINTENANCE_ROOT_RESOURCES = Object.freeze([
  "/fluids",
  "/historyData",
  "/resetControls",
  "/resets",
  "/services",
  "/valueIndications",
]);
const DISPLAYBEHAVIOUR_ROOT_RESOURCES = Object.freeze([
  "/displaystates",
]);
const PHONE_ROOT_RESOURCES = Object.freeze([
  "/calls",
  "/devices",
  "/groupedrecentcalls",
  "/participants",
  "/recentcalls",
  "/ringtonepreviews",
  "/settings",
  "/volumesettings",
]);
const SMARTPHONEINTEGRATION_ROOT_RESOURCES = Object.freeze([
  "/applicationStates",
  "/bluetooth",
  "/callState",
  "/devices",
  "/displayconfiguration",
  "/hardkeyEvents",
  "/licence",
  "/player",
  "/remoteControl",
  "/resourceStates",
  "/telephonyState",
  "/touchEvents",
  "/trackData",
  "/videoStream",
]);
const VEHICLEINFORMATION_ROOT_RESOURCES = Object.freeze([
  "/environments",
  "/maintainances",
  "/switchIndications",
  "/textIndication",
  "/valueIndications",
  "/vehicleData",
  "/vehicleStates",
]);
const MAINTENANCE_IDS = Object.freeze({
  service: "1c4ba7a4-3f2e-3ea0-8b6f-2b712d615b36",
  oilDistance: "647402e3-5ce7-30ce-ad63-e57c54e9a6a3",
  inspectionDistance: "9571db79-757c-3e13-8706-27f7a38736f3",
  inspectionTime: "d5b59779-2438-3e10-be11-cc0c018ebb05",
  oilTime: "ea634696-ae5c-3a52-8040-223492ea7656",
  oilLevel: "04c36d16-3c66-3123-9ca2-5c191bde46ba",
  oilRefill: "d348ba69-0852-38fa-b266-a2622196447b",
  resetControl: "58423918-b52b-3ab6-87b8-50e70f6948a5",
  reset: "a5fc8e85-a67f-38a4-ae7e-d3fe848fc887",
  fluid: "4af897c0-7244-3f17-adfa-714739525b77",
  history: "history-maintenance-1",
});
const maintenanceRuntimeState = {
  resetControl: "init",
  resetResult: null,
};
const USERMANAGEMENT_DEFAULT_USERS = Object.freeze([
  {
    id: "primary-user",
    uri: "/usermanagement/users/primary-user",
    name: "Peter",
    firstName: "Peter",
    lastName: "Pan",
    dateOfLastSync: "2026-03-07T01:12:42.123+01:00",
    dateOfLastUsage: "2026-03-07T01:12:42.123+01:00",
    isSecurityModeEnabled: true,
    role: "primaryUser",
    iaaUserID: 14,
    tokenStatus: "valid",
    tokenStatusMIB: "valid",
    authenticationLevel: "authenticatedFull",
    userName: "peter.pan",
    idpUserID: "peter.pan@example.local",
    mbbUserID: "mbb-primary-user",
    sPinStatus: "defined",
    slotID: 1,
  },
  {
    id: "secondary-user-1",
    uri: "/usermanagement/users/secondary-user-1",
    name: "Susi",
    firstName: "Susi",
    lastName: "Muster",
    dateOfLastSync: "2026-03-07T01:05:00.000+01:00",
    dateOfLastUsage: "2026-03-07T01:08:00.000+01:00",
    isSecurityModeEnabled: false,
    role: "secondaryUser",
    iaaUserID: 2,
    tokenStatus: "valid",
    tokenStatusMIB: "valid",
    authenticationLevel: "authenticatedLimited",
    userName: "susi",
    idpUserID: "susi@example.local",
    mbbUserID: "mbb-secondary-user-1",
    sPinStatus: "defined",
    slotID: 2,
  },
  {
    id: "offline-guest-user",
    uri: "/usermanagement/users/offline-guest-user",
    name: "Offline User 1",
    dateOfLastSync: "2026-03-07T00:30:10.457+01:00",
    dateOfLastUsage: "2026-03-07T00:45:10.457+01:00",
    isSecurityModeEnabled: false,
    role: "offlineGuestUser",
    iaaUserID: 10,
    authenticationLevel: "vehicleAccess",
    userName: "offline.user.1",
    slotID: 3,
  },
]);
const USERMANAGEMENT_DEFAULT_IDENTITY_PROVIDERS = Object.freeze([
  {
    id: "identity-provider-default",
    uri: "/usermanagement/identityProviders/identity-provider-default",
    name: "SecondaryUser ValidToken",
    default: true,
  },
]);
const USERMANAGEMENT_DEFAULT_ACTIVITIES = Object.freeze([
  {
    id: "activity-pair-main-user-vehicle-pin",
    uri: "/usermanagement/activities/activity-pair-main-user-vehicle-pin",
    name: "pairMainUserVehiclePIN",
    process: "idle",
    result: null,
    userLogin: "Susi",
    vehiclePIN: "B",
  },
  {
    id: "activity-reset-main-user",
    uri: "/usermanagement/activities/activity-reset-main-user",
    name: "resetMainUser",
    process: "idle",
    result: null,
  },
  {
    id: "activity-reset-factory-settings",
    uri: "/usermanagement/activities/activity-reset-factory-settings",
    name: "resetFactorySettings",
    process: "idle",
    result: null,
  },
  {
    id: "activity-change-user",
    uri: "/usermanagement/activities/activity-change-user",
    name: "changeUser",
    process: "idle",
    result: null,
  },
  {
    id: "activity-add-online-account",
    uri: "/usermanagement/activities/activity-add-online-account",
    name: "addOnlineAccount",
    process: "idle",
    result: null,
  },
  {
    id: "activity-add-offline-user",
    uri: "/usermanagement/activities/activity-add-offline-user",
    name: "addOfflineUser",
    process: "idle",
    result: null,
  },
  {
    id: "activity-delete-user",
    uri: "/usermanagement/activities/activity-delete-user",
    name: "deleteUser",
    process: "idle",
    result: null,
  },
  {
    id: "activity-edit-offline-user",
    uri: "/usermanagement/activities/activity-edit-offline-user",
    name: "editOfflineUser",
    process: "idle",
    result: null,
  },
  {
    id: "activity-token-reauthentication",
    uri: "/usermanagement/activities/activity-token-reauthentication",
    name: "tokenReAuthentication",
    process: "idle",
    result: null,
  },
]);
const USERMANAGEMENT_DEFAULT_VIEWS = Object.freeze([
  {
    id: "view-loading-account",
    uri: "/usermanagement/views/view-loading-account",
    name: "loadingAccount",
    validatedFunction: "changeUser",
    visibility: "noView",
  },
  {
    id: "view-credentials-dialog",
    uri: "/usermanagement/views/view-credentials-dialog",
    name: "credentialsDialog",
    validatedFunction: "authLevelIncrease",
    visibility: "noView",
  },
  {
    id: "view-spin-dialog",
    uri: "/usermanagement/views/view-spin-dialog",
    name: "sPinDialog",
    validatedFunction: "setSecurityMode",
    visibility: "noView",
  },
]);
const usermanagementRuntimeState = {
  users: new Map(),
  activities: new Map(),
  views: new Map(),
  identityProviders: new Map(),
  activeUserId: "primary-user",
  identifiedUserId: "primary-user",
  nextOfflineUserIndex: 2,
};
const entertainmentRuntimeState = {
  activeGroupId: "group-media-main",
  activeSourceId: "local-sd",
};

function createPhoneDeviceObject(id = "phone-device-primary", overrides = {}) {
  return {
    id,
    uri: `/phone/devices/${encodeURIComponent(String(id))}`,
    name: "Primary phone",
    connectionState: "ATTACHED",
    isCallPossible: true,
    isCallRingtoneMuted: false,
    isConfidentialModeActive: false,
    isMessageRingtoneMuted: false,
    isPrioritized: true,
    isVisible: true,
    mailboxNumber: "+491234567890",
    microphoneGain: 5,
    missedCalls: [],
    networkType: "LTE",
    providerName: "Local Emulator",
    registrationState: "REGISTERED",
    rejectCallText: "Busy right now",
    signalStrength: 4,
    speechRecognitionState: "IDLE",
    supplementaryServiceCodeState: "UNKNOWN",
    supportsInBandRinging: false,
    systemCallRingtoneIndex: 1,
    systemMessageRingtoneIndex: 1,
    threeWayCallingSetting: "ON",
    ...deepClone(overrides),
  };
}

function createPhoneSettingObject(id = "phone-setting-default", overrides = {}) {
  return {
    id,
    uri: `/phone/settings/${encodeURIComponent(String(id))}`,
    name: "Phone settings",
    isEmbeddedDeviceAvailable: true,
    isSconAudioEndpointAvailable: false,
    numberOfSupportedPhones: 2,
    ...deepClone(overrides),
  };
}

function createPhoneVolumesettingObject(id = "phone-volume-system-call", overrides = {}) {
  return {
    id,
    uri: `/phone/volumesettings/${encodeURIComponent(String(id))}`,
    name: "System call ringtone",
    type: "SYSTEM_CALL_RINGTONE",
    value: 60,
    ...deepClone(overrides),
  };
}

function createPhoneRingtonepreviewObject(id = "phone-ringtone-preview-default", phoneDevice = null, overrides = {}) {
  return {
    id,
    uri: `/phone/ringtonepreviews/${encodeURIComponent(String(id))}`,
    name: "Preview ringtone",
    phoneDevice: phoneDevice ? deepClone(phoneDevice) : null,
    state: "IDLE",
    ...deepClone(overrides),
  };
}

function createPhoneParticipantObject(id, payload = null, existing = null) {
  const input = isPlainObject(payload) ? payload : {};
  const current = existing && typeof existing === "object" ? deepClone(existing) : {};
  const device = input.phoneDevice && isPlainObject(input.phoneDevice) ? input.phoneDevice : current.phoneDevice;
  return {
    id: String(id),
    uri: `/phone/participants/${encodeURIComponent(String(id))}`,
    name:
      input.name !== undefined && input.name !== null && String(input.name).trim()
        ? String(input.name)
        : current.name || "Participant",
    callType:
      input.callType !== undefined && input.callType !== null
        ? String(input.callType)
        : current.callType || "NORMAL",
    company:
      input.company !== undefined && input.company !== null ? String(input.company) : current.company || "",
    firstName:
      input.firstName !== undefined && input.firstName !== null
        ? String(input.firstName)
        : current.firstName || "Local",
    lastName:
      input.lastName !== undefined && input.lastName !== null
        ? String(input.lastName)
        : current.lastName || "User",
    number:
      input.number !== undefined && input.number !== null ? String(input.number) : current.number || "+491234567890",
    phoneDevice: device ? deepClone(device) : current.phoneDevice || null,
    phoneNumberIndex:
      input.phoneNumberIndex !== undefined && input.phoneNumberIndex !== null
        ? Number(input.phoneNumberIndex)
        : current.phoneNumberIndex || 0,
    phoneNumberType:
      input.phoneNumberType !== undefined && input.phoneNumberType !== null
        ? String(input.phoneNumberType)
        : current.phoneNumberType || "MOBILE",
  };
}

function ensurePhoneRuntimeState() {
  if (phoneRuntimeState.devices.size === 0) {
    const defaultDevice = createPhoneDeviceObject();
    phoneRuntimeState.devices.set(defaultDevice.id, defaultDevice);
  }
  const primaryDevice = deepClone(Array.from(phoneRuntimeState.devices.values())[0] || createPhoneDeviceObject());
  if (phoneRuntimeState.settings.size === 0) {
    const defaultSetting = createPhoneSettingObject();
    phoneRuntimeState.settings.set(defaultSetting.id, defaultSetting);
  }
  if (phoneRuntimeState.volumesettings.size === 0) {
    const defaultVolume = createPhoneVolumesettingObject();
    phoneRuntimeState.volumesettings.set(defaultVolume.id, defaultVolume);
  }
  if (phoneRuntimeState.ringtonepreviews.size === 0) {
    const defaultPreview = createPhoneRingtonepreviewObject(undefined, primaryDevice);
    phoneRuntimeState.ringtonepreviews.set(defaultPreview.id, defaultPreview);
  }
  if (phoneRuntimeState.groupedrecentcalls.size === 0) {
    phoneRuntimeState.groupedrecentcalls.set("phone-groupedrecentcall-default", {
      id: "phone-groupedrecentcall-default",
      uri: "/phone/groupedrecentcalls/phone-groupedrecentcall-default",
      name: "Local Emulator",
      phoneDevice: primaryDevice,
    });
  }
}

function createPhoneModels() {
  ensurePhoneRuntimeState();
  return {
    calls: Array.from(phoneRuntimeState.calls.values()).map((entry) => deepClone(entry)),
    devices: Array.from(phoneRuntimeState.devices.values()).map((entry) => deepClone(entry)),
    groupedrecentcalls: Array.from(phoneRuntimeState.groupedrecentcalls.values()).map((entry) =>
      deepClone(entry),
    ),
    participants: Array.from(phoneRuntimeState.participants.values()).map((entry) => deepClone(entry)),
    recentcalls: Array.from(phoneRuntimeState.recentcalls.values()).map((entry) => deepClone(entry)),
    ringtonepreviews: Array.from(phoneRuntimeState.ringtonepreviews.values()).map((entry) => deepClone(entry)),
    settings: Array.from(phoneRuntimeState.settings.values()).map((entry) => deepClone(entry)),
    volumesettings: Array.from(phoneRuntimeState.volumesettings.values()).map((entry) => deepClone(entry)),
  };
}

function createSmartphoneintegrationDeviceObject(id = "spi-device-android-auto", overrides = {}) {
  return {
    id,
    uri: `/smartphoneintegration/devices/${encodeURIComponent(String(id))}`,
    name: "Android Auto Device",
    activeConnectionType: "wireless",
    activeTechnology: "None",
    technology: "AndroidAuto",
    attached: true,
    deletable: true,
    resettable: true,
    audioLastmode: false,
    bluetoothMacAddress: "00:11:22:33:44:55",
    connectionType: ["wireless"],
    connectionState: "discovered",
    blocked: false,
    failedDuringBusCycle: false,
    deviceMode: "smartphone",
    deviceName: "Local Android Auto",
    disclaimerState: "accepted",
    screenLastmode: false,
    supportedConnectionTypes: ["wireless"],
    supportedTechnology: ["AndroidAuto"],
    uiState: "home",
    ...deepClone(overrides),
  };
}

function createSmartphoneintegrationLicenceObject(id, overrides = {}) {
  const cleanId = String(id);
  return {
    id: cleanId,
    uri: `/smartphoneintegration/licence/${encodeURIComponent(cleanId)}`,
    name: cleanId,
    type: cleanId === "spi-licence-carplay" ? "CarPlay" : "AndroidAuto",
    connectionType: ["wireless"],
    swap: true,
    fiveGhzStatus: "STATUS_ALLOWED",
    ...deepClone(overrides),
  };
}

function createSmartphoneintegrationResourceStateObject(id, type, overrides = {}) {
  return {
    id,
    uri: `/smartphoneintegration/resourceStates/${encodeURIComponent(String(id))}`,
    name: String(type),
    borrowReason: "none",
    owner: "mainunit",
    state: "active",
    type,
    displayableActive: false,
    ...deepClone(overrides),
  };
}

function createSmartphoneintegrationApplicationStateObject(id, type, overrides = {}) {
  return {
    id,
    uri: `/smartphoneintegration/applicationStates/${encodeURIComponent(String(id))}`,
    name: String(type),
    owner: "mainunit",
    type,
    speechMode: "inactive",
    ...deepClone(overrides),
  };
}

function createSmartphoneintegrationTrackObject(overrides = {}) {
  return {
    album: "Local Emulator",
    artist: "Audi Emulator",
    composer: "Audi Emulator",
    coverURL: "",
    duration: 0,
    genre: "Demo",
    timePosition: 0,
    title: "No smartphone track",
    ...deepClone(overrides),
  };
}

function ensureSmartphoneintegrationRuntimeState() {
  if (smartphoneintegrationRuntimeState.licence.size === 0) {
    const androidAutoLicence = createSmartphoneintegrationLicenceObject("spi-licence-android-auto");
    const carPlayLicence = createSmartphoneintegrationLicenceObject("spi-licence-carplay");
    smartphoneintegrationRuntimeState.licence.set(androidAutoLicence.id, androidAutoLicence);
    smartphoneintegrationRuntimeState.licence.set(carPlayLicence.id, carPlayLicence);
  }
  if (smartphoneintegrationRuntimeState.devices.size === 0) {
    const defaultDevice = createSmartphoneintegrationDeviceObject();
    smartphoneintegrationRuntimeState.devices.set(defaultDevice.id, defaultDevice);
  }
  if (smartphoneintegrationRuntimeState.resourceStates.size === 0) {
    const screenState = createSmartphoneintegrationResourceStateObject("spi-resource-screen", "screen");
    const notificationState = createSmartphoneintegrationResourceStateObject(
      "spi-resource-notification",
      "notification",
    );
    smartphoneintegrationRuntimeState.resourceStates.set(screenState.id, screenState);
    smartphoneintegrationRuntimeState.resourceStates.set(notificationState.id, notificationState);
  }
  if (smartphoneintegrationRuntimeState.applicationStates.size === 0) {
    const navigationState = createSmartphoneintegrationApplicationStateObject(
      "spi-appstate-navigation",
      "navigation",
    );
    const phoneState = createSmartphoneintegrationApplicationStateObject("spi-appstate-phone", "phone");
    smartphoneintegrationRuntimeState.applicationStates.set(navigationState.id, navigationState);
    smartphoneintegrationRuntimeState.applicationStates.set(phoneState.id, phoneState);
  }
  if (smartphoneintegrationRuntimeState.bluetooth.size === 0) {
    smartphoneintegrationRuntimeState.bluetooth.set("spi-bluetooth-android-auto", {
      id: "spi-bluetooth-android-auto",
      uri: "/smartphoneintegration/bluetooth/spi-bluetooth-android-auto",
      name: "Android Auto pairing",
      type: "AndroidAuto",
      pairingStatus: "succeeded",
    });
  }
  if (smartphoneintegrationRuntimeState.displayconfiguration.size === 0) {
    smartphoneintegrationRuntimeState.displayconfiguration.set("spi-display-main", {
      id: "spi-display-main",
      uri: "/smartphoneintegration/displayconfiguration/spi-display-main",
      name: "Main display",
      display: {
        dpi: 160,
        resolutionX: 1920,
        resolutionY: 720,
        viewingDistance: 700,
      },
      windows: [],
    });
  }
  if (smartphoneintegrationRuntimeState.player.size === 0) {
    smartphoneintegrationRuntimeState.player.set("spi-player-main", {
      id: "spi-player-main",
      uri: "/smartphoneintegration/player/spi-player-main",
      name: "Smartphone player",
      track: createSmartphoneintegrationTrackObject(),
      supportedButtonTypes: ["play", "pause", "seek_forward", "seek_backward", "stop"],
      playback: {
        status: "stopped",
        playbackApp: "media",
        repeatMode: "off",
        shuffleMode: "off",
      },
    });
  }
  if (smartphoneintegrationRuntimeState.telephonyState.size === 0) {
    smartphoneintegrationRuntimeState.telephonyState.set("spi-telephony-main", {
      id: "spi-telephony-main",
      uri: "/smartphoneintegration/telephonyState/spi-telephony-main",
      name: "Telephony",
      signalStrength: "good",
      registrationState: "registered",
      airplaneMode: false,
      mobileOperator: "Local Emulator",
    });
  }
  if (smartphoneintegrationRuntimeState.trackData.size === 0) {
    smartphoneintegrationRuntimeState.trackData.set("spi-track-main", {
      id: "spi-track-main",
      uri: "/smartphoneintegration/trackData/spi-track-main",
      name: "Track",
      ...createSmartphoneintegrationTrackObject(),
    });
  }
  if (smartphoneintegrationRuntimeState.callState.size === 0) {
    smartphoneintegrationRuntimeState.callState.set("spi-call-main", {
      id: "spi-call-main",
      uri: "/smartphoneintegration/callState/spi-call-main",
      name: "Call state",
      callDirection: "unknown",
      callState: "disconnected",
      callerName: "",
      phoneNumber: "",
      uniqueCallID: "",
      action: "end_or_decline",
      duration: 0,
    });
  }
}

function createSmartphoneintegrationModels() {
  ensureSmartphoneintegrationRuntimeState();
  return {
    applicationStates: Array.from(smartphoneintegrationRuntimeState.applicationStates.values()).map((entry) =>
      deepClone(entry),
    ),
    bluetooth: Array.from(smartphoneintegrationRuntimeState.bluetooth.values()).map((entry) => deepClone(entry)),
    callState: Array.from(smartphoneintegrationRuntimeState.callState.values()).map((entry) => deepClone(entry)),
    devices: Array.from(smartphoneintegrationRuntimeState.devices.values()).map((entry) => deepClone(entry)),
    displayconfiguration: Array.from(smartphoneintegrationRuntimeState.displayconfiguration.values()).map((entry) =>
      deepClone(entry),
    ),
    hardkeyEvents: Array.from(smartphoneintegrationRuntimeState.hardkeyEvents.values()).map((entry) =>
      deepClone(entry),
    ),
    licence: Array.from(smartphoneintegrationRuntimeState.licence.values()).map((entry) => deepClone(entry)),
    player: Array.from(smartphoneintegrationRuntimeState.player.values()).map((entry) => deepClone(entry)),
    remoteControl: Array.from(smartphoneintegrationRuntimeState.remoteControl.values()).map((entry) =>
      deepClone(entry),
    ),
    resourceStates: Array.from(smartphoneintegrationRuntimeState.resourceStates.values()).map((entry) =>
      deepClone(entry),
    ),
    telephonyState: Array.from(smartphoneintegrationRuntimeState.telephonyState.values()).map((entry) =>
      deepClone(entry),
    ),
    touchEvents: Array.from(smartphoneintegrationRuntimeState.touchEvents.values()).map((entry) => deepClone(entry)),
    trackData: Array.from(smartphoneintegrationRuntimeState.trackData.values()).map((entry) => deepClone(entry)),
    videoStream: Array.from(smartphoneintegrationRuntimeState.videoStream.values()).map((entry) => deepClone(entry)),
  };
}

function createVehicleinformationValueIndicationObject(id, name, overrides = {}) {
  return {
    id,
    uri: `/vehicleinformation/valueIndications/${encodeURIComponent(String(id))}`,
    name,
    currentValue: 0,
    maxValue: 0,
    minValue: 0,
    resolution: 1,
    specialStateConfiguration: [],
    unit: "none",
    unitDistance: "",
    unitTemperature: "",
    ...deepClone(overrides),
  };
}

function createVehicleinformationTextIndicationObject(id, name, text, overrides = {}) {
  return {
    id,
    uri: `/vehicleinformation/textIndication/${encodeURIComponent(String(id))}`,
    name,
    text,
    ...deepClone(overrides),
  };
}

function createVehicleinformationSwitchIndicationObject(id, name, overrides = {}) {
  return {
    id,
    uri: `/vehicleinformation/switchIndications/${encodeURIComponent(String(id))}`,
    name,
    switchValue: "OFF",
    switchValueConfiguration: ["OFF", "ON"],
    ...deepClone(overrides),
  };
}

function ensureVehicleinformationRuntimeState() {
  if (vehicleinformationRuntimeState.textIndication.size === 0) {
    const vinText = createVehicleinformationTextIndicationObject(
      "vehicle-text-vin",
      "vehicleIdentificationNumber",
      "WAUZZZ4M0EA000000",
    );
    vehicleinformationRuntimeState.textIndication.set(vinText.id, vinText);
  }
  if (vehicleinformationRuntimeState.valueIndications.size === 0) {
    const learnedKeys = createVehicleinformationValueIndicationObject(
      "vehicle-value-keys",
      "numberOfLearnedKeys",
      {
        currentValue: 2,
        minValue: 0,
        maxValue: 8,
      },
    );
    vehicleinformationRuntimeState.valueIndications.set(learnedKeys.id, learnedKeys);
  }
  if (vehicleinformationRuntimeState.switchIndications.size === 0) {
    const valetParking = createVehicleinformationSwitchIndicationObject("vehicle-switch-valet", "valetParking", {
      switchValue: "OFF",
    });
    vehicleinformationRuntimeState.switchIndications.set(valetParking.id, valetParking);
  }
  if (vehicleinformationRuntimeState.vehicleData.size === 0) {
    const vinText = deepClone(Array.from(vehicleinformationRuntimeState.textIndication.values())[0]);
    const learnedKeys = deepClone(Array.from(vehicleinformationRuntimeState.valueIndications.values())[0]);
    const valetParking = deepClone(Array.from(vehicleinformationRuntimeState.switchIndications.values())[0]);
    vehicleinformationRuntimeState.vehicleData.set("vehicle-data-general", {
      id: "vehicle-data-general",
      uri: "/vehicleinformation/vehicleData/vehicle-data-general",
      name: "general",
      keyState: [],
      numberOfLearnedKeys: learnedKeys,
      steering: "leftHandDrive",
      valetParking,
      vehicleIdentificationNumber: vinText,
      vehicleType: "emulator",
    });
  }
  if (vehicleinformationRuntimeState.environments.size === 0) {
    vehicleinformationRuntimeState.environments.set("vehicle-environment-default", {
      id: "vehicle-environment-default",
      uri: "/vehicleinformation/environments/vehicle-environment-default",
      name: "general",
    });
  }
  if (vehicleinformationRuntimeState.maintainances.size === 0) {
    const oilDistance = createVehicleinformationValueIndicationObject("vehicle-maint-oil-distance", "oilDistance", {
      currentValue: 15000,
      maxValue: 30000,
      unit: "km",
      unitDistance: "km",
    });
    vehicleinformationRuntimeState.maintainances.set("vehicle-maintenance-default", {
      id: "vehicle-maintenance-default",
      uri: "/vehicleinformation/maintainances/vehicle-maintenance-default",
      name: "service",
      typeOfMaintainance: "service",
      value: [oilDistance],
    });
  }
  if (vehicleinformationRuntimeState.vehicleStates.size === 0) {
    vehicleinformationRuntimeState.vehicleStates.set("vehicle-state-default", {
      id: "vehicle-state-default",
      uri: "/vehicleinformation/vehicleStates/vehicle-state-default",
      name: "general",
    });
  }
}

function createVehicleinformationModels() {
  ensureVehicleinformationRuntimeState();
  return {
    environments: Array.from(vehicleinformationRuntimeState.environments.values()).map((entry) => deepClone(entry)),
    maintainances: Array.from(vehicleinformationRuntimeState.maintainances.values()).map((entry) =>
      deepClone(entry),
    ),
    switchIndications: Array.from(vehicleinformationRuntimeState.switchIndications.values()).map((entry) =>
      deepClone(entry),
    ),
    textIndication: Array.from(vehicleinformationRuntimeState.textIndication.values()).map((entry) =>
      deepClone(entry),
    ),
    valueIndications: Array.from(vehicleinformationRuntimeState.valueIndications.values()).map((entry) =>
      deepClone(entry),
    ),
    vehicleData: Array.from(vehicleinformationRuntimeState.vehicleData.values()).map((entry) => deepClone(entry)),
    vehicleStates: Array.from(vehicleinformationRuntimeState.vehicleStates.values()).map((entry) => deepClone(entry)),
  };
}

const genericCollectionStore = new Map();

function getGenericCollectionPath(inputPath) {
  const segments = normalizePath(inputPath).split("/").filter(Boolean);
  if (segments.length < 2) {
    return null;
  }
  return `/${segments.slice(0, 2).join("/")}`;
}

function getGenericCollectionEntries(collectionPath) {
  const normalized = normalizePath(collectionPath);
  if (!genericCollectionStore.has(normalized)) {
    genericCollectionStore.set(normalized, new Map());
  }
  return genericCollectionStore.get(normalized);
}

function isFixturePresenceStub(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  const keys = Object.keys(value);
  return keys.length > 0 && keys.every((key) => ["path", "available", "updatedAt"].includes(key));
}

function getFixtureCollectionEntries(collectionPath) {
  const normalized = normalizePath(collectionPath);
  const fixtureValue = fixtureResources[normalized];
  if (Array.isArray(fixtureValue)) {
    return fixtureValue.map((entry, index) => normalizeFixtureCollectionEntry(normalized, entry, index));
  }
  return [];
}

function hasKnownGenericCollection(collectionPath) {
  const normalized = normalizePath(collectionPath);
  return (
    hasBundleCollectionHint(normalized) ||
    genericCollectionStore.has(normalized) ||
    Object.prototype.hasOwnProperty.call(fixtureResources, normalized)
  );
}

function resolveGenericFixtureCollectionBody(normalized, requestBody = null) {
  const collectionPath = getGenericCollectionPath(normalized);
  if (!collectionPath) {
    return null;
  }
  const segments = normalizePath(normalized).split("/").filter(Boolean);
  const fixtureValue = fixtureResources[collectionPath];
  if (!hasKnownGenericCollection(collectionPath)) {
    return null;
  }

  const collectionStore = getGenericCollectionEntries(collectionPath);
  if (segments.length === 2) {
    if (collectionStore.size > 0) {
      return buildListPage(applySearchFilter(Array.from(collectionStore.values()).map((entry) => deepClone(entry)), requestBody));
    }
    if (Array.isArray(fixtureValue)) {
      return buildListPage(applySearchFilter(getFixtureCollectionEntries(collectionPath), requestBody));
    }
    if (isFixturePresenceStub(fixtureValue) || hasBundleCollectionHint(collectionPath)) {
      return buildListPage([]);
    }
    return null;
  }

  const elementId = decodeURIComponent(segments.slice(2).join("/") || "");
  if (!elementId) {
    return null;
  }
  const existing = collectionStore.get(String(elementId));
  if (existing) {
    return deepClone(existing);
  }
  const fixtureEntries = getFixtureCollectionEntries(collectionPath);
  const fixtureMatch = fixtureEntries.find(
    (entry) => String(entry.id) === String(elementId) || String(entry.name) === String(elementId),
  );
  if (fixtureMatch) {
    return deepClone(fixtureMatch);
  }
  if (fixtureValue !== undefined || hasBundleCollectionHint(collectionPath)) {
    return {
      id: String(elementId),
      name: String(elementId),
      uri: `${collectionPath}/${encodeURIComponent(String(elementId))}`,
    };
  }
  return null;
}

function resolveGenericFixtureCollectionMutation(command, normalized, requestBody) {
  const collectionPath = getGenericCollectionPath(normalized);
  if (!collectionPath) {
    return null;
  }
  const segments = normalizePath(normalized).split("/").filter(Boolean);
  if (!hasKnownGenericCollection(collectionPath)) {
    return null;
  }

  const store = getGenericCollectionEntries(collectionPath);
  const payload = requestBody && typeof requestBody === "object" ? deepClone(requestBody) : {};

  if (segments.length === 2) {
    if (command === "delete") {
      store.clear();
      return null;
    }
    const id =
      payload.id !== undefined && payload.id !== null && String(payload.id).trim()
        ? String(payload.id).trim()
        : `${collectionPath.split("/").filter(Boolean).pop()}-${store.size + 1}`;
    const next = normalizeFixtureCollectionEntry(collectionPath, { ...payload, id }, 0);
    store.set(id, next);
    return deepClone(next);
  }

  const elementId = decodeURIComponent(segments.slice(2).join("/") || "");
  if (!elementId) {
    return command === "delete" ? null : null;
  }
  if (command === "delete") {
    store.delete(String(elementId));
    return null;
  }
  const existing =
    store.get(String(elementId)) ||
    normalizeFixtureCollectionEntry(collectionPath, { id: String(elementId), name: String(elementId) }, 0);
  const next = {
    ...existing,
    ...payload,
    id: String(elementId),
    uri: `${collectionPath}/${encodeURIComponent(String(elementId))}`,
    name:
      payload.name !== undefined && payload.name !== null && String(payload.name).trim()
        ? String(payload.name)
        : existing.name,
  };
  store.set(String(elementId), next);
  return deepClone(next);
}

function createLanguageAvailableLanguages() {
  return LANGUAGE_VOICE_OPTIONS.map((entry) => ({
    language: entry.language,
    voice: entry.voice,
  }));
}

function getDefaultLanguageLabel(languageCode) {
  const match = LANGUAGE_VOICE_OPTIONS.find((entry) => entry.language === languageCode);
  return match ? match.label : languageCode;
}

function createLanguageModels() {
  const currentLanguage = String(languageRuntimeState.currentLanguage || "en_US");
  const currentVoice = String(languageRuntimeState.currentVoice || "default");
  const availableLanguages = createLanguageAvailableLanguages();
  const components = [
    {
      id: "component-gui-browser",
      name: "componentGUI_Browser",
      uri: "/language/components/component-gui-browser",
      active: true,
      availableLanguages,
      componentType: "graphicalUserInterface",
      currentLanguage,
      currentVoice,
      requestedLanguage: currentLanguage,
      requestedVoice: currentVoice,
      state: "ready",
    },
    {
      id: "component-gui-cluster",
      name: "componentGUI_Cluster",
      uri: "/language/components/component-gui-cluster",
      active: true,
      availableLanguages,
      componentType: "cluster",
      currentLanguage,
      currentVoice,
      requestedLanguage: currentLanguage,
      requestedVoice: currentVoice,
      state: "ready",
    },
    {
      id: "component-speech",
      name: "componentSPEECH",
      uri: "/language/components/component-speech",
      active: true,
      availableLanguages,
      componentType: "textToSpeech",
      currentLanguage,
      currentVoice,
      requestedLanguage: currentLanguage,
      requestedVoice: currentVoice,
      state: "ready",
    },
  ];
  const systems = [
    {
      id: "language-system-main",
      name: "system",
      uri: "/language/system/language-system-main",
      codedSystemLanguage: currentLanguage,
      codedSystemVoice: currentVoice,
      codedVisibleLanguages: availableLanguages,
      currentSystemLanguage: currentLanguage,
      currentSystemVoice: currentVoice,
    },
  ];
  return {
    components,
    systems,
    changeRequests: languageRuntimeState.changeRequests.map((entry) => deepClone(entry)),
  };
}

function createTextinputModels() {
  const currentLanguage = String(languageRuntimeState.currentLanguage || "en_US");
  const languageLabel = getDefaultLanguageLabel(currentLanguage);
  const inputfields = [
    {
      id: "default",
      name: "default",
      uri: "/textinput/inputfields/default",
      clientId: "local-emulator",
      contextId: "main",
      maxLength: 256,
      ttsEnabled: true,
    },
  ];
  const inputlanguages = LANGUAGE_VOICE_OPTIONS.map((entry) => ({
    id: entry.language,
    name: entry.label,
    uri: `/textinput/inputlanguages/${encodeURIComponent(entry.language)}`,
    activated: entry.language === currentLanguage,
    activeKeyboardStyle: "DEFAULT",
    associatedKeyboardStyles: ["DEFAULT"],
    availableInQuickAccess: true,
    isDefaultForCurrentSystemLanguage: entry.language === currentLanguage,
    languageCode: entry.language,
    languageName: entry.label,
  }));
  const inputproviders = [
    {
      id: "keyboard-default",
      name: "keyboard-default",
      uri: "/textinput/inputproviders/keyboard-default",
      clientId: "local-emulator",
      connectedInputField: deepClone(inputfields[0]),
      deleteText: "Delete",
      inputMode: "KEYBOARD",
      keyboardLayout: {
        height: 240,
        name: languageLabel,
        width: 1024,
        xCoordinate: 0,
        yCoordinate: 0,
      },
      spaceText: "Space",
      state: "IDLE",
    },
  ];
  const status = [
    {
      id: "textinput-status-main",
      name: "status",
      uri: "/textinput/status/textinput-status-main",
      currentStateOfOperation: String(textinputRuntimeState.currentStateOfOperation || "IDLE"),
    },
  ];
  return {
    inputfields,
    inputlanguages,
    inputproviders,
    status,
    userdictionaries: [],
  };
}

function createGnssModels() {
  const latitude = 52.520008;
  const longitude = 13.404954;
  const now = Date.now();
  return {
    gnssModules: [
      {
        id: "gnss-main",
        name: "GNSS main",
        uri: "/gnss/gnssModules/gnss-main",
        receiverStatus: "AVAILABLE",
      },
    ],
    locations: [
      {
        id: "vehicle-location",
        name: "Vehicle location",
        uri: "/gnss/locations/vehicle-location",
        altitude: 34,
        altitudeMsl: 34,
        bearing: 0,
        bearingAccuracy: 1,
        fixType: "3D",
        hdop: 1,
        horizontalAccuracy: 5,
        latitude,
        longitude,
        pdop: 1,
        slope: 0,
        slopeAccuracy: 0,
        speed: 0,
        speedAccuracy: 0,
        systemTimestamp: now,
        timestamp: now,
        usedSatellites: 10,
        vdop: 1,
        verticalAccuracy: 3,
        visibleSatellites: 14,
      },
    ],
    svStatusInfos: [],
  };
}

function createNaviModels() {
  const latitude = 52.520008;
  const longitude = 13.404954;
  return {
    carpositioninfos: [
      {
        id: "car-position-main",
        name: "Car position",
        uri: "/navi/carpositioninfos/car-position-main",
        altitude: 34,
        coordinates: {
          latitude,
          latitudeDegree: latitude,
          longitude,
          longitudeDegree: longitude,
        },
        countryCode: "DE",
        countryName: "Germany",
        directionAngle: 0,
        isHovLane: false,
        roadClass: "OTHER",
        street: "Local Emulator Road",
      },
    ],
    locations: [],
  };
}

function createSystemModels() {
  const components = [
    "Audio",
    "Bluetooth",
    "Connectivity",
    "Media",
    "Navi",
    "Phone",
    "Settings",
    "System",
    "TTS",
    "Tuner",
    "Tv",
    "Webapps",
  ].map((componentName) => ({
    id: `system-component-${componentName.toLowerCase()}`,
    name: componentName,
    uri: `/system/components/system-component-${encodeURIComponent(componentName.toLowerCase())}`,
    componentName,
    state: "PRESENT",
  }));
  const configurations = [
    {
      id: "config-main",
      name: "Config",
      uri: "/system/configurations/config-main",
      carBrand: "Audi",
      carClass: "C",
      carDerivate: "SUV",
      carGeneration: 4,
      displayCount: "ONE",
      hudDerivate: "MOST_STREAMING",
      kombiDerivate: "FPK",
      mode: "DEVELOPMENT",
      region: "EU",
      saleCountry: "DE",
      topology: "singleDisplay",
      variant: "HIGH",
      asterix: true,
      codriverDisplay: false,
    },
  ];
  const persistenceentries = Array.from(systemRuntimeState.persistenceentries.values()).map((entry) =>
    deepClone(entry),
  );
  return {
    components,
    configurations,
    persistenceentries,
    resettables: [],
  };
}

function getSimulatorSnapshot() {
  const fallbackState = {
    session: "active",
    userPresent: true,
    simulatedIgnition: "on",
    doorState: "closed",
    seatOccupied: true,
  };
  try {
    const currentState =
      simulatorService && typeof simulatorService.getState === "function"
        ? simulatorService.getState()
        : null;
    return currentState && typeof currentState === "object"
      ? { ...fallbackState, ...currentState }
      : fallbackState;
  } catch {
    return fallbackState;
  }
}

function isSimulatedIgnitionOn() {
  return String(getSimulatorSnapshot().simulatedIgnition || "off").trim().toLowerCase() === "on";
}

function isSimulatedClampSOn() {
  const state = getSimulatorSnapshot();
  return (
    isSimulatedIgnitionOn() ||
    String(state.session || "").trim().toLowerCase() === "active" ||
    Boolean(state.userPresent) ||
    Boolean(state.seatOccupied)
  );
}

function createPowerModels() {
  const clamp15Active = isSimulatedIgnitionOn();
  const clampSActive = isSimulatedClampSOn();
  return {
    clampstates: [
      {
        id: "4db0d53c-df05-4ad5-b920-96ef9f68812f",
        uri: "/power/clampstates/4db0d53c-df05-4ad5-b920-96ef9f68812f",
        name: "Clamp_15",
        isActive: clamp15Active,
      },
      {
        id: "16e1f499-dd71-4ee9-a109-e15e93282afa",
        uri: "/power/clampstates/16e1f499-dd71-4ee9-a109-e15e93282afa",
        name: "Clamp_S",
        isActive: clampSActive,
      },
    ],
    displays: [
      {
        id: "9e133013-787f-4709-8881-a63a213d887a",
        uri: "/power/displays/9e133013-787f-4709-8881-a63a213d887a",
        name: "Display1",
        state: clamp15Active ? "On" : "Standby",
      },
      {
        id: "83246165-e4e3-4afa-89ff-342f80effabc",
        uri: "/power/displays/83246165-e4e3-4afa-89ff-342f80effabc",
        name: "Display2",
        state: clamp15Active ? "On" : "Standby",
      },
      {
        id: "38a5c7e0-86f1-4cea-8704-c3c9af74d3f6",
        uri: "/power/displays/38a5c7e0-86f1-4cea-8704-c3c9af74d3f6",
        name: "Display3",
        state: clamp15Active ? "On" : "Standby",
      },
    ],
    mmistates: [
      {
        id: "f7976539-277e-4652-9d6c-9b150f9cb67f",
        uri: "/power/mmistates/f7976539-277e-4652-9d6c-9b150f9cb67f",
        name: "Main",
        event: clamp15Active ? "CLAMP_15_ON" : "CLAMP_15_OFF",
        state: clamp15Active ? "ON" : "OFF",
      },
    ],
    warnings: [
      {
        id: "f5edfdaa-3b04-4e5e-948f-d61f289ed596",
        uri: "/power/warnings/f5edfdaa-3b04-4e5e-948f-d61f289ed596",
        name: "StandbyPopup",
        isActive: false,
      },
      {
        id: "24e9dea8-dfc7-4e57-ab36-5e619f260aef",
        uri: "/power/warnings/24e9dea8-dfc7-4e57-ab36-5e619f260aef",
        name: "Telmax",
        isActive: false,
      },
      {
        id: "be31c45a-783f-4de0-9961-6eea78f1124d",
        uri: "/power/warnings/be31c45a-783f-4de0-9961-6eea78f1124d",
        name: "Overtemp",
        isActive: false,
      },
      {
        id: "e2cc1df4-3214-4553-b449-45ac147a405a",
        uri: "/power/warnings/e2cc1df4-3214-4553-b449-45ac147a405a",
        name: "BemPrewarning",
        isActive: false,
      },
      {
        id: "780726e6-ee34-4ce6-b04b-1094da3a67e5",
        uri: "/power/warnings/780726e6-ee34-4ce6-b04b-1094da3a67e5",
        name: "ComponentProtection",
        isActive: false,
      },
    ],
    ramblocks: [
      {
        id: "a8a9ab07-8f52-4542-90ad-3e28b8011218",
        uri: "/power/ramblocks/a8a9ab07-8f52-4542-90ad-3e28b8011218",
        name: "Main",
        suspendState: clamp15Active ? "resume" : "suspend",
      },
    ],
  };
}

function createDisplayBehaviourModels() {
  const activeState = isSimulatedIgnitionOn() ? "ON" : "STANDBY";
  const entries = Array.from(displayBehaviourState.values()).map((entry) => {
    const next = deepClone(entry);
    if (String(next.name || "").trim() === "Display1") {
      next.state = activeState;
    }
    return next;
  });
  return {
    displaystates: entries,
  };
}

function buildLocalObjectUri(resourcePath) {
  const normalized = normalizePath(resourcePath);
  return `http://${HOST}:${PORT}${normalized}`;
}

function buildMaintenanceValueReference(id, name) {
  return {
    id,
    name,
    uri: buildLocalObjectUri(`/maintenance/valueIndications/${encodeURIComponent(id)}`),
  };
}

function createMaintenanceModels() {
  const valueIndications = [
    {
      id: MAINTENANCE_IDS.oilDistance,
      uri: buildLocalObjectUri(`/maintenance/valueIndications/${MAINTENANCE_IDS.oilDistance}`),
      name: "oilDistance",
      available: true,
      currentValue: 15000,
      resolution: 100,
      specialState: "overdue_in",
      unitDistance: "km",
    },
    {
      id: MAINTENANCE_IDS.inspectionDistance,
      uri: buildLocalObjectUri(
        `/maintenance/valueIndications/${MAINTENANCE_IDS.inspectionDistance}`,
      ),
      name: "inspectionDistance",
      available: true,
      currentValue: 18000,
      resolution: 100,
      specialState: "overdue_in",
      unitDistance: "km",
    },
    {
      id: MAINTENANCE_IDS.inspectionTime,
      uri: buildLocalObjectUri(`/maintenance/valueIndications/${MAINTENANCE_IDS.inspectionTime}`),
      name: "inspectionTime",
      available: true,
      currentValue: 180,
      resolution: 1,
      specialState: "overdue_in",
      unitTime: "days",
    },
    {
      id: MAINTENANCE_IDS.oilTime,
      uri: buildLocalObjectUri(`/maintenance/valueIndications/${MAINTENANCE_IDS.oilTime}`),
      name: "oilTime",
      available: true,
      currentValue: 180,
      resolution: 1,
      specialState: "overdue_in",
      unitTime: "days",
    },
    {
      id: MAINTENANCE_IDS.oilLevel,
      uri: buildLocalObjectUri(`/maintenance/valueIndications/${MAINTENANCE_IDS.oilLevel}`),
      name: "engineOilLevel",
      available: true,
      currentValue: 62.5,
      minValue: 0,
      maxValue: 100,
      resolution: 0.5,
      specialState: "oilok",
      unitPercent: "percent",
    },
    {
      id: MAINTENANCE_IDS.oilRefill,
      uri: buildLocalObjectUri(`/maintenance/valueIndications/${MAINTENANCE_IDS.oilRefill}`),
      name: "engineOilRefill",
      available: true,
      currentValue: 1.25,
      minValue: 0,
      maxValue: 4,
      resolution: 0.125,
      unitVolume: "liter",
    },
  ];

  const valueReferenceByName = new Map(valueIndications.map((entry) => [entry.name, buildMaintenanceValueReference(entry.id, entry.name)]));
  const services = [
    {
      id: MAINTENANCE_IDS.service,
      uri: buildLocalObjectUri(`/maintenance/services/${MAINTENANCE_IDS.service}`),
      name: "service",
      available: true,
      inspection: [
        deepClone(valueReferenceByName.get("inspectionDistance")),
        deepClone(valueReferenceByName.get("inspectionTime")),
      ],
      oil: [
        deepClone(valueReferenceByName.get("oilDistance")),
        deepClone(valueReferenceByName.get("oilTime")),
      ],
    },
  ];
  const fluids = [
    {
      id: MAINTENANCE_IDS.fluid,
      uri: buildLocalObjectUri(`/maintenance/fluids/${MAINTENANCE_IDS.fluid}`),
      name: "engineOil",
      available: true,
      level: deepClone(valueReferenceByName.get("engineOilLevel")),
      refill: deepClone(valueReferenceByName.get("engineOilRefill")),
    },
  ];
  const resetControls = [
    {
      id: MAINTENANCE_IDS.resetControl,
      uri: buildLocalObjectUri(`/maintenance/resetControls/${MAINTENANCE_IDS.resetControl}`),
      name: "resetOilService",
      available: true,
      resetControl: maintenanceRuntimeState.resetControl,
      resetResult: maintenanceRuntimeState.resetResult,
    },
  ];
  const resets = [
    {
      id: MAINTENANCE_IDS.reset,
      uri: buildLocalObjectUri(`/maintenance/resets/${MAINTENANCE_IDS.reset}`),
      name: "resets",
      resetOilService: {
        id: MAINTENANCE_IDS.resetControl,
        name: "resetOilService",
        uri: buildLocalObjectUri(`/maintenance/resetControls/${MAINTENANCE_IDS.resetControl}`),
      },
    },
  ];
  const historyData = [
    {
      id: MAINTENANCE_IDS.history,
      uri: buildLocalObjectUri(`/maintenance/historyData/${MAINTENANCE_IDS.history}`),
      name: "serviceHistory",
      available: true,
      date: "2026-03-01",
      dealerName: "Local Emulator Service",
      mileage: 12450,
      mileageUnit: "km",
      orderCode: "LAB-001",
    },
  ];

  return {
    fluids,
    historyData,
    resetControls,
    resets,
    services,
    valueIndications,
  };
}

function ensureUsermanagementRuntimeState() {
  if (usermanagementRuntimeState.users.size === 0) {
    for (const user of USERMANAGEMENT_DEFAULT_USERS) {
      usermanagementRuntimeState.users.set(String(user.id), deepClone(user));
    }
  }
  if (usermanagementRuntimeState.activities.size === 0) {
    for (const activity of USERMANAGEMENT_DEFAULT_ACTIVITIES) {
      usermanagementRuntimeState.activities.set(String(activity.id), deepClone(activity));
    }
  }
  if (usermanagementRuntimeState.views.size === 0) {
    for (const view of USERMANAGEMENT_DEFAULT_VIEWS) {
      usermanagementRuntimeState.views.set(String(view.id), deepClone(view));
    }
  }
  if (usermanagementRuntimeState.identityProviders.size === 0) {
    for (const provider of USERMANAGEMENT_DEFAULT_IDENTITY_PROVIDERS) {
      usermanagementRuntimeState.identityProviders.set(String(provider.id), deepClone(provider));
    }
  }
  if (!usermanagementRuntimeState.users.has(String(usermanagementRuntimeState.activeUserId))) {
    const firstUser = USERMANAGEMENT_DEFAULT_USERS[0];
    usermanagementRuntimeState.activeUserId = firstUser ? String(firstUser.id) : null;
  }
  if (!usermanagementRuntimeState.users.has(String(usermanagementRuntimeState.identifiedUserId))) {
    usermanagementRuntimeState.identifiedUserId = usermanagementRuntimeState.activeUserId;
  }
}

function cloneUsermanagementUser(user) {
  return user ? deepClone(user) : null;
}

function getUsermanagementUserById(candidateId) {
  ensureUsermanagementRuntimeState();
  const normalizedId = String(candidateId || "").trim();
  if (!normalizedId) {
    return null;
  }
  if (usermanagementRuntimeState.users.has(normalizedId)) {
    return cloneUsermanagementUser(usermanagementRuntimeState.users.get(normalizedId));
  }
  for (const entry of usermanagementRuntimeState.users.values()) {
    if (!entry) {
      continue;
    }
    if (
      String(entry.name || "").trim() === normalizedId ||
      String(entry.userName || "").trim() === normalizedId ||
      String(entry.uri || "").trim() === normalizedId ||
      String(entry.iaaUserID || "").trim() === normalizedId
    ) {
      return cloneUsermanagementUser(entry);
    }
  }
  return null;
}

function setUsermanagementActiveUser(candidateId) {
  const nextUser = getUsermanagementUserById(candidateId);
  if (!nextUser) {
    return false;
  }
  usermanagementRuntimeState.activeUserId = String(nextUser.id);
  usermanagementRuntimeState.identifiedUserId = String(nextUser.id);
  return true;
}

function createUsermanagementModels() {
  ensureUsermanagementRuntimeState();
  const users = Array.from(usermanagementRuntimeState.users.values()).map((entry) => cloneUsermanagementUser(entry));
  const activities = Array.from(usermanagementRuntimeState.activities.values()).map((entry) => deepClone(entry));
  const views = Array.from(usermanagementRuntimeState.views.values()).map((entry) => deepClone(entry));
  const identityProviders = Array.from(usermanagementRuntimeState.identityProviders.values()).map((entry) =>
    deepClone(entry),
  );
  const activeUser = getUsermanagementUserById(usermanagementRuntimeState.activeUserId);
  const identifiedUser = getUsermanagementUserById(usermanagementRuntimeState.identifiedUserId);
  const usersRegisteredInVehicle = users.filter((entry) => Number.isFinite(Number(entry.iaaUserID)));
  const settings = [
    {
      id: "setting-main",
      uri: "/usermanagement/settings/setting-main",
      name: "setting",
      activeUser,
      identifiedUser,
      users: usersRegisteredInVehicle,
      moreOnlineUserWithRemoteRightsAvailable: users.some((entry) => entry.role === "secondaryUser"),
      fleetModeActive: false,
    },
  ];
  return {
    settings,
    users,
    activities,
    views,
    identityProviders,
  };
}

function createRadioModels() {
  const fmStation = {
    id: "radio-station-fm-1",
    uri: "/radio/stations/radio-station-fm-1",
    name: "Demo FM",
  };
  const onlineStation = {
    id: "radio-station-online-1",
    uri: "/radio/stations/radio-station-online-1",
    name: "Local Online Radio",
  };
  const settings = [
    {
      id: "radio-setting-main",
      uri: "/radio/settings/radio-setting-main",
      name: "setting",
    },
  ];
  const tuners = [
    {
      id: "radio-tuner-fm-main",
      uri: "/radio/tuners/radio-tuner-fm-main",
      name: "FM",
      list: "FM",
      selectedStation: fmStation,
      selectedStationIndex: 0,
      settingsRef: settings[0].uri,
      stationListRef: "/radio/stations",
      providerLogo: "",
    },
    {
      id: "radio-tuner-online-main",
      uri: "/radio/tuners/radio-tuner-online-main",
      name: "Online Radio",
      list: "ONLINE",
      selectedStation: onlineStation,
      selectedStationIndex: 0,
      settingsRef: settings[0].uri,
      stationListRef: "/radio/stations",
      providerLogo: "",
    },
  ];
  const frequencytuners = [
    {
      id: "radio-frequency-tuner-main",
      uri: "/radio/frequencytuners/radio-frequency-tuner-main",
      name: "FM",
      selectedStation: fmStation,
      selectedStationIndex: 0,
      settingsRef: settings[0].uri,
      stationListRef: "/radio/stations",
    },
  ];
  return {
    settings,
    tuners,
    frequencytuners,
    stations: [fmStation, onlineStation],
    favorites: [],
    recents: [],
  };
}

function createTvModels() {
  const station = {
    id: "tv-station-1",
    uri: "/tv/stations/tv-station-1",
    name: "Demo TV",
  };
  const settings = [
    {
      id: "tv-setting-main",
      uri: "/tv/settings/tv-setting-main",
      name: "setting",
    },
  ];
  const tuners = [
    {
      id: "tv-tuner-main",
      uri: "/tv/tuners/tv-tuner-main",
      name: "TV",
      selectedStation: station,
      selectedStationIndex: 0,
      settingsRef: settings[0].uri,
      stationListRef: "/tv/stations",
    },
  ];
  return {
    settings,
    tuners,
    stations: [station],
    favorites: [],
    recents: [],
  };
}

function getEntertainmentGroupIdForSourceId(sourceId) {
  const normalizedId = String(sourceId || "").trim();
  if (normalizedId === "tuner-fm-main" || normalizedId === "online-radio-main") {
    return "group-tuner-main";
  }
  if (normalizedId === "tv-main") {
    return "group-tv-main";
  }
  return "group-media-main";
}

function setEntertainmentSelectionBySource(sourceId) {
  const normalizedId = String(sourceId || "").trim();
  if (!normalizedId) {
    return false;
  }
  entertainmentRuntimeState.activeGroupId = getEntertainmentGroupIdForSourceId(normalizedId);
  entertainmentRuntimeState.activeSourceId = normalizedId;
  if (MEDIA_SOURCE_BASE_DEFINITIONS.some((entry) => entry.id === normalizedId)) {
    setActiveMediaSourceId(normalizedId);
  }
  return true;
}

function setEntertainmentActiveGroup(groupId) {
  const normalizedId = String(groupId || "").trim();
  if (!normalizedId) {
    return false;
  }
  entertainmentRuntimeState.activeGroupId = normalizedId;
  if (normalizedId === "group-media-main") {
    entertainmentRuntimeState.activeSourceId = getActiveMediaSourceId();
  } else if (normalizedId === "group-tuner-main") {
    if (!["tuner-fm-main", "online-radio-main"].includes(entertainmentRuntimeState.activeSourceId)) {
      entertainmentRuntimeState.activeSourceId = "tuner-fm-main";
    }
  } else if (normalizedId === "group-tv-main") {
    entertainmentRuntimeState.activeSourceId = "tv-main";
  }
  return true;
}

function createMediaSources(hasTracks, playerRef = null) {
  const activeSourceId = getActiveMediaSourceId();
  return MEDIA_SOURCE_BASE_DEFINITIONS.map((definition) => {
    const isActive = definition.id === activeSourceId;
    const source = {
      id: definition.id,
      uri: `/entertainmentcontrol/sources/${encodeURIComponent(definition.id)}`,
      name: definition.name,
      activationState: isActive ? "ACTIVE" : "INACTIVE",
      sourceState: hasTracks ? "ACTIVE" : "EMPTY",
      capabilities: ["RAW_BROWSER", "CONTENT_BROWSER", "PLAYBACK_MODES"],
      deviceIndex: definition.deviceIndex,
      deviceName: definition.deviceName,
      partitionIndex: definition.partitionIndex,
      relatedGroupType: "MEDIA",
      relatedTargetType: "MAIN",
      type: definition.type,
      mediaType: definition.mediaType,
    };
    if (playerRef) {
      source.player = {
        id: playerRef.id,
        uri: playerRef.uri,
        name: playerRef.name,
      };
    } else {
      source.player = {
        id: "player-main",
        uri: "/media/players/player-main",
        name: "Local Player",
      };
    }
    return source;
  });
}

function createEntertainmentModels(sources = null) {
  const mediaSources = Array.isArray(sources) && sources.length > 0 ? deepClone(sources) : createMediaSources(true);
  const activeSourceId =
    String(entertainmentRuntimeState.activeSourceId || "").trim() || getActiveMediaSourceId();
  const activeGroupId =
    String(entertainmentRuntimeState.activeGroupId || "").trim() || getEntertainmentGroupIdForSourceId(activeSourceId);
  const mediaSource =
    mediaSources.find((entry) => String(entry.id) === String(getActiveMediaSourceId())) || mediaSources[0] || null;
  const tunerSource = {
    id: "tuner-fm-main",
    uri: "/entertainmentcontrol/sources/tuner-fm-main",
    name: "FM",
    activationState: activeSourceId === "tuner-fm-main" ? "ACTIVE" : "INACTIVE",
    sourceState: "READY",
    relatedGroupType: "TUNER",
    relatedTargetType: "MAIN",
    type: "FM",
    mediaType: "RADIO",
    player: {
      id: "radio-tuner-fm-main",
      uri: "/radio/tuners/radio-tuner-fm-main",
      name: "FM",
    },
  };
  const onlineRadioSource = {
    id: "online-radio-main",
    uri: "/entertainmentcontrol/sources/online-radio-main",
    name: "Online Radio",
    activationState: activeSourceId === "online-radio-main" ? "ACTIVE" : "INACTIVE",
    sourceState: "READY",
    relatedGroupType: "TUNER",
    relatedTargetType: "MAIN",
    type: "ONLINE_RADIO",
    mediaType: "RADIO",
    player: {
      id: "radio-tuner-online-main",
      uri: "/radio/tuners/radio-tuner-online-main",
      name: "Online Radio",
    },
  };
  const tvSource = {
    id: "tv-main",
    uri: "/entertainmentcontrol/sources/tv-main",
    name: "TV",
    activationState: activeSourceId === "tv-main" ? "ACTIVE" : "INACTIVE",
    sourceState: "READY",
    relatedGroupType: "TV",
    relatedTargetType: "MAIN",
    type: "TV",
    mediaType: "VIDEO",
    player: {
      id: "tv-tuner-main",
      uri: "/tv/tuners/tv-tuner-main",
      name: "TV",
    },
  };
  for (const entry of mediaSources) {
    entry.activationState = activeGroupId === "group-media-main" && entry.id === getActiveMediaSourceId() ? "ACTIVE" : "INACTIVE";
  }
  const mediaGroup = {
    id: "group-media-main",
    uri: "/entertainmentcontrol/groups/group-media-main",
    name: "Media",
    type: "MEDIA",
    relatedTargetType: "MAIN",
    initializing: false,
    activeSource:
      activeGroupId === "group-media-main"
        ? mediaSources.find((entry) => entry.id === getActiveMediaSourceId()) || mediaSource
        : mediaSource,
    sources: mediaSources,
  };
  const tunerGroup = {
    id: "group-tuner-main",
    uri: "/entertainmentcontrol/groups/group-tuner-main",
    name: "Tuner",
    type: "TUNER",
    relatedTargetType: "MAIN",
    initializing: false,
    activeSource:
      activeSourceId === "online-radio-main"
        ? onlineRadioSource
        : tunerSource,
    sources: [tunerSource, onlineRadioSource],
  };
  const tvGroup = {
    id: "group-tv-main",
    uri: "/entertainmentcontrol/groups/group-tv-main",
    name: "TV",
    type: "TV",
    relatedTargetType: "MAIN",
    initializing: false,
    activeSource: tvSource,
    sources: [tvSource],
  };
  const groupById = new Map([
    [mediaGroup.id, mediaGroup],
    [tunerGroup.id, tunerGroup],
    [tvGroup.id, tvGroup],
  ]);
  const mainTarget = {
    id: "target-main",
    uri: "/entertainmentcontrol/targets/target-main",
    name: "MAIN",
    type: "MAIN",
    qualifier: "MAIN",
    activeGroup: groupById.get(activeGroupId) || mediaGroup,
    groups: [mediaGroup, tunerGroup, tvGroup],
  };
  const activeMediaGroups = [
    {
      id: "activemedia-main",
      uri: "/entertainmentcontrol/activemediagroups/activemedia-main",
      name: "Active Media",
      groupType: "MEDIA",
    },
    {
      id: "activetuner-main",
      uri: "/entertainmentcontrol/activemediagroups/activetuner-main",
      name: "Active Tuner",
      groupType: "TUNER",
    },
    {
      id: "activetv-main",
      uri: "/entertainmentcontrol/activemediagroups/activetv-main",
      name: "Active TV",
      groupType: "TV",
    },
  ];
  const activeMediaGroup =
    activeGroupId === "group-tv-main"
      ? activeMediaGroups[2]
      : activeGroupId === "group-tuner-main"
        ? activeMediaGroups[1]
        : activeMediaGroups[0];
  return {
    source: mainTarget.activeGroup && mainTarget.activeGroup.activeSource ? deepClone(mainTarget.activeGroup.activeSource) : mediaSource,
    sources: [...mediaSources, tunerSource, onlineRadioSource, tvSource],
    group: mediaGroup,
    groups: [mediaGroup, tunerGroup, tvGroup],
    target: mainTarget,
    targets: [mainTarget],
    activeMediaGroup,
    activeMediaGroups,
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
  const sourceList = createMediaSources(hasTracks);
  const activeSourceId = getActiveMediaSourceId();
  const source =
    sourceList.find((entry) => String(entry.id) === String(activeSourceId)) || sourceList[0] || null;
  const entertainment = createEntertainmentModels(sourceList);
  const browserRootEntries = tracks.map((track) => createBrowserListElement(track, source));
  const browser = {
    id: source ? `browser-${source.id}` : "browser-local-sd",
    uri: source ? `/media/browsers/browser-${source.id}` : "/media/browsers/browser-local-sd",
    name: source ? source.name : "Local SD",
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

  for (const sourceEntry of sourceList) {
    sourceEntry.player = {
      id: player.id,
      uri: player.uri,
      name: player.name,
    };
  }

  if (source) {
    source.player = {
      id: player.id,
      uri: player.uri,
      name: player.name,
    };
  }

  const playerTime = {
    id: "playertime-main",
    uri: "/media/playertimes/playertime-main",
    name: "Local Playtime",
    currentPlaytime: player.currentPlaytime,
    totalPlaytime: player.totalPlayTime,
  };

  return {
    source,
    sources: entertainment.sources,
    browser,
    browserEntries,
    player,
    playerTime,
    group: entertainment.group,
    groups: entertainment.groups,
    target: entertainment.target,
    targets: entertainment.targets,
    activeMediaGroup: entertainment.activeMediaGroup,
    activeMediaGroups: entertainment.activeMediaGroups,
  };
}

const WEBAPPMANAGEMENT_ROOT_RESOURCES = Object.freeze([
  "/appresources",
  "/apps",
  "/capabilities",
  "/deletelocks",
  "/entrypoints",
  "/events",
  "/icons",
  "/labels",
  "/services",
  "/tempdatasets",
  "/usages",
]);

const WEBAPPMANAGEMENT_DEFINITIONS = Object.freeze([
  {
    slug: "poi",
    appId: "app-poi",
    serviceId: "service-poi",
    entrypointId: "entry-poi",
    iconId: "icon-poi",
    labelId: "label-poi",
    name: "poi",
    label: "Points of Interest",
    entryIdentifier: "poi",
    tag: "poi",
  },
  {
    slug: "google",
    appId: "app-google",
    serviceId: "service-google",
    entrypointId: "entry-google",
    iconId: "icon-google",
    labelId: "label-google",
    name: "google",
    label: "Google Search",
    entryIdentifier: "google",
    tag: "google",
  },
  {
    slug: "osp",
    appId: "app-osp",
    serviceId: "service-osp",
    entrypointId: "entry-osp",
    iconId: "icon-osp",
    labelId: "label-osp",
    name: "osp",
    label: "Online Search Provider",
    entryIdentifier: "osp",
    tag: "osp",
  },
]);

function createWebappmanagementModels() {
  const iconSourceUrl = "/icons/tiles/E3D3_asterix_settings.webp";
  const apps = [];
  const services = [];
  const entrypoints = [];
  const icons = [];
  const labels = [];
  const capabilities = [];
  const events = [];
  const usages = [];

  WEBAPPMANAGEMENT_DEFINITIONS.forEach((definition, index) => {
    const url = buildAudiUiStubUrl(definition.slug);
    const app = {
      id: definition.appId,
      uri: `/webappmanagement/apps/${encodeURIComponent(definition.appId)}`,
      name: definition.name,
      containerId: `container-${definition.slug}`,
      deleted: false,
      hidden: false,
      location: "MAIN",
      markedForDeletion: false,
      notRunningReasons: [],
      persisted: true,
      scheduledStart: "MANUAL",
      serviceId: definition.serviceId,
      sourceType: "LOCAL",
      state: "RUNNING",
      verified: true,
      version: "1.0.0",
    };
    const icon = {
      id: definition.iconId,
      uri: `/webappmanagement/icons/${encodeURIComponent(definition.iconId)}`,
      name: definition.name,
      app,
      createCopy: false,
      fileExtension: "webp",
      persisted: true,
      type: "ICON",
      url: iconSourceUrl,
    };
    const label = {
      id: definition.labelId,
      uri: `/webappmanagement/labels/${encodeURIComponent(definition.labelId)}`,
      name: definition.label,
      app,
      language: "en_US",
      persisted: true,
      type: "TITLE",
      visible: true,
    };
    const service = {
      id: definition.serviceId,
      uri: `/webappmanagement/services/${encodeURIComponent(definition.serviceId)}`,
      name: definition.name,
      app,
      instance: "default",
      persisted: true,
      registryId: definition.name,
      tags: [
        { key: "kind", value: "local-webapp" },
        { key: "domain", value: definition.name },
      ],
      url,
    };
    const entrypoint = {
      id: definition.entrypointId,
      uri: `/webappmanagement/entrypoints/${encodeURIComponent(definition.entrypointId)}`,
      name: definition.name,
      app,
      constraints: [],
      delayLoadingScreen: false,
      displays: ["MAIN"],
      entryIdentifier: definition.entryIdentifier,
      hidden: false,
      icons: [icon],
      labels: [label],
      onDestroyUrl: "",
      persisted: true,
      positionIndicator: index + 1,
      tag: definition.tag,
      url,
    };
    const capability = {
      id: `capability-${definition.slug}`,
      uri: `/webappmanagement/capabilities/capability-${encodeURIComponent(definition.slug)}`,
      name: definition.name,
      type: "string",
      value: "available",
    };
    const event = {
      id: `event-${definition.slug}`,
      uri: `/webappmanagement/events/event-${encodeURIComponent(definition.slug)}`,
      name: `${definition.name}-ready`,
      app,
      attributes: [],
      comparison: "EQUAL",
      persisted: true,
      resource: "state",
      service: definition.name,
      value: 1,
    };
    const usage = {
      id: `usage-${definition.slug}`,
      uri: `/webappmanagement/usages/usage-${encodeURIComponent(definition.slug)}`,
      name: definition.name,
      app,
      client: "mmi-emulator",
      timestamp: new Date().toISOString(),
      type: "STARTABLE",
    };

    apps.push(app);
    services.push(service);
    entrypoints.push(entrypoint);
    icons.push(icon);
    labels.push(label);
    capabilities.push(capability);
    events.push(event);
    usages.push(usage);
  });

  return {
    apps,
    appresources: [],
    capabilities,
    deletelocks: [],
    entrypoints,
    events,
    icons,
    labels,
    services,
    tempdatasets: [],
    usages,
  };
}

function applySearchFilter(rows, requestBody) {
  const list = Array.isArray(rows) ? rows : [];
  const isRequestObject = requestBody && typeof requestBody === "object" && !Array.isArray(requestBody);
  const search =
    isRequestObject && requestBody.search && typeof requestBody.search === "object" && !Array.isArray(requestBody.search)
      ? requestBody.search
      : null;
  const directFilter =
    !search && isRequestObject
      ? Object.fromEntries(
          Object.entries(requestBody).filter(([key, value]) => {
            if (
              [
                "autosubscribe",
                "updatelimit",
                "expansionFields",
                "expansionLevel",
                "fields",
                "sortBy",
                "offset",
                "offsetId",
                "limit",
                "search",
                "headers",
                "body",
              ].includes(key)
            ) {
              return false;
            }
            return value !== undefined;
          }),
        )
      : null;
  const effectiveSearch = search && Object.keys(search).length > 0 ? search : directFilter;
  if (!effectiveSearch || Object.keys(effectiveSearch).length === 0) {
    return list;
  }

  function valueMatchesSearch(actualValue, searchValue) {
    if (searchValue === undefined || searchValue === null || searchValue === "") {
      return true;
    }
    if (actualValue === undefined || actualValue === null) {
      return false;
    }
    if (isPlainObject(searchValue)) {
      const entries = Object.entries(searchValue).filter(([, value]) => value !== undefined);
      if (entries.length === 0) {
        return true;
      }
      if (isPlainObject(actualValue)) {
        return entries.every(([key, value]) => valueMatchesSearch(actualValue[key], value));
      }
      const reducedSearchValue =
        searchValue.value ??
        searchValue.id ??
        searchValue.name ??
        searchValue.type ??
        searchValue.uri;
      if (reducedSearchValue !== undefined) {
        return valueMatchesSearch(actualValue, reducedSearchValue);
      }
      return false;
    }
    if (isPlainObject(actualValue)) {
      return valueMatchesSearch(
        actualValue.value ?? actualValue.id ?? actualValue.name ?? actualValue.type ?? actualValue.uri,
        searchValue,
      );
    }
    if (Array.isArray(actualValue)) {
      return actualValue.some((item) => valueMatchesSearch(item, searchValue));
    }
    if (typeof actualValue === "boolean" || typeof searchValue === "boolean") {
      return Boolean(actualValue) === Boolean(searchValue);
    }
    if (typeof actualValue === "number" || typeof searchValue === "number") {
      const left = Number(actualValue);
      const right = Number(searchValue);
      if (Number.isFinite(left) && Number.isFinite(right)) {
        return left === right;
      }
    }
    return String(actualValue).trim().toUpperCase() === String(searchValue).trim().toUpperCase();
  }

  return list.filter((entry) =>
    Object.entries(effectiveSearch).every(([key, value]) => valueMatchesSearch(entry ? entry[key] : undefined, value)),
  );
}

function cloneSoundSetting(setting) {
  const clone = deepClone(setting);
  if (!Array.isArray(clone.possibleDiscreteValues)) {
    delete clone.possibleDiscreteValues;
  }
  return clone;
}

function cloneSoundToneplayer(entry) {
  const clone = deepClone(entry);
  if (!Array.isArray(clone.possibleVolumes) || clone.possibleVolumes.length === 0) {
    clone.possibleVolumes = ["OFF", "LOW", "MID", "HIGH"];
  }
  return clone;
}

function normalizeSoundPurposeToken(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

function getSoundPurposeTokens(purpose) {
  const canonical = String(purpose || "").trim().toUpperCase();
  if (!canonical) {
    return [];
  }
  const aliases = SOUND_PURPOSE_ALIAS_MAP.get(canonical) || [];
  return [canonical, ...aliases]
    .map((entry) => String(entry || "").trim().toUpperCase())
    .filter(Boolean);
}

function doesSoundPurposeMatch(setting, token) {
  const normalizedToken = normalizeSoundPurposeToken(token);
  if (!normalizedToken) {
    return false;
  }
  const candidates = getSoundPurposeTokens(setting && setting.purpose);
  if (candidates.length === 0) {
    return false;
  }
  return candidates.some((candidate) => normalizeSoundPurposeToken(candidate) === normalizedToken);
}

function ensureSoundRuntimeState() {
  if (!Array.isArray(soundRuntimeState.settings) || soundRuntimeState.settings.length === 0) {
    soundRuntimeState.settings = createInitialSoundSettings();
  }
  if (!Array.isArray(soundRuntimeState.toneplayers) || soundRuntimeState.toneplayers.length === 0) {
    soundRuntimeState.toneplayers = createInitialToneplayers();
  }
}

function getSoundSettingIndex(identifier) {
  const token = String(identifier || "").trim();
  if (!token) {
    return -1;
  }
  const normalized = token.toUpperCase();
  return soundRuntimeState.settings.findIndex(
    (setting) =>
      String(setting.id || "").toUpperCase() === normalized ||
      String(setting.purpose || "").toUpperCase() === normalized ||
      doesSoundPurposeMatch(setting, token),
  );
}

function getSoundToneplayerIndex(identifier) {
  const token = String(identifier || "").trim();
  if (!token) {
    return -1;
  }
  const normalized = token.toUpperCase();
  return soundRuntimeState.toneplayers.findIndex(
    (entry) =>
      String(entry.id || "").toUpperCase() === normalized ||
      String(entry.type || "").toUpperCase() === normalized,
  );
}

function createSoundModels() {
  ensureSoundRuntimeState();
  const playback = typeof mediaService?.getState === "function" ? mediaService.getState() : null;
  const liveVolume = toFiniteNumber(playback && playback.volume);
  const currentVolume = liveVolume === null ? 0 : Math.max(0, Math.min(100, Math.round(liveVolume)));
  const soundUiActive = isSimulatedIgnitionOn();
  if (currentVolume > 0) {
    soundRuntimeState.userMuted = false;
  }

  const effectiveVolume = soundRuntimeState.userMuted ? 0 : currentVolume;
  const volumes = [
    {
      id: SOUND_VOLUME_ID,
      name: "SoundVolume: ENTERTAINMENT",
      uri: `/sound/volumes/${SOUND_VOLUME_ID}`,
      context: "ENTERTAINMENT",
      disableReason: soundUiActive ? null : "NOT_ACTIVE",
      minValue: 0,
      maxValue: 100,
      userMuted: !!soundRuntimeState.userMuted,
      value: effectiveVolume,
      valueChangeActive: !!soundRuntimeState.valueChangeActive,
    },
  ];

  const activevolumes = [
    {
      id: SOUND_ACTIVE_VOLUME_ID,
      name: "activeVolume",
      uri: `/sound/activevolumes/${SOUND_ACTIVE_VOLUME_ID}`,
      context: "ENTERTAINMENT",
      currentRelativeValue: effectiveVolume / 100,
      currentValue: effectiveVolume,
      disableReason: null,
      minValue: 0,
      maxValue: 100,
      userMuted: !!soundRuntimeState.userMuted,
      valueChangeActive: !!soundRuntimeState.valueChangeActive,
    },
  ];

  const capabilities = [
    {
      id: SOUND_CAPABILITY_ID,
      name: "",
      uri: `/sound/capabilities/${SOUND_CAPABILITY_ID}`,
      amplifier: "BOSE",
      balance: true,
      bass: true,
      fader: true,
      subwoofer: true,
      treble: true,
    },
  ];

  const settings = [];
  for (const setting of soundRuntimeState.settings) {
    const normalized = cloneSoundSetting(setting);
    normalized.uri = `/sound/settings/${encodeURIComponent(String(normalized.id || ""))}`;
    if (!normalized.name) {
      normalized.name = `Sound setting for ${normalized.purpose || "UNKNOWN"}`;
    }
    settings.push(normalized);
    const aliases = getSoundPurposeTokens(normalized.purpose).filter(
      (alias) => alias !== String(normalized.purpose || "").toUpperCase(),
    );
    for (const alias of aliases) {
      settings.push({
        ...deepClone(normalized),
        purpose: alias,
      });
    }
  }

  const speechqualities = [
    {
      id: SOUND_SPEECH_QUALITY_ID,
      name: "",
      uri: `/sound/speechqualities/${SOUND_SPEECH_QUALITY_ID}`,
      inputRms: 0,
      outputRms: 0,
    },
  ];

  const status = [
    {
      id: SOUND_STATUS_ID,
      name: "Status resource",
      uri: `/sound/status/${SOUND_STATUS_ID}`,
      status: soundRuntimeState.status || "AVAILABLE",
    },
  ];

  const toneplayers = soundRuntimeState.toneplayers.map((entry) => {
    const normalized = cloneSoundToneplayer(entry);
    normalized.uri = `/sound/toneplayers/${encodeURIComponent(String(normalized.id || ""))}`;
    if (!normalized.name) {
      normalized.name = normalized.type || normalized.id || "Toneplayer";
    }
    if (!normalized.playingState) {
      normalized.playingState = "STOPPED";
    }
    if (!normalized.volume) {
      normalized.volume = "MID";
    }
    if (!normalized.volumeNature) {
      normalized.volumeNature = "DISCRETE_VALUES";
    }
    return normalized;
  });

  return {
    activevolumes,
    capabilities,
    settings,
    speechqualities,
    status,
    toneplayers,
    volumes,
  };
}

function resolveSoundBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createSoundModels();

  if (lower === "/sound") {
    return SOUND_ROOT_RESOURCES.slice();
  }

  for (const collection of SOUND_RESOURCE_COLLECTIONS) {
    if (lower === `/sound/${collection}`) {
      return buildListPage(applySearchFilter(models[collection] || [], requestBody));
    }
    const elementMatch = new RegExp(`^/sound/${collection}/[^/]+$`, "i");
    if (elementMatch.test(lower)) {
      const segments = normalized.split("/").filter(Boolean);
      const elementId = decodeURIComponent(segments[segments.length - 1] || "");
      const list = models[collection] || [];
      let found = list.find((entry) => String(entry.id) === String(elementId));
      if (!found && collection === "settings") {
        found = list.find((entry) => doesSoundPurposeMatch(entry, elementId));
      }
      if (found) {
        return deepClone(found);
      }
      return {
        id: elementId || "unknown",
        name: elementId || "unknown",
        uri: `/sound/${collection}/${encodeURIComponent(elementId || "unknown")}`,
      };
    }
  }

  return {
    path: normalized,
    available: true,
    mocked: true,
  };
}

function resolveSoundMutation(command, normalized, requestBody) {
  ensureSoundRuntimeState();
  const lower = normalized.toLowerCase();
  const payload = requestBody && typeof requestBody === "object" ? requestBody : {};
  const isDelete = command === "delete";

  function applyVolume(rawValue) {
    const numericValue = toFiniteNumber(rawValue);
    if (numericValue === null) {
      return;
    }
    const clampedVolume = Math.max(0, Math.min(100, Math.round(numericValue)));
    enqueueMediaEvents([
      {
        type: "media.volume.set",
        payload: { volume: clampedVolume },
      },
    ]);
  }

  if (/^\/sound\/volumes\/[^/]+$/i.test(lower) || lower === "/sound/volumes") {
    if (!isDelete) {
      if (payload.userMuted !== undefined) {
        soundRuntimeState.userMuted = !!payload.userMuted;
      }
      if (payload.valueChangeActive !== undefined) {
        soundRuntimeState.valueChangeActive = !!payload.valueChangeActive;
      }
      if (soundRuntimeState.userMuted) {
        applyVolume(0);
      } else {
        applyVolume(payload.value);
      }
    }
    if (isDelete) {
      return null;
    }
    const models = createSoundModels();
    if (lower === "/sound/volumes") {
      return deepClone(models.volumes[0]);
    }
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return (
      deepClone(models.volumes.find((entry) => String(entry.id) === String(id))) || {
        id: id || "unknown",
        name: id || "unknown",
        uri: `/sound/volumes/${encodeURIComponent(id || "unknown")}`,
      }
    );
  }

  if (/^\/sound\/activevolumes\/[^/]+$/i.test(lower) || lower === "/sound/activevolumes") {
    if (!isDelete) {
      if (payload.userMuted !== undefined) {
        soundRuntimeState.userMuted = !!payload.userMuted;
      }
      if (payload.valueChangeActive !== undefined) {
        soundRuntimeState.valueChangeActive = !!payload.valueChangeActive;
      }
      if (soundRuntimeState.userMuted) {
        applyVolume(0);
      } else if (payload.currentValue !== undefined) {
        applyVolume(payload.currentValue);
      } else if (payload.currentRelativeValue !== undefined) {
        const relativeValue = toFiniteNumber(payload.currentRelativeValue);
        if (relativeValue !== null) {
          applyVolume(relativeValue <= 1 ? relativeValue * 100 : relativeValue);
        }
      }
    }
    if (isDelete) {
      return null;
    }
    const models = createSoundModels();
    if (lower === "/sound/activevolumes") {
      return deepClone(models.activevolumes[0]);
    }
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return (
      deepClone(models.activevolumes.find((entry) => String(entry.id) === String(id))) || {
        id: id || "unknown",
        name: id || "unknown",
        uri: `/sound/activevolumes/${encodeURIComponent(id || "unknown")}`,
      }
    );
  }

  if (/^\/sound\/settings(\/[^/]+)?$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const explicitId = lower === "/sound/settings" ? payload.id || payload.purpose : segments[segments.length - 1];
    const settingToken = decodeURIComponent(String(explicitId || ""));
    const settingIndex = getSoundSettingIndex(settingToken);
    if (isDelete) {
      if (settingIndex >= 0) {
        soundRuntimeState.settings[settingIndex].disableReason = "NOT_AVAILABLE";
      }
      return null;
    }
    if (settingIndex < 0) {
      return {
        accepted: true,
        warning: "unknown_sound_setting",
        id: settingToken || null,
      };
    }

    const setting = soundRuntimeState.settings[settingIndex];
    if (payload.changeActive !== undefined) {
      setting.changeActive = !!payload.changeActive;
    }
    if (payload.menuConnectionActive !== undefined) {
      setting.menuConnectionActive = !!payload.menuConnectionActive;
    }
    if (payload.booleanValue !== undefined) {
      setting.booleanValue = !!payload.booleanValue;
    }

    for (const axis of ["X", "Y", "Z"]) {
      const valueKey = `value${axis}`;
      if (payload[valueKey] === undefined) {
        continue;
      }
      const parsed = toFiniteNumber(payload[valueKey]);
      if (parsed === null) {
        continue;
      }
      const minValue = toFiniteNumber(setting[`minValue${axis}`]);
      const maxValue = toFiniteNumber(setting[`maxValue${axis}`]);
      let nextValue = parsed;
      if (minValue !== null) {
        nextValue = Math.max(minValue, nextValue);
      }
      if (maxValue !== null) {
        nextValue = Math.min(maxValue, nextValue);
      }
      setting[valueKey] = nextValue;
    }

    if (typeof payload.discreteValue === "string" && payload.discreteValue.trim()) {
      const desired = payload.discreteValue.trim().toUpperCase();
      const options = Array.isArray(setting.possibleDiscreteValues)
        ? setting.possibleDiscreteValues.map((value) => String(value).toUpperCase())
        : [];
      if (options.length === 0 || options.includes(desired)) {
        setting.discreteValue = desired;
      }
    }

    const models = createSoundModels();
    return (
      deepClone(models.settings.find((entry) => String(entry.id) === String(setting.id))) || {
        id: setting.id || settingToken || "unknown",
        name: setting.name || "Sound setting",
        uri: `/sound/settings/${encodeURIComponent(setting.id || settingToken || "unknown")}`,
      }
    );
  }

  if (/^\/sound\/toneplayers(\/[^/]+)?$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const explicitId = lower === "/sound/toneplayers" ? payload.id || payload.type : segments[segments.length - 1];
    const toneToken = decodeURIComponent(String(explicitId || ""));
    let toneplayerIndex = getSoundToneplayerIndex(toneToken);
    if (toneplayerIndex < 0 && !isDelete && toneToken) {
      soundRuntimeState.toneplayers.push({
        id: toneToken,
        name: toneToken,
        type: "TOUCH_FEEDBACK",
        playingState: "STOPPED",
        possibleVolumes: ["OFF", "LOW", "MID", "HIGH"],
        volume: "MID",
        volumeNature: "DISCRETE_VALUES",
        minContinuousVolume: 0,
        maxContinuousVolume: 100,
        continuousVolume: 50,
      });
      toneplayerIndex = soundRuntimeState.toneplayers.length - 1;
    }
    if (isDelete) {
      if (toneplayerIndex >= 0) {
        soundRuntimeState.toneplayers[toneplayerIndex].playingState = "STOPPED";
      }
      return null;
    }
    if (toneplayerIndex >= 0) {
      const toneplayer = soundRuntimeState.toneplayers[toneplayerIndex];
      if (typeof payload.playingState === "string" && payload.playingState.trim()) {
        const desiredState = payload.playingState.trim().toUpperCase();
        if (["ONCE", "REPEATEDLY", "STOPPED"].includes(desiredState)) {
          toneplayer.playingState = desiredState;
        }
      }
      if (typeof payload.volume === "string" && payload.volume.trim()) {
        const desiredVolume = payload.volume.trim().toUpperCase();
        const volumes = Array.isArray(toneplayer.possibleVolumes)
          ? toneplayer.possibleVolumes.map((value) => String(value).toUpperCase())
          : ["OFF", "LOW", "MID", "HIGH"];
        if (volumes.includes(desiredVolume)) {
          toneplayer.volume = desiredVolume;
        }
      }
      if (payload.continuousVolume !== undefined) {
        const next = toFiniteNumber(payload.continuousVolume);
        if (next !== null) {
          const minVolume = toFiniteNumber(toneplayer.minContinuousVolume);
          const maxVolume = toFiniteNumber(toneplayer.maxContinuousVolume);
          let clamped = next;
          if (minVolume !== null) {
            clamped = Math.max(minVolume, clamped);
          }
          if (maxVolume !== null) {
            clamped = Math.min(maxVolume, clamped);
          }
          toneplayer.continuousVolume = clamped;
        }
      }
    }
    const models = createSoundModels();
    if (lower === "/sound/toneplayers") {
      return deepClone(models.toneplayers[0] || null);
    }
    const id = toneToken;
    return (
      deepClone(models.toneplayers.find((entry) => String(entry.id) === String(id))) || {
        id: id || "unknown",
        name: id || "unknown",
        uri: `/sound/toneplayers/${encodeURIComponent(id || "unknown")}`,
      }
    );
  }

  if (/^\/sound\/status(\/[^/]+)?$/i.test(lower)) {
    if (!isDelete && typeof payload.status === "string" && payload.status.trim()) {
      soundRuntimeState.status = payload.status.trim().toUpperCase();
    }
    if (isDelete) {
      return null;
    }
    const models = createSoundModels();
    if (lower === "/sound/status") {
      return deepClone(models.status[0]);
    }
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return (
      deepClone(models.status.find((entry) => String(entry.id) === String(id))) || {
        id: id || "unknown",
        name: id || "unknown",
        uri: `/sound/status/${encodeURIComponent(id || "unknown")}`,
      }
    );
  }

  if (isDelete) {
    return null;
  }

  return resolveSoundBody(normalized, requestBody);
}

function normalizePerceivableContextCollection(segment) {
  const normalized = String(segment || "").trim().toLowerCase();
  if (normalized === "displayelements") {
    return "displayelements";
  }
  if (normalized === "displays") {
    return "displays";
  }
  if (normalized === "locks") {
    return "locks";
  }
  return null;
}

function ensurePerceivableMainDisplay() {
  const store = perceivableContextStore.displays;
  let mainKey = null;
  let mainEntry = null;
  for (const [key, entry] of store.entries()) {
    const isMainId = String(entry && entry.id ? entry.id : "").toLowerCase() === "main";
    const isMainName = String(entry && entry.name ? entry.name : "").toUpperCase() === "MAIN";
    if (isMainId || isMainName) {
      mainKey = key;
      mainEntry = entry;
      break;
    }
  }

  if (!mainEntry) {
    const created = createDefaultPerceivableMainDisplay("main");
    store.set(created.id, created);
    return deepClone(created);
  }

  const normalizedId = String(mainEntry.id || "main");
  const normalizedMain = {
    ...createDefaultPerceivableMainDisplay(normalizedId),
    ...deepClone(mainEntry),
    id: normalizedId,
    name: "MAIN",
    uri: `/perceivablecontext/displays/${encodeURIComponent(normalizedId)}`,
    domain: mainEntry.domain || "MEDIA",
    currentPage: mainEntry.currentPage || "SINGLE",
    displayElements: normalizePerceivableDisplayElements(mainEntry.displayElements),
  };
  if (mainKey !== normalizedId && mainKey !== null) {
    store.delete(mainKey);
  }
  store.set(normalizedId, normalizedMain);
  return deepClone(normalizedMain);
}

function getPerceivableContextStore(collectionName) {
  if (collectionName === "displays") {
    return perceivableContextStore.displays;
  }
  if (collectionName === "displayelements") {
    return perceivableContextStore.displayelements;
  }
  if (collectionName === "locks") {
    return perceivableContextStore.locks;
  }
  return null;
}

function createDefaultPerceivableContextElement(collectionName, id) {
  const cleanId = String(id || "unknown");
  if (collectionName === "displays") {
    if (cleanId.toLowerCase() === "main") {
      return createDefaultPerceivableMainDisplay(cleanId);
    }
    return {
      id: cleanId,
      name: cleanId.toUpperCase(),
      uri: `/perceivablecontext/displays/${encodeURIComponent(cleanId)}`,
      domain: "MEDIA",
      currentPage: "SINGLE",
      displayElements: [],
    };
  }
  if (collectionName === "displayelements") {
    return {
      id: cleanId,
      name: cleanId,
      uri: `/perceivablecontext/displayelements/${encodeURIComponent(cleanId)}`,
      selectable: true,
      visibleLineNumber: 0,
    };
  }
  return {
    id: cleanId,
    name: cleanId,
    uri: `/perceivablecontext/locks/${encodeURIComponent(cleanId)}`,
    state: "UNLOCKED",
  };
}

function resolvePerceivableContextBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  if (lower === "/perceivablecontext") {
    return PERCEIVABLE_CONTEXT_ROOT_RESOURCES.slice();
  }
  const collectionMatch = /^\/perceivablecontext\/([^/]+)$/i.exec(normalized);
  if (collectionMatch) {
    const collectionName = normalizePerceivableContextCollection(collectionMatch[1]);
    if (!collectionName) {
      return buildListPage([]);
    }
    const store = getPerceivableContextStore(collectionName);
    if (collectionName === "displays") {
      ensurePerceivableMainDisplay();
    }
    const entries = Array.from(store.values()).map((entry) => deepClone(entry));
    return buildListPage(applySearchFilter(entries, requestBody));
  }
  const elementMatch = /^\/perceivablecontext\/([^/]+)\/([^/]+)$/i.exec(normalized);
  if (elementMatch) {
    const collectionName = normalizePerceivableContextCollection(elementMatch[1]);
    const elementId = decodeURIComponent(elementMatch[2] || "");
    if (!collectionName) {
      return {
        id: elementId || "unknown",
        name: elementId || "unknown",
        uri: normalized,
      };
    }
    const store = getPerceivableContextStore(collectionName);
    if (collectionName === "displays") {
      ensurePerceivableMainDisplay();
    }
    const existing = store.get(String(elementId));
    if (existing) {
      return deepClone(existing);
    }
    return createDefaultPerceivableContextElement(collectionName, elementId);
  }
  return {
    path: normalized,
    available: true,
    mocked: true,
  };
}

function resolvePerceivableContextMutation(command, normalized, requestBody) {
  const isDelete = command === "delete";
  const payload = requestBody && typeof requestBody === "object" ? requestBody : {};
  const collectionMatch = /^\/perceivablecontext\/([^/]+)$/i.exec(normalized);
  if (collectionMatch) {
    const collectionName = normalizePerceivableContextCollection(collectionMatch[1]);
    if (!collectionName) {
      return {
        accepted: true,
        command,
        path: normalized,
      };
    }
    const store = getPerceivableContextStore(collectionName);
    if (collectionName === "displays") {
      ensurePerceivableMainDisplay();
    }
    if (isDelete) {
      if (collectionName === "displays") {
        const mainDisplay = createDefaultPerceivableMainDisplay("main");
        store.clear();
        store.set(mainDisplay.id, mainDisplay);
      } else {
        store.clear();
      }
      return null;
    }
    let elementId =
      payload.id !== undefined && payload.id !== null && String(payload.id).trim()
        ? String(payload.id).trim()
        : `${collectionName}-${store.size + 1}`;
    if (
      collectionName === "displays" &&
      (!payload.id || !String(payload.id).trim()) &&
      String(payload.name || "").trim().toUpperCase() === "MAIN"
    ) {
      elementId = "main";
    }
    const existing = store.get(elementId) || createDefaultPerceivableContextElement(collectionName, elementId);
    const normalizedPayload = deepClone(payload);
    if (collectionName === "displays" && normalizedPayload.displayElements !== undefined) {
      normalizedPayload.displayElements = normalizePerceivableDisplayElements(normalizedPayload.displayElements);
    }
    const next = {
      ...existing,
      ...normalizedPayload,
      id: elementId,
      uri: `/perceivablecontext/${collectionName}/${encodeURIComponent(elementId)}`,
      name:
        payload.name !== undefined && payload.name !== null && String(payload.name).trim()
          ? String(payload.name)
          : existing.name,
    };
    if (collectionName === "displays") {
      next.domain = next.domain || existing.domain || "MEDIA";
      next.currentPage = next.currentPage || existing.currentPage || "SINGLE";
      next.displayElements = normalizePerceivableDisplayElements(next.displayElements);
      if (String(next.id).toLowerCase() === "main") {
        next.name = "MAIN";
      }
    }
    store.set(elementId, next);
    if (collectionName === "displays") {
      ensurePerceivableMainDisplay();
    }
    return deepClone(next);
  }

  const elementMatch = /^\/perceivablecontext\/([^/]+)\/([^/]+)$/i.exec(normalized);
  if (elementMatch) {
    const collectionName = normalizePerceivableContextCollection(elementMatch[1]);
    const elementId = decodeURIComponent(elementMatch[2] || "");
    if (!collectionName) {
      return {
        accepted: true,
        command,
        path: normalized,
      };
    }
    const store = getPerceivableContextStore(collectionName);
    if (collectionName === "displays") {
      ensurePerceivableMainDisplay();
    }
    const existing = store.get(String(elementId)) || createDefaultPerceivableContextElement(collectionName, elementId);
    if (isDelete) {
      if (Array.isArray(requestBody) && requestBody.length > 0) {
        const mutable = { ...existing };
        for (const field of requestBody) {
          if (typeof field === "string" && field in mutable) {
            delete mutable[field];
          }
        }
        if (collectionName === "displays") {
          mutable.displayElements = normalizePerceivableDisplayElements(mutable.displayElements);
          if (String(elementId).toLowerCase() === "main") {
            const defaults = createDefaultPerceivableMainDisplay(String(elementId));
            mutable.name = "MAIN";
            mutable.domain = mutable.domain || defaults.domain;
            mutable.currentPage = mutable.currentPage || defaults.currentPage;
          }
        }
        store.set(String(elementId), mutable);
      } else {
        if (collectionName === "displays" && String(elementId).toLowerCase() === "main") {
          store.set(String(elementId), createDefaultPerceivableMainDisplay(String(elementId)));
        } else {
          store.delete(String(elementId));
        }
      }
      if (collectionName === "displays") {
        ensurePerceivableMainDisplay();
      }
      return null;
    }
    const normalizedPayload = deepClone(payload);
    if (collectionName === "displays" && normalizedPayload.displayElements !== undefined) {
      normalizedPayload.displayElements = normalizePerceivableDisplayElements(normalizedPayload.displayElements);
    }
    const next = {
      ...existing,
      ...normalizedPayload,
      id: String(elementId),
      uri: `/perceivablecontext/${collectionName}/${encodeURIComponent(String(elementId))}`,
      name:
        payload.name !== undefined && payload.name !== null && String(payload.name).trim()
          ? String(payload.name)
          : existing.name,
    };
    if (collectionName === "displays") {
      next.domain = next.domain || existing.domain || "MEDIA";
      next.currentPage = next.currentPage || existing.currentPage || "SINGLE";
      next.displayElements = normalizePerceivableDisplayElements(next.displayElements);
      if (String(next.id).toLowerCase() === "main") {
        next.name = "MAIN";
      }
    }
    store.set(String(elementId), next);
    if (collectionName === "displays") {
      ensurePerceivableMainDisplay();
    }
    return deepClone(next);
  }

  if (isDelete) {
    return null;
  }
  return resolvePerceivableContextBody(normalized, requestBody);
}

function resolveMaintenanceBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createMaintenanceModels();
  if (lower === "/maintenance") {
    return MAINTENANCE_ROOT_RESOURCES.slice();
  }
  for (const collectionName of [
    "fluids",
    "historyData",
    "resetControls",
    "resets",
    "services",
    "valueIndications",
  ]) {
    const requestCollection = collectionName.toLowerCase();
    if (lower === `/maintenance/${requestCollection}`) {
      return buildListPage(applySearchFilter(models[collectionName], requestBody));
    }
    if (new RegExp(`^/maintenance/${requestCollection}/[^/]+$`, "i").test(lower)) {
      const segments = normalized.split("/").filter(Boolean);
      const id = decodeURIComponent(segments[segments.length - 1] || "");
      return (
        deepClone((models[collectionName] || []).find((entry) => String(entry.id) === String(id))) ||
        null
      );
    }
  }
  return null;
}

function resolveMaintenanceMutation(command, normalized, requestBody) {
  const lower = normalized.toLowerCase();
  const payload = isPlainObject(requestBody) ? deepClone(requestBody) : {};
  if (command === "delete") {
    return null;
  }
  if (/^\/maintenance\/resetcontrols\/[^/]+$/i.test(lower)) {
    if (typeof payload.resetControl === "string" && payload.resetControl.trim()) {
      maintenanceRuntimeState.resetControl = payload.resetControl.trim();
      if (maintenanceRuntimeState.resetControl === "triggerReset") {
        maintenanceRuntimeState.resetControl = "resetExecuted";
        maintenanceRuntimeState.resetResult = "successful";
      } else if (
        maintenanceRuntimeState.resetControl === "init" ||
        maintenanceRuntimeState.resetControl === "resetExecuted"
      ) {
        maintenanceRuntimeState.resetResult = payload.resetResult
          ? String(payload.resetResult)
          : maintenanceRuntimeState.resetResult;
      }
    }
    if (typeof payload.resetResult === "string" && payload.resetResult.trim()) {
      maintenanceRuntimeState.resetResult = payload.resetResult.trim();
    }
    return resolveMaintenanceBody(normalized, requestBody);
  }
  if (
    lower === "/maintenance/fluids" ||
    lower === "/maintenance/services" ||
    lower === "/maintenance/valueindications" ||
    /^\/maintenance\/(fluids|services|valueindications)\/[^/]+$/i.test(lower)
  ) {
    return resolveMaintenanceBody(normalized, requestBody);
  }
  return null;
}

function getKombiSyncCollectionName(resourceName) {
  const normalized = String(resourceName || "")
    .trim()
    .replace(/^\//, "")
    .toLowerCase();
  if (KOMBISYNC_COLLECTIONS.has(normalized)) {
    return normalized;
  }
  return KOMBISYNC_COLLECTION_ALIASES.get(normalized) || null;
}

function nextKombiSyncId(collectionName) {
  const current = Number(kombiSyncCounters.get(collectionName) || 1);
  kombiSyncCounters.set(collectionName, current + 1);
  return `${collectionName}-${current}`;
}

function normalizeKombiSyncEntry(collectionName, requestedId, requestBody) {
  const payload = requestBody && typeof requestBody === "object" ? deepClone(requestBody) : {};
  const id =
    (requestedId && String(requestedId).trim()) ||
    (payload.id !== undefined && payload.id !== null && String(payload.id).trim()) ||
    nextKombiSyncId(collectionName);
  const cleanId = String(id);
  return {
    ...payload,
    id: cleanId,
    name:
      payload.name !== undefined && payload.name !== null && String(payload.name).trim()
        ? String(payload.name)
        : cleanId,
    uri: `/kombisync/${collectionName}/${encodeURIComponent(cleanId)}`,
  };
}

function resolveKombiSyncBody(normalized) {
  const lower = normalized.toLowerCase();
  if (lower === "/kombisync") {
    return KOMBISYNC_ROOT_RESOURCES.slice();
  }
  const collectionMatch = /^\/kombisync\/([^/]+)$/i.exec(normalized);
  if (collectionMatch) {
    const collectionName = getKombiSyncCollectionName(collectionMatch[1]);
    if (!collectionName) {
      return buildListPage([]);
    }
    const entries = Array.from(kombiSyncStore.get(collectionName).values()).map((entry) => deepClone(entry));
    return buildListPage(entries);
  }
  const elementMatch = /^\/kombisync\/([^/]+)\/([^/]+)$/i.exec(normalized);
  if (elementMatch) {
    const collectionName = getKombiSyncCollectionName(elementMatch[1]);
    const elementId = decodeURIComponent(elementMatch[2] || "");
    if (!collectionName) {
      return {
        id: elementId || "unknown",
        name: elementId || "unknown",
        uri: normalized,
      };
    }
    const existing = kombiSyncStore.get(collectionName).get(String(elementId));
    if (existing) {
      return deepClone(existing);
    }
    return normalizeKombiSyncEntry(collectionName, elementId, {});
  }
  return {
    path: normalized,
    available: true,
    mocked: true,
  };
}

function resolveKombiSyncMutation(command, normalized, requestBody) {
  const collectionMatch = /^\/kombisync\/([^/]+)$/.exec(normalized.toLowerCase());
  if (!collectionMatch) {
    const elementMatch = /^\/kombisync\/([^/]+)\/([^/]+)$/i.exec(normalized);
    if (!elementMatch) {
      if (command === "delete") {
        for (const collectionName of KOMBISYNC_COLLECTIONS) {
          kombiSyncStore.get(collectionName).clear();
        }
        return null;
      }
      return {
        accepted: true,
        command,
        path: normalized,
      };
    }
    const collectionName = getKombiSyncCollectionName(elementMatch[1]);
    const elementId = decodeURIComponent(elementMatch[2] || "");
    if (!collectionName) {
      return {
        accepted: true,
        command,
        path: normalized,
      };
    }
    const collection = kombiSyncStore.get(collectionName);
    if (command === "delete") {
      collection.delete(String(elementId));
      return null;
    }
    const nextValue = normalizeKombiSyncEntry(collectionName, elementId, requestBody);
    collection.set(nextValue.id, nextValue);
    return deepClone(nextValue);
  }

  const collectionName = getKombiSyncCollectionName(collectionMatch[1]);
  if (!collectionName) {
    return {
      accepted: true,
      command,
      path: normalized,
    };
  }
  const collection = kombiSyncStore.get(collectionName);
  if (command === "delete") {
    collection.clear();
    return null;
  }
  const nextValue = normalizeKombiSyncEntry(collectionName, null, requestBody);
  collection.set(nextValue.id, nextValue);
  return deepClone(nextValue);
}

function resolveHmiSyncBody(normalized) {
  const lower = normalized.toLowerCase();
  if (lower === "/hmisync") {
    return HMISYNC_ROOT_RESOURCES.slice();
  }
  const collectionMatch = /^\/hmisync\/([^/]+)$/i.exec(normalized);
  if (collectionMatch) {
    const collectionName = String(collectionMatch[1] || "");
    const list = hmiSyncStore[collectionName] || [];
    return buildListPage(deepClone(list));
  }
  const elementMatch = /^\/hmisync\/([^/]+)\/([^/]+)$/i.exec(normalized);
  if (elementMatch) {
    const collectionName = String(elementMatch[1] || "");
    const elementId = decodeURIComponent(elementMatch[2] || "");
    const list = hmiSyncStore[collectionName] || [];
    const found = list.find((entry) => String(entry.id) === String(elementId));
    if (found) {
      return deepClone(found);
    }
    return {
      id: elementId || "unknown",
      name: elementId || "unknown",
      uri: normalized,
    };
  }
  return {
    path: normalized,
    available: true,
    mocked: true,
  };
}

function resolveLanguageBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createLanguageModels();
  if (lower === "/language") {
    return ["/changeRequests", "/components", "/system"];
  }
  if (lower === "/language/components") {
    return buildListPage(applySearchFilter(models.components, requestBody));
  }
  if (/^\/language\/components\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return (
      deepClone(models.components.find((entry) => String(entry.id) === String(id))) || {
        id: id || "unknown",
        name: id || "unknown",
        uri: `/language/components/${encodeURIComponent(id || "unknown")}`,
      }
    );
  }
  if (lower === "/language/system") {
    return buildListPage(applySearchFilter(models.systems, requestBody));
  }
  if (/^\/language\/system\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return (
      deepClone(models.systems.find((entry) => String(entry.id) === String(id))) || {
        id: id || "unknown",
        name: id || "unknown",
        uri: `/language/system/${encodeURIComponent(id || "unknown")}`,
      }
    );
  }
  if (lower === "/language/changerequests") {
    return buildListPage(applySearchFilter(models.changeRequests, requestBody));
  }
  if (/^\/language\/changerequests\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return (
      deepClone(models.changeRequests.find((entry) => String(entry.id) === String(id))) || {
        id: id || "unknown",
        name: id || "unknown",
        uri: `/language/changeRequests/${encodeURIComponent(id || "unknown")}`,
      }
    );
  }
  return null;
}

function resolveLanguageMutation(command, normalized, requestBody) {
  const lower = normalized.toLowerCase();
  const payload = requestBody && typeof requestBody === "object" ? deepClone(requestBody) : {};
  if (lower === "/language/changerequests" && command === "insert") {
    const nextId = `change-request-${languageRuntimeState.changeRequests.length + 1}`;
    const currentLanguage = String(payload.newLanguage || languageRuntimeState.currentLanguage || "en_US");
    const currentVoice = String(payload.newVoice || languageRuntimeState.currentVoice || "default");
    languageRuntimeState.currentLanguage = currentLanguage;
    languageRuntimeState.currentVoice = currentVoice;
    const changeRequest = {
      id: nextId,
      name: nextId,
      uri: `/language/changeRequests/${encodeURIComponent(nextId)}`,
      componentType: payload.componentType || "graphicalUserInterface",
      errorInfo: "",
      newLanguage: currentLanguage,
      newVoice: currentVoice,
      state: "successfull",
    };
    languageRuntimeState.changeRequests.unshift(changeRequest);
    languageRuntimeState.changeRequests = languageRuntimeState.changeRequests.slice(0, 32);
    return deepClone(changeRequest);
  }
  if (/^\/language\/changerequests\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    if (command === "delete") {
      languageRuntimeState.changeRequests = languageRuntimeState.changeRequests.filter(
        (entry) => String(entry.id) !== String(id),
      );
      return null;
    }
    const existing =
      languageRuntimeState.changeRequests.find((entry) => String(entry.id) === String(id)) || null;
    if (!existing) {
      return {
        id: id || "unknown",
        name: id || "unknown",
        uri: `/language/changeRequests/${encodeURIComponent(id || "unknown")}`,
        state: "successfull",
      };
    }
    Object.assign(existing, payload);
    if (payload.newLanguage) {
      languageRuntimeState.currentLanguage = String(payload.newLanguage);
    }
    if (payload.newVoice) {
      languageRuntimeState.currentVoice = String(payload.newVoice);
    }
    return deepClone(existing);
  }
  return null;
}

function resolveTextinputBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createTextinputModels();
  if (lower === "/textinput") {
    return ["/inputfields", "/inputlanguages", "/inputproviders", "/status", "/userdictionaries"];
  }
  for (const collectionName of ["inputfields", "inputlanguages", "inputproviders", "status", "userdictionaries"]) {
    if (lower === `/textinput/${collectionName}`) {
      return buildListPage(applySearchFilter(models[collectionName] || [], requestBody));
    }
    if (new RegExp(`^/textinput/${collectionName}/[^/]+$`, "i").test(lower)) {
      const segments = normalized.split("/").filter(Boolean);
      const id = decodeURIComponent(segments[segments.length - 1] || "");
      return (
        deepClone((models[collectionName] || []).find((entry) => String(entry.id) === String(id))) || {
          id: id || "unknown",
          name: id || "unknown",
          uri: `/textinput/${collectionName}/${encodeURIComponent(id || "unknown")}`,
        }
      );
    }
  }
  return null;
}

function resolveTextinputMutation(command, normalized, requestBody) {
  const lower = normalized.toLowerCase();
  const payload = requestBody && typeof requestBody === "object" ? deepClone(requestBody) : {};
  const isDelete = command === "delete";
  if (lower === "/textinput/status" || /^\/textinput\/status\/[^/]+$/i.test(lower)) {
    if (!isDelete && typeof payload.currentStateOfOperation === "string" && payload.currentStateOfOperation.trim()) {
      textinputRuntimeState.currentStateOfOperation = payload.currentStateOfOperation.trim();
    }
    if (isDelete) {
      return null;
    }
    return resolveTextinputBody(normalized, requestBody);
  }
  if (
    /^\/textinput\/(inputfields|inputlanguages|inputproviders|userdictionaries)(\/[^/]+)?$/i.test(lower)
  ) {
    if (isDelete) {
      return null;
    }
    return resolveTextinputBody(normalized, requestBody);
  }
  return null;
}

function resolveGnssBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createGnssModels();
  if (lower === "/gnss") {
    return ["/gnssModules", "/locations", "/svStatusInfos"];
  }
  for (const collectionName of ["gnssModules", "locations", "svStatusInfos"]) {
    if (lower === `/gnss/${collectionName.toLowerCase()}`) {
      return buildListPage(applySearchFilter(models[collectionName] || [], requestBody));
    }
    if (new RegExp(`^/gnss/${collectionName.toLowerCase()}/[^/]+$`, "i").test(lower)) {
      const segments = normalized.split("/").filter(Boolean);
      const id = decodeURIComponent(segments[segments.length - 1] || "");
      return (
        deepClone((models[collectionName] || []).find((entry) => String(entry.id) === String(id))) || {
          id: id || "unknown",
          name: id || "unknown",
          uri: `/gnss/${collectionName}/${encodeURIComponent(id || "unknown")}`,
        }
      );
    }
  }
  return null;
}

function resolveNaviBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createNaviModels();
  if (lower === "/navi") {
    return ["/carpositioninfos", "/locations"];
  }
  for (const collectionName of ["carpositioninfos", "locations"]) {
    if (lower === `/navi/${collectionName}`) {
      return buildListPage(applySearchFilter(models[collectionName] || [], requestBody));
    }
    if (new RegExp(`^/navi/${collectionName}/[^/]+$`, "i").test(lower)) {
      const segments = normalized.split("/").filter(Boolean);
      const id = decodeURIComponent(segments[segments.length - 1] || "");
      return (
        deepClone((models[collectionName] || []).find((entry) => String(entry.id) === String(id))) || {
          id: id || "unknown",
          name: id || "unknown",
          uri: `/navi/${collectionName}/${encodeURIComponent(id || "unknown")}`,
        }
      );
    }
  }
  return null;
}

function resolveSystemBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createSystemModels();
  if (lower === "/system") {
    return buildFixtureServiceRootResources("/system");
  }
  if (lower === "/system/components") {
    return buildListPage(applySearchFilter(models.components, requestBody));
  }
  if (/^\/system\/components\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return (
      deepClone(models.components.find((entry) => String(entry.id) === String(id))) || {
        id: id || "unknown",
        name: id || "unknown",
        uri: `/system/components/${encodeURIComponent(id || "unknown")}`,
      }
    );
  }
  if (lower === "/system/configurations") {
    return buildListPage(applySearchFilter(models.configurations, requestBody));
  }
  if (/^\/system\/configurations\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return (
      deepClone(models.configurations.find((entry) => String(entry.id) === String(id))) || {
        id: id || "unknown",
        name: id || "unknown",
        uri: `/system/configurations/${encodeURIComponent(id || "unknown")}`,
      }
    );
  }
  if (lower === "/system/persistenceentries") {
    return buildListPage(applySearchFilter(models.persistenceentries, requestBody));
  }
  if (/^\/system\/persistenceentries\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return (
      deepClone(models.persistenceentries.find((entry) => String(entry.id) === String(id))) || {
        id: id || "unknown",
        name: id || "unknown",
        uri: `/system/persistenceentries/${encodeURIComponent(id || "unknown")}`,
      }
    );
  }
  if (lower === "/system/resettables") {
    return buildListPage(applySearchFilter(models.resettables, requestBody));
  }
  if (/^\/system\/resettables\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return {
      id: id || "unknown",
      name: id || "unknown",
      uri: `/system/resettables/${encodeURIComponent(id || "unknown")}`,
      componentType: "System",
      state: "AVAILABLE",
    };
  }
  return null;
}

function resolveSystemMutation(command, normalized, requestBody) {
  const lower = normalized.toLowerCase();
  const payload = requestBody && typeof requestBody === "object" ? deepClone(requestBody) : {};
  if (lower === "/system/persistenceentries" && command === "insert") {
    const key = String(payload.key || payload.name || `entry-${systemRuntimeState.persistenceentries.size + 1}`);
    const next = {
      id: key,
      name: String(payload.name || key),
      uri: `/system/persistenceentries/${encodeURIComponent(key)}`,
      isPrivacyRelevant: !!payload.isPrivacyRelevant,
      key,
      maxSize: Number.isFinite(Number(payload.maxSize)) ? Number(payload.maxSize) : 8192,
      personalized: payload.personalized !== undefined ? !!payload.personalized : true,
      valueContainer:
        payload.valueContainer !== undefined ? String(payload.valueContainer) : JSON.stringify(payload.value ?? null),
      version: payload.version !== undefined ? String(payload.version) : "1",
    };
    systemRuntimeState.persistenceentries.set(key, next);
    return deepClone(next);
  }
  if (/^\/system\/persistenceentries\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    if (command === "delete") {
      systemRuntimeState.persistenceentries.delete(String(id));
      return null;
    }
    const existing = systemRuntimeState.persistenceentries.get(String(id)) || {
      id: String(id),
      name: String(id),
      uri: `/system/persistenceentries/${encodeURIComponent(String(id))}`,
      key: String(id),
      valueContainer: "null",
      version: "1",
    };
    const next = {
      ...existing,
      ...payload,
      id: String(id),
      key: payload.key !== undefined ? String(payload.key) : existing.key,
      name: payload.name !== undefined ? String(payload.name) : existing.name,
      uri: `/system/persistenceentries/${encodeURIComponent(String(id))}`,
      valueContainer:
        payload.valueContainer !== undefined
          ? String(payload.valueContainer)
          : existing.valueContainer,
      version: payload.version !== undefined ? String(payload.version) : existing.version,
    };
    systemRuntimeState.persistenceentries.set(String(id), next);
    return deepClone(next);
  }
  return null;
}

function resolveUsermanagementBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createUsermanagementModels();
  if (lower === "/usermanagement") {
    return USERMANAGEMENT_ROOT_RESOURCES.slice();
  }
  if (lower === "/usermanagement/settings") {
    return buildListPage(applySearchFilter(models.settings, requestBody));
  }
  if (/^\/usermanagement\/settings\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return deepClone(models.settings.find((entry) => String(entry.id) === String(id)) || models.settings[0] || null);
  }
  if (lower === "/usermanagement/users") {
    return buildListPage(applySearchFilter(models.users, requestBody));
  }
  if (/^\/usermanagement\/users\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return deepClone(models.users.find((entry) => String(entry.id) === String(id)) || getUsermanagementUserById(id));
  }
  if (lower === "/usermanagement/activities") {
    return buildListPage(applySearchFilter(models.activities, requestBody));
  }
  if (/^\/usermanagement\/activities\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return deepClone(models.activities.find((entry) => String(entry.id) === String(id)) || null);
  }
  if (lower === "/usermanagement/views") {
    return buildListPage(applySearchFilter(models.views, requestBody));
  }
  if (/^\/usermanagement\/views\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return deepClone(models.views.find((entry) => String(entry.id) === String(id)) || null);
  }
  if (lower === "/usermanagement/identityproviders") {
    return buildListPage(applySearchFilter(models.identityProviders, requestBody));
  }
  if (/^\/usermanagement\/identityproviders\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return deepClone(models.identityProviders.find((entry) => String(entry.id) === String(id)) || null);
  }
  return null;
}

function resolveUsermanagementMutation(command, normalized, requestBody) {
  const lower = normalized.toLowerCase();
  const payload = isPlainObject(requestBody) ? deepClone(requestBody) : {};
  ensureUsermanagementRuntimeState();
  if (lower === "/usermanagement/users" && command === "insert") {
    const nextIndex = Number(usermanagementRuntimeState.nextOfflineUserIndex || 1);
    const id = `offline-user-${nextIndex}`;
    const nextUser = {
      id,
      uri: `/usermanagement/users/${encodeURIComponent(id)}`,
      name: payload.name || payload.firstName || `Offline User ${nextIndex}`,
      firstName: payload.firstName || payload.name || `Offline`,
      lastName: payload.lastName || `User ${nextIndex}`,
      dateOfLastSync: formatLocalIsoTimestamp(new Date()),
      dateOfLastUsage: formatLocalIsoTimestamp(new Date()),
      isSecurityModeEnabled: !!payload.isSecurityModeEnabled,
      role: payload.role || "offlineGuestUser",
      iaaUserID: payload.iaaUserID !== undefined ? Number(payload.iaaUserID) : 100 + nextIndex,
      authenticationLevel: payload.authenticationLevel || "vehicleAccess",
      userName: payload.userName || `offline.user.${nextIndex}`,
      tokenStatus: payload.tokenStatus || undefined,
      tokenStatusMIB: payload.tokenStatusMIB || undefined,
      sPinStatus: payload.sPinStatus || undefined,
      slotID: payload.slotID !== undefined ? Number(payload.slotID) : nextIndex + 2,
    };
    usermanagementRuntimeState.users.set(id, nextUser);
    usermanagementRuntimeState.nextOfflineUserIndex = nextIndex + 1;
    notifyRudiSubscriptions("/usermanagement", "/usermanagement");
    return deepClone(nextUser);
  }
  if (/^\/usermanagement\/users\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    if (command === "delete") {
      usermanagementRuntimeState.users.delete(String(id));
      if (String(usermanagementRuntimeState.activeUserId) === String(id)) {
        const fallbackUser = Array.from(usermanagementRuntimeState.users.values())[0];
        usermanagementRuntimeState.activeUserId = fallbackUser ? String(fallbackUser.id) : null;
        usermanagementRuntimeState.identifiedUserId = usermanagementRuntimeState.activeUserId;
      }
      notifyRudiSubscriptions("/usermanagement", "/usermanagement");
      return null;
    }
    const existing = getUsermanagementUserById(id);
    if (!existing) {
      return null;
    }
    const next = {
      ...existing,
      ...payload,
      id: existing.id,
      uri: existing.uri,
    };
    usermanagementRuntimeState.users.set(String(existing.id), next);
    notifyRudiSubscriptions("/usermanagement", "/usermanagement");
    return deepClone(next);
  }
  if (/^\/usermanagement\/settings\/[^/]+$/i.test(lower)) {
    const requestedActiveUser = payload.activeUser;
    if (requestedActiveUser !== undefined && requestedActiveUser !== null) {
      const candidate =
        isPlainObject(requestedActiveUser)
          ? requestedActiveUser.id || requestedActiveUser.uri || requestedActiveUser.name
          : requestedActiveUser;
      setUsermanagementActiveUser(candidate);
    }
    notifyRudiSubscriptions("/usermanagement", "/usermanagement");
    return deepClone(createUsermanagementModels().settings[0] || null);
  }
  if (/^\/usermanagement\/activities\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    const existing = usermanagementRuntimeState.activities.get(String(id));
    if (!existing) {
      return null;
    }
    const next = {
      ...deepClone(existing),
      ...payload,
    };
    const requestedUser =
      payload.user ||
      payload.userLogin ||
      payload.iaaUserID;
    if (requestedUser !== undefined && requestedUser !== null) {
      const candidate =
        isPlainObject(requestedUser)
          ? requestedUser.id || requestedUser.uri || requestedUser.name
          : requestedUser;
      const resolvedUser = getUsermanagementUserById(candidate);
      if (resolvedUser) {
        next.user = resolvedUser;
      }
    }
    if (next.name === "changeUser" && (next.process === "request" || next.process === "confirmed")) {
      const nextUser = next.user || getUsermanagementUserById(next.userLogin || next.iaaUserID);
      if (nextUser) {
        setUsermanagementActiveUser(nextUser.id);
        next.user = nextUser;
        next.process = "executed";
        next.result = "successful";
      }
    } else if (next.process === "request") {
      next.process = "executed";
      next.result = "successful";
    }
    usermanagementRuntimeState.activities.set(String(id), next);
    notifyRudiSubscriptions("/usermanagement", "/usermanagement");
    return deepClone(next);
  }
  if (/^\/usermanagement\/views\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    const existing = usermanagementRuntimeState.views.get(String(id));
    if (!existing) {
      return null;
    }
    const next = {
      ...deepClone(existing),
      ...payload,
      id: existing.id,
      uri: existing.uri,
    };
    usermanagementRuntimeState.views.set(String(id), next);
    notifyRudiSubscriptions("/usermanagement", "/usermanagement");
    return deepClone(next);
  }
  return null;
}

function resolveRadioBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createRadioModels();
  if (lower === "/radio") {
    return RADIO_ROOT_RESOURCES.slice();
  }
  for (const collection of ["tuners", "frequencytuners", "settings", "stations", "favorites", "recents"]) {
    if (lower === `/radio/${collection}`) {
      return buildListPage(applySearchFilter(models[collection], requestBody));
    }
    if (new RegExp(`^/radio/${collection}/[^/]+$`, "i").test(lower)) {
      const segments = normalized.split("/").filter(Boolean);
      const id = decodeURIComponent(segments[segments.length - 1] || "");
      return deepClone(models[collection].find((entry) => String(entry.id) === String(id)) || null);
    }
  }
  return null;
}

function resolveTvBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createTvModels();
  if (lower === "/tv") {
    return TV_ROOT_RESOURCES.slice();
  }
  for (const collection of ["tuners", "settings", "stations", "favorites", "recents"]) {
    if (lower === `/tv/${collection}`) {
      return buildListPage(applySearchFilter(models[collection], requestBody));
    }
    if (new RegExp(`^/tv/${collection}/[^/]+$`, "i").test(lower)) {
      const segments = normalized.split("/").filter(Boolean);
      const id = decodeURIComponent(segments[segments.length - 1] || "");
      return deepClone(models[collection].find((entry) => String(entry.id) === String(id)) || null);
    }
  }
  return null;
}

function resolvePowerBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createPowerModels();
  if (lower === "/power") {
    return POWER_ROOT_RESOURCES.slice();
  }
  const collectionAliases = {
    clamps: "clampstates",
    clampstates: "clampstates",
    displays: "displays",
    mmistates: "mmistates",
    ramblocks: "ramblocks",
    warnings: "warnings",
  };
  for (const [requestCollection, modelCollection] of Object.entries(collectionAliases)) {
    if (lower === `/power/${requestCollection}`) {
      return buildListPage(applySearchFilter(models[modelCollection], requestBody));
    }
    if (new RegExp(`^/power/${requestCollection}/[^/]+$`, "i").test(lower)) {
      const segments = normalized.split("/").filter(Boolean);
      const id = decodeURIComponent(segments[segments.length - 1] || "");
      return deepClone(models[modelCollection].find((entry) => String(entry.id) === String(id)) || null);
    }
  }
  return null;
}

function resolvePowerMutation(command, normalized, requestBody) {
  const lower = normalized.toLowerCase();
  const payload = isPlainObject(requestBody) ? deepClone(requestBody) : {};
  if (command === "delete") {
    return null;
  }
  const collectionAliases = {
    clamps: "clampstates",
    clampstates: "clampstates",
    displays: "displays",
    mmistates: "mmistates",
    ramblocks: "ramblocks",
    warnings: "warnings",
  };
  for (const [requestCollection, modelCollection] of Object.entries(collectionAliases)) {
    const elementMatch = new RegExp(`^/power/${requestCollection}/[^/]+$`, "i");
    if (!elementMatch.test(lower)) {
      continue;
    }
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    const models = createPowerModels();
    const existing = models[modelCollection].find((entry) => String(entry.id) === String(id));
    return deepClone(existing ? { ...existing, ...payload, id: existing.id, uri: existing.uri } : null);
  }
  return null;
}

function resolveDisplayBehaviourBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createDisplayBehaviourModels();
  if (lower === "/displaybehaviour") {
    return DISPLAYBEHAVIOUR_ROOT_RESOURCES.slice();
  }
  if (lower === "/displaybehaviour/displaystates") {
    return buildListPage(applySearchFilter(models.displaystates, requestBody));
  }
  if (/^\/displaybehaviour\/displaystates\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return deepClone(models.displaystates.find((entry) => String(entry.id) === String(id)) || null);
  }
  return null;
}

function resolveDisplayBehaviourMutation(command, normalized, requestBody) {
  const lower = normalized.toLowerCase();
  if (!/^\/displaybehaviour\/displaystates\/[^/]+$/i.test(lower)) {
    return command === "delete" ? null : null;
  }
  const segments = normalized.split("/").filter(Boolean);
  const id = decodeURIComponent(segments[segments.length - 1] || "");
  if (command === "delete") {
    displayBehaviourState.delete(String(id));
    return null;
  }
  const existing =
    displayBehaviourState.get(String(id)) || {
      id: String(id),
      uri: `/displaybehaviour/displaystates/${encodeURIComponent(String(id))}`,
      name: "Display1",
      state: isSimulatedIgnitionOn() ? "ON" : "STANDBY",
      reason: "",
      disableDisplayButton: false,
      cleanDisplayMode: "IDLE",
    };
  const payload = isPlainObject(requestBody) ? deepClone(requestBody) : {};
  const next = {
    ...existing,
    ...payload,
    id: existing.id,
    uri: existing.uri,
  };
  displayBehaviourState.set(String(id), next);
  return deepClone(next);
}

function findCollectionEntryByToken(rows, token) {
  const normalizedToken = String(token || "").trim();
  if (!normalizedToken) {
    return null;
  }
  return (
    rows.find((entry) => String(entry.id) === normalizedToken) ||
    rows.find((entry) => String(entry.name) === normalizedToken) ||
    rows.find((entry) => String(entry.uri) === normalizedToken) ||
    null
  );
}

function resolvePhoneBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createPhoneModels();
  const collectionAliases = {
    calls: "calls",
    devices: "devices",
    groupedrecentcalls: "groupedrecentcalls",
    participants: "participants",
    recentcalls: "recentcalls",
    ringtonepreviews: "ringtonepreviews",
    settings: "settings",
    volumesettings: "volumesettings",
  };
  if (lower === "/phone") {
    return PHONE_ROOT_RESOURCES.slice();
  }
  for (const [requestCollection, modelCollection] of Object.entries(collectionAliases)) {
    if (lower === `/phone/${requestCollection}`) {
      return buildListPage(applySearchFilter(models[modelCollection], requestBody));
    }
    if (new RegExp(`^/phone/${requestCollection}/[^/]+$`, "i").test(lower)) {
      const segments = normalized.split("/").filter(Boolean);
      const id = decodeURIComponent(segments[segments.length - 1] || "");
      return deepClone(findCollectionEntryByToken(models[modelCollection], id));
    }
  }
  return null;
}

function resolvePhoneMutation(command, normalized, requestBody) {
  ensurePhoneRuntimeState();
  const lower = normalized.toLowerCase();
  const payload = isPlainObject(requestBody) ? deepClone(requestBody) : {};
  const collectionStores = {
    calls: phoneRuntimeState.calls,
    devices: phoneRuntimeState.devices,
    groupedrecentcalls: phoneRuntimeState.groupedrecentcalls,
    participants: phoneRuntimeState.participants,
    recentcalls: phoneRuntimeState.recentcalls,
    ringtonepreviews: phoneRuntimeState.ringtonepreviews,
    settings: phoneRuntimeState.settings,
    volumesettings: phoneRuntimeState.volumesettings,
  };

  for (const [collectionName, store] of Object.entries(collectionStores)) {
    if (lower === `/phone/${collectionName}`) {
      if (command === "delete") {
        store.clear();
        return null;
      }
      if (command === "insert") {
        const id =
          payload.id !== undefined && payload.id !== null && String(payload.id).trim()
            ? String(payload.id).trim()
            : collectionName === "participants"
              ? `phone-participant-${phoneRuntimeState.nextParticipantIndex++}`
              : `${collectionName}-${store.size + 1}`;
        let next;
        if (collectionName === "participants") {
          next = createPhoneParticipantObject(id, payload, null);
        } else {
          next = {
            id,
            uri: `/phone/${collectionName}/${encodeURIComponent(id)}`,
            name: payload.name || id,
            ...payload,
          };
        }
        store.set(id, next);
        return deepClone(next);
      }
      return null;
    }

    if (!new RegExp(`^/phone/${collectionName}/[^/]+$`, "i").test(lower)) {
      continue;
    }
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    if (!id) {
      return null;
    }
    if (command === "delete") {
      store.delete(id);
      return null;
    }
    const existing = store.get(id) || null;
    let next;
    if (collectionName === "devices") {
      next = createPhoneDeviceObject(id, { ...(existing || {}), ...payload });
      for (const [previewId, preview] of phoneRuntimeState.ringtonepreviews.entries()) {
        if (preview && preview.phoneDevice && String(preview.phoneDevice.id) === String(id)) {
          phoneRuntimeState.ringtonepreviews.set(previewId, {
            ...preview,
            phoneDevice: deepClone(next),
          });
        }
      }
    } else if (collectionName === "participants") {
      next = createPhoneParticipantObject(id, payload, existing);
    } else if (collectionName === "settings") {
      next = createPhoneSettingObject(id, { ...(existing || {}), ...payload });
    } else if (collectionName === "volumesettings") {
      next = createPhoneVolumesettingObject(id, { ...(existing || {}), ...payload });
    } else if (collectionName === "ringtonepreviews") {
      next = createPhoneRingtonepreviewObject(
        id,
        payload.phoneDevice && isPlainObject(payload.phoneDevice)
          ? payload.phoneDevice
          : existing && existing.phoneDevice
            ? existing.phoneDevice
            : Array.from(phoneRuntimeState.devices.values())[0] || null,
        { ...(existing || {}), ...payload },
      );
    } else {
      next = {
        ...(existing || {
          id,
          uri: `/phone/${collectionName}/${encodeURIComponent(id)}`,
          name: id,
        }),
        ...payload,
        id,
        uri: `/phone/${collectionName}/${encodeURIComponent(id)}`,
      };
    }
    store.set(id, next);
    return deepClone(next);
  }

  return null;
}

function resolveSmartphoneintegrationBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createSmartphoneintegrationModels();
  const collectionAliases = {
    applicationstates: "applicationStates",
    bluetooth: "bluetooth",
    callstate: "callState",
    devices: "devices",
    displayconfiguration: "displayconfiguration",
    hardkeyevents: "hardkeyEvents",
    licence: "licence",
    player: "player",
    remotecontrol: "remoteControl",
    resourcestates: "resourceStates",
    telephonystate: "telephonyState",
    touchevents: "touchEvents",
    trackdata: "trackData",
    videostream: "videoStream",
  };
  if (lower === "/smartphoneintegration") {
    return SMARTPHONEINTEGRATION_ROOT_RESOURCES.slice();
  }
  for (const [requestCollection, modelCollection] of Object.entries(collectionAliases)) {
    if (lower === `/smartphoneintegration/${requestCollection}`) {
      return buildListPage(applySearchFilter(models[modelCollection], requestBody));
    }
    if (new RegExp(`^/smartphoneintegration/${requestCollection}/[^/]+$`, "i").test(lower)) {
      const segments = normalized.split("/").filter(Boolean);
      const id = decodeURIComponent(segments[segments.length - 1] || "");
      return deepClone(findCollectionEntryByToken(models[modelCollection], id));
    }
  }
  return null;
}

function resolveSmartphoneintegrationMutation(command, normalized, requestBody) {
  ensureSmartphoneintegrationRuntimeState();
  const lower = normalized.toLowerCase();
  const payload = isPlainObject(requestBody) ? deepClone(requestBody) : {};
  const collectionStores = {
    applicationstates: smartphoneintegrationRuntimeState.applicationStates,
    bluetooth: smartphoneintegrationRuntimeState.bluetooth,
    callstate: smartphoneintegrationRuntimeState.callState,
    devices: smartphoneintegrationRuntimeState.devices,
    displayconfiguration: smartphoneintegrationRuntimeState.displayconfiguration,
    hardkeyevents: smartphoneintegrationRuntimeState.hardkeyEvents,
    licence: smartphoneintegrationRuntimeState.licence,
    player: smartphoneintegrationRuntimeState.player,
    remotecontrol: smartphoneintegrationRuntimeState.remoteControl,
    resourcestates: smartphoneintegrationRuntimeState.resourceStates,
    telephonystate: smartphoneintegrationRuntimeState.telephonyState,
    touchevents: smartphoneintegrationRuntimeState.touchEvents,
    trackdata: smartphoneintegrationRuntimeState.trackData,
    videostream: smartphoneintegrationRuntimeState.videoStream,
  };

  for (const [collectionName, store] of Object.entries(collectionStores)) {
    if (lower === `/smartphoneintegration/${collectionName}`) {
      if (command === "delete") {
        store.clear();
        return null;
      }
      if (command === "insert") {
        const id =
          payload.id !== undefined && payload.id !== null && String(payload.id).trim()
            ? String(payload.id).trim()
            : `spi-${collectionName}-${store.size + 1}`;
        const next = {
          id,
          uri: `/smartphoneintegration/${collectionName}/${encodeURIComponent(id)}`,
          name: payload.name || id,
          ...payload,
        };
        store.set(id, next);
        return deepClone(next);
      }
      return null;
    }

    if (!new RegExp(`^/smartphoneintegration/${collectionName}/[^/]+$`, "i").test(lower)) {
      continue;
    }
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    if (!id) {
      return null;
    }
    if (command === "delete") {
      store.delete(id);
      return null;
    }
    const existing = store.get(id) || null;
    let next = {
      ...(existing || {
        id,
        uri: `/smartphoneintegration/${collectionName}/${encodeURIComponent(id)}`,
        name: id,
      }),
      ...payload,
      id,
      uri: `/smartphoneintegration/${collectionName}/${encodeURIComponent(id)}`,
    };
    if (collectionName === "devices") {
      next = createSmartphoneintegrationDeviceObject(id, { ...(existing || {}), ...payload });
      if (next.activeTechnology && String(next.activeTechnology) !== "None") {
        next.connectionState = "active";
      } else if (!payload.connectionState) {
        next.connectionState = "discovered";
      }
    } else if (collectionName === "licence") {
      next = createSmartphoneintegrationLicenceObject(id, { ...(existing || {}), ...payload });
    } else if (collectionName === "resourcestates") {
      next = createSmartphoneintegrationResourceStateObject(
        id,
        payload.type || (existing && existing.type) || "screen",
        { ...(existing || {}), ...payload },
      );
    } else if (collectionName === "applicationstates") {
      next = createSmartphoneintegrationApplicationStateObject(
        id,
        payload.type || (existing && existing.type) || "navigation",
        { ...(existing || {}), ...payload },
      );
    } else if (collectionName === "trackdata") {
      next = {
        ...(existing || {}),
        id,
        uri: `/smartphoneintegration/trackData/${encodeURIComponent(id)}`,
        name: payload.name || (existing && existing.name) || "Track",
        ...createSmartphoneintegrationTrackObject(existing || {}),
        ...payload,
      };
    }
    store.set(id, next);
    return deepClone(next);
  }

  return null;
}

function resolveVehicleinformationBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createVehicleinformationModels();
  const collectionAliases = {
    environments: "environments",
    maintainances: "maintainances",
    switchindications: "switchIndications",
    textindication: "textIndication",
    valueindications: "valueIndications",
    vehicledata: "vehicleData",
    vehiclestates: "vehicleStates",
  };
  if (lower === "/vehicleinformation") {
    return VEHICLEINFORMATION_ROOT_RESOURCES.slice();
  }
  for (const [requestCollection, modelCollection] of Object.entries(collectionAliases)) {
    if (lower === `/vehicleinformation/${requestCollection}`) {
      return buildListPage(applySearchFilter(models[modelCollection], requestBody));
    }
    if (new RegExp(`^/vehicleinformation/${requestCollection}/[^/]+$`, "i").test(lower)) {
      const segments = normalized.split("/").filter(Boolean);
      const id = decodeURIComponent(segments[segments.length - 1] || "");
      return deepClone(findCollectionEntryByToken(models[modelCollection], id));
    }
  }
  return null;
}

function resolveVehicleinformationMutation(command, normalized, requestBody) {
  ensureVehicleinformationRuntimeState();
  const lower = normalized.toLowerCase();
  const payload = isPlainObject(requestBody) ? deepClone(requestBody) : {};
  const collectionStores = {
    environments: vehicleinformationRuntimeState.environments,
    maintainances: vehicleinformationRuntimeState.maintainances,
    switchindications: vehicleinformationRuntimeState.switchIndications,
    textindication: vehicleinformationRuntimeState.textIndication,
    valueindications: vehicleinformationRuntimeState.valueIndications,
    vehicledata: vehicleinformationRuntimeState.vehicleData,
    vehiclestates: vehicleinformationRuntimeState.vehicleStates,
  };

  for (const [collectionName, store] of Object.entries(collectionStores)) {
    if (lower === `/vehicleinformation/${collectionName}`) {
      if (command === "delete") {
        store.clear();
        return null;
      }
      if (command === "insert") {
        const id =
          payload.id !== undefined && payload.id !== null && String(payload.id).trim()
            ? String(payload.id).trim()
            : `vehicle-${collectionName}-${store.size + 1}`;
        const next = {
          id,
          uri: `/vehicleinformation/${collectionName}/${encodeURIComponent(id)}`,
          name: payload.name || id,
          ...payload,
        };
        store.set(id, next);
        return deepClone(next);
      }
      return null;
    }

    if (!new RegExp(`^/vehicleinformation/${collectionName}/[^/]+$`, "i").test(lower)) {
      continue;
    }
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    if (!id) {
      return null;
    }
    if (command === "delete") {
      store.delete(id);
      return null;
    }
    const existing = store.get(id) || null;
    const next = {
      ...(existing || {
        id,
        uri: `/vehicleinformation/${collectionName}/${encodeURIComponent(id)}`,
        name: id,
      }),
      ...payload,
      id,
      uri: `/vehicleinformation/${collectionName}/${encodeURIComponent(id)}`,
    };
    store.set(id, next);
    return deepClone(next);
  }

  return null;
}

function resolveEntertainmentcontrolMutation(command, normalized, requestBody) {
  const lower = normalized.toLowerCase();
  const payload = isPlainObject(requestBody) ? deepClone(requestBody) : {};
  if (command === "delete") {
    return null;
  }
  if (/^\/entertainmentcontrol\/sources\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    setEntertainmentSelectionBySource(id);
    return deepClone(createEntertainmentModels().sources.find((entry) => String(entry.id) === String(id)) || null);
  }
  if (/^\/entertainmentcontrol\/groups\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    const candidateSource =
      payload.activeSource && isPlainObject(payload.activeSource)
        ? payload.activeSource.id || payload.activeSource.uri || payload.activeSource.name
        : payload.activeSource;
    if (candidateSource) {
      setEntertainmentSelectionBySource(candidateSource);
    } else {
      setEntertainmentActiveGroup(id);
    }
    return deepClone(createEntertainmentModels().groups.find((entry) => String(entry.id) === String(id)) || null);
  }
  if (/^\/entertainmentcontrol\/targets\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    const candidateGroup =
      payload.activeGroup && isPlainObject(payload.activeGroup)
        ? payload.activeGroup.id || payload.activeGroup.uri || payload.activeGroup.name
        : payload.activeGroup;
    if (candidateGroup) {
      setEntertainmentActiveGroup(candidateGroup);
    }
    return deepClone(createEntertainmentModels().targets.find((entry) => String(entry.id) === String(id)) || null);
  }
  if (/^\/entertainmentcontrol\/activemediagroups\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    const models = createEntertainmentModels();
    return deepClone(models.activeMediaGroups.find((entry) => String(entry.id) === String(id)) || null);
  }
  return null;
}

function resolveResourceBody(fullPath, requestBody = null) {
  const normalized = normalizePath(fullPath);
  const lower = normalized.toLowerCase();

  if (lower === "/phone" || lower.startsWith("/phone/")) {
    const resolved = resolvePhoneBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/smartphoneintegration" || lower.startsWith("/smartphoneintegration/")) {
    const resolved = resolveSmartphoneintegrationBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/vehicleinformation" || lower.startsWith("/vehicleinformation/")) {
    const resolved = resolveVehicleinformationBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/maintenance" || lower.startsWith("/maintenance/")) {
    const resolved = resolveMaintenanceBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/language" || lower.startsWith("/language/")) {
    const resolved = resolveLanguageBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/textinput" || lower.startsWith("/textinput/")) {
    const resolved = resolveTextinputBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/system" || lower.startsWith("/system/")) {
    const resolved = resolveSystemBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/gnss" || lower.startsWith("/gnss/")) {
    const resolved = resolveGnssBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/navi" || lower.startsWith("/navi/")) {
    const resolved = resolveNaviBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/webappmanagement" || lower.startsWith("/webappmanagement/")) {
    const resolved = resolveWebappmanagementBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/radio" || lower.startsWith("/radio/")) {
    const resolved = resolveRadioBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/power" || lower.startsWith("/power/")) {
    const resolved = resolvePowerBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/sound" || lower.startsWith("/sound/")) {
    return resolveSoundBody(normalized, requestBody);
  }
  if (lower === "/tv" || lower.startsWith("/tv/")) {
    const resolved = resolveTvBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/usermanagement" || lower.startsWith("/usermanagement/")) {
    const resolved = resolveUsermanagementBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/displaybehaviour" || lower.startsWith("/displaybehaviour/")) {
    const resolved = resolveDisplayBehaviourBody(normalized, requestBody);
    if (resolved !== null) {
      return resolved;
    }
  }
  if (lower === "/perceivablecontext" || lower.startsWith("/perceivablecontext/")) {
    return resolvePerceivableContextBody(normalized, requestBody);
  }
  if (lower === "/kombisync" || lower.startsWith("/kombisync/")) {
    return resolveKombiSyncBody(normalized);
  }
  if (lower === "/hmisync" || lower.startsWith("/hmisync/")) {
    return resolveHmiSyncBody(normalized);
  }
  if (lower === "/media" || lower.startsWith("/media/")) {
    return resolveMediaBody(normalized);
  }
  if (lower === "/entertainmentcontrol" || lower.startsWith("/entertainmentcontrol/")) {
    return resolveEntertainmentcontrolBody(normalized, requestBody);
  }
  if (lower === "/mcpdisplaymanager" || lower.startsWith("/mcpdisplaymanager/")) {
    return resolveDisplayManagerBody(normalized);
  }
  if (lower === "/mcpinputmanager" || lower.startsWith("/mcpinputmanager/")) {
    return resolveInputRegionsBody(normalized);
  }
  if (lower === "/mcppopupmanager" || lower.startsWith("/mcppopupmanager/")) {
    return resolvePopupsBody(normalized, requestBody, "retrieve");
  }
  if (normalized.startsWith("/MCP_Displaymanager")) {
    return resolveDisplayManagerBody(normalized);
  }
  if (normalized.startsWith("/MCP_InputRegions")) {
    return resolveInputRegionsBody(normalized);
  }
  if (normalized.startsWith("/MCP_Popups")) {
    return resolvePopupsBody(normalized, requestBody, "retrieve");
  }
  const genericFixtureCollection = resolveGenericFixtureCollectionBody(normalized, requestBody);
  if (genericFixtureCollection !== null) {
    return genericFixtureCollection;
  }
  const fixtureRootResources = buildFixtureServiceRootResources(normalized);
  if (fixtureRootResources.length > 0) {
    return fixtureRootResources;
  }
  const rootSegments = normalized.split("/").filter(Boolean);
  if (
    rootSegments.length === 1 &&
    normalized !== "/registry" &&
    (knownServiceEntries.has(normalized) || knownServiceEntries.has(canonicalizeServicePath(normalized)))
  ) {
    return [];
  }
  if (Object.prototype.hasOwnProperty.call(fixtureResources, normalized)) {
    const fixtureValue = fixtureResources[normalized];
    if (Array.isArray(fixtureValue)) {
      const normalizedEntries = fixtureValue.map((entry, index) =>
        normalizeFixtureCollectionEntry(normalized, entry, index),
      );
      return buildListPage(applySearchFilter(normalizedEntries, requestBody));
    }
    return deepClone(fixtureValue);
  }
  return {
    path: normalized,
    available: true,
    mocked: true,
  };
}

function createMcpLayerList() {
  return MCP_LAYER_DEFINITIONS.map((entry) => ({
    id: Number(entry.id),
    name: String(entry.name || ""),
    active: true,
    zpos: Number(entry.id),
  }));
}

function createMcpDisplayableList() {
  return MCP_DISPLAYABLE_DEFINITIONS.map((entry) => ({
    id: Number(entry.id),
    name: String(entry.name || ""),
    type: 0,
    is_active: true,
    is_visible: true,
    layers: [],
  }));
}

function createMcpDisplayList() {
  return MCP_DISPLAY_DEFINITIONS.map((entry) => deepClone(entry));
}

function createLayerConfigForDisplay(displayName) {
  return {
    displayName,
    infoForAllLayers: createMcpLayerList(),
  };
}

function createAllLayerConfigs() {
  return MCP_DISPLAY_DEFINITIONS.map((display) => ({
    layersForDisplay: {
      display: deepClone(display),
      layers: createLayerConfigForDisplay(display.name),
    },
  }));
}

function getDefaultInputHmiForDisplay(displayName) {
  return (
    MCP_INPUT_DEFAULT_HMI_BY_DISPLAY[String(displayName || "").trim().toLowerCase()] ||
    "HMI_ID_BROWSER_DRIVER"
  );
}

function createDefaultInputRegion(displayName, hmiName = null) {
  return {
    hmiName: hmiName || getDefaultInputHmiForDisplay(displayName),
    layer: "Layer_Browser",
    bounds: {
      pointMin: { x: 0, y: 0 },
      width: 1920,
      height: 720,
    },
    exclusive: false,
    keepFocus: false,
    notifyOutside: false,
    translateInput: false,
    regionID: 1,
    dropEvent: false,
  };
}

function createDefaultHapticRegion(displayName, hmiName = null) {
  return {
    hmiName: hmiName || getDefaultInputHmiForDisplay(displayName),
    layer: "Layer_Browser",
    bounds: {
      pointMin: { x: 0, y: 0 },
      width: 1920,
      height: 720,
    },
    hapticFeedback: 0,
    hapticRegion: 0,
  };
}

function getMcpInputStateKey(displayName, hmiName = null) {
  const displayKey = String(displayName || "Driver_Display").trim() || "Driver_Display";
  const hmiKey = hmiName ? String(hmiName).trim() : "*";
  return `${displayKey}::${hmiKey}`;
}

function getMcpInputRegionState(displayName, hmiName = null) {
  const stateKey = getMcpInputStateKey(displayName, hmiName);
  if (!mcpInputRegionState.has(stateKey)) {
    const resolvedHmiName = hmiName || getDefaultInputHmiForDisplay(displayName);
    mcpInputRegionState.set(stateKey, {
      regionInfoSorted: [createDefaultInputRegion(displayName, resolvedHmiName)],
      hapticInfoSorted: [createDefaultHapticRegion(displayName, resolvedHmiName)],
    });
  }
  return mcpInputRegionState.get(stateKey);
}

function resolveDisplayManagerBody(normalized) {
  const segments = normalized.split("/").filter(Boolean);
  if (segments.length === 0) {
    return MCP_DISPLAY_ROOT_RESOURCES.slice();
  }

  const root = String(segments[0] || "").toLowerCase();
  if (root !== "mcpdisplaymanager" && root !== "mcp_displaymanager") {
    return {
      path: normalized,
      available: true,
      mocked: true,
    };
  }

  let resourceIndex = 1;
  if (segments.length > 1) {
    const nestedRoot = String(segments[1] || "").toLowerCase();
    if (
      nestedRoot === "mcpdisplaymanager" ||
      nestedRoot === "mcp_displaymanager" ||
      nestedRoot === "displaymanager"
    ) {
      resourceIndex = 2;
    }
  }

  if (resourceIndex >= segments.length) {
    return MCP_DISPLAY_ROOT_RESOURCES.slice();
  }

  const collection = String(segments[resourceIndex] || "").toLowerCase();
  const elementToken =
    resourceIndex + 1 < segments.length
      ? decodeURIComponent(segments[resourceIndex + 1] || "")
      : null;

  if (collection === "displays") {
    const allDisplays = createMcpDisplayList();
    if (!elementToken) {
      return {
        infoForAllDisplays: allDisplays,
      };
    }
    const found = MCP_DISPLAY_LOOKUP.get(String(elementToken).toLowerCase());
    if (found) {
      return deepClone(found);
    }
    return {
      ...deepClone(MCP_DISPLAY_DEFINITIONS[0]),
      name: elementToken || "Driver_Display",
    };
  }

  if (collection === "displayables") {
    const allDisplayables = createMcpDisplayableList();
    if (!elementToken) {
      return {
        infoForAllDisplayables: allDisplayables,
      };
    }
    const found = MCP_DISPLAYABLE_LOOKUP.get(String(elementToken).toLowerCase());
    if (found) {
      return {
        ...deepClone(found),
        type: 0,
        is_active: true,
        is_visible: true,
        layers: [],
      };
    }
    return {
      id: Number.isFinite(Number(elementToken)) ? Number(elementToken) : 9999,
      name: elementToken || "Displayable_Browser_Driver",
      type: 0,
      is_active: true,
      is_visible: true,
      layers: [],
    };
  }

  if (collection === "layerconfig") {
    if (!elementToken) {
      return createAllLayerConfigs();
    }
    return createLayerConfigForDisplay(elementToken);
  }

  if (collection === "annotations") {
    return {};
  }
  if (collection === "config") {
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
  if (
    lower === "/mcpinputmanager" ||
    lower === "/mcp_inputregions" ||
    lower === "/mcpinputregions" ||
    lower === "/mcp_input_regions"
  ) {
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
  const segments = normalized.split("/").filter(Boolean);
  const rootToken = String(segments[0] || "").toLowerCase();
  if (
    rootToken === "mcpinputmanager" ||
    rootToken === "mcp_inputregions" ||
    rootToken === "mcpinputregions" ||
    rootToken === "mcp_input_regions"
  ) {
    const displayName = segments.length > 1 ? decodeURIComponent(segments[1] || "Driver_Display") : "Driver_Display";
    const hmiName = segments.length > 2 ? decodeURIComponent(segments[2] || "") : null;
    return deepClone(getMcpInputRegionState(displayName, hmiName));
  }
  return {
    path: normalized,
    accepted: true,
    mocked: true,
  };
}

function resolveInputRegionsMutation(command, normalized, requestBody) {
  const lower = normalized.toLowerCase();
  if (
    !lower.startsWith("/mcpinputmanager") &&
    !lower.startsWith("/mcpinputregions") &&
    !lower.startsWith("/mcp_inputregions") &&
    !lower.startsWith("/mcp_input_regions")
  ) {
    return null;
  }
  if (command === "delete" && /\/keyhighlightings$/.test(lower)) {
    return null;
  }
  if (/\/[^/]+\/(power|proximity|shutter|hapticfeedback)$/.test(lower)) {
    return command === "delete" ? null : deepClone(requestBody);
  }
  const segments = normalized.split("/").filter(Boolean);
  const displayName = segments.length > 1 ? decodeURIComponent(segments[1] || "Driver_Display") : "Driver_Display";
  const hmiName = segments.length > 2 ? decodeURIComponent(segments[2] || "") : null;
  const stateKey = getMcpInputStateKey(displayName, hmiName);
  if (command === "delete") {
    mcpInputRegionState.delete(stateKey);
    return null;
  }
  const nextState = getMcpInputRegionState(displayName, hmiName);
  if (requestBody && typeof requestBody === "object" && !Array.isArray(requestBody)) {
    if (Array.isArray(requestBody.regionInfoSorted)) {
      nextState.regionInfoSorted = deepClone(requestBody.regionInfoSorted);
    }
    if (Array.isArray(requestBody.hapticInfoSorted)) {
      nextState.hapticInfoSorted = deepClone(requestBody.hapticInfoSorted);
    }
  }
  mcpInputRegionState.set(stateKey, nextState);
  return deepClone(nextState);
}

const POPUP_DEFAULT_NAMES = Object.freeze([
  "MCP_RESET_ALL_POPUPS_FOR_HMI",
  "alle_Notifications",
  "PHONE_POPUP_AUDIO",
  "TOAST_SETUP_ELEMENT_UNAVAILABLE_UNKNOWN_REASON",
]);
const popupStateByDisplay = new Map();

function createPopupState(displayName, popupName, overrides = {}) {
  const cleanDisplayName = String(displayName || "Driver_Display").trim() || "Driver_Display";
  const cleanPopupName = String(popupName || "POPUP").trim() || "POPUP";
  const upperName = cleanPopupName.toUpperCase();
  const slot = /TOAST/.test(upperName)
    ? "TOAST"
    : /NOTIFICATION/.test(upperName)
      ? "NOTIFICATION"
      : /FULLSCREEN/.test(upperName)
        ? "FULLSCREEN"
        : "DIALOG";
  return {
    name: cleanPopupName,
    popupLayerLogical: `Layer_Popup_${cleanDisplayName}`,
    priorityInlayer: 0,
    popupLayerCompositing: "BROWSER",
    slot,
    isFullscreen: slot === "FULLSCREEN",
    requested: false,
    suppressed: false,
    active: false,
    visible: false,
    preventAnimation: false,
    requestData: "",
    wakeupFromOnNoDisplay: false,
    wakeupFromStandby: false,
    wakeupFromStandbyRestricted: false,
    ...deepClone(overrides),
  };
}

function getPopupDisplayState(displayName) {
  const cleanDisplayName = String(displayName || "Driver_Display").trim() || "Driver_Display";
  if (!popupStateByDisplay.has(cleanDisplayName)) {
    const initialState = new Map();
    for (const popupName of POPUP_DEFAULT_NAMES) {
      initialState.set(popupName, createPopupState(cleanDisplayName, popupName));
    }
    popupStateByDisplay.set(cleanDisplayName, initialState);
  }
  return popupStateByDisplay.get(cleanDisplayName);
}

function listPopupStates(displayName, requestBody = null) {
  const entries = Array.from(getPopupDisplayState(displayName).values()).map((entry) => deepClone(entry));
  return applySearchFilter(entries, requestBody);
}

function getPopupState(displayName, popupName) {
  const state = getPopupDisplayState(displayName);
  const cleanPopupName = String(popupName || "POPUP").trim() || "POPUP";
  if (!state.has(cleanPopupName)) {
    state.set(cleanPopupName, createPopupState(displayName, cleanPopupName));
  }
  return state.get(cleanPopupName);
}

function updatePopupState(displayName, popupName, requestBody = null) {
  const existing = getPopupState(displayName, popupName);
  const payload = requestBody && typeof requestBody === "object" && !Array.isArray(requestBody) ? requestBody : {};
  const next = {
    ...deepClone(existing),
    ...deepClone(payload),
    name:
      payload.name !== undefined && payload.name !== null && String(payload.name).trim()
        ? String(payload.name)
        : existing.name,
    requestData:
      payload.requestData !== undefined && payload.requestData !== null
        ? String(payload.requestData)
        : existing.requestData,
  };
  if (payload.requested !== undefined && payload.visible === undefined) {
    next.visible = Boolean(payload.requested);
  }
  if (payload.requested !== undefined && payload.active === undefined) {
    next.active = Boolean(payload.requested);
  }
  getPopupDisplayState(displayName).set(String(next.name), next);
  return deepClone(next);
}

function resolvePopupsBody(normalized, requestBody = null, command = "retrieve") {
  const segments = normalized.split("/").filter(Boolean);
  const rootSegment = String(segments[0] || "").toLowerCase();
  const isPopupRoot = rootSegment === "mcppopupmanager" || rootSegment === "mcp_popups";
  if (!isPopupRoot) {
    return {
      path: normalized,
      available: true,
      mocked: true,
    };
  }

  let resourceIndex = 1;
  if (segments.length > 1) {
    const nestedRoot = String(segments[1] || "").toLowerCase();
    if (nestedRoot === "mcppopupmanager" || nestedRoot === "mcp_popups") {
      resourceIndex = 2;
    }
  }

  if (resourceIndex >= segments.length) {
    return MCP_DISPLAY_RESOURCE_PATHS.slice();
  }

  const normalizedCommand = String(command || "retrieve").toLowerCase();
  const displayName =
    resourceIndex < segments.length ? decodeURIComponent(segments[resourceIndex] || "Driver_Display") : "Driver_Display";

  // "/<service>/<display>" is a popup list endpoint and must return an array.
  if (segments.length === resourceIndex + 1) {
    if (normalizedCommand === "delete") {
      getPopupDisplayState(displayName).clear();
      return null;
    }
    return listPopupStates(displayName, requestBody);
  }

  const popupId = decodeURIComponent(segments[segments.length - 1] || "POPUP");
  if (segments.length >= resourceIndex + 2) {
    if (normalizedCommand === "delete") {
      getPopupDisplayState(displayName).delete(popupId);
      return null;
    }
    if (normalizedCommand === "update" || normalizedCommand === "insert") {
      return updatePopupState(displayName, popupId, requestBody);
    }
    return deepClone(getPopupState(displayName, popupId));
  }
  return [];
}

function resolveEntertainmentcontrolBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const { sources, groups, targets, activeMediaGroups } = createMediaModels();
  if (lower === "/entertainmentcontrol") {
    return ENTERTAINMENTCONTROL_ROOT_RESOURCES.slice();
  }
  if (lower === "/entertainmentcontrol/sources") {
    return buildListPage(applySearchFilter(sources, requestBody));
  }
  if (/^\/entertainmentcontrol\/sources\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    const sourceMatch = sources.find((entry) => String(entry.id) === String(id));
    if (sourceMatch) {
      return deepClone(sourceMatch);
    }
    return {
      id: id || "unknown",
      name: id || "unknown",
      uri: `/entertainmentcontrol/sources/${encodeURIComponent(id || "unknown")}`,
      activationState: "INACTIVE",
      sourceState: "EMPTY",
      relatedGroupType: "MEDIA",
      relatedTargetType: "MAIN",
      type: "USB",
      mediaType: "MASS_STORAGE_DEVICE",
    };
  }
  if (lower === "/entertainmentcontrol/activemediagroups") {
    return buildListPage(applySearchFilter(activeMediaGroups, requestBody));
  }
  if (/^\/entertainmentcontrol\/activemediagroups\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || activeMediaGroups[0].id);
    const activeMediaGroup = activeMediaGroups.find((entry) => String(entry.id) === String(id)) || activeMediaGroups[0];
    return {
      ...activeMediaGroup,
      id,
      uri: `/entertainmentcontrol/activemediagroups/${encodeURIComponent(id)}`,
    };
  }
  if (lower === "/entertainmentcontrol/groups") {
    return buildListPage(applySearchFilter(groups, requestBody));
  }
  if (/^\/entertainmentcontrol\/groups\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || groups[0].id);
    const group = groups.find((entry) => String(entry.id) === String(id)) || groups[0];
    return {
      ...group,
      id,
      uri: `/entertainmentcontrol/groups/${encodeURIComponent(id)}`,
    };
  }
  if (lower === "/entertainmentcontrol/targets") {
    return buildListPage(applySearchFilter(targets, requestBody));
  }
  if (/^\/entertainmentcontrol\/targets\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || targets[0].id);
    const target = targets.find((entry) => String(entry.id) === String(id)) || targets[0];
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

function resolveWebappmanagementBody(normalized, requestBody = null) {
  const lower = normalized.toLowerCase();
  const models = createWebappmanagementModels();
  if (lower === "/webappmanagement") {
    return WEBAPPMANAGEMENT_ROOT_RESOURCES.slice();
  }

  const collections = [
    ["appresources", models.appresources],
    ["apps", models.apps],
    ["capabilities", models.capabilities],
    ["deletelocks", models.deletelocks],
    ["entrypoints", models.entrypoints],
    ["events", models.events],
    ["icons", models.icons],
    ["labels", models.labels],
    ["services", models.services],
    ["tempdatasets", models.tempdatasets],
    ["usages", models.usages],
  ];

  for (const [resourceName, entries] of collections) {
    const collectionPath = `/webappmanagement/${resourceName}`;
    const elementPattern = new RegExp(`^${collectionPath.replace(/\//g, "\\/")}\\/[^/]+$`, "i");
    if (lower === collectionPath) {
      return buildListPage(applySearchFilter(entries, requestBody));
    }
    if (elementPattern.test(lower)) {
      const segments = normalized.split("/").filter(Boolean);
      const id = decodeURIComponent(segments[segments.length - 1] || "");
      return deepClone(entries.find((entry) => String(entry.id) === String(id)) || null);
    }
  }

  return null;
}

function resolveMediaBody(normalized) {
  const lower = normalized.toLowerCase();
  const { browser, browserEntries, player, playerTime } = createMediaModels();
  const playerUpdateHandleList = listSerializedPlayerUpdateHandles();
  ensureMediaRuntimeState();
  const childlockList = Array.from(mediaRuntimeState.childlocks.values()).map((entry) => deepClone(entry));
  const childlockLevelList = Array.from(mediaRuntimeState.childlocklevels.values()).map((entry) => deepClone(entry));
  const displaysettingList = Array.from(mediaRuntimeState.displaysettings.values()).map((entry) => deepClone(entry));

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
  if (lower === "/media/childlocks") {
    return buildListPage(childlockList);
  }
  if (/^\/media\/childlocks\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return deepClone(mediaRuntimeState.childlocks.get(String(id)) || null);
  }
  if (lower === "/media/childlocklevels") {
    return buildListPage(childlockLevelList);
  }
  if (/^\/media\/childlocklevels\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return (
      deepClone(mediaRuntimeState.childlocklevels.get(String(id))) ||
      deepClone(childlockLevelList[0] || null)
    );
  }
  if (lower === "/media/displaysettings") {
    return buildListPage(displaysettingList);
  }
  if (/^\/media\/displaysettings\/[^/]+$/i.test(lower)) {
    const segments = normalized.split("/").filter(Boolean);
    const id = decodeURIComponent(segments[segments.length - 1] || "");
    return deepClone(mediaRuntimeState.displaysettings.get(String(id)) || null);
  }
  if (
    lower === "/media/searchinstances" ||
    lower === "/media/streamingupdatehandles" ||
    lower === "/media/aspectratios" ||
    lower === "/media/audiostreams" ||
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
    const sourceSegments = normalizedPath.split("/").filter(Boolean);
    const requestedSourceId =
      sourceSegments.length > 0 ? decodeURIComponent(sourceSegments[sourceSegments.length - 1] || "") : null;
    const shouldControlLocalMedia = MEDIA_SOURCE_BASE_DEFINITIONS.some(
      (entry) => String(entry.id) === String(requestedSourceId),
    );
    if (requestedSourceId) {
      setEntertainmentSelectionBySource(requestedSourceId);
    }

    const playerUpdateHandleId =
      requestBody && requestBody.playerUpdateHandle !== undefined && requestBody.playerUpdateHandle !== null
        ? String(requestBody.playerUpdateHandle)
        : null;
    if (shouldControlLocalMedia && playerUpdateHandleId) {
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
      shouldControlLocalMedia &&
      requestedActivationState === "ACTIVATION_RUNNING" ||
      (shouldControlLocalMedia && requestedActivationState === "ACTIVE") ||
      (shouldControlLocalMedia && playerUpdateHandleId)
    ) {
      events.push({
        type: "media.play",
        payload: {},
      });
    } else if (shouldControlLocalMedia && requestedActivationState === "INACTIVE") {
      events.push({
        type: "media.stop",
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

function resolveMediaMutation(command, normalizedPath, requestBody) {
  ensureMediaRuntimeState();
  const lowerPath = normalizedPath.toLowerCase();
  const payload = isPlainObject(requestBody) ? deepClone(requestBody) : {};
  const isDelete = command === "delete";

  if (/^\/media\/childlocks(\/[^/]+)?$/i.test(lowerPath)) {
    const segments = normalizedPath.split("/").filter(Boolean);
    const explicitId =
      lowerPath === "/media/childlocks"
        ? payload.id || payload.name
        : decodeURIComponent(segments[segments.length - 1] || "");
    const id = String(explicitId || `childlocks-${mediaRuntimeState.nextChildlockIndex}`);
    if (isDelete) {
      mediaRuntimeState.childlocks.delete(id);
      return null;
    }
    const next = createMediaChildlockObject(id, payload, mediaRuntimeState.childlocks.get(id) || null);
    mediaRuntimeState.childlocks.set(id, next);
    if (lowerPath === "/media/childlocks" && !explicitId) {
      mediaRuntimeState.nextChildlockIndex += 1;
    }
    return deepClone(next);
  }

  if (/^\/media\/childlocklevels(\/[^/]+)?$/i.test(lowerPath)) {
    const segments = normalizedPath.split("/").filter(Boolean);
    const explicitId =
      lowerPath === "/media/childlocklevels"
        ? payload.id || MEDIA_DEFAULT_CHILDLOCK_LEVEL.id
        : decodeURIComponent(segments[segments.length - 1] || MEDIA_DEFAULT_CHILDLOCK_LEVEL.id);
    const id = String(explicitId || MEDIA_DEFAULT_CHILDLOCK_LEVEL.id);
    if (isDelete) {
      if (id !== MEDIA_DEFAULT_CHILDLOCK_LEVEL.id) {
        mediaRuntimeState.childlocklevels.delete(id);
      }
      return null;
    }
    const existing =
      mediaRuntimeState.childlocklevels.get(id) ||
      (id === MEDIA_DEFAULT_CHILDLOCK_LEVEL.id ? deepClone(MEDIA_DEFAULT_CHILDLOCK_LEVEL) : null);
    const next = {
      ...(existing || {}),
      ...payload,
      id,
      uri: `/media/childlocklevels/${encodeURIComponent(id)}`,
      name:
        payload.name !== undefined && payload.name !== null && String(payload.name).trim()
          ? String(payload.name)
          : (existing && existing.name) || "Media Child Lock Level",
      activePml:
        payload.activePml !== undefined && payload.activePml !== null
          ? String(payload.activePml)
          : (existing && existing.activePml) || "OFF",
      pmlList: Array.isArray(payload.pmlList)
        ? payload.pmlList.map((entry) => String(entry))
        : Array.isArray(existing && existing.pmlList)
          ? deepClone(existing.pmlList)
          : deepClone(MEDIA_DEFAULT_CHILDLOCK_LEVEL.pmlList),
    };
    mediaRuntimeState.childlocklevels.set(id, next);
    return deepClone(next);
  }

  if (/^\/media\/displaysettings(\/[^/]+)?$/i.test(lowerPath)) {
    const segments = normalizedPath.split("/").filter(Boolean);
    const explicitId =
      lowerPath === "/media/displaysettings"
        ? payload.id
        : decodeURIComponent(segments[segments.length - 1] || "");
    const id = String(explicitId || `displaysetting-${mediaRuntimeState.nextDisplaysettingIndex}`);
    if (isDelete) {
      mediaRuntimeState.displaysettings.delete(id);
      return null;
    }
    const next = createMediaDisplaysettingObject(id, payload, mediaRuntimeState.displaysettings.get(id) || null);
    mediaRuntimeState.displaysettings.set(id, next);
    if (lowerPath === "/media/displaysettings" && !explicitId) {
      mediaRuntimeState.nextDisplaysettingIndex += 1;
    }
    return deepClone(next);
  }

  return undefined;
}

function resolveMutationBody(command, service, fullPath, requestBody) {
  const normalizedService = canonicalizeServicePath(service);
  const normalizedPath = normalizePath(fullPath);
  const lowerPath = normalizedPath.toLowerCase();
  routeRudiMediaMutation(command, normalizedPath, requestBody);
  if (lowerPath.startsWith("/phone/") || normalizedService === "/phone") {
    const resolved = resolvePhoneMutation(command, normalizedPath, requestBody);
    if (resolved !== null || command === "delete") {
      return resolved;
    }
  }
  if (lowerPath.startsWith("/smartphoneintegration/") || normalizedService === "/smartphoneintegration") {
    const resolved = resolveSmartphoneintegrationMutation(command, normalizedPath, requestBody);
    if (resolved !== null || command === "delete") {
      return resolved;
    }
  }
  if (lowerPath.startsWith("/vehicleinformation/") || normalizedService === "/vehicleinformation") {
    const resolved = resolveVehicleinformationMutation(command, normalizedPath, requestBody);
    if (resolved !== null || command === "delete") {
      return resolved;
    }
  }
  if (lowerPath.startsWith("/maintenance/") || normalizedService === "/maintenance") {
    const resolved = resolveMaintenanceMutation(command, normalizedPath, requestBody);
    if (resolved !== null || command === "delete") {
      return resolved;
    }
  }
  if (lowerPath.startsWith("/language/") || normalizedService === "/language") {
    const resolved = resolveLanguageMutation(command, normalizedPath, requestBody);
    if (resolved !== null || command === "delete") {
      return resolved;
    }
  }
  if (lowerPath.startsWith("/textinput/") || normalizedService === "/textinput") {
    const resolved = resolveTextinputMutation(command, normalizedPath, requestBody);
    if (resolved !== null || command === "delete") {
      return resolved;
    }
  }
  if (lowerPath.startsWith("/system/") || normalizedService === "/system") {
    const resolved = resolveSystemMutation(command, normalizedPath, requestBody);
    if (resolved !== null || command === "delete") {
      return resolved;
    }
  }
  if (lowerPath.startsWith("/power/") || normalizedService === "/power") {
    const resolved = resolvePowerMutation(command, normalizedPath, requestBody);
    if (resolved !== null || command === "delete") {
      return resolved;
    }
  }
  if (lowerPath.startsWith("/usermanagement/") || normalizedService === "/usermanagement") {
    const resolved = resolveUsermanagementMutation(command, normalizedPath, requestBody);
    if (resolved !== null || command === "delete") {
      return resolved;
    }
  }
  if (lowerPath.startsWith("/displaybehaviour/") || normalizedService === "/displaybehaviour") {
    const resolved = resolveDisplayBehaviourMutation(command, normalizedPath, requestBody);
    if (resolved !== null || command === "delete") {
      return resolved;
    }
  }
  if (
    lowerPath.startsWith("/mcpinputmanager") ||
    lowerPath.startsWith("/mcpinputregions") ||
    lowerPath.startsWith("/mcp_inputregions") ||
    lowerPath.startsWith("/mcp_input_regions")
  ) {
    const resolved = resolveInputRegionsMutation(command, normalizedPath, requestBody);
    if (resolved !== null || command === "delete") {
      return resolved;
    }
  }
  if (lowerPath.startsWith("/sound/") || normalizedService === "/sound") {
    return resolveSoundMutation(command, normalizedPath, requestBody);
  }
  if (lowerPath.startsWith("/perceivablecontext/") || normalizedService === "/perceivablecontext") {
    return resolvePerceivableContextMutation(command, normalizedPath, requestBody);
  }
  if (lowerPath.startsWith("/kombisync/") || normalizedService === "/kombisync") {
    return resolveKombiSyncMutation(command, normalizedPath, requestBody);
  }
  if (lowerPath.startsWith("/mcppopupmanager") || lowerPath.startsWith("/mcp_popups")) {
    return resolvePopupsBody(normalizedPath, requestBody, command);
  }
  if (lowerPath.startsWith("/media/") || normalizedService === "/media") {
    const resolved = resolveMediaMutation(command, normalizedPath, requestBody);
    if (resolved !== undefined) {
      return resolved;
    }
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
    const resolved = resolveEntertainmentcontrolMutation(command, normalizedPath, requestBody);
    if (resolved !== null || command === "delete") {
      notifyRudiSubscriptions("/entertainmentcontrol", "/entertainmentcontrol");
      notifyRudiSubscriptions("/radio", "/radio");
      notifyRudiSubscriptions("/tv", "/tv");
      return resolved;
    }
  }
  if (lowerPath.startsWith("/radio/") || normalizedService === "/radio") {
    if (command === "delete") {
      return null;
    }
    return resolveRadioBody(normalizedPath, requestBody);
  }
  if (lowerPath.startsWith("/tv/") || normalizedService === "/tv") {
    if (command === "delete") {
      return null;
    }
    return resolveTvBody(normalizedPath, requestBody);
  }
  const genericFixtureMutation = resolveGenericFixtureCollectionMutation(command, normalizedPath, requestBody);
  const genericCollectionPath = getGenericCollectionPath(normalizedPath);
  if (
    genericFixtureMutation !== null ||
    (command === "delete" && genericCollectionPath && hasKnownGenericCollection(genericCollectionPath))
  ) {
    return genericFixtureMutation;
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
    return Array.from(publishedRegistryEntries.values())
      .sort((left, right) => left.path.localeCompare(right.path))
      .map((entry) => registryUpdateRaw(entry.path, entry.locatorPath));
  }
  const publishedEntry = lookupPublishedRegistryEntry(rawPath);
  if (publishedEntry) {
    return registryUpdateRaw(rawPath, publishedEntry.locatorPath);
  }
  return null;
}

function executeRudiAction(wireService, command, rawRequestPath, requestBody = null) {
  const resolvedWireService = wireService ? String(wireService) : "/registry";
  const service = inferServiceRoot(resolvedWireService);
  const normalizedCommand = normalizeActionCommand(command);
  const normalizedRequestPath = normalizePath(rawRequestPath || "/");
  const fullPath = resolveResourcePath(resolvedWireService, normalizedRequestPath);
  let responseBody;

  if (service === "/registry" && normalizedCommand === "retrieve") {
    responseBody = buildRegistryBody(rawRequestPath);
  } else if (service === "/registry" && normalizedCommand === "insert") {
    const requestedPath =
      requestBody && requestBody.path
        ? sanitizeServicePathToken(requestBody.path)
        : sanitizeServicePathToken(rawRequestPath || normalizedRequestPath);
    const requestedServicePath = requestedPath || "/";
    const canonicalPath = canonicalizeServicePath(requestedServicePath);
    registerKnownService(requestedServicePath, requestedServicePath);
    registerKnownService(canonicalPath, canonicalPath);
    if (shouldPublishRegistryService(requestedServicePath) || shouldPublishRegistryService(canonicalPath)) {
      registerPublishedService(requestedServicePath, requestedServicePath);
      registerPublishedService(canonicalPath, canonicalPath);
    }
    responseBody = serviceDefinitionRaw(requestedServicePath, requestedServicePath);
  } else if (["update", "insert", "delete"].includes(normalizedCommand)) {
    responseBody = resolveMutationBody(normalizedCommand, service, fullPath, requestBody);
    if (normalizedCommand !== "delete") {
      responseBody = coerceMutationAck(normalizedCommand, fullPath, responseBody);
    }
  } else {
    responseBody = resolveResourceBody(fullPath, requestBody);
  }

  return {
    service,
    wireService: resolvedWireService,
    command: normalizedCommand,
    requestPath: normalizedRequestPath,
    rawRequestPath: rawRequestPath || normalizedRequestPath,
    fullPath,
    responseBody,
  };
}

function resolveLegacyTopicRequest(topic) {
  const normalizedTopic = normalizePath(topic || "/");
  if (normalizedTopic === "/registry") {
    return {
      wireService: "/registry",
      requestPath: "/",
      rawRequestPath: "/",
      responseTopic: normalizedTopic,
    };
  }
  if (normalizedTopic.toLowerCase().startsWith("/registry/")) {
    const registryPath = normalizePath(normalizedTopic.slice("/registry".length) || "/");
    return {
      wireService: "/registry",
      requestPath: registryPath,
      rawRequestPath: registryPath,
      responseTopic: normalizedTopic,
    };
  }

  const segments = normalizedTopic.split("/").filter(Boolean);
  if (segments.length === 0) {
    return {
      wireService: "/registry",
      requestPath: "/",
      rawRequestPath: "/",
      responseTopic: "/registry",
    };
  }

  const candidateRoot = `/${segments[0]}`;
  const directAlias = getDirectResourceServiceAlias(candidateRoot);
  if (directAlias) {
    const relativePath = segments.length > 1 ? normalizePath(`/${segments.slice(1).join("/")}`) : "/";
    return {
      wireService: candidateRoot,
      requestPath: relativePath,
      rawRequestPath: relativePath,
      responseTopic: normalizedTopic,
    };
  }

  const serviceRoot = inferServiceRoot(normalizedTopic);
  const serviceSegments = normalizePath(serviceRoot).split("/").filter(Boolean);
  const relativeSegments = segments.slice(serviceSegments.length);
  const requestPath = relativeSegments.length > 0 ? normalizePath(`/${relativeSegments.join("/")}`) : "/";
  return {
    wireService: serviceRoot,
    requestPath,
    rawRequestPath: requestPath,
    responseTopic: normalizedTopic,
  };
}

function normalizeDevCommandType(rawType) {
  return String(rawType || "")
    .trim()
    .toLowerCase();
}

function getSafeUiRoute(hashValue) {
  const normalized = String(hashValue || "").trim();
  return DEV_CONTROL_SAFE_UI_ROUTES.find((entry) => entry.hash === normalized) || null;
}

function buildDevUiStorageEntries() {
  const entries = {};
  for (const [key, fallbackValue] of Object.entries(DEV_CONTROL_UI_STORAGE_DEFAULTS)) {
    const current = systemRuntimeState.persistenceentries.get(key);
    entries[key] = current && current.valueContainer !== undefined ? String(current.valueContainer) : fallbackValue;
  }
  entries.__audi_emulator_profile_version__ = DEV_CONTROL_EMULATOR_PROFILE_VERSION;
  return entries;
}

function inferPersistenceContext(key) {
  const segments = String(key || "").split(".");
  return segments.length >= 2 ? segments[1] : "general";
}

function applyDevMutation(command, service, requestPath, requestBody = null) {
  const wireService = inferServiceRoot(service);
  const fullPath = resolveResourcePath(wireService, requestPath);
  const rawResult = resolveMutationBody(command, wireService, fullPath, requestBody);
  const ackResult = command === "delete" ? null : coerceMutationAck(command, fullPath, rawResult);
  notifyRudiSubscriptions(wireService, fullPath);
  return {
    service: wireService,
    path: fullPath,
    ack: ackResult,
    resource: rawResult,
  };
}

function upsertSystemPersistenceEntry(key, valueContainer, extraFields = {}) {
  const normalizedKey = String(key || "").trim();
  if (!normalizedKey) {
    throw new Error("missing persistence key");
  }
  const existing = systemRuntimeState.persistenceentries.get(normalizedKey) || null;
  const payload = {
    key: normalizedKey,
    name: normalizedKey,
    context: extraFields.context || (existing && existing.context) || inferPersistenceContext(normalizedKey),
    instance: extraFields.instance || (existing && existing.instance) || "center",
    exportId: extraFields.exportId !== undefined ? extraFields.exportId : (existing && existing.exportId) || 0,
    isPrivacyRelevant:
      extraFields.isPrivacyRelevant !== undefined
        ? !!extraFields.isPrivacyRelevant
        : !!(existing && existing.isPrivacyRelevant),
    maxSize:
      extraFields.maxSize !== undefined
        ? Number(extraFields.maxSize)
        : (existing && existing.maxSize) || Math.max(128, String(valueContainer || "").length * 2),
    personalized:
      extraFields.personalized !== undefined
        ? !!extraFields.personalized
        : existing && existing.personalized !== undefined
          ? !!existing.personalized
          : true,
    valueContainer: String(valueContainer),
    version: extraFields.version || (existing && existing.version) || "0",
  };
  if (existing) {
    return applyDevMutation("update", "/system", `/persistenceentries/${encodeURIComponent(existing.id)}`, payload);
  }
  return applyDevMutation("insert", "/system", "/persistenceentries", payload);
}

function applyHomeProfileDefaults() {
  const mutations = [];
  for (const [key, valueContainer] of Object.entries(DEV_CONTROL_UI_STORAGE_DEFAULTS)) {
    mutations.push(upsertSystemPersistenceEntry(key, valueContainer));
  }
  broadcastDevWs({
    type: "ui.localStorage.seed",
    payload: {
      entries: buildDevUiStorageEntries(),
    },
  });
  broadcastDevWs({
    type: "ui.route.set",
    payload: {
      hash: "#/main",
    },
  });
  return mutations;
}

function buildDevControlCatalog() {
  const userModels = createUsermanagementModels();
  const languageModels = createLanguageModels();
  const soundModels = createSoundModels();
  const maintenanceModels = createMaintenanceModels();
  const entertainmentModels = createEntertainmentModels();
  const languageSystem = languageModels.systems[0] || null;
  return {
    build: SERVER_BUILD_TAG,
    uiOrigin: AUDI_UI_ORIGIN,
    safeDomains: ["ui", "media", "users", "language", "sound", "maintenance", "system", "simulator"],
    blockedDomains: DEV_CONTROL_BLOCKED_DOMAINS.map((entry) => deepClone(entry)),
    routes: DEV_CONTROL_SAFE_UI_ROUTES.map((entry) => deepClone(entry)),
    userActivities: userModels.activities
      .filter((entry) => DEV_CONTROL_SAFE_ACTIVITY_NAMES.has(String(entry.name || "")))
      .map((entry) => ({
        id: entry.id,
        name: entry.name,
        uri: entry.uri,
      })),
    users: userModels.users.map((entry) => ({
      id: entry.id,
      name: entry.name,
      role: entry.role,
      slotID: entry.slotID,
    })),
    languages: languageSystem ? deepClone(languageSystem.codedVisibleLanguages || []) : [],
    soundSettings: soundModels.settings.map((entry) => ({
      id: entry.id,
      purpose: entry.purpose,
      nature: entry.nature,
      minValueX: entry.minValueX,
      maxValueX: entry.maxValueX,
      possibleDiscreteValues: entry.possibleDiscreteValues || [],
    })),
    entertainmentSources: entertainmentModels.sources.map((entry) => ({
      id: entry.id,
      name: entry.name,
      type: entry.type,
      relatedGroupType: entry.relatedGroupType,
      activationState: entry.activationState,
    })),
    maintenanceResetControls: maintenanceModels.resetControls.map((entry) => ({
      id: entry.id,
      name: entry.name,
    })),
  };
}

function buildDevControlStateSnapshot() {
  const userModels = createUsermanagementModels();
  const languageModels = createLanguageModels();
  const soundModels = createSoundModels();
  const maintenanceModels = createMaintenanceModels();
  const entertainmentModels = createEntertainmentModels();
  const systemModels = createSystemModels();
  const audioState =
    mediaService && typeof mediaService.getState === "function"
      ? mediaService.getState()
      : {
          backend: "unknown",
          backendAvailable: false,
          mode: "stopped",
          volume: 0,
          positionSec: 0,
          durationSec: null,
          source: null,
          deviceCount: 0,
          lastError: null,
          updatedAt: formatLocalIsoTimestamp(new Date()),
        };
  return {
    build: SERVER_BUILD_TAG,
    uiOrigin: AUDI_UI_ORIGIN,
    audio: audioState,
    simulator: getSimulatorSnapshot(),
    media: {
      library: listMediaFiles(),
      activeSourceId: getActiveMediaSourceId(),
    },
    entertainment: {
      target: deepClone(entertainmentModels.target),
      groups: deepClone(entertainmentModels.groups),
      sources: deepClone(entertainmentModels.sources),
    },
    usermanagement: {
      settings: deepClone(userModels.settings),
      users: deepClone(userModels.users),
      activities: deepClone(userModels.activities),
    },
    language: {
      systems: deepClone(languageModels.systems),
      components: deepClone(languageModels.components),
      changeRequests: deepClone(languageModels.changeRequests),
    },
    sound: {
      volumes: deepClone(soundModels.volumes),
      activevolumes: deepClone(soundModels.activevolumes),
      settings: deepClone(soundModels.settings),
      status: deepClone(soundModels.status),
      capabilities: deepClone(soundModels.capabilities),
    },
    maintenance: {
      services: deepClone(maintenanceModels.services),
      valueIndications: deepClone(maintenanceModels.valueIndications),
      resetControls: deepClone(maintenanceModels.resetControls),
      resets: deepClone(maintenanceModels.resets),
      fluids: deepClone(maintenanceModels.fluids),
    },
    system: {
      configurations: deepClone(systemModels.configurations),
      persistenceentries: deepClone(systemModels.persistenceentries),
      uiStorageEntries: buildDevUiStorageEntries(),
    },
    power: deepClone(createPowerModels()),
    displaybehaviour: deepClone(createDisplayBehaviourModels()),
  };
}

function broadcastDevControlStateChanged() {
  broadcastDevWs({
    type: "dev.state.changed",
    payload: buildDevControlStateSnapshot(),
  });
}

async function executeDevControlCommand(type, payload = {}) {
  const commandType = normalizeDevCommandType(type);
  const safePayload = isPlainObject(payload) ? deepClone(payload) : {};

  if (!commandType) {
    return {
      ok: false,
      error: "missing_command_type",
      state: buildDevControlStateSnapshot(),
    };
  }

  switch (commandType) {
    case "ui.route.set":
    case "route.goto": {
      const route = getSafeUiRoute(safePayload.hash || safePayload.route || safePayload.path);
      if (!route) {
        return {
          ok: false,
          error: "unsupported_or_blocked_ui_route",
          allowedRoutes: DEV_CONTROL_SAFE_UI_ROUTES.map((entry) => entry.hash),
          state: buildDevControlStateSnapshot(),
        };
      }
      broadcastDevWs({
        type: "ui.route.set",
        payload: {
          hash: route.hash,
        },
      });
      return {
        ok: true,
        type: commandType,
        route: deepClone(route),
        state: buildDevControlStateSnapshot(),
      };
    }
    case "ui.reload": {
      broadcastDevWs({
        type: "ui.reload",
        payload: {
          force: true,
        },
      });
      return {
        ok: true,
        type: commandType,
        state: buildDevControlStateSnapshot(),
      };
    }
    case "ui.home.defaults.apply":
    case "system.profile.home.apply": {
      const result = applyHomeProfileDefaults();
      broadcastDevControlStateChanged();
      return {
        ok: true,
        type: commandType,
        result,
        state: buildDevControlStateSnapshot(),
      };
    }
    case "media.source.select": {
      const sourceId = String(safePayload.sourceId || safePayload.id || "").trim();
      if (!sourceId) {
        return {
          ok: false,
          error: "missing_source_id",
          state: buildDevControlStateSnapshot(),
        };
      }
      const result = applyDevMutation(
        "update",
        "/entertainmentcontrol",
        `/sources/${encodeURIComponent(sourceId)}`,
        {},
      );
      broadcastDevControlStateChanged();
      return {
        ok: true,
        type: commandType,
        result,
        state: buildDevControlStateSnapshot(),
      };
    }
    case "media.track.load":
      {
        const result = await mediaService.handleEvent("media.source.load", safePayload);
        return {
          ...result,
          type: commandType,
          audioState: result.state,
          state: buildDevControlStateSnapshot(),
        };
      }
    case "media.play":
    case "media.pause":
    case "media.stop":
    case "media.seek":
    case "media.volume.set":
    case "audio.device.list":
    case "audio.backend.diagnostics":
      {
        const result = await mediaService.handleEvent(commandType, safePayload);
        return {
          ...result,
          type: commandType,
          audioState: result.state,
          state: buildDevControlStateSnapshot(),
        };
      }
    case "sim.event": {
      const simType = String(safePayload.type || "").trim();
      if (!simulatorService.isSupportedEvent(simType)) {
        return {
          ok: false,
          error: "unsupported_sim_event",
          supportedEvents: Array.from(simulatorService.supportedEvents),
          state: buildDevControlStateSnapshot(),
        };
      }
      const result = simulatorService.handleEvent(simType, safePayload.payload || {});
      broadcastDevControlStateChanged();
      return {
        ...result,
        type: commandType,
        event: simType,
        state: buildDevControlStateSnapshot(),
      };
    }
    case "user.switch": {
      const userId = String(safePayload.userId || safePayload.id || "").trim();
      if (!userId) {
        return {
          ok: false,
          error: "missing_user_id",
          state: buildDevControlStateSnapshot(),
        };
      }
      const result = applyDevMutation("update", "/usermanagement", "/settings/setting-main", {
        activeUser: userId,
      });
      broadcastDevControlStateChanged();
      return {
        ok: true,
        type: commandType,
        result,
        state: buildDevControlStateSnapshot(),
      };
    }
    case "user.add.offline": {
      const displayName = String(
        safePayload.name ||
          [safePayload.firstName, safePayload.lastName].filter(Boolean).join(" ").trim() ||
          "Offline User",
      ).trim();
      const result = applyDevMutation("insert", "/usermanagement", "/users", {
        name: displayName,
        firstName: safePayload.firstName || displayName,
        lastName: safePayload.lastName || "",
        role: "offlineGuestUser",
      });
      broadcastDevControlStateChanged();
      return {
        ok: true,
        type: commandType,
        result,
        state: buildDevControlStateSnapshot(),
      };
    }
    case "user.delete": {
      const userId = String(safePayload.userId || safePayload.id || "").trim();
      if (!userId) {
        return {
          ok: false,
          error: "missing_user_id",
          state: buildDevControlStateSnapshot(),
        };
      }
      if (userId === "primary-user") {
        return {
          ok: false,
          error: "refusing_to_delete_primary_user_in_emulator",
          state: buildDevControlStateSnapshot(),
        };
      }
      const result = applyDevMutation(
        "delete",
        "/usermanagement",
        `/users/${encodeURIComponent(userId)}`,
        {},
      );
      broadcastDevControlStateChanged();
      return {
        ok: true,
        type: commandType,
        result,
        state: buildDevControlStateSnapshot(),
      };
    }
    case "user.activity.run": {
      const activityName = String(safePayload.activityName || safePayload.name || "").trim();
      const models = createUsermanagementModels();
      const activity = models.activities.find((entry) => String(entry.name) === activityName);
      if (!activity || !DEV_CONTROL_SAFE_ACTIVITY_NAMES.has(activityName)) {
        return {
          ok: false,
          error: "unsupported_user_activity",
          state: buildDevControlStateSnapshot(),
        };
      }
      const mutationPayload = {
        process: "request",
      };
      if (safePayload.userId) {
        mutationPayload.user = safePayload.userId;
      }
      const result = applyDevMutation(
        "update",
        "/usermanagement",
        `/activities/${encodeURIComponent(activity.id)}`,
        mutationPayload,
      );
      broadcastDevControlStateChanged();
      return {
        ok: true,
        type: commandType,
        result,
        state: buildDevControlStateSnapshot(),
      };
    }
    case "language.set": {
      const language = String(safePayload.language || safePayload.newLanguage || "").trim();
      if (!language) {
        return {
          ok: false,
          error: "missing_language",
          state: buildDevControlStateSnapshot(),
        };
      }
      const result = applyDevMutation("insert", "/language", "/changeRequests", {
        newLanguage: language,
        newVoice: safePayload.voice || safePayload.newVoice || "default",
      });
      broadcastDevControlStateChanged();
      return {
        ok: true,
        type: commandType,
        result,
        state: buildDevControlStateSnapshot(),
      };
    }
    case "sound.volume.set": {
      const value = toFiniteNumber(safePayload.value);
      if (value === null) {
        return {
          ok: false,
          error: "missing_volume_value",
          state: buildDevControlStateSnapshot(),
        };
      }
      const result = applyDevMutation("update", "/sound", `/volumes/${SOUND_VOLUME_ID}`, {
        value,
        userMuted: false,
        valueChangeActive: true,
      });
      broadcastDevControlStateChanged();
      return {
        ok: true,
        type: commandType,
        result,
        state: buildDevControlStateSnapshot(),
      };
    }
    case "sound.mute.set": {
      const result = applyDevMutation("update", "/sound", `/volumes/${SOUND_VOLUME_ID}`, {
        userMuted: !!safePayload.muted,
      });
      broadcastDevControlStateChanged();
      return {
        ok: true,
        type: commandType,
        result,
        state: buildDevControlStateSnapshot(),
      };
    }
    case "sound.setting.set": {
      const identifier = String(safePayload.id || safePayload.purpose || "").trim();
      const settingIndex = getSoundSettingIndex(identifier);
      if (settingIndex < 0) {
        return {
          ok: false,
          error: "unknown_sound_setting",
          state: buildDevControlStateSnapshot(),
        };
      }
      const currentSetting = createSoundModels().settings[settingIndex];
      const mutationPayload = {
        changeActive: safePayload.changeActive !== undefined ? !!safePayload.changeActive : true,
      };
      if (currentSetting.nature === "INTERVAL_1D") {
        const valueX = toFiniteNumber(safePayload.valueX);
        if (valueX === null) {
          return {
            ok: false,
            error: "missing_sound_setting_valuex",
            state: buildDevControlStateSnapshot(),
          };
        }
        mutationPayload.valueX = valueX;
      } else {
        const discreteValue = String(safePayload.discreteValue || "").trim();
        if (!discreteValue) {
          return {
            ok: false,
            error: "missing_sound_setting_discrete_value",
            state: buildDevControlStateSnapshot(),
          };
        }
        mutationPayload.discreteValue = discreteValue;
      }
      const result = applyDevMutation(
        "update",
        "/sound",
        `/settings/${encodeURIComponent(currentSetting.id)}`,
        mutationPayload,
      );
      broadcastDevControlStateChanged();
      return {
        ok: true,
        type: commandType,
        result,
        state: buildDevControlStateSnapshot(),
      };
    }
    case "maintenance.reset.trigger": {
      const resetControlId = String(safePayload.id || MAINTENANCE_IDS.resetControl);
      const result = applyDevMutation(
        "update",
        "/maintenance",
        `/resetControls/${encodeURIComponent(resetControlId)}`,
        {
          resetControl: "triggerReset",
        },
      );
      broadcastDevControlStateChanged();
      return {
        ok: true,
        type: commandType,
        result,
        state: buildDevControlStateSnapshot(),
      };
    }
    case "system.persistence.set": {
      const key = String(safePayload.key || safePayload.name || "").trim();
      if (!key) {
        return {
          ok: false,
          error: "missing_persistence_key",
          state: buildDevControlStateSnapshot(),
        };
      }
      const result = upsertSystemPersistenceEntry(
        key,
        safePayload.valueContainer !== undefined ? safePayload.valueContainer : "",
        safePayload,
      );
      if (Object.prototype.hasOwnProperty.call(DEV_CONTROL_UI_STORAGE_DEFAULTS, key)) {
        broadcastDevWs({
          type: "ui.localStorage.seed",
          payload: {
            entries: buildDevUiStorageEntries(),
          },
        });
      }
      broadcastDevControlStateChanged();
      return {
        ok: true,
        type: commandType,
        result,
        state: buildDevControlStateSnapshot(),
      };
    }
    default:
      return {
        ok: false,
        error: "unsupported_dev_command",
        type: commandType,
        state: buildDevControlStateSnapshot(),
      };
  }
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
    build: SERVER_BUILD_TAG,
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

if (SERVE_AUDI_UI) {
  app.use(
    express.static(audiRoot, {
      index: false,
      fallthrough: true,
    }),
  );
}

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

app.get("/api/dev/catalog", (req, res) => {
  res.json({
    ok: true,
    catalog: buildDevControlCatalog(),
  });
});

app.get("/api/dev/state", (req, res) => {
  res.json({
    ok: true,
    state: buildDevControlStateSnapshot(),
  });
});

app.post("/api/dev/command", async (req, res) => {
  const type = req.body && req.body.type;
  const payload = req.body && req.body.payload;
  const result = await executeDevControlCommand(type, payload || {});
  res.status(result.ok ? 200 : 400).json(result);
});

app.all(/^\/api(?:\/.*)?$/, (req, res) => {
  res.status(501).json({
    error: "not_implemented",
    method: req.method,
    path: req.path,
  });
});

if (SERVE_AUDI_UI) {
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
}

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
let mediaService = null;
let simulatorService = null;
mediaService = new MockMediaService({
  mediaRoot,
  listTracks: listMediaFiles,
  logger: console,
  onStateChanged: (state) => {
    broadcastDevWs({
      type: "audio.state.changed",
      payload: state,
    });
    notifyRudiSubscriptions("/media", "/media");
    notifyRudiSubscriptions("/entertainmentcontrol", "/entertainmentcontrol");
    broadcastDevControlStateChanged();
  },
});
simulatorService = new SimulatorService({
  onStateChanged: (state) => {
    broadcastDevWs({
      type: "sim.state.changed",
      payload: state,
    });
    notifyRudiSubscriptions("/perceivablecontext", "/perceivablecontext");
    notifyRudiSubscriptions("/kombisync", "/kombisync");
    notifyRudiSubscriptions("/hmisync", "/hmisync");
    notifyRudiSubscriptions("/power", "/power");
    notifyRudiSubscriptions("/displaybehaviour", "/displaybehaviour");
    notifyRudiSubscriptions("/sound", "/sound");
    broadcastDevControlStateChanged();
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

function formatLocalIsoTimestamp(date) {
  const current = date instanceof Date ? date : new Date(date);
  const year = current.getFullYear();
  const month = String(current.getMonth() + 1).padStart(2, "0");
  const day = String(current.getDate()).padStart(2, "0");
  const hours = String(current.getHours()).padStart(2, "0");
  const minutes = String(current.getMinutes()).padStart(2, "0");
  const seconds = String(current.getSeconds()).padStart(2, "0");
  const millis = String(current.getMilliseconds()).padStart(3, "0");
  const offsetMinutes = -current.getTimezoneOffset();
  const offsetSign = offsetMinutes >= 0 ? "+" : "-";
  const absoluteOffsetMinutes = Math.abs(offsetMinutes);
  const offsetHours = String(Math.floor(absoluteOffsetMinutes / 60)).padStart(2, "0");
  const offsetRemainderMinutes = String(absoluteOffsetMinutes % 60).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${millis}${offsetSign}${offsetHours}:${offsetRemainderMinutes}`;
}

function sendVehicleState(client) {
  const now = new Date();
  const payload = {
    ...fixtureVehicleState,
    // The UI reads the hour directly from the string; do not send UTC here.
    clock: formatLocalIsoTimestamp(now),
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

function isPlainObject(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function sendRudiActionResponse(ws, service, requestId, statusCode, responseBody, headers = null) {
  sendWs(ws, {
    type: "actionResponse",
    service,
    requestId,
    statusCode,
    body: toSerializablePayload(responseBody),
    headers,
  });
}

function sendRudiActionCompleted(ws, service, requestId) {
  sendWs(ws, {
    type: "actionCompleted",
    service,
    requestId,
  });
}

function sendRudiActionError(ws, service, requestId, statusCode, responseBody = null, headers = null) {
  sendWs(ws, {
    type: "actionError",
    service,
    requestId,
    statusCode,
    body: toSerializablePayload(responseBody),
    headers,
  });
}

function isPersistentRetrieveRequest(service, command, requestPath, requestBody) {
  if (command !== "retrieve") {
    return false;
  }
  const normalizedService = canonicalizeServicePath(service);
  const normalizedRequestPath = normalizePath(requestPath || "/");
  if (normalizedService === "/registry" && normalizedRequestPath !== "/") {
    return true;
  }
  if (normalizedRequestPath === "/" && normalizedService !== "/registry") {
    return true;
  }
  return isPlainObject(requestBody) && requestBody.autosubscribe === true;
}

function coerceMutationAck(command, fullPath, responseBody) {
  const normalizedCommand = String(command || "").toLowerCase();
  const normalizedFullPath = normalizePath(fullPath || "/").toLowerCase();
  const isPopupMutation =
    normalizedFullPath.startsWith("/mcppopupmanager/") ||
    normalizedFullPath === "/mcppopupmanager" ||
    normalizedFullPath.startsWith("/mcp_popups/") ||
    normalizedFullPath === "/mcp_popups";
  const isMaintenanceMutation =
    normalizedFullPath.startsWith("/maintenance/") || normalizedFullPath === "/maintenance";
  const isPhoneMutation = normalizedFullPath.startsWith("/phone/") || normalizedFullPath === "/phone";
  const isSmartphoneintegrationMutation =
    normalizedFullPath.startsWith("/smartphoneintegration/") ||
    normalizedFullPath === "/smartphoneintegration";
  const isVehicleinformationMutation =
    normalizedFullPath.startsWith("/vehicleinformation/") || normalizedFullPath === "/vehicleinformation";
  const isRegistryMutation =
    normalizedFullPath === "/registry" || normalizedFullPath.startsWith("/registry/");
  const shouldCoerceToScalarAck =
    !isPopupMutation &&
    !isMaintenanceMutation &&
    !isPhoneMutation &&
    !isSmartphoneintegrationMutation &&
    !isVehicleinformationMutation &&
    !isRegistryMutation &&
    (normalizedCommand === "insert" || normalizedCommand === "update");

  if (!shouldCoerceToScalarAck) {
    return responseBody;
  }
  if (responseBody === null || responseBody === undefined) {
    return null;
  }
  if (typeof responseBody === "string") {
    return responseBody;
  }
  if (typeof responseBody === "number" || typeof responseBody === "boolean") {
    return String(responseBody);
  }
  if (isPlainObject(responseBody)) {
    if (responseBody.id !== undefined && responseBody.id !== null) {
      return String(responseBody.id);
    }
    if (responseBody.uri !== undefined && responseBody.uri !== null) {
      return String(responseBody.uri);
    }
  }
  return normalizePath(fullPath || "/");
}

function getRudiSubscriptions(ws) {
  if (!ws.rudiSubscriptions) {
    ws.rudiSubscriptions = new Map();
  }
  return ws.rudiSubscriptions;
}

function rememberRudiSubscription(ws, subscription) {
  getRudiSubscriptions(ws).set(subscription.requestId, subscription);
}

function dropRudiSubscription(ws, requestId) {
  if (!ws || !ws.rudiSubscriptions) {
    return;
  }
  ws.rudiSubscriptions.delete(Number(requestId));
}

function clearRudiSubscriptions(ws) {
  if (!ws || !ws.rudiSubscriptions) {
    return;
  }
  ws.rudiSubscriptions.clear();
}

function areRelatedRudiPaths(subscriptionPath, changedPath) {
  const left = normalizePath(subscriptionPath || "/");
  const right = normalizePath(changedPath || "/");
  if (left === "/" || right === "/") {
    return true;
  }
  return left === right || left.startsWith(`${right}/`) || right.startsWith(`${left}/`);
}

function resolveRudiSubscriptionBody(subscription) {
  if (subscription.canonicalService === "/registry") {
    return buildRegistryBody(subscription.rawRequestPath || subscription.requestPath || "/");
  }
  return resolveResourceBody(subscription.fullPath, subscription.requestBody);
}

function notifyRudiSubscriptions(changedService, changedPath) {
  const normalizedService = canonicalizeServicePath(changedService);
  const normalizedPath = normalizePath(changedPath || "/");
  for (const client of wsServer.clients) {
    if (
      !client ||
      client.readyState !== client.OPEN ||
      client.isDevControl ||
      client.isVehicleFeed ||
      !client.rudiSubscriptions ||
      client.rudiSubscriptions.size === 0
    ) {
      continue;
    }
    for (const subscription of client.rudiSubscriptions.values()) {
      if (!subscription || subscription.canonicalService !== normalizedService) {
        continue;
      }
      if (!areRelatedRudiPaths(subscription.fullPath, normalizedPath)) {
        continue;
      }
      try {
        sendRudiActionResponse(
          client,
          subscription.wireService,
          subscription.requestId,
          200,
          resolveRudiSubscriptionBody(subscription),
        );
      } catch (error) {
        sendRudiActionError(client, subscription.wireService, subscription.requestId, 500, {
          error: String(error.message || error),
        });
      }
    }
  }
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

function normalizeActionCommand(rawCommand) {
  const command = String(rawCommand || "retrieve").trim().toLowerCase();
  if (
    command === "retrieve" ||
    command === "get" ||
    command === "read" ||
    command === "retrieveelement" ||
    command === "getelement"
  ) {
    return "retrieve";
  }
  if (
    command === "insert" ||
    command === "create" ||
    command === "add" ||
    command === "insertelement" ||
    command === "addelement" ||
    command === "createelement"
  ) {
    return "insert";
  }
  if (
    command === "update" ||
    command === "patch" ||
    command === "put" ||
    command === "upsert" ||
    command === "updateelement" ||
    command === "replaceelement" ||
    command === "upsertelement"
  ) {
    return "update";
  }
  if (
    command === "delete" ||
    command === "remove" ||
    command === "deleteelement" ||
    command === "removeelement"
  ) {
    return "delete";
  }
  return command || "retrieve";
}

function handleActionRequest(ws, message) {
  const fallbackService = ws && ws.rudiDefaultService ? ws.rudiDefaultService : "/registry";
  const wireService = message && message.service ? String(message.service) : fallbackService;
  const service = inferServiceRoot(wireService);
  const request = parseActionRequest(message || {});
  const requestId = Number.isFinite(request.requestId) ? request.requestId : 0;
  const command = normalizeActionCommand(request.command);
  const rawRequestPath = request.path || "/";
  const requestPath = normalizePath(rawRequestPath);
  const fullPath = resolveResourcePath(wireService, requestPath);
  const requestBody = decodeSerializablePayload(request.body);
  const isPersistentRequest = isPersistentRetrieveRequest(service, command, requestPath, requestBody);

  try {
    const actionResult = executeRudiAction(wireService, command, rawRequestPath, requestBody);
    const responseBody = actionResult.responseBody;

    sendRudiActionResponse(ws, wireService, requestId, 200, responseBody);

    if (isPersistentRequest) {
      rememberRudiSubscription(ws, {
        requestId,
        wireService,
        canonicalService: canonicalizeServicePath(service),
        requestPath,
        rawRequestPath,
        fullPath,
        requestBody: isPlainObject(requestBody) ? deepClone(requestBody) : requestBody,
      });
      return;
    }

    sendRudiActionCompleted(ws, wireService, requestId);

    if (["update", "insert", "delete"].includes(command)) {
      notifyRudiSubscriptions(service, fullPath);
    }
    if (service === "/registry" && command === "insert") {
      notifyRudiSubscriptions("/registry", rawRequestPath || "/");
    }
  } catch (error) {
    sendRudiActionError(ws, wireService, requestId, 500, {
      error: String(error.message || error),
      command,
      path: fullPath,
    });
  }
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
      ? normalizedPathname
      : "/registry";
  console.log(
    `[ws] connect path=${pathname} defaultService=${ws.rudiDefaultService} canonical=${inferServiceRoot(
      ws.rudiDefaultService,
    )}`,
  );
  if (ws.isDevControl) {
    devControlClients.add(ws);
    sendWs(ws, {
      type: "dev.catalog",
      payload: buildDevControlCatalog(),
    });
    sendWs(ws, {
      type: "dev.state.changed",
      payload: buildDevControlStateSnapshot(),
    });
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
  getRudiSubscriptions(ws);

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
    if (ws.isDevControl && message.type === "dev.command") {
      executeDevControlCommand(message.command, message.payload || {})
        .then((result) => {
          sendWs(ws, {
            type: "dev.command.result",
            payload: result,
          });
        })
        .catch((error) => {
          sendWs(ws, {
            type: "dev.command.result",
            payload: {
              ok: false,
              error: String(error.message || error),
              state: buildDevControlStateSnapshot(),
            },
          });
        });
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
    if (message.type === "abortRequest") {
      const requestId =
        Number.isFinite(message.requestId) ? message.requestId : Number(message.payload);
      if (Number.isFinite(requestId)) {
        dropRudiSubscription(ws, requestId);
      }
      return;
    }
    if (message.type === "actionRequest") {
      handleActionRequest(ws, message);
      return;
    }
    if (message.type === "action") {
      if (
        message.service !== undefined ||
        message.path !== undefined ||
        message.command !== undefined ||
        message.requestId !== undefined
      ) {
        handleActionRequest(ws, {
          ...message,
          type: "actionRequest",
        });
        return;
      }
      const legacyRequest = resolveLegacyTopicRequest(message.topic || "/");
      const legacyCommand = normalizeActionCommand(message.action || message.command || "retrieve");
      const legacyRequestBody = decodeSerializablePayload(message.body);
      try {
        const actionResult = executeRudiAction(
          legacyRequest.wireService,
          legacyCommand,
          legacyRequest.rawRequestPath,
          legacyRequestBody,
        );
        if (["update", "insert", "delete"].includes(actionResult.command)) {
          notifyRudiSubscriptions(actionResult.service, actionResult.fullPath);
          if (actionResult.service === "/registry" && actionResult.command === "insert") {
            notifyRudiSubscriptions("/registry", legacyRequest.rawRequestPath || "/");
          }
        }
        sendWs(ws, {
          action: "actionResponse",
          topic: legacyRequest.responseTopic,
          status: "success",
          body: actionResult.responseBody,
        });
      } catch (error) {
        sendWs(ws, {
          action: "actionResponse",
          topic: legacyRequest.responseTopic,
          status: "error",
          body: {
            error: String(error.message || error),
            command: legacyCommand,
            path: legacyRequest.responseTopic,
          },
        });
      }
    }
  });

  ws.on("close", (code, reason) => {
    const reasonText = reason ? String(reason) : "";
    console.log(`[ws] close path=${pathname} code=${code} reason=${reasonText}`);
    devControlClients.delete(ws);
    vehicleFeedClients.delete(ws);
    clearRudiSubscriptions(ws);
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
  console.log(`[boot] Build: ${SERVER_BUILD_TAG}`);
  console.log(`[boot] Mode: ${SERVE_AUDI_UI ? "api+ui" : "api-only"}`);
  if (SERVE_AUDI_UI) {
    console.log(`[boot] UI root: ${audiRoot}`);
  }
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
