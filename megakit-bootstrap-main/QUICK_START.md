# 🚀 Быстрый старт | Quick Start Guide

## 🇷🇺 Русский

### Открыть сайт локально (без сервера)

1. **Откройте файл в браузере:**
   - Перейдите в папку `theme/`
   - Дважды щелкните на файл `index.html`
   - Сайт откроется в браузере

### Открыть сайт с локальным сервером (рекомендуется)

#### Вариант 1: С помощью Python

```bash
# Перейдите в папку theme
cd theme

# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

Откройте в браузере: `http://localhost:8000`

#### Вариант 2: С помощью Node.js (http-server)

```bash
# Установите http-server (один раз)
npm install -g http-server

# Перейдите в папку theme
cd theme

# Запустите сервер
http-server -p 8000
```

Откройте в браузере: `http://localhost:8000`

#### Вариант 3: С помощью VS Code

1. Установите расширение "Live Server" в VS Code
2. Откройте папку `theme` в VS Code
3. Щелкните правой кнопкой мыши на `index.html`
4. Выберите "Open with Live Server"

### Редактирование контента

#### Изменить тексты:

Все тексты находятся в файле `theme/js/language.js`:

```javascript
const translations = {
    ro: {
        'nav-home': 'Acasă',  // ← Измените здесь
        // ...
    },
    en: {
        'nav-home': 'Home',   // ← Измените здесь
        // ...
    }
};
```

#### Изменить цвета:

Откройте файл `theme/css/style.css` и найдите:

```css
/* Основной цвет */
rgb(247, 87, 87)  /* Красный - измените на свой цвет */
```

Замените все вхождения `rgb(247, 87, 87)` на ваш цвет, например:
- `#1a4d7d` - синий
- `#2ecc71` - зеленый
- `#e74c3c` - красный

#### Изменить изображения:

1. Замените файлы в папке `theme/images/`
2. Убедитесь, что новые изображения имеют те же названия
3. Или измените пути в CSS/HTML файлах

### Быстрая публикация

#### GitHub Pages (бесплатно)

```bash
# 1. Инициализируйте Git
git init
git add .
git commit -m "Initial commit"

# 2. Создайте репозиторий на GitHub
# 3. Добавьте удаленный репозиторий
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# 4. Включите GitHub Pages в настройках репозитория
```

#### Netlify (бесплатно, самый быстрый)

1. Зайдите на [netlify.com](https://www.netlify.com)
2. Перетащите папку `theme/` в окно Netlify
3. Готово! Ваш сайт опубликован

### Проверка перед публикацией

✅ **Чеклист:**

- [ ] Все ссылки работают
- [ ] Оба языка (RO/EN) переключаются корректно
- [ ] Email адрес обновлен на правильный
- [ ] Контактная информация верна
- [ ] Изображения загружаются
- [ ] Сайт корректно отображается на мобильных устройствах
- [ ] Нет ошибок в консоли браузера (F12 → Console)

### Структура проекта

```
megakit-bootstrap-main/
└── theme/                    ← Основная папка сайта
    ├── index.html           ← Главная страница (начните отсюда)
    ├── css/
    │   └── style.css        ← Стили (цвета, шрифты)
    ├── js/
    │   ├── script.js        ← Основные функции
    │   └── language.js      ← Тексты на разных языках
    ├── images/              ← Изображения сайта
    │   ├── bg/             ← Фоновые изображения
    │   └── ...
    └── plugins/             ← Библиотеки (Bootstrap, jQuery)
```

### Полезные команды

```bash
# Проверить статус Git
git status

# Посмотреть изменения
git diff

# Отменить последний коммит (осторожно!)
git reset --soft HEAD~1

# Обновить сайт на GitHub
git add .
git commit -m "Обновление сайта"
git push
```

### Советы по редактированию

1. **Делайте резервные копии** перед большими изменениями
2. **Тестируйте локально** перед публикацией
3. **Используйте Git** для отслеживания изменений
4. **Проверяйте на мобильных** устройствах

### Получить помощь

- 📖 Полная документация: `README.md`
- 🚀 Инструкция по публикации: `DEPLOY_GUIDE.md`
- 📧 Техподдержка: [GitHub Issues](https://github.com/USERNAME/REPO/issues)

---

## 🇬🇧 English

### Open website locally (without server)

1. **Open file in browser:**
   - Navigate to `theme/` folder
   - Double-click on `index.html`
   - Website will open in your browser

### Open website with local server (recommended)

#### Option 1: Using Python

```bash
# Navigate to theme folder
cd theme

# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

Open in browser: `http://localhost:8000`

#### Option 2: Using Node.js (http-server)

```bash
# Install http-server (once)
npm install -g http-server

# Navigate to theme folder
cd theme

# Start server
http-server -p 8000
```

Open in browser: `http://localhost:8000`

#### Option 3: Using VS Code

1. Install "Live Server" extension in VS Code
2. Open `theme` folder in VS Code
3. Right-click on `index.html`
4. Select "Open with Live Server"

### Editing Content

#### Change text:

All text is in `theme/js/language.js`:

```javascript
const translations = {
    ro: {
        'nav-home': 'Acasă',  // ← Change here
        // ...
    },
    en: {
        'nav-home': 'Home',   // ← Change here
        // ...
    }
};
```

#### Change colors:

Open `theme/css/style.css` and find:

```css
/* Main color */
rgb(247, 87, 87)  /* Red - change to your color */
```

Replace all `rgb(247, 87, 87)` with your color, for example:
- `#1a4d7d` - blue
- `#2ecc71` - green
- `#e74c3c` - red

### Quick Deployment

#### GitHub Pages (free)

```bash
# 1. Initialize Git
git init
git add .
git commit -m "Initial commit"

# 2. Create repository on GitHub
# 3. Add remote repository
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main

# 4. Enable GitHub Pages in repository settings
```

#### Netlify (free, fastest)

1. Go to [netlify.com](https://www.netlify.com)
2. Drag and drop `theme/` folder to Netlify window
3. Done! Your site is published

### Pre-deployment Checklist

✅ **Checklist:**

- [ ] All links work
- [ ] Both languages (RO/EN) switch correctly
- [ ] Email address is correct
- [ ] Contact information is accurate
- [ ] Images load properly
- [ ] Site displays correctly on mobile devices
- [ ] No errors in browser console (F12 → Console)

---

© 2025 Mandril S.R.L
