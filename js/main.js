import { initTheme } from "./modules/theme.js";
import { initStatus } from "./modules/status.js";
import { initStats } from "./modules/stats.js";

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initStatus();
  initStats();
});
