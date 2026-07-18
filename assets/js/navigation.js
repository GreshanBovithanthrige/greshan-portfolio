/* Handles the header's scrolled state and current navigation link. */
window.PortfolioNavigation = (() => {
    const init = () => {
        const header = document.querySelector(".site-header");
        const links = [...document.querySelectorAll(".nav-link")];

        const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
        const setActiveLink = () => {
            const currentHash = window.location.hash || "#home";
            links.forEach((link) => {
                const isActive = link.getAttribute("href") === currentHash;
                link.classList.toggle("active", isActive);
                link.toggleAttribute("aria-current", isActive);
            });
        };

        updateHeader();
        setActiveLink();
        window.addEventListener("scroll", updateHeader, { passive: true });
        window.addEventListener("hashchange", setActiveLink);
    };

    return { init };
})();
