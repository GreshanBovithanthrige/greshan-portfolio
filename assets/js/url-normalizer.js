/* Canonicalise GitHub Pages' alternate root-document URL without adding history entries. */
(() => {
    if (window.location.pathname !== "/index.html") return;

    window.history.replaceState(
        window.history.state,
        "",
        `/${window.location.search}${window.location.hash}`
    );
})();
