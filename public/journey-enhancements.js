(() => {
  if (window.__kageJourneyV2) return;
  window.__kageJourneyV2 = true;

  const doc = document;
  const style = doc.createElement("style");
  style.id = "kage-journey-v2-style";
  style.textContent = [
    "html{scroll-behavior:smooth}body{height:auto!important;min-height:100%;overflow-x:hidden!important;overflow-y:auto!important}",
    "body .dock,body .play-wrap,body .knob-float,body .liquid-button--explore,body .card--about,body .card--stove,body .stat{display:none!important}",
    ".kage-vine-world{position:relative;isolation:isolate;min-height:1900px;overflow:hidden;margin-top:-1px;padding:150px clamp(22px,7vw,110px) 220px;color:#eef0e5;background:radial-gradient(ellipse 72% 26% at 50% 0%,rgba(221,231,201,.12),transparent 78%),radial-gradient(ellipse 58% 24% at 8% 24%,rgba(124,151,91,.17),transparent 75%),radial-gradient(ellipse 54% 28% at 92% 49%,rgba(92,119,73,.19),transparent 78%),radial-gradient(ellipse 78% 30% at 48% 84%,rgba(139,157,102,.13),transparent 80%),linear-gradient(180deg,#383b34 0%,#3b4437 16%,#343d31 43%,#2c372d 72%,#263129 100%)}",
    ".kage-vine-world:before,.kage-vine-world:after{display:none!important}",

    ".kage-root-flow{position:absolute;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:.98}.kage-vine-world>*:not(.kage-root-flow){position:relative;z-index:1}",
    ".kage-root-flow{display:block;filter:drop-shadow(0 18px 35px rgba(8,14,8,.22))}",
    ".kage-vine-intro{max-width:700px;margin:0 auto 90px;text-align:center}.kage-vine-eyebrow{font-size:10px;letter-spacing:.3em;text-transform:uppercase;color:#bdcba9}.kage-vine-heading{font-size:clamp(42px,7vw,88px);font-weight:300;letter-spacing:-.06em;line-height:.98;margin:22px 0}.kage-vine-sub{max-width:500px;margin:auto;color:rgba(238,240,229,.68);font-size:14px;line-height:1.9}",
    ".kage-deck-field{position:relative;max-width:1100px;min-height:1050px;margin:auto}",
    ".kage-deck{position:absolute;width:clamp(190px,24vw,270px);min-height:190px;padding:25px 25px 23px;text-align:left;color:#e8edda;border:1px solid rgba(224,235,204,.24);border-radius:8px 22px 18px 22px;background:linear-gradient(145deg,rgba(219,231,199,.17),rgba(134,157,109,.09));box-shadow:0 24px 58px rgba(8,15,8,.23),inset 0 1px 0 rgba(245,249,232,.19);backdrop-filter:blur(10px);cursor:pointer;transform:rotate(var(--tilt,-2deg));transition:transform .55s cubic-bezier(.2,.8,.2,1),box-shadow .55s,border-color .55s}",
    ".kage-deck:before{content:'';position:absolute;top:12px;left:50%;width:44px;height:10px;transform:translateX(-50%);border-radius:10px;background:rgba(80,103,66,.18)}",
    ".kage-deck:hover,.kage-deck:focus-visible,.kage-deck[aria-expanded=true]{transform:translateY(-9px) rotate(0deg) scale(1.025);box-shadow:0 32px 70px rgba(8,15,8,.38),inset 0 1px 0 rgba(245,249,232,.25);border-color:rgba(224,235,204,.48);outline:none}",
    ".kage-deck-index{display:block;margin-top:20px;color:#bdcba9;font-size:9px;letter-spacing:.24em;text-transform:uppercase}.kage-deck-title{display:block;margin:26px 0 10px;font-size:clamp(24px,3vw,34px);font-weight:400;letter-spacing:-.045em}.kage-deck-caption{display:block;color:rgba(232,237,218,.66);font-size:12px;line-height:1.65}",
    ".kage-deck:nth-child(1){left:5%;top:0;--tilt:-4deg}.kage-deck:nth-child(2){right:6%;top:110px;--tilt:3deg}.kage-deck:nth-child(3){left:34%;top:270px;--tilt:2deg}.kage-deck:nth-child(4){left:2%;top:500px;--tilt:3deg}.kage-deck:nth-child(5){right:3%;top:600px;--tilt:-3deg}.kage-deck:nth-child(6){left:35%;top:790px;--tilt:-2deg}.kage-deck:nth-child(7){left:8%;top:980px;--tilt:-3deg}.kage-deck:nth-child(8){right:8%;top:1080px;--tilt:3deg}",
    ".kage-deck-detail{display:none;position:relative;max-width:900px;margin:100px auto 0;padding:54px 0 20px;border-top:1px solid rgba(221,235,202,.25);scroll-margin-top:40px}.kage-deck-detail.is-open{display:block;animation:kageBranchReveal .8s ease both}@keyframes kageBranchReveal{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}",
    ".kage-detail-label{font-size:10px;letter-spacing:.25em;text-transform:uppercase;color:#bdcba9}.kage-detail-title{font-size:clamp(38px,6vw,70px);font-weight:300;letter-spacing:-.055em;margin:16px 0}.kage-detail-note{max-width:620px;color:rgba(238,240,229,.68);font-size:14px;line-height:1.9}.kage-detail-cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:45px}.kage-detail-card{min-height:150px;padding:23px;border:1px solid rgba(220,235,200,.22);border-radius:17px;background:rgba(237,242,224,.07);backdrop-filter:blur(8px)}.kage-detail-card small{font-size:9px;letter-spacing:.2em;color:#bdcba9;text-transform:uppercase}.kage-detail-card h3{font-size:20px;font-weight:400;margin:20px 0 8px}.kage-detail-card p{font-size:12px;line-height:1.7;color:rgba(238,240,229,.62)}",
    "@media(max-width:720px){.kage-vine-world{padding:90px 20px 110px;min-height:0}.kage-vine-intro{margin-bottom:55px}.kage-deck-field{min-height:0;display:grid;grid-template-columns:1fr;gap:22px}.kage-deck,.kage-deck:nth-child(n){position:relative;inset:auto;width:100%;min-height:155px;transform:none}.kage-deck-title{margin:20px 0 8px}.kage-detail-cards{grid-template-columns:1fr}.kage-deck-detail{margin-top:75px}}",
    "@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}.kage-deck,.kage-deck-detail.is-open{transition:none;animation:none}}"
  ].join(String.fromCharCode(10));
  doc.head.appendChild(style);

  const hero = doc.querySelector(".hero") || doc.querySelector("main") || doc.body;
  if (!hero || doc.querySelector(".kage-vine-world")) return;

  // The Sylva opening scene remains intact; only its navigation/controls and old promo decks are removed.
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
    '<header class="kage-vine-intro"><div class="kage-vine-eyebrow">A living archive · things that made me</div><h1 class="kage-vine-heading">A life, growing<br>in many directions.</h1><p class="kage-vine-sub">No categories. No straight lines. Just different branches of curiosity, work, stories, and everything still growing.</p></header>',
    '<div class="kage-deck-field">',
    '<button class="kage-deck" type="button" data-deck="journey"><span class="kage-deck-index">01 · The beginning</span><strong class="kage-deck-title">My Journey</strong><span class="kage-deck-caption">The turns, detours, people, and moments that shaped the path.</span></button>',
    '<button class="kage-deck" type="button" data-deck="knowledge"><span class="kage-deck-index">02 · The roots</span><strong class="kage-deck-title">What I Know</strong><span class="kage-deck-caption">Skills, tools, ideas, and things I keep learning.</span></button>',
    '<button class="kage-deck" type="button" data-deck="music"><span class="kage-deck-index">03 · The sound</span><strong class="kage-deck-title">Music & Songwriting</strong><span class="kage-deck-caption">Lyrics, melodies, listening, and making things that feel.</span></button>',
    '<button class="kage-deck" type="button" data-deck="film"><span class="kage-deck-index">04 · The frame</span><strong class="kage-deck-title">Filmmaking & Cinema</strong><span class="kage-deck-caption">Stories, images, characters, and the art of seeing.</span></button>',
    '<button class="kage-deck" type="button" data-deck="building"><span class="kage-deck-index">05 · The making</span><strong class="kage-deck-title">Things I’ve Built</strong><span class="kage-deck-caption">Products, experiments, prototypes, and unfinished ideas.</span></button>',
    '<button class="kage-deck" type="button" data-deck="leadership"><span class="kage-deck-index">06 · The people</span><strong class="kage-deck-title">Tech & Management</strong><span class="kage-deck-caption">Building teams, organizing ideas, and making things happen.</span></button>',
    '<button class="kage-deck" type="button" data-deck="events"><span class="kage-deck-index">07 · The gathering</span><strong class="kage-deck-title">Events & Community</strong><span class="kage-deck-caption">Rooms full of people, shared energy, and things brought to life.</span></button>',
    '<button class="kage-deck" type="button" data-deck="experiments"><span class="kage-deck-index">08 · The unknown</span><strong class="kage-deck-title">Experiments</strong><span class="kage-deck-caption">Curiosity-led attempts, strange ideas, and happy accidents.</span></button>',
    '</div>',
    '<div class="kage-deck-detail" data-detail="journey"><div class="kage-detail-label">A branch · The beginning</div><h2 class="kage-detail-title">My Journey</h2><p class="kage-detail-note">A growing collection of chapters, turning points, lessons, and people. This space is intentionally left open to add the real story over time.</p><div class="kage-detail-cards"><article class="kage-detail-card"><small>01 · Chapters</small><h3>The timeline</h3><p>Milestones and moments along the way.</p></article><article class="kage-detail-card"><small>02 · Lessons</small><h3>What stayed</h3><p>Things experience taught me.</p></article><article class="kage-detail-card"><small>03 · People</small><h3>Along the way</h3><p>Collaborators, mentors, and communities.</p></article></div></div>',
    '<div class="kage-deck-detail" data-detail="knowledge"><div class="kage-detail-label">A branch · The roots</div><h2 class="kage-detail-title">What I Know</h2><p class="kage-detail-note">A living map of skills and interests, from software and AI to creative tools and working with people.</p><div class="kage-detail-cards"><article class="kage-detail-card"><small>01 · Technology</small><h3>Tools & code</h3><p>Languages, frameworks, systems, and workflows.</p></article><article class="kage-detail-card"><small>02 · Creative</small><h3>Making & media</h3><p>Visual ideas, storytelling, music, and design.</p></article><article class="kage-detail-card"><small>03 · Practice</small><h3>Learning by doing</h3><p>Skills developed through projects and experiments.</p></article></div></div>',
    '<div class="kage-deck-detail" data-detail="music"><div class="kage-detail-label">A branch · The sound</div><h2 class="kage-detail-title">Music & Songwriting</h2><p class="kage-detail-note">A place for lyrics, melodies, musical influences, recordings, and works in progress.</p><div class="kage-detail-cards"><article class="kage-detail-card"><small>01 · Notes</small><h3>What I’m learning</h3><p>Songwriting, structure, and sound.</p></article><article class="kage-detail-card"><small>02 · The process</small><h3>My journey</h3><p>Ideas from first line to finished piece.</p></article><article class="kage-detail-card"><small>03 · The work</small><h3>Originals</h3><p>Songs, drafts, and collaborations.</p></article></div></div>',
    '<div class="kage-deck-detail" data-detail="film"><div class="kage-detail-label">A branch · The frame</div><h2 class="kage-detail-title">Filmmaking & Cinema</h2><p class="kage-detail-note">Films that changed how I see, stories I want to tell, and experiments behind the camera.</p><div class="kage-detail-cards"><article class="kage-detail-card"><small>01 · The eye</small><h3>What I notice</h3><p>Visual language, performances, and storytelling.</p></article><article class="kage-detail-card"><small>02 · The path</small><h3>My journey</h3><p>Influences, learning, and creative attempts.</p></article><article class="kage-detail-card"><small>03 · The work</small><h3>Films & ideas</h3><p>Projects, concepts, and experiments.</p></article></div></div>',
    '<div class="kage-deck-detail" data-detail="building"><div class="kage-detail-label">A branch · The making</div><h2 class="kage-detail-title">Things I’ve Built</h2><p class="kage-detail-note">Products and experiments that began as a question and became something people could try.</p><div class="kage-detail-cards"><article class="kage-detail-card"><small>01 · Projects</small><h3>Selected builds</h3><p>Products, prototypes, and shipped work.</p></article><article class="kage-detail-card"><small>02 · Process</small><h3>How it happened</h3><p>Decisions, iterations, and lessons.</p></article><article class="kage-detail-card"><small>03 · Next</small><h3>In progress</h3><p>Ideas still taking shape.</p></article></div></div>',
    '<div class="kage-deck-detail" data-detail="leadership"><div class="kage-detail-label">A branch · The people</div><h2 class="kage-detail-title">Tech & Management</h2><p class="kage-detail-note">The human side of making things: teams, coordination, leadership, operations, and turning a shared idea into action.</p><div class="kage-detail-cards"><article class="kage-detail-card"><small>01 · Skills</small><h3>What I know</h3><p>Planning, communication, coordination, and product thinking.</p></article><article class="kage-detail-card"><small>02 · Experience</small><h3>My journey</h3><p>Teams, initiatives, responsibilities, and lessons.</p></article><article class="kage-detail-card"><small>03 · Outcomes</small><h3>What we made</h3><p>Communities, events, and collaborative work.</p></article></div></div>',
    '<div class="kage-deck-detail" data-detail="events"><div class="kage-detail-label">A branch · The gathering</div><h2 class="kage-detail-title">Events & Community</h2><p class="kage-detail-note">The energy of bringing people together around ideas, learning, music, and making.</p><div class="kage-detail-cards"><article class="kage-detail-card"><small>01 · Gatherings</small><h3>Events</h3><p>Meetups, festivals, and campus experiences.</p></article><article class="kage-detail-card"><small>02 · Community</small><h3>People</h3><p>Organizing, connecting, and collaborating.</p></article><article class="kage-detail-card"><small>03 · Behind it</small><h3>How it came together</h3><p>Planning, production, and the little details.</p></article></div></div>',
    '<div class="kage-deck-detail" data-detail="experiments"><div class="kage-detail-label">A branch · The unknown</div><h2 class="kage-detail-title">Experiments</h2><p class="kage-detail-note">A home for things that do not fit anywhere else: curious attempts, prototypes, rabbit holes, and happy accidents.</p><div class="kage-detail-cards"><article class="kage-detail-card"><small>01 · Curiosity</small><h3>Questions</h3><p>Things I want to understand or explore.</p></article><article class="kage-detail-card"><small>02 · Attempts</small><h3>Experiments</h3><p>Trying, breaking, adjusting, and trying again.</p></article><article class="kage-detail-card"><small>03 · Discoveries</small><h3>What emerged</h3><p>Unexpected outcomes and new directions.</p></article></div></div>'
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


  section.querySelectorAll("[data-deck]").forEach(deck => {
    deck.addEventListener("click", () => {
      const key = deck.getAttribute("data-deck");
      section.querySelectorAll("[data-deck]").forEach(item => item.setAttribute("aria-expanded", String(item === deck)));
      section.querySelectorAll("[data-detail]").forEach(panel => panel.classList.toggle("is-open", panel.getAttribute("data-detail") === key));
      section.querySelector('[data-detail="' + key + '"]').scrollIntoView({behavior:"smooth",block:"start"});
    });
  });
})();