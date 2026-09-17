/* Lightweight deterrent against casual right-click-saving / dragging of images.
   This is NOT real security -- anyone using browser devtools, view-source, or a
   screenshot can still get at anything the page renders. It only discourages the
   average visitor from an easy right-click "Save Image As". */
(function () {
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  document.addEventListener("dragstart", function (e) {
    if (e.target && e.target.tagName === "IMG") e.preventDefault();
  });

  document.addEventListener("keydown", function (e) {
    var k = e.key ? e.key.toLowerCase() : "";
    // devtools
    if (e.key === "F12") { e.preventDefault(); return; }
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (k === "i" || k === "j" || k === "c")) {
      e.preventDefault();
      return;
    }
    // view-source / save-page
    if ((e.ctrlKey || e.metaKey) && (k === "u" || k === "s")) {
      e.preventDefault();
      return;
    }
  });
})();
