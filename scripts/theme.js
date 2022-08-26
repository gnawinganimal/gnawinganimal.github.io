
const themeToggle = document.getElementById("theme-toggle");
const lightThemeIcon = document.getElementById("light-theme-icon");
const darkThemeIcon = document.getElementById("dark-theme-icon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const toggleIcon = () => {
    lightThemeIcon.classList.toggle("hidden");
    darkThemeIcon.classList.toggle("hidden");
}

const initTheme = () => {
    console.log("Init theme...");
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        darkThemeIcon.classList.add("hidden");
        return;
    }
    lightThemeIcon.classList.add("hidden");
}

const toggleTheme = () => {
    console.log("Toggle theme...");
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        toggleIcon();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    toggleIcon();
}

themeToggle.addEventListener("click", () => {
    toggleTheme();
});

initTheme();
