(() => {
  const doc = document;

  // Remove legacy hero UI while preserving the living Sylva environment.
  const selectors = [
    ".dock-wrap", ".dock", ".headline", ".lede",
    ".pill-clip", ".play-wrap", ".stat", ".stat--a", ".stat--b",
    ".knob-float"
  ];
  doc.querySelectorAll(selectors.join(",")).forEach((node) => node.remove());

  // Remove only obsolete text controls; keep the vine world and root flow.
  const unwanted = /^(GROVE|HABITATS|JOURNAL|ENTER|EXPLORE THE WORK|CANOPY RESTORED|NATIVE SPECIES|282 HA|43 MAPPED)$/i;
  doc.querySelectorAll("a,button,[role='button'],dt,dd").forEach((node) => {
    if (unwanted.test((node.textContent || "").trim())) node.remove();
  });
})();
