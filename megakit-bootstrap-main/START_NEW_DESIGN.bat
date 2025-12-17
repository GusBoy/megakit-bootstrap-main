@echo off
echo.
echo ========================================
echo   ЗАПУСК САЙТА MANDRIL С НОВЫМ ДИЗАЙНОМ
echo ========================================
echo.
echo Новые цвета в стиле логотипа:
echo   - Белое меню
echo   - Темно-синий текст
echo   - Оранжевые акценты
echo   - Цветной логотип
echo.
echo Запуск сервера...
echo.

cd theme
python -m http.server 8000

pause
