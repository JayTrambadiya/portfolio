"use client";

import { useTerminalTheme } from "./TerminalThemeContext";
import TerminalIcon from "./TerminalIcon";

export default function TerminalThemeToggle() {
  const { dark, toggle } = useTerminalTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="cursor-pointer hover:bg-primary hover:text-on-primary p-1 transition-colors duration-100"
    >
      <TerminalIcon name={dark ? "light_mode" : "dark_mode"} />
    </button>
  );
}