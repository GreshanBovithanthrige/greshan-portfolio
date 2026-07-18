/* Enables introductory motion and reveals sections as they enter the viewport. */
window.PortfolioAnimations = (() => {
    const init = () => {
        requestAnimationFrame(() => {
            document.body.classList.add("page-ready");

            const revealElements = document.querySelectorAll(".reveal");
            if (!("IntersectionObserver" in window)) {
                revealElements.forEach((element) => element.classList.add("is-visible"));
                return;
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12 });

            revealElements.forEach((element) => observer.observe(element));
        });
    };

    return { init };
})();
