@echo off
echo Starting Xero Excel Add-in...
cd /d "%~dp0"
node server.js &
start "" "excel.exe" /e
office-addin-debugging start manifest.xml