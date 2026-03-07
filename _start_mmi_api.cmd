@echo off
cd /d C:\Users\Denni\Documents\GitHub\Audi-firmware-with-nodejs-server-\mmi-api
del /q server-runtime.log server-runtime.err.log 2>nul
set SERVE_AUDI_UI=false
start "" /b node server.js 1>server-runtime.log 2>server-runtime.err.log
ping 127.0.0.1 -n 3 >nul
type server-runtime.log
