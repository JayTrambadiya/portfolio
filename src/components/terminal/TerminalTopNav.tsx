import { terminalNav } from "../../lib/terminal";
import TerminalIcon from "./TerminalIcon";
import TerminalThemeToggle from "./TerminalThemeToggle";

export default function TerminalTopNav() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-14 h-16 bg-surface border-b-2 border-border">
      <div className="flex items-center gap-2 md:gap-8 min-w-0">
        <span className="font-headline-md text-[15px] sm:text-headline-md font-bold text-primary whitespace-nowrap">
          {terminalNav.brand}
        </span>
        <div className="hidden md:flex gap-4">
          <span className="font-code text-code text-primary font-bold border-b-2 border-border">
            {terminalNav.status}
          </span>
          <span className="font-code text-code text-secondary">
            {terminalNav.uptime}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-6">
        <div className="flex gap-1 md:gap-4">
          {/*{terminalNav.icons.map((icon) => (*/}
          {/*  <TerminalIcon*/}
          {/*    key={icon}*/}
          {/*    name={icon}*/}
          {/*    className="text-primary cursor-pointer hover:bg-primary hover:text-on-primary p-1 transition-colors duration-100"*/}
          {/*  />*/}
          {/*))}*/}
          <TerminalThemeToggle />
        </div>
        <a
          href="/jay_trambadiya_resume.pdf"
          download="jay_trambadiya_resume.pdf"
          className="hard-border-heavy bg-primary text-on-primary px-2 md:px-4 py-1 font-code text-[11px] md:text-code hover:bg-surface hover:text-primary transition-colors duration-100 whitespace-nowrap"
        >
          {terminalNav.downloadCv}
        </a>
      </div>
    </nav>
  );
}

