import { useCallback, useRef, useState } from "react";
import { IMAGES } from "../data";
import { Reveal, Stars } from "./Shared";

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

export function BeforeAfter() {
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
    <section id="results" className="relative overflow-hidden bg-ivory py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-mint/70 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-5 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-clay">
              <span className="h-px w-10 bg-clay/50" />
              Real results, drag to compare
              <span className="h-px w-10 bg-clay/50" />
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
              97% of patients see <em className="font-light italic text-clay">instant results</em> — the first visit.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* slider */}
          <Reveal variant="scale">
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

              {/* labels */}
              <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ivory backdrop-blur">Before</span>
              <span className="absolute right-4 top-4 rounded-full bg-clay px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ivory">After · 1 session</span>

              {/* handle */}
              <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
                <div className="absolute inset-y-0 -ml-px w-0.5 bg-ivory/90 shadow-[0_0_14px_rgba(12,42,39,0.5)]" />
                <div
                  role="slider"
                  aria-label="Drag to compare before and after"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(pos)}
                  tabIndex={0}
                  onKeyDown={onKeyDown}
                  className="absolute top-1/2 grid h-13 w-13 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border-2 border-ivory bg-ink/90 text-ivory shadow-lift backdrop-blur transition-transform duration-300 group-hover:scale-105 focus:outline-none focus:ring-4 focus:ring-clay/50"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
                  </svg>
                </div>
              </div>
            </div>
          </Reveal>

          {/* quotes */}
          <div className="space-y-5">
            {QUOTES.map((q, i) => (
              <Reveal key={q.name} delay={i * 130} variant="right">
                <figure className="rounded-3xl border border-ink/8 bg-cream p-6 shadow-soft transition-transform duration-500 hover:-translate-y-1">
                  <Stars size={12} />
                  <blockquote className="mt-3 font-display text-[17px] font-medium leading-snug text-ink">
                    “{q.text}”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-pine font-display text-sm font-semibold text-ivory">
                      {q.name[0]}
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-ink">{q.name}</span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/45">{q.tag} · verified</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-[12px] font-semibold text-ink/45">
            Representative results from AirPolish + Studio Whitening at the cabinet. Individual outcomes vary with enamel and habits.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
