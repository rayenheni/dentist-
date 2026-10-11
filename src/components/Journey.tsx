import { COMPARISON, IMAGES } from "../data";
import { Reveal, SectionTag } from "./Shared";

const STEPS = [
  {
    n: "01",
    title: "Book in seconds",
    text: "Pick a treatment and a slot online — confirmed by SMS in under an hour. Same-day and next-day chairs are always open.",
    img: IMAGES.steps[0].src,
    alt: "A relaxed first consultation at the cabinet",
  },
  {
    n: "02",
    title: "Meet your surgeon",
    text: "We start with conversation, not a clipboard. Your goals, your history and a 3D picture of your smile — in French, Arabic or English.",
    img: IMAGES.steps[1].src,
    alt: "Dr. Aouini reviewing a patient's scan",
  },
  {
    n: "03",
    title: "Comfort-first care",
    text: "Soft light, headphones, eye mask, mint tea. Every step is explained and consented before it begins — never rushed.",
    img: IMAGES.steps[2].src,
    alt: "Gentle treatment in progress with soft lighting",
  },
  {
    n: "04",
    title: "Leave with the results",
    text: "A written plan, a fixed price and a maintenance routine you'll actually keep. The mirror is the best part of the visit.",
    img: IMAGES.steps[3].src,
    alt: "Patient at home, smiling with a brighter smile",
  },
];

export function Journey() {
  return (
    <section id="visit" className="relative bg-sand/45 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-5 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-clay">
              <span className="h-px w-10 bg-clay/50" />
              Your visit, step by step
              <span className="h-px w-10 bg-clay/50" />
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-4xl font-medium leading-[1.04] tracking-tight text-ink sm:text-5xl">
              Preventative dentistry, <em className="font-light italic text-clay">designed around you.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <article className="group h-full">
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    className="aspect-[4/4.6] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
                  />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream/90 font-display text-sm font-bold text-pine backdrop-blur">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[21px] font-semibold text-ink">
                  <span className="mr-2 text-clay/60">—</span>
                  {s.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink/60">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Compare() {
  return (
    <section id="difference" className="bg-pine py-24 text-ivory lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <SectionTag light>The Aouini standard</SectionTag>
            <h2 className="max-w-2xl font-display text-4xl font-medium leading-[1.04] tracking-tight sm:text-5xl">
              We redesigned the <em className="font-light italic text-sage">Tunis dental blueprint.</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-sm text-[15px] leading-relaxed text-ivory/65 lg:justify-self-end">
              Same surgeon's precision — different everything else. Here is exactly how the cabinet differs from the
              average practice.
            </p>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={120}>
          <div className="mt-14 overflow-x-auto rounded-[2rem] border border-ivory/15">
            <div className="min-w-[720px]">
            <div className="grid grid-cols-[1.1fr_1.4fr_1.4fr] border-b border-ivory/15 bg-ink/40 text-[11px] font-bold uppercase tracking-[0.16em] sm:grid-cols-[1fr_1.5fr_1.5fr]">
              <p className="px-5 py-4 text-ivory/50">Feature</p>
              <p className="flex items-center gap-2 px-5 py-4 text-clay">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 2.8 20 7v10l-8 4.2L4 17V7l8-4.2z" />
                </svg>
                Dr. Aouini
              </p>
              <p className="px-5 py-4 text-ivory/50">Traditional practices</p>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-[1.1fr_1.4fr_1.4fr] border-b border-ivory/10 text-[13.5px] transition-colors duration-300 last:border-0 hover:bg-ivory/5 sm:grid-cols-[1fr_1.5fr_1.5fr]"
              >
                <p className={i % 2 ? "bg-ink/25 px-5 py-5 font-display text-[15px] font-semibold" : "px-5 py-5 font-display text-[15px] font-semibold"}>
                  {row.feature}
                </p>
                <p className="flex items-start gap-2.5 px-5 py-5 text-ivory/90">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-sage" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M4 12.5l5 5L20 6.5" />
                  </svg>
                  {row.us}
                </p>
                <p className="flex items-start gap-2.5 px-5 py-5 text-ivory/45">
                  <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                  {row.them}
                </p>
              </div>
            ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
