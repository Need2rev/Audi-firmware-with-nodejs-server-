const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');

const app = express();
const port = 14713;

app.use(cors());

// Pfad zum Ordner mit Ihren MP3-Dateien
const musicDirectory = path.join(__dirname, '..', 'audi', 'media');
// Pfad zum Ordner mit den MMI-UI-Dateien (von Ihrem "Go Live" Server)
const uiDirectory = path.join(__dirname, '..', 'audi');

// ----------------------------------------------------
// Simulierte HTTP API-Endpunkte
// ----------------------------------------------------

// Neuen Endpoint für rudi.json hinzufügen
app.get('/etc/eso/rudi.json', (req, res) => {
    // Lege den Pfad zur rudi.json fest
    const rudiPath = path.join(__dirname, 'rudi.json');
    // Sende die Datei
    res.sendFile(rudiPath, (err) => {
        if (err) {
            console.error('Fehler beim Senden von rudi.json:', err);
            res.status(404).send('rudi.json not found');
        } else {
            console.log('rudi.json gesendet.');
        }
    });
});

app.get('/api/media/usb', (req, res) => {
    console.log('Anfrage an /api/media/usb empfangen.');
    // Liste die Dateien im Musikverzeichnis auf
    fs.readdir(musicDirectory, (err, files) => {
        if (err) {
            console.error('Verzeichnis nicht gefunden:', err);
            return res.status(500).send('Verzeichnis nicht gefunden.');
        }
        // Filtern Sie die .mp3-Dateien heraus und erstellen Sie das gewünschte JSON-Format
        const mp3Files = files.filter(file => path.extname(file).toLowerCase() === '.mp3').map(file => ({
            "filename": file,
            "url": `/audi/media/${file}`
        }));
        // Erstellen Sie die endgültige JSON-Antwort
        const responseData = {
            "status": "ok",
            "message": "USB connected",
            "count": mp3Files.length,
            "files": mp3Files
        };
        // Senden Sie die JSON-Antwort
        res.json(responseData);
        console.log('Antwort an Client gesendet:', responseData);
    });
});

// Stellt statische Dateien für das UI bereit
app.use('/audi', express.static(uiDirectory));

// ----------------------------------------------------
// WebSocket-Server für MMI-Kommunikation
// ----------------------------------------------------

// WebSocket-Server
const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', ws => {
    console.log('Client verbunden.');

    ws.on('message', message => {
        try {
            const data = JSON.parse(message);
            console.log('Nachricht vom Client empfangen:', data);

            if (data.action === 'actionRequest' && data.topic) {
                const response = {
                    action: data.action,
                    topic: data.topic,
                    status: 'success',
                    body: {}
                };

                switch (data.topic) {
                    case '/registry/display':
                        // Korrigierte und detailliertere Antwort
                        response.body = {
                            "isAvailable": true,
                            "isInitialized": true,
                            "perceivableContext": {
                                "mainDisplay": {
                                    "hasMainScreen": true,
                                    "isDualDisplay": false
                                },
                                "currentRoute": "#/main"
                            }
                        };
                        break;
                    case '/driverassistance':
                        response.body = { "availability": "available" };
                        break;
                    case '/registry/trafficevents':
                        response.body = { "trafficevents": "unavailable" };
                        break;
                    case '/registry/apps':
                        response.body = {
                            "apps": {
                                "media": {
                                    "isAvailable": true,
                                    "isInitialized": true
                                },
                                "navi": {
                                    "isAvailable": true,
                                    "isInitialized": true
                                },
                                "phone": {
                                    "isAvailable": true,
                                    "isInitialized": true
                                },
                                "radio": {
                                    "isAvailable": true,
                                    "isInitialized": true
                                }
                            }
                        };
                        break;
                    default:
                        // Generische, aber gültige Antwort für alle anderen Anfragen
                        response.body = { "availability": "available" };
                        break;
                }
                ws.send(JSON.stringify(response));
                console.log('Antwort an Client gesendet:', response);
            }
        } catch (e) {
            console.error('Fehler beim Verarbeiten der WebSocket-Nachricht:', e);
        }
    });

    ws.on('close', () => {
        console.log('WebSocket-Verbindung geschlossen');
    });
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});