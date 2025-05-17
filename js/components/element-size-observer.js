/**
 * @module element-size-observer
 * Observe the size of specific elements and update CSS custom properties accordingly.
 */

/**
 * Map observed elements to their corresponding CSS custom property names.
 * @type {Map<HTMLElement, string>}
 */
const sizeMap = new Map([
    [document.getElementById("main-header"), "--header-height"],
    [document.getElementById("main-footer"), "--footer-height"],
    [document.getElementById("experience-timeline"), "--experience-timeline-height"]
]);

/**
 * Gets the outer height of an element, including top/bottom margins.
 * @param {HTMLElement} element 
 * @returns 
 */
const getOuterHeight = (element) => {
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);

    return rect.height + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
}

/**
 * Initialize the ResizeObserver to observe size changes of specific elements.
 */
export function initSizeObserver() {
    const resizeObserver = new ResizeObserver((entries) => {

        for (let { target } of entries) {

            const varName = sizeMap.get(target);

            if (varName) {
                document.documentElement.style.setProperty(varName,`${getOuterHeight(target)}px`);
            }
        }
    });

    // ObserveObserve each element in the sizeMap
    for (let element of sizeMap.keys()) {
        if (element) resizeObserver.observe(element);
    }
}
