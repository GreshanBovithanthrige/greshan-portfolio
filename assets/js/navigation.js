/* Handles the header state and updates navigation as sections enter view. */
window.PortfolioNavigation = (() => {
    const init = () => {
        const header = document.querySelector(".site-header");
        const links = [...document.querySelectorAll(".nav-link")];
        const sections = links
            .filter((link) => link.getAttribute("href")?.startsWith("#"))
            .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
            .filter(({ section }) => section);
        const homeLink = links.find((link) => link.getAttribute("href") === "/");
        const homeSection = document.getElementById("home");

        if (homeLink && homeSection) {
            sections.unshift({ link: homeLink, section: homeSection });
        }

        const setActiveLink = (target) => {
            links.forEach((link) => {
                const isActive = link.getAttribute("href") === target;
                link.classList.toggle("active", isActive);
                if (isActive) {
                    link.setAttribute("aria-current", "page");
                } else {
                    link.removeAttribute("aria-current");
                }
            });
        };

        const updateFromScroll = () => {
            header?.classList.toggle("is-scrolled", window.scrollY > 12);

            const activationPoint = window.scrollY + (header?.offsetHeight || 0) + 32;
            let activeSection = sections[0];

            sections.forEach((entry) => {
                if (entry.section.offsetTop <= activationPoint) {
                    activeSection = entry;
                }
            });

            if (activeSection) {
                setActiveLink(activeSection.link.getAttribute("href"));
            }
        };

        updateFromScroll();
        window.addEventListener("scroll", updateFromScroll, { passive: true });
        window.addEventListener("hashchange", updateFromScroll);
    };

    return { init };
})();
