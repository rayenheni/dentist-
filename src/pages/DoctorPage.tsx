import { Link } from "react-router-dom";
import { IMAGES } from "../data";
import { Reveal, SectionTag, Stars, GoogleG } from "../components/Shared";

const CREDENTIALS = [
  "Diplôme d'État · Faculty of Dental Medicine, University of Tunis",
  "Specialised practice — prosthetics, implantology & cosmetic dentistry",
  "Continuing education in guided implantology, Geneva & Marseille",
  "CNAM-approved cabinet · private insurer network",
  "15+ years · 4,000+ treatments delivered",
];

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

export function DoctorPage() {
  return (
    <main className="pt-[120px]">
      {/* profile */}
      <section className="relative overflow-hidden bg-ivory py-16 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-mint blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* portrait */}
          <Reveal variant="left">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[3rem] border border-coral/25" aria-hidden />
              <div className="kenburns relative overflow-hidden rounded-[2.5rem] shadow-lift">
                <img src={IMAGES.doctor} alt="Dr. Walid Aouini, dental surgeon, at his cabinet in Tunis" className="aspect-[4/5] w-full object-cover" loading="lazy" />
              </div>
              <div className="floaty absolute -right-5 bottom-10 rounded-2xl bg-ink px-6 py-4 text-ivory shadow-lift">
                <p className="font-display text-3xl font-semibold leading-none">15+</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-sage">years of surgery</p>
              </div>
            </div>
          </Reveal>

          {/* bio */}
          <div>
            <Reveal>
              <SectionTag>The doctor</SectionTag>
              <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-tight text-ink sm:text-4xl">
                Dr. Walid <em className="font-light italic text-coral">Aouini</em>
                <span className="mt-2 block text-xl font-normal text-ink/50 sm:text-2xl">Chirurgien-dentiste · Dental surgeon</span>
              </h2>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-7 space-y-4 text-[15.5px] leading-relaxed text-ink/65">
                <p>
                  For over fifteen years, Dr. Aouini has practised what he calls "dentistry without drama" — the quiet,
                  precise kind. Implantology, fixed prosthetics and cosmetic work are his daily language; calm rooms,
                  honest quotations and unhurried consultations are his signature.
                </p>
                <p>
                  Patients describe him the same way, review after review: <em className="font-display italic text-teal">"serious, meticulous, attentive."</em>{" "}
                  He follows every case in French, Arabic or English, explains each step before it happens, and does not
                  believe a chair should ever feel like a queue.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-8 space-y-3">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[14px] font-semibold text-ink/70">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal/10">
                      <svg className="h-3 w-3 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
                        <path d="M4 12.5l5 5L20 6.5" />
                      </svg>
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  to="/reserver"
                  className="inline-flex items-center gap-3 rounded-full bg-coral px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory shadow-[0_14px_30px_-12px_rgba(232,109,74,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-dark"
                >
                  Consult with Dr. Aouini
                </Link>
                <span className="flex items-center gap-2 text-sm font-bold text-ink/55">
                  <GoogleG /> <Stars size={12} /> 5.0 · 83+ reviews
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* journey */}
      <section className="relative bg-sand/45 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionTag>Your visit, step by step</SectionTag>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display text-3xl font-medium leading-[1.04] tracking-tight text-ink sm:text-4xl">
                Preventative dentistry, <em className="font-light italic text-coral">designed around you.</em>
              </h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                    <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream/90 font-display text-sm font-bold text-teal backdrop-blur">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-[19px] font-semibold text-ink">
                    <span className="mr-2 text-coral/60">—</span>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink/55">{s.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* compare */}
      <section id="difference" className="bg-teal py-20 text-ivory lg:py-28">
        <CompareBlock />
      </section>
    </main>
  );
}

/* comparison table extracted */
import { COMPARISON } from "../data";

function CompareBlock() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <Reveal>
          <SectionTag light>The Aouini standard</SectionTag>
          <h2 className="max-w-2xl font-display text-3xl font-medium leading-[1.04] tracking-tight sm:text-4xl">
            We redesigned the <em className="font-light italic text-sage">Tunis dental blueprint.</em>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="max-w-sm text-[15px] leading-relaxed text-ivory/60 lg:justify-self-end">
            Same surgeon's precision — different everything else.
          </p>
        </Reveal>
      </div>

      <Reveal variant="scale" delay={120}>
        <div className="mt-14 overflow-x-auto rounded-[2rem] border border-ivory/15">
          <div className="min-w-[720px]">
            <div className="grid grid-cols-[1fr_1.5fr_1.5fr] border-b border-ivory/15 bg-ink/40 text-[11px] font-bold uppercase tracking-[0.16em]">
              <p className="px-5 py-4 text-ivory/45">Feature</p>
              <p className="flex items-center gap-2 px-5 py-4 text-coral">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 2.8 20 7v10l-8 4.2L4 17V7l8-4.2z" />
                </svg>
                Dr. Aouini
              </p>
              <p className="px-5 py-4 text-ivory/45">Traditional practices</p>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-[1fr_1.5fr_1.5fr] border-b border-ivory/10 text-[13px] transition-colors duration-300 last:border-0 hover:bg-ivory/5"
              >
                <p className={i % 2 ? "bg-ink/20 px-5 py-4 font-display text-[14px] font-semibold" : "px-5 py-4 font-display text-[14px] font-semibold"}>
                  {row.feature}
                </p>
                <p className="flex items-start gap-2.5 px-5 py-4 text-ivory/85">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-sage" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M4 12.5l5 5L20 6.5" />
                  </svg>
                  {row.us}
                </p>
                <p className="flex items-start gap-2.5 px-5 py-4 text-ivory/40">
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
  );
}