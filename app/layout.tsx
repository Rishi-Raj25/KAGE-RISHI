import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAGE — Code × Creativity",
  description: "Software, AI experiments, digital experiences, music, film, and the curiosity that connects them.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
