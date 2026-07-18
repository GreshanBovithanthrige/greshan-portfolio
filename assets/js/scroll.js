/* Closes the mobile menu after a same-page navigation selection. */
window.PortfolioScroll = (() => {
    const init = () => {
        const menu = document.getElementById("primary-navigation");
        const toggle = document.querySelector(".navbar-toggler");

        menu?.querySelectorAll("a[href^='#']").forEach((link) => {
            link.addEventListener("click", () => {
                if (menu.classList.contains("show") && window.bootstrap) {
                    window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
                    toggle?.focus();
                }
            });
        });
    };

    return { init };
})();
