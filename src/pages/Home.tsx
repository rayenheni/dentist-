import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../hooks";
import { CATEGORIES, IMAGES, REVIEWS, STATS, TRUST_ITEMS } from "../data";
import { Reveal, SectionTag, Stars, GoogleG, ArrowIcon, CAT_ICONS } from "../components/Shared";

/* ── hero ── */
const mask = (i: number) => ({ animationDelay: `${0.15 + i * 0.14}s` });

export function HomeHero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ivory pt-[120px]">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-24 h-[480px] w-[480px] rounded-full bg-mint blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-sand blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-14">
        <div>
          <Reveal delay={80}>
            <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-cream px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-teal">
              <span className="h-1.5 w-1.5 rounded-full bg-coral pulse-dot" />
              Cabinet dentaire · Centre Urbain Nord, Tunis
            </p>
          </Reveal>

          <h1 className="font-display text-[11vw] font-medium leading-[0.98] tracking-[-0.02em] text-ink sm:text-5xl lg:text-[4.3rem]">
            <span className="mask-line"><span style={mask(0)}>Modern dentistry,</span></span>
            <span className="mask-line">
              <span style={mask(1)}>beautifully <em className="font-light italic text-coral">delivered.</em></span>
            </span>
          </h1>

          <Reveal delay={420}>
            <p className="mt-7 max-w-lg text-[16.5px] leading-relaxed text-ink/65">
              Precision implantology, air-polish cleanings and studio-grade whitening — in a calm, boutique studio at
              Centre Urbain Nord. Same-day booking, transparent written quotations, and not a single rushed minute.
            </p>
          </Reveal>

          <Reveal delay={540}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link to="/reserver" className="btn-ripple group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] text-ivory shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal">
                Book your free consultation
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="link-under text-sm font-bold uppercase tracking-[0.12em] text-teal">Explore the care menu</Link>
            </div>
          </Reveal>

          <Reveal delay={660}>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
              <span className="flex items-center gap-2.5"><GoogleG /><Stars /><span className="text-sm font-bold text-ink">5.0 · 83+ Google reviews</span></span>
              <span className="hidden h-4 w-px bg-ink/15 sm:block" />
              <span className="text-sm font-semibold text-ink/55">Français · العربية · English</span>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale" delay={250} className="relative">
          <div className="relative">
            <div className="kenburns overflow-hidden rounded-[2.5rem] shadow-lift">
              <img src={IMAGES.hero} alt="The bright, modern treatment room at Cabinet Dr. Aouini, Tunis" className="aspect-[4/5] w-full object-cover sm:aspect-[5/5.4]" loading="eager" />
            </div>
            <div className="floaty absolute -left-5 top-10 hidden rounded-2xl bg-cream/95 px-5 py-4 shadow-soft backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <GoogleG />
                <div>
                  <div className="flex items-center gap-1.5"><Stars size={12} /><span className="font-display text-lg font-semibold leading-none text-ink">5.0</span></div>
                  <p className="mt-1 text-[11px] font-semibold text-ink/55">83+ verified reviews</p>
                </div>
              </div>
            </div>
            <div className="floaty-late absolute -right-4 bottom-14 rounded-2xl bg-teal px-5 py-4 text-ivory shadow-lift">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sage">Next available</p>
              <p className="mt-1 font-display text-xl font-medium">Tomorrow · 10:30</p>
              <p className="mt-1 text-[11px] text-ivory/65">Same-day urgent chairs, Thu → 20:30</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* stats strip */}
      <div className="border-y border-ink/10 bg-cream/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-ink/10 px-5 sm:px-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="px-4 py-7 text-center first:pl-0 lg:px-8">
              <p className="font-display text-3xl font-semibold text-teal sm:text-4xl">{s.value}</p>
              <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink/50">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* trust marquee */}
      <div className="marquee overflow-hidden border-b border-ink/10 bg-ivory py-4" aria-hidden>
        <div className="marquee-track flex w-max items-center" style={{ ["--marquee-speed" as string]: "38s" }}>
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center">
              {TRUST_ITEMS.map((t) => (
                <span key={t + dup} className="flex items-center gap-3 whitespace-nowrap px-7 text-[12px] font-bold uppercase tracking-[0.22em] text-ink/45">
                  <svg className="h-3 w-3 text-coral" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.5l-5.8 3.05 1.1-6.5-4.7-4.6 6.5-.95L12 2.6z" /></svg>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── features ── */
const FEAT_SHORT = [
  { label: "Precision technology", text: "3D CBCT scanner, CAD/CAM and air-polish — your smile seen in 3D before any decision" },
  { label: "One-click booking", text: "Reserve in seconds — same & next-day slots, Thursday evenings until 20:30" },
  { label: "Gentle-minded care", text: "Comfort-first at every step. Anxiety? We built the room for that" },
  { label: "Transparent pricing", text: "Written quotation at your visit — it does not move. No surprises, ever" },
];

export function FeaturesStrip() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <Reveal>
            <SectionTag>Why patients choose the cabinet</SectionTag>
            <h2 className="font-display text-3xl font-medium leading-[1.04] tracking-tight text-ink sm:text-4xl">
              Experience dental care <em className="font-light italic text-coral">done differently.</em>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/55">
              We removed the fear, the rushing and the price-mystery from dentistry in Tunis. What's left is precise
              surgery, honest numbers and a room you can actually relax in.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {FEAT_SHORT.map((f) => (
                <div key={f.label} className="card-lift rounded-2xl border border-ink/8 bg-cream p-6">
                  <p className="font-display text-[17px] font-semibold text-ink">{f.label}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink/50">{f.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── mini services ── */
export function MiniServices() {
  return (
    <section className="bg-sky/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionTag>The care menu</SectionTag>
            <h2 className="max-w-xl font-display text-3xl font-medium leading-[1.04] tracking-tight text-ink sm:text-4xl">
              Get started with the <em className="font-light italic text-coral">treatment that fits you.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/services" className="link-under inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-teal">
              Full menu <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => {
            const Icon = CAT_ICONS[c.icon];
            return (
              <Reveal key={c.id} delay={i * 90}>
                <Link
                  to="/services"
                  className="card-lift group flex h-full flex-col rounded-3xl border border-ink/8 bg-ivory p-6"
                >
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-mint text-teal transition-all duration-500 group-hover:bg-teal group-hover:text-ivory">
                    <Icon />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">{c.label}</h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink/50">{c.blurb.slice(0, 100)}</p>
                  <div className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-coral">
                    {c.services.length} treatments
                    <ArrowIcon className="h-3 w-3" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── gallery preview ── */
export function StudioGallery() {
  const [idx, setIdx] = useState(0);
  const reduced = usePrefersReducedMotion();
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (reduced) return;
    timer.current = window.setInterval(() => setIdx((i) => (i + 1) % IMAGES.gallery.length), 4800);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [reduced]);

  const go = (i: number) => {
    setIdx(i);
    if (timer.current) window.clearInterval(timer.current);
    if (!reduced) timer.current = window.setInterval(() => setIdx((p) => (p + 1) % IMAGES.gallery.length), 4800);
  };

  return (
    <section className="bg-ink py-20 text-ivory lg:py-28" aria-label="Inside the studio">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionTag light>Inside the studio</SectionTag>
            <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
              Step inside before <em className="font-light italic text-sage">you arrive.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-[14px] leading-relaxed text-ivory/55">
              Two treatment rooms, an implant suite and a lounge with real tea. Built for calm — every material, light and surface was chosen for that.
            </p>
          </Reveal>
        </div>

        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2rem]">
            <div className="kenburns">
              <img key={idx} src={IMAGES.gallery[idx].src} alt={IMAGES.gallery[idx].alt} className="swap-in aspect-[16/9] w-full object-cover" />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-5 pt-16 sm:p-7 sm:pt-20">
              <p className="font-display text-base font-medium text-ivory sm:text-xl">{IMAGES.gallery[idx].caption}</p>
              <p className="font-display text-sm text-sage">{String(idx + 1).padStart(2, "0")} / {String(IMAGES.gallery.length).padStart(2, "0")}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid grid-cols-6 gap-2 sm:gap-3">
          {IMAGES.gallery.map((g, i) => (
            <button key={g.src} onClick={() => go(i)} aria-label={`Show: ${g.caption}`}
              className={cn("relative overflow-hidden rounded-xl transition-all duration-500", i === idx ? "ring-2 ring-coral ring-offset-2 ring-offset-ink" : "opacity-40 hover:opacity-90")}>
              <img src={g.src} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── before/after mini ── */
export function MiniResults() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal variant="left">
            <div className="img-hover-zoom kenburns overflow-hidden rounded-[2rem] shadow-lift">
              <img src={IMAGES.before} alt="Patient smile before whitening" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionTag>Real results</SectionTag>
              <h2 className="font-display text-3xl font-medium leading-[1.04] tracking-tight text-ink sm:text-4xl">
                97% of patients see <em className="font-light italic text-coral">instant results</em> on their first visit.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/60">
                Drag the before/after slider, browse the gallery and read verified patient reviews — all on our results page.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link to="/realisations" className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal">
                  See results <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <span className="flex items-center gap-2 text-sm font-bold text-ink/55"><GoogleG /> <Stars size={12} /> 5.0 · 83+ reviews</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── journey steps ── */
const STEPS = [
  { n: "01", title: "Book in seconds", text: "Pick a treatment and a slot online — confirmed by SMS in under an hour.", img: IMAGES.steps[0].src },
  { n: "02", title: "Meet your surgeon", text: "We start with conversation, not a clipboard. In French, Arabic or English.", img: IMAGES.steps[1].src },
  { n: "03", title: "Comfort-first care", text: "Soft light, headphones, eye mask, mint tea. Every step explained and consented.", img: IMAGES.steps[2].src },
  { n: "04", title: "See the results", text: "A written plan, a fixed quotation and a maintenance routine you'll actually keep.", img: IMAGES.steps[3].src },
];

export function JourneyPreview() {
  return (
    <section className="bg-sand/45 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><SectionTag>Your visit, step by step</SectionTag></Reveal>
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
                  <img src={s.img} alt={s.title} loading="lazy" className="aspect-[4/4.6] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]" />
                  <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-cream/90 font-display text-sm font-bold text-teal backdrop-blur">{s.n}</span>
                </div>
                <h3 className="mt-5 font-display text-[19px] font-semibold text-ink"><span className="mr-2 text-coral/60">—</span>{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink/55">{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── doctor preview ── */
export function DoctorPreview() {
  return (
    <section className="relative overflow-hidden bg-ivory py-20 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute -right-48 bottom-0 h-[380px] w-[380px] rounded-full bg-mint blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal variant="left">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div className="absolute -inset-3 rounded-[2.5rem] border border-coral/25" aria-hidden />
            <div className="kenburns relative overflow-hidden rounded-[2rem] shadow-lift">
              <img src={IMAGES.doctor} alt="Dr. Walid Aouini" className="aspect-[4/5] w-full object-cover" loading="lazy" />
            </div>
            <div className="floaty absolute -right-4 bottom-8 rounded-2xl bg-ink px-5 py-3 text-ivory shadow-lift">
              <p className="font-display text-2xl font-semibold leading-none">15+</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-sage">years of surgery</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionTag>The doctor</SectionTag>
            <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-tight text-ink sm:text-4xl">
              Dr. Walid <em className="font-light italic text-coral">Aouini</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-[15.5px] leading-relaxed text-ink/60">
              For over fifteen years, Dr. Aouini has practised what he calls "dentistry without drama" — the quiet, precise kind. Implantology, fixed prosthetics and cosmetic work are his daily language; calm rooms, honest quotations and unhurried consultations are his signature.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ink/60">
              Patients describe him the same way, review after review: <em className="font-display italic text-teal">"serious, meticulous, attentive."</em> He follows every case in French, Arabic or English.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link to="/docteur" className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal">
                Meet the doctor <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <span className="flex items-center gap-2 text-sm font-bold text-ink/55"><GoogleG /> <Stars size={12} /> 5.0 · 83+ reviews</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── reviews ── */
export function MiniReviews() {
  const shown = REVIEWS.slice(0, 3);
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionTag>Patient words</SectionTag>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Loved by <em className="font-light italic text-coral">83+ patients</em> — and counting.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <figure className="card-lift h-full rounded-3xl border border-ink/8 bg-ivory p-6">
                <Stars size={12} />
                <blockquote className="mt-3 text-[14.5px] leading-relaxed text-ink/70">"{r.text}"</blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-teal text-sm font-semibold text-ivory">{r.name[0]}</span>
                  <span>
                    <span className="block text-sm font-bold text-ink">{r.name}</span>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <div className="mt-10 text-center">
            <Link to="/realisations" className="link-under inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-teal">
              Read all reviews <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── CTA ── */
export function HomeCta() {
  return (
    <section className="bg-teal py-20 text-ivory lg:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
            Your smile deserves the <em className="font-light italic text-sage">quiet, precise kind</em> of care.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-ivory/70">
            First visit is complimentary — digital X-rays, 3D scan and a written quotation. No commitment, no surprise.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link to="/reserver" className="btn-ripple glow group inline-flex items-center gap-3 rounded-full bg-coral px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory shadow-[0_14px_30px_-12px_rgba(232,109,74,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-dark">
              Book a free consultation
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/faq" className="rounded-full border border-ivory/30 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-ivory hover:text-teal">
              Questions & insurance
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}