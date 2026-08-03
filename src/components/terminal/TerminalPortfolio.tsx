import TerminalDebug from "./TerminalDebug";
import TerminalHero from "./TerminalHero";
import TerminalLogs from "./TerminalLogs";
import TerminalStack from "./TerminalStack";
import TerminalTopNav from "./TerminalTopNav";
import TerminalWork from "./TerminalWork";

export default function TerminalPortfolio() {
  return (
    <>
      <TerminalTopNav />
      <main className="mt-16 p-6 md:p-14 grid-bg min-h-screen">
        <TerminalHero />
        <TerminalStack />
        <TerminalLogs />
        <TerminalWork />
        <TerminalDebug />
      </main>
    </>
  );
}
