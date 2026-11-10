(() => {
  if (window.__kageJourneyV3) return;
  window.__kageJourneyV3 = true;

  const doc = document;
  const style = doc.createElement("style");
  style.id = "kage-journey-v3-style";
  style.textContent = [
    "html{scroll-behavior:smooth}body{height:auto!important;min-height:100%;overflow-x:hidden!important;overflow-y:auto!important}",
    "body .dock,body .play-wrap,body .knob-float,body .liquid-button--explore,body .card--about,body .card--stove,body .stat{display:none!important}",
    ".kage-vine-world{position:relative;isolation:isolate;min-height:2400px;overflow:hidden;margin-top:-1px;padding:120px 24px 160px;color:#eef0e5;background:radial-gradient(ellipse 72% 26% at 50% 0%,rgba(221,231,201,.12),transparent 78%),radial-gradient(ellipse 58% 24% at 8% 24%,rgba(124,151,91,.17),transparent 75%),radial-gradient(ellipse 54% 28% at 92% 49%,rgba(92,119,73,.19),transparent 78%),radial-gradient(ellipse 78% 30% at 48% 84%,rgba(139,157,102,.13),transparent 80%),linear-gradient(180deg,#383b34 0%,#3b4437 16%,#343d31 43%,#2c372d 72%,#263129 100%)}",
    ".kage-root-flow{position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:1;display:block;filter:drop-shadow(0 18px 35px rgba(8,14,8,.22))}",
    ".kage-vine-intro{position:relative;z-index:1;max-width:760px;margin:0 auto;text-align:center;pointer-events:none}",
    ".kage-vine-eyebrow{font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:#bdcba9}",
    ".kage-vine-heading{font-size:clamp(42px,7vw,88px);font-weight:300;letter-spacing:-.06em;line-height:.98;margin:22px 0}",
    ".kage-vine-sub{max-width:500px;margin:auto;color:rgba(238,240,229,.68);font-size:14px;line-height:1.9}",
    "@media(max-width:720px){.kage-vine-world{min-height:1900px;padding:90px 18px 100px}.kage-vine-heading{font-size:clamp(38px,11vw,62px)}}",
    "@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}"
  ].join(String.fromCharCode(10));
  doc.head.appendChild(style);

  const hero = doc.querySelector(".hero") || doc.querySelector("main") || doc.body;
  if (!hero || doc.querySelector(".kage-vine-world")) return;

  doc.querySelectorAll(".dock,.play-wrap,.knob-float,.liquid-button--explore,.card--about,.card--stove,.stat").forEach(el => el.remove());
  doc.querySelectorAll("a,button").forEach(el => {
    const label = (el.innerText || el.getAttribute("aria-label") || "").trim().toLowerCase();
    if (/^(grow|grove|enter|journal|habitats|play|explore)$/.test(label)) el.remove();
  });

  const section = doc.createElement("section");
  section.className = "kage-vine-world";
  section.id = "kage-vine-world";
  section.innerHTML = [
    '<canvas class="kage-root-flow" aria-hidden="true"></canvas>',
    '<header class="kage-vine-intro"><div class="kage-vine-eyebrow">A living archive · things that made me</div><h1 class="kage-vine-heading">A life, growing<br>in many directions.</h1><p class="kage-vine-sub">A continuous landscape of roots, branches, moss and growth.</p></header>'
  ].join("");
  hero.insertAdjacentElement("afterend", section);

  const rootFlowCanvas = section.querySelector(".kage-root-flow");
  const mountRootFlow = () => {
    if (window.__mountSylvaRootFlow && window.__ready) {
      window.__mountSylvaRootFlow(rootFlowCanvas);
      return;
    }
    window.requestAnimationFrame(mountRootFlow);
  };
  mountRootFlow();
})();
