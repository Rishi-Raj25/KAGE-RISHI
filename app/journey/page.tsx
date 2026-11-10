"use client";

import { SylvaHero } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

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
      <SylvaHero
        variant="living-green"
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
