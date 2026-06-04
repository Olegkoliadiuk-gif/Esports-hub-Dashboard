# Esports Hub Dashboard

Лендінг-проєкт для демонстрації простого дашборду геймерського профілю з адаптивною версткою, темною/світлою темою та динамічними елементами.

## Опис

Цей проєкт містить три основні сторінки:

- `index.html` — профіль гравця з аватаром і статусом.
- `stats.html` — статистика, яку можна скинути.
- `settings.html` — перемикач темної/світлої теми.

## Структура

```
index.html
stats.html
settings.html
assets/
  css/
    main.css
    components.css
  images/
    Cat-for-html.jpeg
js/
  main.js
  modules/
    stats.js
    status.js
    theme.js
```

## Технології

- HTML5
- CSS3
- JavaScript (ES modules)

## Як запустити

1. Відкрий `index.html`, `stats.html` або `settings.html` у браузері.
2. Натисни кнопку `Edit Status` на сторінці профілю, щоб змінити статус.
3. На сторінці `Statistics` натисни кнопку `Reset Stats`, щоб очистити показники.
4. На сторінці `Settings` перемикай тему між темною і світлою.

## Додатково

- Тема зберігається у `localStorage`.
- Стилі розбиті на базовий файл `main.css` і компонентні стилі `components.css`.
- Сторінки мають адаптивну верстку та читабельний інтерфейс.
