# UI Endpoint Contract (Phase 1)

## Quelle / Methodik
- Analysierte Bundles: `audi/main.17a1455a44197c571024.js`, `audi/vendor.34f22af5ffbffad14cd9.js`, `audi/index.html`.
- Extraktionsartefakte:
  - `_analysis/paths_from_raw.txt` (alle `Paths.from("/...")` Treffer)
  - `_analysis/ui_paths_unique.tsv` (572 eindeutige RUDI-Pfade)
  - `_analysis/ui_top_paths.tsv` (Top-Pfade nach Häufigkeit)
  - `_analysis/ui_presence_checks.txt` + `_analysis/ui_presence_paths.txt` (Shell-nahe `isPresent`/Presence-Checks)
  - `_analysis/ui_core_hits.txt` (WS/config/i18n-Hits)
- Probe-Run (statisch, ohne API):
  - `python -m http.server 5173` auf `./audi` → `GET /`, `GET /runtime...js`, `GET /main...js` jeweils `200`.
  - `GET /i18n/ten-inch/en_US.json` → `404`, `GET /i18n/ten-inch/en_US.json.gz` → `200` (Hinweis auf notwendiges `.json -> .json.gz` Handling).

## 1) Kern-Endpunkte (mit Fundstellen)

| Methode | Endpoint / URI | Erwartetes Format | Fundstelle |
|---|---|---|---|
| `GET` | `/etc/eso/rudi.json` | JSON (RUDI Runtime Config) | `audi/vendor.34f22af5ffbffad14cd9.js:50023`, `audi/vendor.34f22af5ffbffad14cd9.js:180546`, `audi/vendor.34f22af5ffbffad14cd9.js:69784` |
| `GET` | `/etc/eso/tracing.json` | JSON (Tracing Config) | `audi/vendor.34f22af5ffbffad14cd9.js:4819`, `audi/vendor.34f22af5ffbffad14cd9.js:180546`, `audi/vendor.34f22af5ffbffad14cd9.js:69784` |
| `WS` | `rudi-ws://localhost:14713/registry` | RUDI Message Envelope (`actionRequest`) | `audi/vendor.34f22af5ffbffad14cd9.js:49932`, `audi/vendor.34f22af5ffbffad14cd9.js:187258` |
| `WS` | `rudi-ws://<domain>:14711/<servicePath>` (translator) | RUDI Message Envelope (`actionRequest`) | `audi/vendor.34f22af5ffbffad14cd9.js:127647`, `audi/vendor.34f22af5ffbffad14cd9.js:127654` |
| `WS` | `ws://localhost:14710` | WebSocket Backend (Logs/Events) | `audi/vendor.34f22af5ffbffad14cd9.js:280981` |
| `GET` | `/i18n/ten-inch/<locale>.json` (logisch), Dateibestand als `.json.gz` | JSON (komprimiert) | Prefix-Wahl: `audi/main.17a1455a44197c571024.js:91575`; Loader-Suffix default `.json`: `audi/vendor.34f22af5ffbffad14cd9.js:185510` |
| `GET` | `/i18n/eight-inch/<locale>.json` (logisch), Dateibestand als `.json.gz` | JSON (komprimiert) | Prefix-Wahl: `audi/main.17a1455a44197c571024.js:91576`; Loader-Suffix default `.json`: `audi/vendor.34f22af5ffbffad14cd9.js:185510` |
| `GET` | `/media/<file>.mp3` | Audio (`audio/mpeg`, Range sinnvoll) | Medien liegen unter `audi/media/*` |

## 2) RUDI-Operationsmodell (Methoden-Erkennung)
- Globale Operationen aus Runtime:
  - `RETRIEVE`, `UPDATE`, `DELETE`, `INSERT` in `audi/vendor.34f22af5ffbffad14cd9.js:1880-1883`.
- Transport:
  - `rudi-ws` wird intern auf `ws://<host><path>` gemappt (`audi/vendor.34f22af5ffbffad14cd9.js:29658-29660`).
- Für einzelne Pfade ist die Methode im Minified Build häufig indirekt verdrahtet; deshalb pro Pfad teils nur `UNKNOWN` möglich (siehe `_analysis/ui_paths_unique.tsv`).

## 3) Breiter Endpoint-Korpus aus dem Build
- Gesamt: `572` eindeutige `Paths.from("/...")`-Pfade (`_analysis/ui_paths_unique.tsv`).
- Top-Pfade nach Häufigkeit (Ausschnitt):
  - `/switchControls` (66)
  - `/valueIndications` (40)
  - `/switchIndications` (34)
  - `/valueControls` (34)
  - `/settings` (32)
  - `/navi` (29)
  - `/media` (17)
  - `/system` (16)
  - `/display` (15)
  - `/trafficevents` (11)
  - Quelle: `_analysis/ui_top_paths.tsv`

## 4) Shell-nahe Must-have vs Nice-to-have

### Must-have (für stabile UI-Shell)
- Statische Assets + SPA:
  - `/` -> `index.html`
  - JS/CSS Chunks aus `audi/index.html`
- Konfiguration:
  - `GET /etc/eso/rudi.json`
  - optional/fallback-freundlich: `GET /etc/eso/tracing.json`
- RUDI Transport:
  - WebSocket auf `/registry` (entspricht `rudi-ws://localhost:14713/registry`)
  - generischer WebSocket-Handler für service paths
- Ressourcen, die im Bundle explizit als Presence-Gates auftauchen:
  - `/vehicleinformation/vehicleData` (`audi/main.17a1455a44197c571024.js:44280`)
  - `/system/components` (`audi/main.17a1455a44197c571024.js:59142`)
  - `/system/configurations` (`audi/main.17a1455a44197c571024.js:125304`)
  - `/system/persistenceentries` (`audi/main.17a1455a44197c571024.js:163687`)
  - `/language/components` (`audi/main.17a1455a44197c571024.js:158875`)
  - `/textinput/inputfields`, `/textinput/inputlanguages`, `/textinput/inputproviders` (`audi/main.17a1455a44197c571024.js:166750`)
- i18n:
  - `.json` Request auf `.json.gz` Bestand abbilden (sonst 404)

### Nice-to-have (iterativ ergänzen)
- Weitere Presence-Checks aus `_analysis/ui_presence_paths.txt` (58 Pfade), z.B.:
  - `/usermanagement/settings`, `/radio/tuners`, `/sound/settings`, `/webappmanagement/entrypoints`, `/bluetooth/*`, `/onlinemedia/*`, `/garagedoor/*`.
- Breiter Pfadkorpus aus `_analysis/ui_paths_unique.tsv` (572 Pfade).

## 5) Relative vs. absolute API-Nutzung
- Kein belastbarer Hinweis auf klassisches REST `/api/*` im UI-Code (nur Fremdstring-Treffer wie `angular.io/api`).
- Primärmodell ist RUDI über WebSocket + Config-Dateien unter `/etc/eso` + statische Ressourcen.
- Es existieren viele harte `http://...:14712/viwi/...` URLs in Strings (`_analysis/ui_urls_unique.tsv`), wahrscheinlich Fixture/Testdaten im Bundle (Hypothese), nicht zwingend initiale Shell-Anforderungen.

## 6) Auth/Token-Hinweise
- Keine klaren Hinweise auf `Authorization`/`Bearer` Header im Transportcode.
- `token` kommt oft als Datenfeld in Domänenobjekten vor (nicht als nachweisliche HTTP-Auth-Pflicht).

