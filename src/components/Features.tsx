import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { usePrefersReducedMotion } from "../hooks";
import { IMAGES } from "../data";
import { IconBook, IconGentle, IconPrice, IconSpa, IconTech, IconYears, Reveal, SectionTag } from "./Shared";

const FEATURES = [
  {
    icon: IconTech,
    title: "Precision technology",
    text: "3D CBCT scanner, intraoral camera and CAD/CAM milled crowns. We see your smile in 3D before a single decision is made.",
  },
  {
    icon: IconBook,
    title: "One-click booking",
    text: "Reserve online in seconds — same and next-day slots, evening care on Thursdays until 20:30. No phone tag.",
  },
  {
    icon: IconGentle,
    title: "Gentle-minded treatments",
    text: "Comfort-first dentistry: every step explained, consented and paced around you. Anxiety? We built the room for that.",
  },
  {
    icon: IconYears,
    title: "Fifteen years of surgery",
    text: "The cabinet is led by dental surgeon Dr. Walid Aouini — implants, prosthetics and aesthetic work, day in, day out.",
  },
  {
    icon: IconPrice,
    title: "Transparent pricing",
    text: "A fixed quotation in Tunisian dinars before treatment begins. No hidden fees, no up-sells at the chair.",
  },
  {
    icon: IconSpa,
    title: "Boutique comforts",
    text: "Soft lighting, headphones, an eye mask and a warm mint tea — all on the house, every single visit.",
  },
];

export function Features() {
  return (
    <section id="care" className="relative bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <SectionTag>Experience dental care, done differently</SectionTag>
            <h2 className="font-display text-4xl font-medium leading-[1.04] tracking-tight text-ink sm:text-5xl">
              A clinic that feels more like <em className="font-light italic text-clay">your parlour</em> than a queue.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-md text-[15.5px] leading-relaxed text-ink/65 lg:justify-self-end">
              We removed the fear, the rushing and the price-mystery from dentistry in Tunis. What's left is precise
              surgery, honest numbers and a room you can actually relax in.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 110}>
              <article className="group h-full rounded-3xl border border-ink/8 bg-ivory p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-pine/25 hover:shadow-soft">
                <div className="mb-5 grid h-13 w-13 place-items-center rounded-full bg-mint p-3.5 text-pine transition-all duration-500 group-hover:bg-pine group-hover:text-ivory">
                  <f.icon />
                </div>
                <h3 className="font-display text-[21px] font-semibold text-ink">{f.title}</h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink/60">{f.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const [idx, setIdx] = useState(0);
  const reduced = usePrefersReducedMotion();
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (reduced) return;
    timer.current = window.setInterval(() => setIdx((i) => (i + 1) % IMAGES.gallery.length), 4600);
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
    <section className="bg-ink py-24 text-ivory lg:py-28" aria-label="Inside the studio">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionTag light>Inside the studio</SectionTag>
            <h2 className="font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Step inside before <em className="font-light italic text-sage">you arrive.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-sm text-sm leading-relaxed text-ivory/60">
              Two treatment rooms, an implant suite and a lounge with real tea. Built for calm — every material, light
              and surface was chosen for that.
            </p>
          </Reveal>
        </div>

        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <div className="kenburns">
              <img
                key={idx}
                src={IMAGES.gallery[idx].src}
                alt={IMAGES.gallery[idx].alt}
                className="swap-in aspect-[16/9] w-full object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-7 pt-20">
              <p className="font-display text-xl font-medium text-ivory sm:text-2xl">{IMAGES.gallery[idx].caption}</p>
              <p className="font-display text-sm text-sage">
                {String(idx + 1).padStart(2, "0")} / {String(IMAGES.gallery.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-5 grid grid-cols-6 gap-2.5 sm:gap-3">
          {IMAGES.gallery.map((g, i) => (
            <button
              key={g.src}
              onClick={() => go(i)}
              aria-label={`Show photo: ${g.caption}`}
              className={cn(
                "relative overflow-hidden rounded-xl transition-all duration-500",
                i === idx ? "ring-2 ring-clay ring-offset-2 ring-offset-ink" : "opacity-45 hover:opacity-90"
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
