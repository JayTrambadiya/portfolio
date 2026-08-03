import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import TerminalPortfolio from "@/components/terminal/TerminalPortfolio";
import TerminalThemeProvider from "@/components/terminal/TerminalThemeContext";
import "./v2/terminal.css";

export const metadata: Metadata = {
  title: "JAY_TRAMBADIYA_SYS_v1.0 | PORTFOLIO",
  description:
    "Full-Stack Engineer / System Architect — Engineering scalable high-performance backends and seamless frontends.",
};

export default function Home() {
  return (
    <TerminalThemeProvider>
      <TerminalPortfolio />
      <Analytics />
    </TerminalThemeProvider>
  );
}