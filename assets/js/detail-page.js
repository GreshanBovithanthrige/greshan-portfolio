/* Shared behaviour for static engineering project pages. */
window.addEventListener("DOMContentLoaded", () => {
    window.PortfolioTheme?.init();

    const header = document.querySelector(".site-header");
    const menu = document.getElementById("primary-navigation");
    const toggle = document.querySelector(".navbar-toggler");

    const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    menu?.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            if (menu.classList.contains("show") && window.bootstrap) {
                window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
                toggle?.focus();
            }
        });
    });
});
