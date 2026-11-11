"use client";

export default function JourneyPage() {
  return (
    <main
      aria-label="Sylva living green environment"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100dvh",
        minHeight: 0,
        overflow: "hidden",
        background: "#4a4d44",
      }}
    >
      <iframe
        title="Original Sylva living green environment"
        src="/landing-pages/inner-green-3d.html?v=original-sylva"
        loading="eager"
        allow="fullscreen"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups allow-downloads"
        onLoad={(event) => {
          const doc = event.currentTarget.contentDocument;
          if (!doc || doc.getElementById("sylva-scene-only-style")) return;

          const style = doc.createElement("style");
          style.id = "sylva-scene-only-style";
          style.textContent = `
            h1, h2, h3, p, a, button, [role="button"],
            .hero-copy, .hero-content, .hero-text, .hero-ui,
            .copy, .intro-copy, .text-content, .play-button,
            .play-control, .controls, .navigation, nav {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              pointer-events: none !important;
            }
          `;
          doc.head.appendChild(style);
        }}
        style={{
          position: "absolute",
          inset: 0,
          display: "block",
          width: "100%",
          height: "100%",
          border: 0,
          background: "#4a4d44",
        }}
      />
    </main>
  );
}
