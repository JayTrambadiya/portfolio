import ThemeToggle from "./ThemeToggle";
import PortfolioEffects from "./PortfolioEffects";
import { portfolio } from "@/lib/portfolio";

function Icon({
  src,
  alt,
  className,
  invertOnDark,
}: {
  src?: string;
  alt?: string;
  className?: string;
  invertOnDark?: boolean;
}) {
  if (!src) return null;
  const cn = [className, invertOnDark ? "invert-on-dark" : ""].filter(Boolean).join(" ");
  return (
    // Using <img> keeps remote SVGs simple (no Next/Image SVG restrictions).
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn} src={src} alt={alt || ""} loading="lazy" />
  );
}

function ExternalArrow() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export default function PortfolioPage() {
  const p = portfolio.person;
  // SimpleIcons currently doesn't ship LinkedIn; use a crisp favicon instead.
  const linkedInIcon = "/icons/favicons/linkedin.com-64.png";
  const gitHubIcon = "/icons/simpleicons/github-000.svg";

  return (
    <>
      <nav>
        <div className="ni">
          <a href="#" className="logo">
            <span className="dot" />
            jaytrambadiya
          </a>
          <div className="nr">
            <ul className="nl">
              {portfolio.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="hero">
        <div className="wrap">
          <div className="pill">
            <span className="pdot" />
            {p.status}
          </div>
          <h1>
            {p.firstName}
            <br />
            <span className="dim">{p.lastName}</span>
          </h1>
          <p className="hdesc">{p.tagline}</p>
          <div className="hbtns">
            <a href={`mailto:${p.email}`} className="btn bp">
              <span className="icbox icbox-btn" aria-hidden="true">
                <Icon className="btn-ic" src="/icons/simpleicons/gmail.svg" alt="" />
              </span>
              Get in touch
            </a>
            <a href={p.linkedin} target="_blank" rel="noreferrer noopener" className="btn bs">
              <span className="icbox icbox-btn2" aria-hidden="true">
                <Icon className="btn2-ic" src={linkedInIcon} alt="" />
              </span>
              <span className="btnlabel">LinkedIn</span> <ExternalArrow />
            </a>
            <a href={p.github} target="_blank" rel="noreferrer noopener" className="btn bs">
              <span className="icbox icbox-btn2" aria-hidden="true">
                <Icon className="btn2-ic" src={gitHubIcon} alt="" invertOnDark />
              </span>
              <span className="btnlabel">GitHub</span> <ExternalArrow />
            </a>
          </div>
          <div className="hstats">
            {portfolio.stats.map((s) => (
              <div key={s.label}>
                <div className="sn" data-count={s.count} data-suffix={s.suffix || ""}>
                  {s.count}
                  {s.suffix || ""}
                </div>
                <div className="sl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap">
        <section id="skills">
          <div className="r">
            <div className="slabel">// Stack</div>
            <div className="stitle">Technology</div>
          </div>
          <div className="r2">
            {portfolio.skills.map((row) => (
              <div className="srow" key={row.category}>
                <div className="scat">{row.category}</div>
                <div className="schips">
                  {row.chips.map((c) => (
                    <span className="chip" key={`${row.category}-${c.label}`}>
                      {c.iconSrc ? (
                        <span className="icbox icbox-chip" aria-hidden="true">
                          <Icon
                            className="chip-ic"
                            src={c.iconSrc}
                            alt=""
                            invertOnDark={"invertOnDark" in c ? c.invertOnDark : undefined}
                          />
                        </span>
                      ) : null}
                      {c.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience">
          <div className="r">
            <div className="slabel">// Experience</div>
            <div className="stitle">Work History</div>
          </div>
          <div className="exps r2">
            {portfolio.experience.map((e) => (
              <div className="exp" key={`${e.company}-${e.period}`}>
                <div>
                  <div className="eperiod">{e.period}</div>
                  <div className="eco">
                    <div className="eco-badge" aria-hidden="true">
                      {e.companyIconSrc ? (
                        <Icon className="eco-ic" src={e.companyIconSrc} alt="" />
                      ) : (
                        <span>{e.company.slice(0, 2).toUpperCase()}</span>
                      )}
                    </div>
                    {e.company}
                  </div>
                  <div className="ecotype">{e.companyMeta}</div>
                </div>
                <div>
                  <div className="erole">{e.role}</div>
                  <ul className="ebullets">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="etags">
                    {e.tags.map((t) => (
                      <span className="etag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="r">
            <div className="slabel">// Projects</div>
            <div className="stitle">Proof of Work</div>
          </div>
          <div className="pgrid r2">
            {portfolio.projects.map((pr) => (
              <div className="pcard" key={pr.name}>
                <div className="ptop">
                  <div className="pico" aria-hidden="true">
                    {pr.iconSrc ? <Icon className="pico-ic" src={pr.iconSrc} alt="" /> : null}
                  </div>
                  <a href={pr.href} target="_blank" rel="noreferrer noopener" className="plink">
                    {pr.hrefLabel} <ExternalArrow />
                  </a>
                </div>
                <div className="pname">{pr.name}</div>
                <p className="pdesc">{pr.description}</p>
                <div className="pstack">
                  {pr.stack.map((s) => (
                    <span className="pchip" key={`${pr.name}-${s.label}`}>
                      {s.iconSrc ? (
                        <span className="icbox icbox-pchip" aria-hidden="true">
                          <Icon
                            className="pchip-ic"
                            src={s.iconSrc}
                            alt=""
                            invertOnDark={"invertOnDark" in s ? s.invertOnDark : undefined}
                          />
                        </span>
                      ) : null}
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education">
          <div className="r">
            <div className="slabel">// Education</div>
            <div className="stitle">Background</div>
          </div>
          <div className="r2">
            {portfolio.education.map((ed) => (
              <div className="erow" key={`${ed.name}-${ed.period}`}>
                <div>
                  <div className="ename">{ed.name}</div>
                  <div className="eschool">{ed.school}</div>
                </div>
                <div className="eright">
                  <div className="eperiod2">{ed.period}</div>
                  <span className="escore">{ed.score}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <div className="r">
            <div className="slabel">// Contact</div>
            <div className="stitle">Get In Touch</div>
          </div>
          <div className="crow r2">
            {portfolio.contact.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="ccard"
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer noopener" : undefined}
              >
                <span className="cico" aria-hidden="true">
                  {c.iconSrc ? (
                    <span className="icbox icbox-contact" aria-hidden="true">
                      <Icon
                        className="cico-ic"
                        src={c.iconSrc}
                        alt=""
                        invertOnDark={c.invertOnDark}
                      />
                    </span>
                  ) : null}
                </span>
                <div className="ctxt">
                  <span className="clabel">{c.label}</span>
                  <span className="cval">{c.value}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer>
          <div className="ftxt">{portfolio.footer.left}</div>
          <div className="ftxt">{portfolio.footer.right}</div>
        </footer>
      </div>

      <PortfolioEffects />
    </>
  );
}


