import { IMAGES, REVIEWS } from "../data";
import { GoogleG, Reveal, SectionTag, Stars } from "./Shared";

const CREDENTIALS = [
  "Diplôme d'État · Faculty of Dental Medicine, University of Tunis",
  "Specialised practice — prosthetics, implantology & cosmetic dentistry",
  "Continuing education in guided implantology, Geneva & Marseille",
  "CNAM-approved cabinet · private insurer network",
  "15+ years · 4,000+ treatments delivered",
];

export function Doctor() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute -right-48 bottom-0 h-[460px] w-[460px] rounded-full bg-mint blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* portrait */}
        <Reveal variant="left">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-[3rem] border border-clay/25" aria-hidden />
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
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Dr. Walid <em className="font-light italic text-clay">Aouini</em>
              <span className="mt-2 block text-2xl font-normal text-ink/55 sm:text-3xl">Chirurgien-dentiste · Dental surgeon</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-7 space-y-4 text-[15.5px] leading-relaxed text-ink/70">
              <p>
                For over fifteen years, Dr. Aouini has practised what he calls “dentistry without drama” — the quiet,
                precise kind. Implantology, fixed prosthetics and cosmetic work are his daily language; calm rooms,
                honest quotations and unhurried consultations are his signature.
              </p>
              <p>
                Patients describe him the same way, review after review: <em className="font-display italic text-pine">“serious, meticulous, attentive.”</em>{" "}
                He follows every case in French, Arabic or English, explains each step before it happens, and does not
                believe a chair should ever feel like a queue.
              </p>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-8 space-y-3">
              {CREDENTIALS.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[14.5px] font-semibold text-ink/75">
                  <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-pine/10">
                    <svg className="h-3 w-3 text-clay" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
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
              <a
                href="#book"
                className="inline-flex items-center gap-3 rounded-full bg-clay px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory shadow-[0_14px_30px_-12px_rgba(196,100,59,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-clay-2"
              >
                Consult with Dr. Aouini
              </a>
              <span className="flex items-center gap-2 text-sm font-bold text-ink/60">
                <GoogleG /> <Stars size={12} /> 5.0 · 83+ reviews
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="overflow-hidden bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionTag>Patient words</SectionTag>
            <h2 className="font-display text-4xl font-medium leading-[1.04] tracking-tight text-ink sm:text-5xl">
              Loved by <em className="font-light italic text-clay">83+ Google patients</em> — and counting.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream px-6 py-4 shadow-soft">
              <GoogleG className="h-7 w-7" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-semibold text-ink">5.0</span>
                  <Stars size={13} />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink/50">Verified Google reviews</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* marquee rows */}
      <div className="marquee mt-14 space-y-5" aria-hidden>
        <div className="marquee-track flex w-max gap-5 pr-5" style={{ ["--marquee-speed" as string]: "52s" }}>
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <ReviewCard key={`a${i}`} r={r} />
          ))}
        </div>
        <div className="marquee-track flex w-max gap-5 pr-5" style={{ ["--marquee-speed" as string]: "64s", animationDirection: "reverse" }}>
          {[...REVIEWS].reverse().concat([...REVIEWS].reverse()).map((r, i) => (
            <ReviewCard key={`b${i}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ r }: { r: (typeof REVIEWS)[number] }) {
  return (
    <figure className="w-[340px] shrink-0 rounded-3xl border border-ink/8 bg-cream p-6 shadow-soft sm:w-[400px]">
      <div className="flex items-center justify-between">
        <Stars size={12} />
        <GoogleG className="h-4 w-4 opacity-70" />
      </div>
      <blockquote className="mt-3 text-[14.5px] leading-relaxed text-ink/75">“{r.text}”</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-pine font-display text-[15px] font-semibold text-ivory">
          {r.name[0]}
        </span>
        <span>
          <span className="block text-sm font-bold text-ink">{r.name}</span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/45">{r.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
