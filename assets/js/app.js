/* Coordinates independent page features after deferred scripts have loaded. */
window.addEventListener("DOMContentLoaded", () => {
    window.PortfolioNavigation?.init();
    window.PortfolioScroll?.init();
    window.PortfolioTheme?.init();
    window.PortfolioAnimations?.init();
});
