import { logs } from "../../lib/terminal";
import TerminalIcon from "./TerminalIcon";

export default function TerminalLogs() {
  return (
    <section className="mb-12" id={logs.id}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TerminalIcon name="database" />
          <h2 className="font-headline-md text-headline-md">{logs.title}</h2>
        </div>
        <div className="h-px flex-1 mx-6 bg-primary"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {logs.entries.map((entry) => (
          <div key={entry.title} className="hard-border bg-surface-bright flex flex-col">
            <div className="p-4 bg-surface-container border-b border-border flex justify-between items-center">
              <span className="font-code text-code font-bold">{entry.title}</span>
              <span className="font-code text-body-sm text-secondary">
                {entry.period}
              </span>
            </div>
            <div className="p-6">
              <div className="font-body-lg text-body-lg mb-4 space-y-3">
                {entry.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
                {entry.tags.map((tag) => (
                  <span key={tag} className="font-label-caps border border-border px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

