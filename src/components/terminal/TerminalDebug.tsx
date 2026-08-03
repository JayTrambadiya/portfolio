import { Fragment } from "react";
import { debug } from "../../lib/terminal";
import TerminalIcon from "./TerminalIcon";

export default function TerminalDebug() {
  return (
    <section className="grid grid-cols-12 gap-gutter mb-12" id={debug.id}>
      <div className="col-span-12 lg:col-span-4 hard-border bg-surface p-6">
        <div className="flex items-center gap-2 mb-6 border-b border-border pb-2">
          <TerminalIcon name="school" />
          <h2 className="font-label-caps text-label-caps">
            {debug.education.title}
          </h2>
        </div>
        <div className="space-y-4">
          {debug.education.entries.map((entry, i) => (
            <Fragment key={entry.degree}>
              <div>
                <p className="font-code text-code font-bold">{entry.degree}</p>
                <p className="font-body-sm text-body-sm text-secondary">
                  {entry.detail}
                </p>
                {entry.meta ? (
                  <p className="font-label-caps text-[10px]">{entry.meta}</p>
                ) : null}
              </div>
              {i < debug.education.entries.length - 1 ? (
                <div className="h-px bg-outline-variant"></div>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8 hard-border bg-surface-container-low p-6 font-code text-code terminal-scroll overflow-y-auto h-64">
        {debug.terminal.lines.map((line) => (
          <div key={line.text} className={line.className}>
            {line.text}
          </div>
        ))}
        <div className="flex gap-4 mb-4">
          <a
            href={debug.terminal.sayHello}
            className="bg-primary text-on-primary px-2 py-1 hover:bg-surface hover:text-primary transition-colors border border-border"
          >
            {debug.terminal.sayHelloLabel}
          </a>
          <a
            href={debug.terminal.viewGithub}
            className="border border-border px-2 py-1 hover:bg-primary hover:text-on-primary transition-colors"
          >
            {debug.terminal.viewGithubLabel}
          </a>
        </div>
        <div className="text-secondary text-body-sm">{debug.terminal.note}</div>
      </div>
    </section>
  );
}

