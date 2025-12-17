@echo off
echo ========================================
echo   Mandril S.R.L - Local Server
echo ========================================
echo.
echo Starting local web server...
echo.
echo Open your browser and go to:
echo http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

cd theme
python -m http.server 8000

pause
