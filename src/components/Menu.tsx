import { useState } from "react";
import { cn } from "../utils/cn";
import { CATEGORIES } from "../data";
import { CAT_ICONS, ArrowIcon, Reveal, SectionTag } from "./Shared";

export function Menu() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const cat = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];
  const CatIcon = CAT_ICONS[cat.icon];

  return (
    <section id="menu" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTag>The care menu</SectionTag>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl font-display text-4xl font-medium leading-[1.04] tracking-tight text-ink sm:text-5xl">
              Get started with the <em className="font-light italic text-clay">treatment that fits you.</em>
            </h2>
            <p className="max-w-xs text-[15px] leading-relaxed text-ink/60">
              Clear names, fixed prices in Tunisian dinars, and exactly what's included — read it before you book.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[360px_1fr]">
          {/* sticky category rail */}
          <div className="lg:sticky lg:top-36 lg:self-start">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-ink/45">Select your treatment</p>
            <div className="flex flex-wrap gap-3 lg:flex-col" role="tablist" aria-label="Treatment categories">
              {CATEGORIES.map((c) => {
                const Icon = CAT_ICONS[c.icon];
                const on = c.id === active;
                return (
                  <button
                    key={c.id}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setActive(c.id)}
                    className={cn(
                      "group flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-400",
                      on
                        ? "border-ink bg-ink text-ivory shadow-lift"
                        : "border-ink/12 bg-ivory text-ink hover:border-pine/40 hover:bg-mint"
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors duration-400",
                        on ? "bg-clay text-ivory" : "bg-mint text-pine group-hover:bg-pine group-hover:text-ivory"
                      )}
                    >
                      <Icon />
                    </span>
                    <span>
                      <span className="block font-display text-lg font-semibold leading-tight">{c.label}</span>
                      <span className={cn("mt-0.5 hidden text-[12px] leading-snug sm:block", on ? "text-ivory/65" : "text-ink/50")}>
                        {c.services.length} treatments
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 hidden rounded-2xl border border-dashed border-clay/40 bg-sand/40 p-5 lg:block">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-clay">Not sure where to start?</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink/65">
                Book the complimentary first visit — X-rays, 3D scan and a fixed quote. The only freebie we offer is
                the best one.
              </p>
              <a href="#book" className="link-under mt-3 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-pine">
                Claim it <ArrowIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* cards */}
          <div key={cat.id} className="space-y-5" role="tabpanel">
            <p className="swap-in flex items-start gap-3 rounded-2xl bg-mint/60 px-6 py-4 text-[14.5px] leading-relaxed text-pine">
              <span className="mt-0.5 text-pine"><CatIcon /></span>
              {cat.blurb}
            </p>

            {cat.services.map((s, i) => (
              <article
                key={s.name}
                className="swap-in group rounded-3xl border border-ink/8 bg-ivory p-7 transition-all duration-500 hover:-translate-y-1 hover:border-pine/25 hover:shadow-soft sm:p-8"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl font-semibold text-ink">{s.name}</h3>
                      {s.tag && (
                        <span className="rounded-full bg-clay/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-clay">
                          {s.tag}
                        </span>
                      )}
                      {s.free && (
                        <span className="rounded-full bg-pine/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-pine">
                          Complimentary
                        </span>
                      )}
                    </div>
                    <p className="mt-1.5 text-[13px] font-bold uppercase tracking-[0.14em] text-ink/45">
                      {s.minutes} · {s.time}
                    </p>
                  </div>
                  {s.free ? (
                    <span className="shrink-0 rounded-full bg-teal/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-teal">
                      Free
                    </span>
                  ) : (
                    <span className="shrink-0 rounded-full bg-ink/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-ink/40">
                      On quote
                    </span>
                  )}
                </div>

                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink/65">{s.desc}</p>

                <ul className="mt-5 grid gap-2.5 sm:grid-cols-1">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-3 text-[14px] text-ink/70">
                      <svg className="mt-0.5 h-4.5 w-4.5 shrink-0 text-clay" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                        <path d="M4 12.5l5 5L20 6.5" />
                      </svg>
                      {inc}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink/8 pt-5">
                  <p className="text-[12px] font-semibold italic text-ink/40">{s.note ?? "Bookable online or by phone · installments available"}</p>
                  <a
                    href="#book"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-ivory"
                  >
                    Book {s.name} <ArrowIcon className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
