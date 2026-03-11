"use client";

import { useEffect, useMemo, useState } from "react";

type ThemeMode = "dark" | "light";

const STORAGE_KEY = "jay-portfolio-theme";

function getPreferredTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
  return prefersLight ? "light" : "dark";
}

function applyTheme(theme: ThemeMode) {
  document.documentElement.setAttribute("data-theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const glyph = useMemo(() => (theme === "dark" ? "☀" : "☾"), [theme]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    const initial = stored === "light" || stored === "dark" ? stored : getPreferredTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function onToggle() {
    const next: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <button className="tgl" id="tgl" onClick={onToggle} aria-label="Toggle theme">
      {glyph}
    </button>
  );
}

