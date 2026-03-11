"use client";

import { useEffect } from "react";

export default function PortfolioEffects() {
  useEffect(() => {
    // Scroll reveal
    const els = Array.from(document.querySelectorAll<HTMLElement>(".r,.r2"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          window.setTimeout(() => el.classList.add("in"), i * 90);
          obs.unobserve(el);
        });
      },
      { threshold: 0.06 },
    );
    els.forEach((el) => obs.observe(el));

    // Count-up (hero stats)
    const st = document.querySelector(".hstats");
    if (!st) return () => obs.disconnect();

    const statsObs = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        document.querySelectorAll<HTMLElement>(".sn[data-count]").forEach((el) => {
          const target = Number.parseFloat(el.dataset.count || "0");
          const suffix = el.dataset.suffix || "";
          const isFloat = target % 1 !== 0;
          let v = 0;
          const step = target / 45;
          const id = window.setInterval(() => {
            v = Math.min(v + step, target);
            el.textContent = (isFloat ? v.toFixed(1) : Math.floor(v).toString()) + suffix;
            if (v >= target) window.clearInterval(id);
          }, 28);
        });
        statsObs.disconnect();
      },
      { threshold: 0.4 },
    );
    statsObs.observe(st);

    return () => {
      obs.disconnect();
      statsObs.disconnect();
    };
  }, []);

  return null;
}

