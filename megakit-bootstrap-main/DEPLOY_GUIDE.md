# Инструкция по публикации сайта Mandril на GitHub

## Шаг 1: Создание репозитория на GitHub

1. Зайдите на [GitHub](https://github.com) и войдите в свою учетную запись
2. Нажмите на "+" в правом верхнем углу и выберите "New repository"
3. Введите название репозитория (например, `mandril-website`)
4. Добавьте описание: "Официальный сайт компании Mandril S.R.L"
5. Выберите "Public" или "Private" (для GitHub Pages нужен Public)
6. **НЕ** добавляйте README, .gitignore или LICENSE (они уже есть в проекте)
7. Нажмите "Create repository"

## Шаг 2: Подготовка файлов

1. Откройте командную строку (Command Prompt) или PowerShell
2. Перейдите в папку с проектом:
   ```bash
   cd C:\Users\user\Downloads\megakit-bootstrap-main\megakit-bootstrap-main
   ```

## Шаг 3: Инициализация Git и загрузка файлов

Выполните следующие команды по порядку:

```bash
# Инициализация Git репозитория
git init

# Добавление всех файлов
git add .

# Создание первого коммита
git commit -m "Initial commit: Mandril S.R.L website"

# Переименование ветки в main (если нужно)
git branch -M main

# Добавление удаленного репозитория (замените YOUR_USERNAME и YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Загрузка файлов на GitHub
git push -u origin main
```

**Замените** `YOUR_USERNAME` на ваше имя пользователя GitHub и `YOUR_REPO` на название репозитория.

## Шаг 4: Настройка GitHub Pages

1. Перейдите в ваш репозиторий на GitHub
2. Нажмите на вкладку **Settings**
3. В левом меню найдите раздел **Pages**
4. В разделе "Source" выберите:
   - Branch: `main`
   - Folder: `/theme` (или `/root` если хотите использовать корневую папку)
5. Нажмите **Save**
6. Подождите 1-2 минуты

## Шаг 5: Доступ к сайту

После настройки GitHub Pages ваш сайт будет доступен по адресу:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

Если вы выбрали папку `/theme`, то:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## Обновление сайта

Когда вы захотите обновить сайт:

```bash
# Добавить изменения
git add .

# Создать коммит с описанием изменений
git commit -m "Описание изменений"

# Загрузить на GitHub
git push
```

## Альтернатива: Использование только папки theme

Если хотите использовать только содержимое папки `theme`:

1. Скопируйте все файлы из папки `theme/` в корень проекта
2. Удалите папку `theme/`
3. В GitHub Pages выберите `/ (root)` вместо `/theme`

## Настройка собственного домена (опционально)

Если у вас есть собственный домен (например, `mandril.md`):

1. В корне репозитория создайте файл `CNAME`
2. Впишите в него ваш домен: `www.mandril.md`
3. В настройках вашего домена добавьте DNS записи, указывающие на GitHub Pages
4. В настройках GitHub Pages укажите ваш домен

## Проблемы и решения

### Проблема: "Permission denied"
**Решение**: Используйте личный токен доступа (Personal Access Token) вместо пароля:
1. Перейдите в Settings > Developer settings > Personal access tokens
2. Создайте новый токен с правами на репозитории
3. Используйте токен вместо пароля при push

### Проблема: Сайт не отображается
**Решение**: 
- Проверьте, что GitHub Pages включен
- Подождите 5-10 минут после первой публикации
- Проверьте пути к файлам (должны быть относительными)

### Проблема: Стили не загружаются
**Решение**: Убедитесь, что пути к CSS и JS файлам относительные (не начинаются с `/`)

## Поддержка

Если возникли вопросы, обратитесь к документации:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Documentation](https://git-scm.com/doc)

---

© 2025 Mandril S.R.L
