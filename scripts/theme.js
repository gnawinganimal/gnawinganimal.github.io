
const themeToggle = document.getElementById("theme-toggle");
const lightThemeIcon = document.getElementById("light-theme-icon");
const darkThemeIcon = document.getElementById("dark-theme-icon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const toggleIcon = () => {
    lightThemeIcon.classList.toggle("display-none");
    darkThemeIcon.classList.toggle("display-none");
}

const setIcon = () => {
    if (document.documentElement.classList.contains("dark")) {
        lightThemeIcon.classList.remove("hidden");
        darkThemeIcon.classList.add("hidden");
    } else {
        darkThemeIcon.classList.remove("hidden");
        lightThemeIcon.classList.add("hidden");
    }
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
        setIcon();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIcon();
}

themeToggle.addEventListener("click", () => {
    toggleTheme();
});

initTheme();
