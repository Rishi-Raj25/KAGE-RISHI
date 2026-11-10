(() => {
  const doc = document;
  const oldContinuation = doc.querySelector(".kage-vine-world");
  if (oldContinuation) oldContinuation.remove();

  const canvas = doc.querySelector(".kage-root-flow");
  if (canvas) canvas.remove();

  const headline = doc.querySelector(".headline");
  const lede = doc.querySelector(".lede");
  if (headline) {
    headline.innerHTML = '<span><i style="--d:260ms">A life, growing</i></span><span><i style="--d:360ms">in many directions.</i></span>';
  }
  if (lede) lede.textContent = "A continuous landscape of roots, branches, moss and growth.";
})();
