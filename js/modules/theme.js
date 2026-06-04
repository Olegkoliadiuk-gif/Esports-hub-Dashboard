export const initTheme = () => {
  const btn = document.getElementById("toggle_theme_btn");
  const txt = document.getElementById("theme-text");
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    if (txt) txt.textContent = "Theme: Light";
    if (btn) btn.textContent = "Toggle Dark Theme";
  }
  if (btn) {
    btn.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light-theme");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      txt.textContent = isLight ? "Theme: Light" : "Theme: Dark";
      btn.textContent = isLight ? "Toggle Dark Theme" : "Toggle Light Theme";
    });
  }
};
