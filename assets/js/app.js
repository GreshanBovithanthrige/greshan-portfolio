/* Coordinates independent page features after deferred scripts have loaded. */
window.addEventListener("DOMContentLoaded", () => {
    window.PortfolioNavigation?.init();
    window.PortfolioScroll?.init();
    window.PortfolioTheme?.init();
    window.PortfolioAnimations?.init();

    const year = document.querySelector("[data-current-year]");
    if (year) {
        const currentYear = String(new Date().getFullYear());
        year.textContent = currentYear;
        year.dateTime = currentYear;
    }
});
