# mmi-api (Local Dev/Mock Server)

Lokaler Dev-Server fuer das `./audi` Bundle. Ziel ist reine UI-Emulation auf dem lokalen Rechner (kein Fahrzeug-/Firmware-Deployment).

## Voraussetzungen
- Node.js 18+ (wegen `fetch` im Smoke-Test)
- npm
- Linux Desktop/Lab-Umgebung fuer Audio:
  - `pipewire`
  - optional `pipewire-pulse` (Kompatibilitaet fuer Clients)
  - `mpv` (Audio-Player-Backend, wird von `mmi-api` gesteuert)
  - optional `wpctl` (Device-Listing)

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
Control-UI: `http://127.0.0.1:14713/dev/`

## Verfuegbare Scripts
- `npm run dev` -> startet API + UI-Static Hosting + WebSocket
- `npm run start` -> identisch zu `dev`
- `npm run smoke` -> prueft `GET /api/health` und `GET /`

## Ports und Env
- `PORT` (default: `14713`)
- `HOST` (default: `127.0.0.1`)
- `RUDI_HOST` (default: `localhost`)
- `DEV_CORS` (`true|false`, default: `true`)
- `AUDIO_BACKEND_STRICT` (`true|false`, default: `false`)

## Lokale Audio-Emulation (PipeWire)
Die Audiofunktion ist rein lokal fuer den Emulator und emuliert keine Fahrzeugsteuerung.

### Architektur (kurz)
- UI/Event Layer: WebSocket-Events (`media.*`, `audio.*`)
- Mock Media Service: `audio/mock-media-service.js`
- Audio Adapter (PipeWire bevorzugt): `audio/mpv-audio-adapter.js`
- Playback State + Broadcast: `audio/playback-state.js` und `audio.state.changed`

### Bevorzugtes Backend
- `mpv` wird mit `--ao=pipewire,pulse,alsa` gestartet.
- Dadurch wird PipeWire priorisiert, mit Fallback auf Pulse/ALSA im lokalen Dev-System.
- Auf Windows wird automatisch `--ao=wasapi,auto` verwendet.

### Fallback-Verhalten
- Wenn `mpv` nicht verfuegbar ist, schaltet der Server standardmaessig in den `stub`-Modus.
- Im `stub`-Modus bleiben `media.*` Events funktionsfaehig (State-Mock), aber ohne echte Audio-Ausgabe.
- Mit `AUDIO_BACKEND_STRICT=true` wird stattdessen bei fehlendem Backend ein Fehler geliefert.
- Status ist sichtbar ueber:
  - `GET /api/audio/state`
  - WebSocket `audio.state.changed`
  - Event-Resultate (`*.result`)

## HTTP Endpoints
- `GET /api/health`
- `GET /api/media/library`
- `GET /api/media/stream/:id`
- `GET /api/audio/state`
- `GET /api/audio/devices`
- `GET /api/audio/diagnostics`
- `POST /api/audio/event`
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
- Dev-Control WebSocket: `/dev/ws` (nur fuer lokale `media.*`/`sim.*` Events)
- RUDI-kompatible Message-Typen (Mock):
  - `actionRequest`
  - `actionResponse`
  - `actionCompleted`
  - `ping`/`pong`
- Emulator-Audio-Events:
  - `media.source.load`
  - `media.play`
  - `media.pause`
  - `media.stop`
  - `media.seek`
  - `media.volume.set`
  - `audio.device.list`
  - `audio.state.changed` (Broadcast)
- Emulator-Simulator-Events (lokal, nicht fahrzeuggebunden):
  - `sim.session.start`
  - `sim.session.stop`
  - `sim.user.entered`
  - `sim.user.left`
  - `sim.ignition.on` / `sim.ignition.off` (rein simuliert)
  - `sim.door.open` / `sim.door.close`
  - `sim.seat.occupied` / `sim.seat.empty`
  - `sim.state.changed` (Broadcast)

Hinweis: Der normale RUDI-WebSocket (`/`) sendet nur RUDI-kompatible Typen. Custom Emulator-Events laufen ueber `/dev/ws`, damit der UI-RUDI-Parser keine `Unsupported incoming message`-Fehler wirft.

### MCP Service Roots (Mock)
Fuer die UI-Service-Aufloesung werden diese Roots als online publiziert:
- `/mcpdisplaymanager`
- `/mcpinputmanager`
- `/mcppopupmanager`

### Beispielablauf (WebSocket)
1. Quelle laden:
```json
{"type":"media.source.load","payload":{"id":"1"}}
```
2. Start:
```json
{"type":"media.play","payload":{}}
```
3. Lautstaerke:
```json
{"type":"media.volume.set","payload":{"volume":35}}
```
4. Seek:
```json
{"type":"media.seek","payload":{"positionSec":42}}
```
5. Pause/Stop:
```json
{"type":"media.pause","payload":{}}
{"type":"media.stop","payload":{}}
```

Zu jedem Event kommt `<event>.result` zurueck, plus `audio.state.changed` als Status-Update.

### Beispiel (HTTP statt WS)
```bash
curl -X POST http://127.0.0.1:14713/api/audio/event \
  -H "Content-Type: application/json" \
  -d '{"type":"media.play","payload":{"id":"1"}}'
```

## Zusätzliche Emulator-API (Session/Sim)
- `GET /api/sim/state`
- `POST /api/sim/event`

Beispiel:
```bash
curl -X POST http://127.0.0.1:14713/api/sim/event \
  -H "Content-Type: application/json" \
  -d '{"type":"sim.ignition.on","payload":{}}'
```

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

