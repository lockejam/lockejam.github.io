/**
 * @module tag-external-links
 * Mark external links with target="_blank" and rel="noopener".
 */


/**
 * Test whether an anchor element points to an external site.
 * @param {anchor} link 
 * @param {Location.origin} origin 
 * @returns 
 */
function isExternal(link, origin) {

    /** @type {HTMLAnchorElement.href} */
    const href = link.getAttribute('href');

    // no href ⇒ skip
    // same-page anchor ⇒ skip
    // same-origin anchor ⇒ skip
    if (!href 
        || href.startsWith('#')
        || href.startsWith(origin)) {

        return false;

    }

    // check if the link is the same origin and if not it is an external link
    // ignore malformed or invalid URLs
    try {
        return new URL(href, origin).origin !== origin;
    } catch {
        return false;
    }
}

/**
 * Finds all <a href> elements and,
 * if they point off-site, marks them external:
 *   - sets target="_blank"
 *   - sets rel="noopener"
 *   - adds class "external-link"
 */
function markExternalLinks() {

    const origin = window.location.origin;

    document.querySelectorAll('a[href]').forEach(link => {

        if (isExternal(link, origin)) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.classList.add('external-link');
        }
    });
}

/**
 * Schedule `markExternalLinks` to run when the browser is idle,
 */
export function scheduleExternalLinks() {
    const task = () => markExternalLinks();

    if ('requestIdleCallback' in window) requestIdleCallback(task);
    else setTimeout(task, 0);
}