export const initStatus = () => {
  const form = document.getElementById("status-form");
  const status = document.querySelector(".status");
  const input = document.getElementById("status-input");
  const valid = ["Online", "Do Not Disturb", "Away", "Offline"];

  if (!form || !status || !input) return;

  const savedStatus = localStorage.getItem("playerStatus");
  if (savedStatus) {
    status.textContent = "Status: " + savedStatus;
    input.value = savedStatus;
  } else {
    input.value = "Unknown";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    if (!valid.includes(value)) {
      input.setCustomValidity(
        "Please use one of: Online, Do Not Disturb, Away, Offline.",
      );
      input.reportValidity();
      input.setCustomValidity("");
      return;
    }

    status.textContent = "Status: " + value;
    localStorage.setItem("playerStatus", value);
  });
};
