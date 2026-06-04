export const initStats = () => {
  const form = document.getElementById("stats-form");
  const resetButton = document.getElementById("reset_stats_btn");
  const winrateInput = document.getElementById("winrate-input");
  const matchesInput = document.getElementById("matches-input");
  const roleInput = document.getElementById("role-input");

  if (!form || !resetButton || !winrateInput || !matchesInput || !roleInput)
    return;

  const savedStats = JSON.parse(localStorage.getItem("playerStats") || "{}");
  if (savedStats.winrate) {
    winrateInput.value = savedStats.winrate;
  }
  if (savedStats.matches) {
    matchesInput.value = savedStats.matches;
  }
  if (savedStats.role) {
    roleInput.value = savedStats.role;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const stats = {
      winrate: winrateInput.value.trim(),
      matches: matchesInput.value.trim(),
      role: roleInput.value.trim(),
    };

    if (!stats.winrate || !stats.matches || !stats.role) return;

    localStorage.setItem("playerStats", JSON.stringify(stats));
  });

  resetButton.addEventListener("click", () => {
    winrateInput.value = "";
    matchesInput.value = "";
    roleInput.value = "";
    localStorage.removeItem("playerStats");
  });
};
