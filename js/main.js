import { initSizeObserver } from "./components/element-size-observer.js";
import { initBackToTop } from "./components/back-to-top.js";
import { scheduleExternalLinks } from "./components/tag-external-links.js";

document.addEventListener('DOMContentLoaded', () => {

  initSizeObserver();
  initBackToTop();
  scheduleExternalLinks();
  
});