const roadmapModules = document.querySelectorAll(".module");

roadmapModules.forEach((module) => {
  module.addEventListener("toggle", () => {
    if (!module.open) return;

    roadmapModules.forEach((item) => {
      if (item !== module) item.removeAttribute("open");
    });
  });
});

document.querySelectorAll(".niche-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    chip.classList.toggle("selected");
  });
});
