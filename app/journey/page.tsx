export default function JourneyPage() {
  return (
    <main
      aria-label="My journey"
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
        title="Sylva — Into the Living Green"
        src="/landing-pages/inner-green-3d.html"
        loading="eager"
        allow="fullscreen"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups allow-downloads"
        onLoad={(event) => {
          const frame = event.currentTarget;
          const frameDocument = frame.contentDocument;
          if (!frameDocument || frameDocument.getElementById("kage-journey-enhancements-loader")) return;

          const enhancement = frameDocument.createElement("script");
          enhancement.id = "kage-journey-enhancements-loader";
          enhancement.src = "/journey-enhancements.js";
          enhancement.async = true;
          frameDocument.body.appendChild(enhancement);
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
