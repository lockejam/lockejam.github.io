/**
 * @module back-to-top
 * Show “Back to top” once scrolled at least the size of the viewport
 * and smooth scroll to the top when clicked.
 */

/**
 * Initialize the "Back to Top" button functionality.
 */
export function initBackToTop() {

    /** @type {HTMLAnchorElement} */
    const anchor = document.getElementById("back-to-top");

    if (!anchor) return;

    const update = () => {
        anchor.classList.toggle("visible", window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", update);

    update();
}