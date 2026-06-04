# Esports Hub Dashboard

A landing page project showcasing a simple gaming profile dashboard with responsive layout, dark/light theme switching, and interactive fields.

## Overview

This project includes three main pages:

- `index.html` — player profile with avatar and status input.
- `stats.html` — player statistics form with save and reset behavior.
- `settings.html` — theme settings page for switching between dark and light modes.

## Project structure

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

## Technologies

- HTML5
- CSS3
- JavaScript (ES modules)

## How to use

1. Open `index.html`, `stats.html`, or `settings.html` in a browser.
2. Use the status form on the profile page to update your status.
3. Use the statistics page to save or reset your performance values.
4. Use the settings page to toggle between dark and light themes.

## Notes

- Theme choice is persisted in `localStorage`.
- Styles are split between the base stylesheet `main.css` and component styles in `components.css`.
- Pages are designed to be responsive and centered for a clean user experience.
