(() => {
  const doc = document;

  // Remove legacy hero UI even if it is injected or restored by older markup.
  const selectors = [
    ".dock-wrap", ".dock", ".headline", ".lede",
    ".pill-clip", ".play-wrap", ".stat", ".stat--a", ".stat--b",
    ".knob-float"
  ];
  doc.querySelectorAll(selectors.join(",")).forEach((node) => node.remove());

  // Remove any remaining visible legacy controls by their labels.
  const unwanted = /^(GROVE|HABITATS|JOURNAL|ENTER|EXPLORE THE WORK|CANOPY RESTORED|NATIVE SPECIES|282 HA|43 MAPPED)$/i;
  doc.querySelectorAll("a,button,[role='button'],dt,dd").forEach((node) => {
    if (unwanted.test((node.textContent || "").trim())) node.remove();
  });

  doc.querySelectorAll(".kage-vine-world, .kage-root-flow").forEach((node) => node.remove());
})();
