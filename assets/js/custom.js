/*
  ============================================================
  Custom Link Handling Overrides
  ============================================================
  Context:
    The HTML5 UP "Solid State" template (main.js) intercepts 
    <a> clicks inside the mobile nav menu (#menu .inner a).
    It normally:
      1. Closes the menu (removes body class `is-menu-visible`).
      2. Redirects to the link via window.location.href.

    For external links (e.g. CV PDF, external sites), we want:
      - Open link in a new browser tab.
      - Still close the mobile nav menu in the original tab.
      - Prevent the template's redirect from firing.

  Implementation:
    - Add class="external-link" to any <a> that should behave this way.
    - This script:
        * Prevents the template's default click handling.
        * Opens the link in a new tab (window.open).
        * Removes "is-menu-visible" class from <body> to close the menu.

  Usage:
    <a href="docs/Stephen_Usher_CV.pdf" class="external-link">View CV</a>
*/


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a.external-link").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      e.stopImmediatePropagation();

      // Open in new tab
      window.open(link.href, "_blank");

      // Close the menu if it's currently open
      if (document.body.classList.contains("is-menu-visible")) {
        document.body.classList.remove("is-menu-visible");
      }
    });
  });
});