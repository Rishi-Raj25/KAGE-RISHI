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
        src="/landing-pages/inner-green-3d.html?v=kage-reflection-placement-20261111"
        loading="eager"
        allow="fullscreen"
        allowFullScreen
        sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups allow-downloads"
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
