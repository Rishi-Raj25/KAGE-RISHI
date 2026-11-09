import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAGE — Rishi",
  description: "A personal universe of projects, skills and experiments by Rishi.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
