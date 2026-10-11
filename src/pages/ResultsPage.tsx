import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../hooks";
import { IMAGES, REVIEWS } from "../data";
import { Reveal, SectionTag, Stars, GoogleG, ArrowIcon } from "../components/Shared";

const QUOTES = [
  {
    text: "I've never had a dental visit like this — painless, modern, and my smile has never looked better.",
    name: "Sana B.",
    tag: "AirPolish + Shine",
  },
  {
    text: "I used to avoid the dentist. Now I look forward to it. More like a boutique spa than a clinic — and the results? WOW.",
    name: "Karim E.",
    tag: "Veneers, 6 teeth",
  },
  {
    text: "It's not just a cleaner smile — it's a mindset shift. I didn't leave with just results, I left feeling lighter.",
    name: "Nour J.",
    tag: "Studio Whitening",
  },
];

/* ── before/after slider ── */
function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = box.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(97, Math.max(3, p)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) setFromClientX(e.clientX);
  };
  const endDrag = () => {
    dragging.current = false;
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(3, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(97, p + 4));
  };

  return (
    <div
      ref={box}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      className="ba-handle group relative cursor-ew-resize select-none overflow-hidden rounded-[2rem] shadow-lift"
    >
      <img src={IMAGES.before} alt="Patient smile before professional whitening" className="block aspect-[4/3] w-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <img src={IMAGES.after} alt="Patient smile after professional whitening" className="block h-full w-full object-cover" draggable={false} />
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ivory backdrop-blur">Before</span>
      <span className="absolute right-4 top-4 rounded-full bg-coral px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ivory">After · 1 session</span>

      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-ivory/90 shadow-[0_0_14px_rgba(15,27,45,0.5)]" />
        <div
          role="slider"
          aria-label="Drag to compare before and after"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          tabIndex={0}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 grid h-13 w-13 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border-2 border-ivory bg-ink/90 text-ivory shadow-lift backdrop-blur transition-transform duration-300 group-hover:scale-105 focus:outline-none focus:ring-4 focus:ring-coral/50"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ── gallery ── */
function GalleryStrip() {
  const [idx, setIdx] = useState(0);
  const reduced = usePrefersReducedMotion();
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!reduced) {
      timer.current = window.setInterval(() => setIdx((i) => (i + 1) % IMAGES.gallery.length), 4600);
    }
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [reduced]);

  const go = (i: number) => {
    setIdx(i);
    if (timer.current) window.clearInterval(timer.current);
    if (!reduced) timer.current = window.setInterval(() => setIdx((p) => (p + 1) % IMAGES.gallery.length), 4600);
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
        </div>

        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2rem]">
            <div className="kenburns">
              <img
                key={idx}
                src={IMAGES.gallery[idx].src}
                alt={IMAGES.gallery[idx].alt}
                className="swap-in aspect-[16/9] w-full object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-5 pt-16 sm:p-7 sm:pt-20">
              <p className="font-display text-base font-medium text-ivory sm:text-xl">{IMAGES.gallery[idx].caption}</p>
              <p className="font-display text-sm text-sage">
                {String(idx + 1).padStart(2, "0")} / {String(IMAGES.gallery.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid grid-cols-6 gap-2 sm:gap-3">
          {IMAGES.gallery.map((g, i) => (
            <button
              key={g.src}
              onClick={() => go(i)}
              aria-label={`Show photo: ${g.caption}`}
              className={cn(
                "relative overflow-hidden rounded-xl transition-all duration-500",
                i === idx ? "ring-2 ring-coral ring-offset-2 ring-offset-ink" : "opacity-40 hover:opacity-90"
              )}
            >
              <img src={g.src} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── reviews full ── */
function ReviewsFull() {
  return (
    <section className="overflow-hidden bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionTag>Patient words</SectionTag>
            <h2 className="font-display text-3xl font-medium leading-[1.04] tracking-tight text-ink sm:text-4xl">
              Loved by <em className="font-light italic text-coral">83+ Google patients</em> — and counting.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-ivory px-6 py-4 shadow-soft">
              <GoogleG className="h-7 w-7" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl font-semibold text-ink">5.0</span>
                  <Stars size={13} />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-ink/45">Verified Google reviews</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="marquee mt-12 space-y-4" aria-hidden>
        <div className="marquee-track flex w-max gap-4 pr-4" style={{ ["--marquee-speed" as string]: "52s" }}>
          {[...REVIEWS, ...REVIEWS].map((r, i) => (
            <ReviewCard key={`a${i}`} r={r} />
          ))}
        </div>
        <div className="marquee-track flex w-max gap-4 pr-4" style={{ ["--marquee-speed" as string]: "64s", animationDirection: "reverse" }}>
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
    <figure className="w-[300px] shrink-0 rounded-2xl border border-ink/8 bg-ivory p-5 shadow-soft sm:w-[370px]">
      <div className="flex items-center justify-between">
        <Stars size={11} />
        <GoogleG className="h-4 w-4 opacity-65" />
      </div>
      <blockquote className="mt-3 text-[13.5px] leading-relaxed text-ink/70">"{r.text}"</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-teal text-[13px] font-semibold text-ivory">
          {r.name[0]}
        </span>
        <span>
          <span className="block text-[13px] font-bold text-ink">{r.name}</span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40">{r.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/* ── composed page ── */
export function ResultsPage() {
  return (
    <main className="pt-[120px]">
      {/* before / after + quotes */}
      <section className="relative overflow-hidden bg-ivory py-16 lg:py-24">
        <div aria-hidden className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-mint/70 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionTag>Real results, drag to compare</SectionTag>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display text-3xl font-medium leading-[1.05] tracking-tight text-ink sm:text-4xl">
                97% of patients see <em className="font-light italic text-coral">instant results</em> — the first visit.
              </h2>
            </Reveal>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal variant="scale">
              <BeforeAfterSlider />
            </Reveal>

            <div className="space-y-4">
              {QUOTES.map((q, i) => (
                <Reveal key={q.name} delay={i * 130} variant="right">
                  <figure className="rounded-2xl border border-ink/8 bg-cream p-5 shadow-soft transition-transform duration-500 hover:-translate-y-1">
                    <Stars size={11} />
                    <blockquote className="mt-3 font-display text-[16px] font-medium leading-snug text-ink">"{q.text}"</blockquote>
                    <figcaption className="mt-3 flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-teal text-[12px] font-semibold text-ivory">
                        {q.name[0]}
                      </span>
                      <span>
                        <span className="block text-[13px] font-bold text-ink">{q.name}</span>
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40">{q.tag} · verified</span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* gallery */}
      <GalleryStrip />

      {/* reviews */}
      <ReviewsFull />

      {/* CTA */}
      <section className="bg-teal py-16 text-ivory lg:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">
              Ready to see <em className="font-light italic text-sage">your own results?</em>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ivory/70">
              First visit is complimentary — X-rays, 3D scan and a fixed quotation. No commitment.
            </p>
            <Link
              to="/reserver"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-coral px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-dark"
            >
              Book a free consultation
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}