"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type TerminalTheme = {
  dark: boolean;
  toggle: () => void;
};

const TerminalThemeContext = createContext<TerminalTheme>({
  dark: false,
  toggle: () => {},
});

export function useTerminalTheme() {
  return useContext(TerminalThemeContext);
}

const STORAGE_KEY = "v2-theme";

export default function TerminalThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [dark, setDark] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "dark") {
      setDark(true);
    } else if (stored === "light") {
      setDark(false);
    } else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
      setDark(true);
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  function toggle() {
    setDark((current) => {
      const next = !current;
      window.localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      return next;
    });
  }

  return (
    <TerminalThemeContext.Provider value={{ dark, toggle }}>
      <div className={`terminal-root min-h-screen ${dark ? "dark" : ""}`}>
        {children}
      </div>
    </TerminalThemeContext.Provider>
  );
}