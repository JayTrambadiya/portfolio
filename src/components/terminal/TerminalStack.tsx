import { stack } from "../../lib/terminal";
import TerminalIcon from "./TerminalIcon";

export default function TerminalStack() {
  return (
    <section className="grid grid-cols-12 gap-gutter mb-12" id={stack.id}>
      <div className="col-span-12 hard-border bg-surface p-6">
        <div className="flex items-center gap-2 mb-6 border-b border-border pb-2">
          <TerminalIcon name="memory" />
          <h2 className="font-label-caps text-label-caps">{stack.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stack.groups.map((group) => (
            <div key={group.index} className="space-y-4">
              <h3 className="font-code text-code font-bold border-b border-border/20 pb-1">
                {group.index}
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="p-3 bg-surface-container-low hard-border font-code text-code cell-hover transition-all"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

