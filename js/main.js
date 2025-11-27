import { initSizeObserver } from "element-size-observer";
import { initBackToTop } from "back-to-top";
import { scheduleExternalLinks } from "tag-external-links";

document.addEventListener('DOMContentLoaded', () => {

  initSizeObserver();
  initBackToTop();
  scheduleExternalLinks();

  applyCurrentYearMonthToPresentDates();
});

/**
 * Sets the datetime attribute of all <time> elements with the
 * "class=datetime-present" to the current year and month in "YYYY-MM" format.
 * 
 */
const applyCurrentYearMonthToPresentDates = () => {

  // Format: "YYYY-MM" (e.g., "2024-06")
  const currentYearMonth = new Date().toISOString().slice(0, 7);

  /** @type {NOdeListOf<HTMLTimeElement} */
  const elements = document.querySelectorAll('time.datetime-present');

  elements.forEach((element) => {
      element.dateTime = currentYearMonth;
  });
}