import { terminalImages, work } from "../../lib/terminal";
import TerminalIcon from "./TerminalIcon";

export default function TerminalWork() {
  return (
    <section className="mb-12" id={work.id}>
      <div className="flex items-center gap-2 mb-6">
        <TerminalIcon name="terminal" />
        <h2 className="font-headline-md text-headline-md">{work.title}</h2>
      </div>
      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-12 lg:col-span-7 hard-border-heavy bg-surface flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden border-r-2 border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover"
              src={terminalImages.foxtale}
              alt={work.featured.name}
            />
          </div>
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
<h3 className="font-headline-md text-headline-md mb-2">
              {work.featured.name}
            </h3>
            <div className="font-body-sm text-body-sm mb-4 space-y-1">
              {work.featured.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <ul className="font-code text-body-sm list-none p-0 space-y-1">
              {work.featured.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
              <div className="mt-4 border-t border-border pt-4 flex justify-between items-center">
                  <span className="font-label-caps">{work.featured.tech}</span>
              <a
              href={work.featured.href}
              target="_blank"
              rel="noreferrer"
              className="self-start inline-flex items-center gap-1  transition-colors duration-100"
            >

              <TerminalIcon name="north_east" className="p-1 -m-1text-sm hover:bg-primary hover:text-on-primary" />
            </a>
              </div>
          </div>
        </div>
        {work.projects.map((project) => (
          <div
            key={project.name}
            className="col-span-12 md:col-span-6 lg:col-span-5 hard-border bg-surface p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-headline-md text-headline-md mb-2">
                {project.name}
              </h3>
              <div className="font-body-sm text-body-sm space-y-1">
                {project.description.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
            <div className="mt-4 border-t border-border pt-4 flex justify-between items-center">
              <span className="font-label-caps">{project.tech}</span>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="p-1 -m-1 hover:bg-primary hover:text-on-primary transition-colors duration-100 inline-flex"
              >
                <TerminalIcon name="north_east" />
              </a>
            </div>
          </div>
        ))}
        <div className="col-span-12 lg:col-span-7 hard-border bg-primary-container relative h-48 lg:h-auto overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
            <div className="mb-4">
              <TerminalIcon name="videocam" className="text-on-primary text-[48px]" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-primary mb-2">
              {work.promo.title}
            </h3>
            <div className="font-body-sm text-body-sm text-on-primary/80 mb-6 max-w-md space-y-1">
              {work.promo.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <a
              href={work.promo.href}
              target="_blank"
              rel="noreferrer"
              className="hard-border bg-surface text-primary px-6 py-2 font-code text-code hover:bg-primary hover:text-on-primary transition-colors duration-100 flex items-center gap-2"
            >
              {work.promo.cta}
              <TerminalIcon name="north_east" className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

