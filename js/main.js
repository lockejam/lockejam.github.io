import { initSizeObserver } from "element-size-observer";
import { initBackToTop } from "back-to-top";
import { scheduleExternalLinks } from "tag-external-links";

document.addEventListener('DOMContentLoaded', () => {

  initSizeObserver();
  initBackToTop();
  scheduleExternalLinks();
  
});