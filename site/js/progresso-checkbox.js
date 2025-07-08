document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = Array.from(
    document.querySelectorAll("input[type='checkbox']")
  ).filter((cb) => cb.offsetParent !== null); // só visíveis

  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");
  const toggleIcon = document.getElementById("progress-toggle-icon");
  const progressBody = document.getElementById("progress-body");

  const updateProgress = () => {
    const total = checkboxes.length;
    const checked = checkboxes.filter((cb) => cb.checked).length;

    const percentage = total === 0 ? 0 : (checked / total) * 100;
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (percentage / 100) * circumference;

    progressBar.style.strokeDashoffset = offset;
    progressText.textContent = `${checked}/${total}`;
  };

  checkboxes.forEach((cb) => cb.addEventListener("change", updateProgress));
  updateProgress();

  document.getElementById("progress-header").addEventListener("click", () => {
    const isHidden = progressBody.style.display === "none";
    progressBody.style.display = isHidden ? "block" : "none";
    toggleIcon.style.transform = isHidden ? "rotate(0deg)" : "rotate(-90deg)";
  });
});
