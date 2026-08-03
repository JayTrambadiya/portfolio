import { hero } from "../../lib/terminal";
import TerminalIcon from "./TerminalIcon";

export default function TerminalHero() {
  return (
    <section className="grid grid-cols-12 gap-gutter mb-12" id={hero.id}>
      <div className="col-span-12 lg:col-span-8 px-4 md:px-8 py-8 md:py-12 bg-surface-bright hard-border-heavy flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
        <h1 className="font-headline-lg text-headline-lg mb-2">{hero.name}</h1>
        <p className="font-headline-md text-headline-md text-secondary mb-6 tracking-widest">
          {hero.title}
        </p>
        <div className="flex flex-wrap gap-4 mb-8">
          {hero.badges.map((badge) => (
            <div
              key={badge.label}
              className={`hard-border px-4 py-2 font-code text-code ${
                badge.filled ? "bg-primary text-on-primary" : "bg-surface text-primary"
              }`}
            >
              {badge.label}
            </div>
          ))}
        </div>
        <div className="font-body-lg text-body-lg max-w-2xl leading-relaxed">
          {hero.description}
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          {hero.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="hard-border bg-surface text-primary px-4 py-2 font-code text-code hover:bg-primary hover:text-on-primary transition-colors duration-100 flex items-center gap-2"
            >
              {link.label}
              <TerminalIcon name="north_east" className="text-sm" />
            </a>
          ))}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 hard-border-heavy bg-surface-container-lowest relative h-96 lg:h-full">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat grayscale contrast-125 lg:hidden"
          style={{ backgroundImage: 'url("/profile-pic.jpg")' }}
          role="img"
          aria-label={hero.imageAlt}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale contrast-125 hidden lg:block"
          style={{ backgroundImage: 'url("/download.png")' }}
          role="img"
          aria-label={hero.imageAlt}
        ></div>
        <div className="absolute inset-0 bg-primary/5 hover:bg-transparent transition-colors"></div>
      </div>
    </section>
  );
}
