@echo off
title TRIBALONE - Ministry of Tribal Affairs Platform
color 0A

echo ========================================================
echo   TRIBALONE - Unified Tribal Scholarship Portal
echo   Ministry of Tribal Affairs (MoTA) - Problem ID 26238
echo ========================================================
echo.

:: --- Step 1: Go to the project directory (same folder as this .bat file) ---
cd /d "%~dp0"

:: --- Step 2: Kill any previously running Node.js server to free port 3000 ---
echo [1/4] Stopping any previously running Node.js server...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 1 /nobreak >nul

:: --- Step 3: Start the Node.js server in the background ---
echo [2/4] Starting TRIBALONE Node.js server on port 3000...
start /B node server.js

:: --- Step 4: Wait 2 seconds for the server to fully start ---
echo [3/4] Waiting for server to be ready...
timeout /t 2 /nobreak >nul

:: --- Step 5: Open the browser to the portal ---
echo [4/4] Opening TRIBALONE portal in your default browser...
start http://localhost:3000

echo.
echo ========================================================
echo   TRIBALONE is RUNNING at: http://localhost:3000
echo.
echo   LOGIN CREDENTIALS (Demo Mode):
echo   ================================
echo   Student  : ID = ST202600124   Password = password123
echo   Institute: ID = INST001        Password = password123
echo   Officer  : ID = SVO-TN-108    Password = password123
echo   Admin    : ID = MOTA-OFF-042  Password = password123
echo   Parent   : ID = ramesh.kumar.theni@gmail.com
echo.
echo   Press Ctrl+C or close this window to STOP the server.
echo ========================================================
echo.

:: Keep the window open and show server logs
node server.js

pause
