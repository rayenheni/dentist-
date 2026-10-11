import { useState } from "react";
import { cn } from "../utils/cn";
import { CLINIC, FAQS } from "../data";
import { Reveal, SectionTag } from "./Shared";

export function Payout() {
  return (
    <section id="insurance" className="bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-12 text-ivory shadow-lift sm:px-12">
            <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-pine-2/40 blur-[70px]" />
            <div aria-hidden className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-clay/25 blur-[80px]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-sage">CNAM · private insurers · installments</p>
                <h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl">
                  We handle the <em className="font-light italic text-sage">paperwork,</em> you keep the smile.
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ivory/70">
                  The cabinet works with CNAM and all major Tunisian private insurers. Every visit ends with a
                  complete reimbursement dossier — certificate, itemised breakdown and receipts — so your claim
                  is approved, not argued.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {["CNAM", "AXA", "API", "COTON", "Tunisienne", "Installments ×6, 0%"].map((b) => (
                    <li key={b} className="rounded-full border border-ivory/20 px-4 py-1.5 text-[12px] font-bold tracking-wide text-ivory/85">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-ivory/15 bg-ivory/5 p-7 backdrop-blur">
                <p className="font-display text-lg font-semibold">Good to know</p>
                <ul className="mt-4 space-y-3.5 text-[14px] leading-relaxed text-ivory/75">
                  <li className="flex gap-3"><span className="font-display text-clay">—</span> Whitening & veneers: up to 6 interest-free installments</li>
                  <li className="flex gap-3"><span className="font-display text-clay">—</span> Full implant packages quoted at the 3D scan, in writing</li>
                  <li className="flex gap-3"><span className="font-display text-clay">—</span> 10-year craftsmanship warranty on prosthetics & implants</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-cream pb-24 lg:pb-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="lg:sticky lg:top-40 lg:self-start">
          <Reveal>
            <SectionTag>Questions, answered</SectionTag>
            <h2 className="font-display text-4xl font-medium leading-[1.04] tracking-tight text-ink sm:text-5xl">
              Everything you'd ask at <em className="font-light italic text-clay">the front desk.</em>
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink/60">
              Anything else? The reception answers in French, Arabic or English —{" "}
              <a href={`tel:${CLINIC.phone.replace(/\s/g, "")}`} className="link-under font-bold text-pine">
                {CLINIC.phone}
              </a>{" "}
              or WhatsApp, every open hour.
            </p>
          </Reveal>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((f, i) => {
            const on = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className={cn(
                    "rounded-2xl border transition-all duration-500",
                    on ? "border-pine/30 bg-ivory shadow-soft" : "border-ink/10 bg-cream hover:border-pine/25"
                  )}
                >
                  <button
                    onClick={() => setOpen(on ? -1 : i)}
                    aria-expanded={on}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="font-display text-[17px] font-semibold leading-snug text-ink">{f.q}</span>
                    <span
                      className={cn(
                        "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500",
                        on ? "rotate-45 border-clay bg-clay text-ivory" : "border-ink/20 text-ink"
                      )}
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className={cn("acc-panel", on && "open")}>
                    <div>
                      <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-ink/65">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
