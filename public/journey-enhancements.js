(() => {
  if (window.__kageJourneyEnhanced) return;
  window.__kageJourneyEnhanced = true;
  const doc = document;
  const style = doc.createElement("style");
  style.id = "kage-journey-enhancements";
  style.textContent = \`
    html{scroll-behavior:smooth} body{min-height:100%;overflow-x:hidden;overflow-y:auto}
    .hero{height:100svh;min-height:620px}
    .play-wrap,.card--about,.knob-float,.card--stove,.stat{display:none!important}
    .journey-extension{position:relative;z-index:8;isolation:isolate;overflow:hidden;padding:clamp(92px,12vw,170px) clamp(22px,7vw,110px) 120px;color:#f0f2e9;background:radial-gradient(60% 48% at 15% 10%,rgba(189,207,159,.10),transparent 72%),radial-gradient(55% 60% at 90% 70%,rgba(121,145,99,.13),transparent 72%),linear-gradient(180deg,#42483b 0%,#343b31 48%,#30382e 100%)}
    .journey-extension:before,.journey-extension:after{content:"";position:absolute;pointer-events:none;z-index:-1;width:1px;height:100%;top:0;opacity:.22;background:linear-gradient(180deg,transparent,#c3d3a6 14%,#c3d3a6 82%,transparent)}
    .journey-extension:before{left:8%;transform:rotate(9deg)}.journey-extension:after{right:11%;transform:rotate(-8deg)}
    .journey-kicker{font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:#b9c6a8}
    .journey-heading{max-width:760px;margin:18px 0;font-size:clamp(38px,7vw,88px);line-height:.98;letter-spacing:-.055em;font-weight:300}
    .journey-intro{max-width:540px;color:rgba(239,243,230,.7);font-size:15px;line-height:1.8}
    .journey-vine{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:-1;opacity:.56;overflow:visible}
    .journey-vine path{fill:none;stroke:#9eae83;stroke-width:2;stroke-linecap:round}.journey-vine .fine{stroke-width:1;opacity:.65}.journey-vine circle{fill:#c4d2a6}
    .habitat-grid{position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(18px,3vw,42px);margin:92px 0 0;align-items:start}
    .habitat-card{position:relative;min-height:270px;padding:30px 28px 26px;text-align:left;border:1px solid rgba(224,235,207,.22);border-radius:26px;color:#263026;background:linear-gradient(145deg,rgba(246,248,239,.97),rgba(218,226,204,.94));box-shadow:0 26px 70px rgba(8,15,8,.23),inset 0 1px rgba(255,255,255,.8);cursor:pointer;transition:transform .6s cubic-bezier(.16,1,.3,1),box-shadow .6s}
    .habitat-card:nth-child(2){margin-top:74px}.habitat-card:nth-child(3){margin-top:20px}
    .habitat-card:hover,.habitat-card:focus-visible{transform:translateY(-9px) rotate(-.5deg);box-shadow:0 34px 86px rgba(8,15,8,.32);outline:none}
    .habitat-card:before{content:"";position:absolute;width:46px;height:46px;border:1px solid rgba(76,101,62,.35);border-radius:50%;top:-19px;right:24px;background:radial-gradient(circle at 35% 35%,#f8f8ef,#bdcba8);box-shadow:0 5px 16px rgba(20,35,18,.13)}
    .habitat-number{font-size:10px;letter-spacing:.22em;color:#7e8b72}.habitat-title{display:block;margin:45px 0 12px;font-size:clamp(27px,3vw,42px);line-height:1;letter-spacing:-.045em;font-weight:400}
    .habitat-copy{display:block;max-width:28ch;color:#687261;font-size:13px;line-height:1.7}.habitat-open{display:block;margin-top:28px;color:#5e704f;font-size:10px;letter-spacing:.2em;text-transform:uppercase}
    .journey-detail{display:none;position:relative;margin-top:150px;padding-top:45px;scroll-margin-top:40px}.journey-detail.is-open{display:block;animation:journey-rise .85s cubic-bezier(.16,1,.3,1) both}
    @keyframes journey-rise{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
    .detail-title{margin:14px 0 12px;font-size:clamp(34px,6vw,70px);font-weight:300;letter-spacing:-.05em}.detail-copy{max-width:580px;color:rgba(239,243,230,.72);font-size:14px;line-height:1.8}
    .detail-branches{position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px;margin-top:62px}
    .branch-card{position:relative;min-height:190px;padding:25px 24px;border-radius:22px;background:rgba(232,238,219,.09);border:1px solid rgba(213,229,190,.23);box-shadow:inset 0 1px rgba(255,255,255,.08);backdrop-filter:blur(5px)}
    .branch-card:before{content:"";position:absolute;width:1px;height:48px;left:30px;top:-49px;background:linear-gradient(#aebf91,transparent)}
    .branch-card small{color:#b8c8a1;font-size:9px;letter-spacing:.22em;text-transform:uppercase}.branch-card h3{margin:22px 0 8px;font-size:22px;font-weight:400;color:#f0f2e9}.branch-card p{color:rgba(239,243,230,.63);font-size:12px;line-height:1.7}
    .journey-journal{position:relative;margin-top:170px;padding-top:55px;border-top:1px solid rgba(220,232,204,.17);scroll-margin-top:50px}
    .journal-line{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:48px}.journal-note{padding:22px 0;border-top:1px solid rgba(220,232,204,.28)}
    .journal-note b{display:block;margin-bottom:9px;font-size:16px;font-weight:400}.journal-note span{color:rgba(239,243,230,.62);font-size:12px;line-height:1.7}
    .journey-back{display:inline-block;margin-top:44px;color:#c9d6b5;font-size:10px;letter-spacing:.2em;text-transform:uppercase;cursor:pointer}
    @media(max-width:760px){.journey-extension{padding:82px 22px 90px}.habitat-grid,.detail-branches,.journal-line{grid-template-columns:1fr}.habitat-card,.habitat-card:nth-child(2),.habitat-card:nth-child(3){margin-top:0;min-height:220px}.habitat-title{margin-top:28px}.journey-detail{margin-top:100px}.journey-journal{margin-top:110px}}
    @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.journey-detail.is-open{animation:none}.habitat-card{transition:none}}
  \`;
  doc.head.appendChild(style);
  const dock = doc.querySelector(".dock");
  const dockItems = dock ? [...dock.querySelectorAll(".dock-item")] : [];
  for (const item of dockItems) {
    const label = (item.textContent || "").trim().toLowerCase();
    if (label === "grow" || label === "grove" || label === "enter") item.remove();
  }
  const hero = doc.querySelector(".hero");
  if (!hero || doc.querySelector(".journey-extension")) return;
  const extension = doc.createElement("section");
  extension.className = "journey-extension";
  extension.id = "journey-habitats";
  extension.innerHTML = \`
    <svg class="journey-vine" viewBox="0 0 1400 1700" preserveAspectRatio="none" aria-hidden="true">
      <path d="M80 0 C180 160 40 270 190 420 S320 650 190 820 S110 1120 300 1320 S480 1540 430 1700"/>
      <path d="M1320 0 C1180 190 1360 320 1200 500 S1050 730 1200 900 S1280 1190 1080 1390 S930 1570 980 1700"/>
      <path class="fine" d="M190 420 C350 350 420 390 510 520 M1200 500 C1030 430 950 470 880 590 M190 820 C360 780 420 850 500 960 M1200 900 C1030 850 950 930 890 1040"/>
      <path class="fine" d="M300 1320 C440 1210 540 1240 610 1340 M1080 1390 C960 1290 860 1320 790 1430"/>
      <circle cx="190" cy="420" r="5"/><circle cx="1200" cy="500" r="5"/><circle cx="500" cy="960" r="4"/><circle cx="890" cy="1040" r="4"/>
    </svg>
    <div class="journey-kicker">A living archive · the paths that made me</div>
    <h2 class="journey-heading">Every path grows<br>from somewhere.</h2>
    <p class="journey-intro">Three habitats. Different ways of seeing, making, and building. Follow a branch to explore each part of the journey.</p>
    <div class="habitat-grid">
      <button class="habitat-card" type="button" data-habitat="movies" aria-controls="detail-movies"><span class="habitat-number">01 — THE FRAME</span><strong class="habitat-title">Movies</strong><span class="habitat-copy">Stories, characters, cinema, and the moments that stay long after the screen goes dark.</span><span class="habitat-open">Follow this branch ↗</span></button>
      <button class="habitat-card" type="button" data-habitat="songwriting" aria-controls="detail-songwriting"><span class="habitat-number">02 — THE SOUND</span><strong class="habitat-title">Songwriting</strong><span class="habitat-copy">Lyrics, melodies, unfinished ideas, and finding a voice through music.</span><span class="habitat-open">Follow this branch ↗</span></button>
      <button class="habitat-card" type="button" data-habitat="tech" aria-controls="detail-tech"><span class="habitat-number">03 — THE BUILD</span><strong class="habitat-title">Tech &amp; Management</strong><span class="habitat-copy">Technology, products, experiments, leadership, and bringing people together to make things real.</span><span class="habitat-open">Follow this branch ↗</span></button>
    </div>
    <div class="journey-detail" id="detail-movies" data-detail="movies" aria-live="polite"><div class="journey-kicker">Habitat 01 · The frame</div><h2 class="detail-title">Movies</h2><p class="detail-copy">A closer look at the films, ideas, and storytelling instincts that have shaped the way I think.</p><div class="detail-branches"><article class="branch-card"><small>Branch 01</small><h3>What I Know</h3><p>Film language, visual storytelling, characters, and the details I keep noticing.</p></article><article class="branch-card"><small>Branch 02</small><h3>My Journey</h3><p>A growing timeline of films, influences, experiments, and creative discoveries.</p></article><article class="branch-card"><small>Branch 03</small><h3>Things I’ve Made</h3><p>Personal explorations and work shaped by a love of cinema.</p></article></div></div>
    <div class="journey-detail" id="detail-songwriting" data-detail="songwriting" aria-live="polite"><div class="journey-kicker">Habitat 02 · The sound</div><h2 class="detail-title">Songwriting</h2><p class="detail-copy">The musical side of the journey: words, melodies, fragments, and ideas that slowly find their shape.</p><div class="detail-branches"><article class="branch-card"><small>Branch 01</small><h3>What I Know</h3><p>Lyrics, melody, arrangement ideas, and the craft I’m learning along the way.</p></article><article class="branch-card"><small>Branch 02</small><h3>My Journey</h3><p>From first fragments to songs, collaborations, and creative turning points.</p></article><article class="branch-card"><small>Branch 03</small><h3>Works in Progress</h3><p>Notes, drafts, recordings, and unfinished ideas worth returning to.</p></article></div></div>
    <div class="journey-detail" id="detail-tech" data-detail="tech" aria-live="polite"><div class="journey-kicker">Habitat 03 · The build</div><h2 class="detail-title">Tech &amp; Management</h2><p class="detail-copy">The systems side of the journey: learning technologies, building products, organizing people, and turning ideas into action.</p><div class="detail-branches"><article class="branch-card"><small>Branch 01</small><h3>What I Know</h3><p>Tools, technologies, product thinking, and practical skills gathered through building.</p></article><article class="branch-card"><small>Branch 02</small><h3>My Journey</h3><p>Projects, experiments, teams, events, and lessons from trying to make things happen.</p></article><article class="branch-card"><small>Branch 03</small><h3>Things I’ve Built</h3><p>Selected products, prototypes, collaborations, and work in progress.</p></article></div></div>
    <section class="journey-journal" id="journey-journal"><div class="journey-kicker">Field notes · Journal</div><h2 class="detail-title">The story keeps growing.</h2><p class="detail-copy">A place for the notes between milestones: ideas, experiments, lessons, and small moments that become part of the bigger journey.</p><div class="journal-line"><div class="journal-note"><b>Ideas</b><span>Thoughts worth following before they become projects.</span></div><div class="journal-note"><b>Experiments</b><span>Things tried, changed, learned, and tried again.</span></div><div class="journal-note"><b>Milestones</b><span>Moments that mark a new branch in the path.</span></div></div><a class="journey-back" href="#hero">Back to the beginning ↑</a></section>
  \`;
  hero.insertAdjacentElement("afterend", extension);
  extension.querySelectorAll("[data-habitat]").forEach((card) => {
    card.addEventListener("click", () => {
      const key = card.getAttribute("data-habitat");
      extension.querySelectorAll("[data-detail]").forEach((panel) => panel.classList.toggle("is-open", panel.getAttribute("data-detail") === key));
      extension.querySelectorAll(".habitat-card").forEach((item) => item.setAttribute("aria-expanded", String(item === card)));
      extension.querySelector('[data-detail="' + key + '"]')?.scrollIntoView({behavior:"smooth",block:"start"});
    });
  });
  const scrollTo = (selector) => doc.querySelector(selector)?.scrollIntoView({behavior:"smooth",block:"start"});
  dock?.addEventListener("click", (event) => {
    const item = event.target.closest(".dock-item");
    if (!item) return;
    const label = (item.textContent || "").trim().toLowerCase();
    if (label === "habitats") { event.preventDefault(); scrollTo("#journey-habitats"); }
    else if (label === "journal") { event.preventDefault(); scrollTo("#journey-journal"); }
  }, true);
  doc.querySelector(".liquid-button--explore")?.addEventListener("click", () => scrollTo("#journey-habitats"));
  extension.querySelector(".journey-back")?.addEventListener("click", (event) => { event.preventDefault(); scrollTo("#hero"); });
})();