# Forensic Report: ./audi

Scope: Offline analysis of all files under ./audi with metadata extraction only (no bypass, patching, or exploit workflows).
Date: 2026-02-13

**A) Was Ist Das?**
- High-level: The folder looks like a packaged HMI/UI asset bundle (Angular build) rather than a classic SWDL firmware update. Evidence includes many Angular chunk files (`main`, `vendor`, `runtime`, `polyfills`), massive image assets (mostly WebP), i18n translation bundles, and media files.
- MIB3 cluster hints: `audi/versions.json:3` contains `textToolVersion` with `MIB3_Clu35_GUI_v54934`, and many dependencies embed `MIB3CLU35` strings (example `audi/versions.json:121`).
- Likely format hypothesis: This appears to be a UI/asset package for Audi MIB3 cluster (CLU35) components, not a signed firmware update container. Hypothesis is based on the version strings and asset-heavy layout; no SWDL/metainfo/manifest files were found.

**Inventory Summary (Step 1)**
- Total files: 7,103
- Total size: 499,841,997 bytes (~476.69 MiB)
- File class counts:
  - Image: 6,675
  - Text: 184
  - Archive/Container: 84
  - Binary/Other: 68
  - Video: 62
  - Audio: 30
- Top 10 largest files:
  - `audi/esel/W772_VehicleTiltAngle/gyro_AU53636.iaa` (12.73 MiB, application/octet-stream)
  - `audi/esel/W772_VehicleTiltAngle/gyro_AU53630.iaa` (11.45 MiB, application/octet-stream)
  - `audi/esel/W772_VehicleTiltAngle/gyro_AU42600.iaa` (11.38 MiB, application/octet-stream)
  - `audi/esel/W772_VehicleTiltAngle/gyro_AU51607.iaa` (11.03 MiB, application/octet-stream)
  - `audi/vendor.34f22af5ffbffad14cd9.js` (10.18 MiB, text/javascript)
  - `audi/esel/W772_VehicleTiltAngle/gyro_AU53600.iaa` (9.64 MiB, application/octet-stream)
  - `audi/media/01. DJ Kuroneko - stray (VIP).mp3` (9.42 MiB, audio/mpeg)
  - `audi/esel/W772_VehicleTiltAngle/gyro_AU58240.iaa` (9.19 MiB, application/octet-stream)
  - `audi/media/04. Dazegxd - Select.mp3` (8.59 MiB, audio/mpeg)
  - `audi/media/02. Dazegxd - Emotion Engine (feat. Kaiyko).mp3` (8.07 MiB, audio/mpeg)
- Full inventory with SHA256, size, mtime, and type is in `./_analysis/inventory.csv` and `./_analysis/inventory.json`.

**B) Welche Komponenten?**
- Global versions:
  - `gitRevision` = `35.12-215100` (`audi/versions.json:2`)
  - `textToolVersion` = `20210215_Audi_Textexport_MIB3_Clu35_GUI_v54934` (`audi/versions.json:3`)
- Platform bundles:
  - `@fw_rudi/angular` = `7.46.7-SR17.MIB3CLU35` (`audi/versions.json:127`)
  - `@mib3-audi/assets` = `35.12.56` (`audi/versions.json:134`)
  - `@mib3-audi/assets-bentley` = `35.12.8` (`audi/versions.json:135`)
  - `@mib3-audi/assets-lamborghini` = `35.12.56` (`audi/versions.json:136`)
- Example functional modules (many more in `dependencies`):
  - `@fw_generated/vehicletiltangle` = `1.0.0-0.0.0-7.46.7.SR17-MIB3CLU35-I145-CI45` (`audi/versions.json:121`)
  - `@fw_generated/media` = `12.7.0-0.0.1-7.46.7.SR17-MIB3CLU35-I145-CI45` (`audi/versions.json:72`)
  - `@fw_generated/navi` = `10.0.1-0.0.1-7.46.7.SR17-MIB3CLU35-I145-CI45-m` (`audi/versions.json:76`)
  - `@fw_generated/system` = `7.3.0-0.0.1-7.46.7.SR17-MIB3CLU35-I145-CI45` (`audi/versions.json:105`)
- Asset pipeline metadata from ESEL node file:
  - `EngineBuildString` = `windows_64bit_release_for_host__v2.115_0` (`audi/esel/W772_VehicleTiltAngle/gyro_AU31627_nodes.json:1289`)
  - `StudioVersionString` = `2.24.10-1017` (`audi/esel/W772_VehicleTiltAngle/gyro_AU31627_nodes.json:1290`)
- Full dependency list exported to `./_analysis/dependencies.csv`.

**C) Welche Plattform/Region?**
- Platform evidence:
  - Repeated `MIB3CLU35` and train string `7.46.7.SR17-...-I145-CI45` across `@fw_generated` modules (example `audi/versions.json:121`).
  - `textToolVersion` explicitly references `MIB3_Clu35` (`audi/versions.json:3`).
- Region hints:
  - i18n bundles include many locales (e.g., `en_US`, `en_GB`, `de_DE`, `fr_FR` in `audi/i18n/*/*.json.gz`). This suggests multi-region language support, but no explicit EU/US/ROW flag was found.
- Hypothesis: Target is an Audi MIB3 cluster (CLU35) UI/asset package; I145/CI45 likely identify a train/build or integration line but are not explicitly documented in the package.

**D) Integrity/Signaturen**
- No `metainfo2.txt`, `metainfo.txt`, `swdl*`, `pkginfo`, `manifest`, or `signature` artifacts found in `./audi` or extracted data. The only archive-like files are `.gz` translation bundles (84 files) tracked in `./_analysis/step2_artifacts.csv`.
- No cryptographic signature files or manifests were present in this package.
- SHA256 hashes computed for all files (see `./_analysis/inventory.csv`).

**E) Auffaelligkeiten**
- ESEL container header observed:
  - `gyro_AU31627.iaa` starts with ASCII `ESEL` at offset `0x0` (binary header) indicating an ESEL asset container (see `audi/esel/W772_VehicleTiltAngle/gyro_AU31627.iaa`, offset 0x0).
- Embedded GLSL shader source:
  - `#version 300 es` found at offset `0x304624` in `audi/esel/W772_VehicleTiltAngle/gyro_AU31627.iaa`.
- Keyword scan on selected `.iaa` files did not yield clear train/build strings beyond shader headers; see `./_analysis/strings_hits.csv`.
- ESEL scene graph metadata:
  - Node and material structures plus shader URIs are stored in paired JSON (example file `audi/esel/W772_VehicleTiltAngle/gyro_AU31627_nodes.json`).
  - Asset timestamps such as `creationTime` = `2019-07-24T11:08:47Z` and `modificationTime` = `2020-06-04T07:54:16Z` appear in the node resources (examples at `audi/esel/W772_VehicleTiltAngle/gyro_AU31627_nodes.json:860` and `:862`).
- Asset-heavy content:
  - 6,642 WebP images and 84 gzipped i18n JSON files indicate UI asset packaging rather than firmware images.

**F) Reproduzierbarkeit**
Commands executed (representative):
- Inventory + SHA256 + type heuristics:
  - `Get-ChildItem -Path .\audi -Recurse -File`
  - `Get-FileHash -Algorithm SHA256 -Path <file>`
  - Custom magic/extension classifier (PowerShell, stored results in `./_analysis/inventory.csv`).
- Artifact search:
  - `rg --files -g 'metainfo2.txt' -g 'metainfo.txt' -g 'swdl*' -g '*pkginfo*' -g '*manifest*' -g '*signature*' -g '*.swdl' -g '*.bin' -g '*.img' -g '*.iso' -g '*.zip' -g '*.7z' -g '*.rar' -g '*.tar*' -g '*.gz' -g '*.xz' .\audi`
  - PowerShell filter with regex (results in `./_analysis/step2_artifacts.csv`).
- Archive extraction (read-only):
  - `.gz` extraction via `System.IO.Compression.GzipStream` into `./_extract`.
- Extracted inventory:
  - Same inventory pipeline on `./_extract` (results in `./_analysis/inventory_extract.csv`).
- Binary inspection:
  - `Format-Hex -Path <file> -Count 64`
  - ASCII/UTF-16 string scan for keyword matches (results in `./_analysis/strings_hits.csv`).

Tool versions:
- PowerShell: 7.5.4
- ripgrep: 15.1.0

Missing/failed tools:
- `file.exe` (from Git for Windows) failed with Win32 error 5 when invoked at scale; type detection fell back to extension + magic-byte heuristics.
- `binwalk` package not available via `winget` (`ReFirmLabs.Binwalk` not found).
- `binwalk` and `pybinwalk` could not be installed via `pip` (no matching distribution in this environment).
- `strings`, `fdisk`, `parted` not available in this environment.

Artifacts generated:
- `./_analysis/inventory.csv`, `./_analysis/summary.json`
- `./_analysis/step2_artifacts.csv`
- `./_analysis/inventory_extract.csv`, `./_analysis/summary_extract.json`
- `./_analysis/strings_hits.csv`
- `./_analysis/dependencies.csv`
- Extracted files in `./_extract/`

## Addendum: Tool-Install + Tiefenanalyse `vehicletiltangle` (2026-02-13)

**Installationsstatus**
- `7-Zip` wurde erfolgreich installiert (Version `25.01`) und genutzt ueber `C:\Program Files\7-Zip\7z.exe`.
- `binwalk` konnte nicht installiert werden (kein passendes `winget`-Paket; auch kein passendes `pip`-Paket in dieser Umgebung).

**Zielkomponente**
- Fokus auf `@fw_generated/vehicletiltangle` (`audi/versions.json:121`).
- Analysierter Asset-Block: `audi/esel/W772_VehicleTiltAngle/` mit `9` `.iaa`-Containern und `9` zugehoerigen `_nodes.json`.

**Container-Fingerprint (`.iaa`)**
- Alle `9` Dateien starten mit `ESEL` bei Offset `0x0` (siehe `./_analysis/vehicletiltangle_iaa_fingerprints.csv`).
- `7z`-Probe fuer alle `9` Dateien: `not_archive` (`Cannot open the file as archive`), Exitcode `2` (siehe `./_analysis/vehicletiltangle_7z_probe.csv`).
- In allen `9` `.iaa` wurde eingebetteter GLSL-Code erkannt (`#version 300 es`) mit dateispezifischen Offsets; Beispiel:
  - `gyro_AU31627.iaa`: Offset `3163684` (siehe `./_analysis/vehicletiltangle_glsl_snippets.csv`).
- String-Indizien zeigen konsistentes Tooling:
  - `ESEL-Studio 2.24.10-1017` in allen `9` `.iaa` (siehe `./_analysis/vehicletiltangle_iaa_keystrings.csv`).
  - Beispieldatei enthaelt zusaetzlich Shader-Token `sampler2D uTexture0;` (Offset `3164779`) und den Kommentaranfang mit `ESEL-Studio` im GLSL-Block.
- Hinweise auf `ZIP`/`GZIP`-Magic innerhalb einzelner `.iaa` sind sehr wahrscheinlich False Positives in Binardaten:
  - Entpackprobe an den gefundenen `GZIP`-Offsets schlug fuer alle Dateien fehl (`decompress_error`), siehe `./_analysis/vehicletiltangle_gzip_probe.csv`.

**JSON-/Metadaten-Fingerprint (`_nodes.json`)**
- Einheitliche Build-Metadaten in allen `9` Node-Dateien:
  - `EngineBuildString = windows_64bit_release_for_host__v2.115_0`
  - `StudioVersionString = 2.24.10-1017`
  - Aggregat siehe `./_analysis/vehicletiltangle_nodes_summary.csv`.
- Beispielreferenzen:
  - `audi/esel/W772_VehicleTiltAngle/gyro_AU31627_nodes.json:1289` (`EngineBuildString`)
  - `audi/esel/W772_VehicleTiltAngle/gyro_AU31627_nodes.json:1290` (`StudioVersionString`)
  - `audi/esel/W772_VehicleTiltAngle/gyro_AU31627_nodes.json:375` (`RT40_FPK_AU316_2_Q4_etron`)
  - `audi/esel/W772_VehicleTiltAngle/gyro_AU31627_nodes.json:844` (Shader URI, Beispiel)
  - `audi/esel/W772_VehicleTiltAngle/gyro_AU31627_nodes.json:1142` (Texture URI, Beispiel)

**Neue Artefakte (Addendum)**
- `./_analysis/vehicletiltangle_iaa_fingerprints.csv`
- `./_analysis/vehicletiltangle_7z_probe.csv`
- `./_analysis/vehicletiltangle_iaa_string_hits.csv`
- `./_analysis/vehicletiltangle_iaa_keystrings.csv`
- `./_analysis/vehicletiltangle_gzip_probe.csv`
- `./_analysis/vehicletiltangle_glsl_snippets.csv`
- `./_analysis/vehicletiltangle_json_snippets.csv`
- `./_analysis/vehicletiltangle_nodes_summary.csv`
