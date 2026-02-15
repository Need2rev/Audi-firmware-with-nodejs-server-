# mmi-api (Local Dev/Mock Server)

Lokaler Dev-Server fuer das `./audi` Bundle. Ziel ist reine UI-Emulation auf dem lokalen Rechner (kein Fahrzeug-/Firmware-Deployment).

## Voraussetzungen
- Node.js 18+ (wegen `fetch` im Smoke-Test)
- npm

## Start
Vom Repo-Root:

```bash
npm run dev
```

Direkt in `mmi-api`:

```bash
npm install
npm run dev
```

Server-URL: `http://127.0.0.1:14713`

## Verfuegbare Scripts
- `npm run dev` -> startet API + UI-Static Hosting + WebSocket
- `npm run start` -> identisch zu `dev`
- `npm run smoke` -> prueft `GET /api/health` und `GET /`

## Ports und Env
- `PORT` (default: `14713`)
- `HOST` (default: `127.0.0.1`)
- `RUDI_HOST` (default: `localhost`)
- `DEV_CORS` (`true|false`, default: `true`)

## HTTP Endpoints
- `GET /api/health`
- `GET /api/media/library`
- `GET /api/media/stream/:id`
- `GET /etc/eso/rudi.json`
- `GET /etc/eso/tracing.json`
- `GET /media/*` (statisch)
- `GET /i18n/.../*.json` -> wird auf vorhandene `.json.gz` Dateien gemappt
- `GET /` + SPA-Fallback -> `audi/index.html`
- `ALL /api/*` (unbekannt) -> `501 { error: "not_implemented", method, path }`

## What `rudi.json` Is
- `rudi.json` ist die Runtime-Konfiguration fuer die RUDI-Service-Aufloesung.
- Das UI laedt sie ueber `http://<host>:14713/etc/eso/rudi.json` (in manchen Setups faelschlich als `//etc/eso/rudi.json`).
- Darin stehen u.a.:
  - `backends` (z. B. `rudi-ws`)
  - `service_registry_locators` (hier auf den lokalen Mock-WS)
  - `services` (mindestens `/registry`)
- Im Mock liegt die Datei unter `mmi-api/fixtures/rudi.json` und wird zur Laufzeit mit Host/Port angereichert.

## WebSocket
- Upgrade-Endpunkt: gleicher Host/Port (auch `/ws` fuer einfache Vehicle-State Pushes)
- RUDI-kompatible Message-Typen (Mock):
  - `actionRequest`
  - `actionResponse`
  - `actionCompleted`
  - `ping`/`pong`

### `/ws` Vehicle-State Feed
Bei Verbindung auf `/ws` sendet der Server periodisch `vehicle_state` Messages (einfaches JSON aus `fixtures/vehicle-state.json`).

## Fixtures
- `fixtures/rudi.json`
- `fixtures/tracing.json`
- `fixtures/rudi-resources.json`
- `fixtures/vehicle-state.json`

## Offene TODO Endpoints
Extrahierter UI-Contract und weitere Kandidaten fuer verfeinerte Mocks:
- `../_analysis/ui_endpoints.md`
- `../_analysis/ui_paths_unique.tsv`
- `../_analysis/ui_presence_paths.txt`

