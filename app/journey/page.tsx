"use client";

import { SylvaHero } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export default function JourneyPage() {
  return (
    <main
      aria-label="Sylva living green scene"
      className="sylva-scene-only"
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
      <style jsx global>{`
        .sylva-scene-only button,
        .sylva-scene-only a,
        .sylva-scene-only h1,
        .sylva-scene-only h2,
        .sylva-scene-only h3,
        .sylva-scene-only p,
        .sylva-scene-only [role="button"] {
          display: none !important;
        }
      `}</style>
      <SylvaHero
        headingFont="lexend"
        bodyFont="lexend"
        headingWeight="300"
        bodyWeight="300"
        primaryColor="#ffffff"
        headingSize={63}
        bodySize={16.5}
        headingLetterSpacing={-0.006}
      />
    </main>
  );
}
