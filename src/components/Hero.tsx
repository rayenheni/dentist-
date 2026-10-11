import { CLINIC, IMAGES, STATS, TRUST_ITEMS } from "../data";
import { GoogleG, Reveal, Stars } from "./Shared";

const mask = (i: number) => ({ animationDelay: `${0.15 + i * 0.14}s` });

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-[120px]">
      {/* ambient shapes */}
      <div aria-hidden className="pointer-events-none absolute -right-40 top-24 h-[480px] w-[480px] rounded-full bg-mint blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-sand blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-14">
        {/* copy */}
        <div>
          <Reveal delay={80}>
            <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-ivory px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-pine">
              <span className="h-1.5 w-1.5 rounded-full bg-clay pulse-dot" />
              Cabinet dentaire · Centre Urbain Nord, Tunis
            </p>
          </Reveal>

          <h1 className="font-display text-[13vw] font-medium leading-[0.98] tracking-[-0.02em] text-ink sm:text-6xl lg:text-[4.6rem]">
            <span className="mask-line">
              <span style={mask(0)}>Modern dentistry,</span>
            </span>
            <span className="mask-line">
              <span style={mask(1)}>
                beautifully <em className="font-light italic text-clay">delivered.</em>
              </span>
            </span>
          </h1>

          <Reveal delay={420}>
            <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-ink/70">
              Precision implantology, air-polish cleanings and studio-grade whitening — in a calm, boutique studio at
              Centre Urbain Nord. Same-day booking, transparent written quotations, and not a single rushed minute.
            </p>
          </Reveal>

          <Reveal delay={540}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#book"
                className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-ivory shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine"
              >
                Book your free consultation
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M4 12h15M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#menu"
                className="link-under text-sm font-bold uppercase tracking-[0.12em] text-pine"
              >
                Explore the care menu
              </a>
            </div>
          </Reveal>

          <Reveal delay={660}>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
              <span className="flex items-center gap-2.5">
                <GoogleG />
                <Stars />
                <span className="text-sm font-bold text-ink">5.0 · 83+ Google reviews</span>
              </span>
              <span className="hidden h-4 w-px bg-ink/15 sm:block" />
              <span className="text-sm font-semibold text-ink/60">Français · العربية · English</span>
            </div>
          </Reveal>
        </div>

        {/* imagery */}
        <Reveal variant="scale" delay={250} className="relative">
          <div className="relative">
            <div className="kenburns overflow-hidden rounded-[2.5rem] shadow-lift">
              <img
                src={IMAGES.hero}
                alt="The bright, modern treatment room at Cabinet Dr. Aouini, Tunis"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/5.4]"
                loading="eager"
              />
            </div>

            {/* floating rating card */}
            <div className="floaty absolute -left-5 top-10 hidden rounded-2xl bg-cream/95 px-5 py-4 shadow-soft backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <GoogleG />
                <div>
                  <div className="flex items-center gap-1.5">
                    <Stars size={12} />
                    <span className="font-display text-lg font-semibold leading-none text-ink">5.0</span>
                  </div>
                  <p className="mt-1 text-[11px] font-semibold text-ink/60">83+ verified reviews</p>
                </div>
              </div>
            </div>

            {/* floating slot card */}
            <div className="floaty-late absolute -right-4 bottom-14 rounded-2xl bg-pine px-5 py-4 text-ivory shadow-lift">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sage">Next available</p>
              <p className="mt-1 font-display text-xl font-medium">Tomorrow · 10:30</p>
              <p className="mt-1 text-[11px] text-ivory/70">Same-day urgent chairs, Thu → 20:30</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* stats strip */}
      <div className="border-y border-ink/10 bg-ivory/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-ink/10 px-5 sm:px-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="px-4 py-7 text-center first:pl-0 lg:px-8">
              <p className="font-display text-3xl font-semibold text-pine sm:text-4xl">{s.value}</p>
              <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink/55">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* trust marquee */}
      <div className="marquee overflow-hidden border-b border-ink/10 bg-cream py-4" aria-hidden>
        <div className="marquee-track flex w-max items-center" style={{ ["--marquee-speed" as string]: "38s" }}>
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center">
              {TRUST_ITEMS.map((t) => (
                <span key={t + dup} className="flex items-center gap-3 whitespace-nowrap px-7 text-[12px] font-bold uppercase tracking-[0.22em] text-ink/50">
                  <svg className="h-3 w-3 text-clay" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.5l-5.8 3.05 1.1-6.5-4.7-4.6 6.5-.95L12 2.6z" /></svg>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <span className="sr-only">{CLINIC.tagline}</span>
    </section>
  );
}
