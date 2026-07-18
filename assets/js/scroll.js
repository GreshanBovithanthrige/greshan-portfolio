/* Closes the mobile menu after any same-page navigation selection, including the logo. */
window.PortfolioScroll = (() => {
    const init = () => {
        const menu = document.getElementById("primary-navigation");
        const toggle = document.querySelector(".navbar-toggler");

        document.querySelectorAll("a[href^='#']").forEach((link) => {
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
