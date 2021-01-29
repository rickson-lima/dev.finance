const darkModeBtn = document.querySelector(".dark-mode-btn");
const root = document.documentElement;

darkModeBtn.addEventListener("click", () => {
  if (darkModeBtn.classList.contains("active")) DarkMode.disable();
  else DarkMode.enable();
   // darkModeBtn.classList.toggle('active');
});

const DarkMode = {
  enable() {
    darkModeBtn.classList.add("active");
   //  dark colors
    root.style.setProperty("--dark-purple", "#000");
    root.style.setProperty("--primary-txt-color", " white");

   // light colors
    root.style.setProperty("--light-bg", "rgb(48, 48, 48)");
    root.style.setProperty("--light-purple", "rgb(95, 46, 141)");
    root.style.setProperty("--light-bg-card", "rgb(26, 26, 26)");
    root.style.setProperty("--light-border-card", "rgb(8, 8, 8)");
  },
  disable() {
    darkModeBtn.classList.remove("active");
   //  dark colors
    root.style.setProperty("--dark-purple", "rgb(95, 46, 141)");
    root.style.setProperty("--primary-txt-color", "#363f5f");

   //  light colors
    root.style.setProperty("--light-bg-card", "white");
    root.style.setProperty("--light-border-card", "rgb(156, 155, 155)");
    root.style.setProperty("--light-bg", "#eeebeb");
    root.style.setProperty("--light-purple", "blueviolet");
  },
};
