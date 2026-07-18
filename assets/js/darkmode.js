/* Applies and persists an explicit theme preference. */
window.PortfolioTheme = (() => {
    const storageKey = "portfolio-theme";
    const button = document.getElementById("theme-toggle");

    const applyTheme = (theme) => {
        document.documentElement.dataset.theme = theme;
        const dark = theme === "dark";
        button?.setAttribute("aria-pressed", String(dark));
        button?.setAttribute("aria-label", `Switch to ${dark ? "light" : "dark"} mode`);
        button?.querySelector("i")?.classList.toggle("bi-sun", dark);
        button?.querySelector("i")?.classList.toggle("bi-moon-stars", !dark);
        document.querySelector('meta[name="theme-color"]')?.setAttribute("content", dark ? "#0d1117" : "#ffffff");
    };

    const init = () => {
        const savedTheme = localStorage.getItem(storageKey);
        const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        applyTheme(savedTheme || preferredTheme);
        button?.addEventListener("click", () => {
            const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
            localStorage.setItem(storageKey, nextTheme);
            applyTheme(nextTheme);
        });
    };

    return { init };
})();
