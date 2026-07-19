/* Closes the mobile menu after any same-page navigation selection, including the logo. */
window.PortfolioScroll = (() => {
    const init = () => {
        const menu = document.getElementById("primary-navigation");
        const toggle = document.querySelector(".navbar-toggler");
        const progress = document.getElementById("reading-progress-bar");
        const backToTop = document.getElementById("back-to-top");

        const updateScrollUi = () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progressValue = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;

            progress?.style.setProperty("transform", `scaleY(${progressValue})`);

            const showBackToTop = window.scrollY > 480;
            backToTop?.classList.toggle("is-visible", showBackToTop);
            backToTop?.setAttribute("aria-hidden", String(!showBackToTop));
        };

        document.querySelectorAll("a[href^='#']").forEach((link) => {
            link.addEventListener("click", () => {
                if (menu.classList.contains("show") && window.bootstrap) {
                    window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
                    toggle?.focus();
                }
            });
        });

        backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
        updateScrollUi();
        window.addEventListener("scroll", updateScrollUi, { passive: true });
        window.addEventListener("resize", updateScrollUi);
    };

    return { init };
})();
