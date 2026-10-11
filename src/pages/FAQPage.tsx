import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { CLINIC, FAQS } from "../data";
import { Reveal, SectionTag, ArrowIcon } from "../components/Shared";

export function FAQPage() {
  const [open, setOpen] = useState(0);

  return (
    <main className="pt-[120px]">
      {/* insurance band */}
      <section className="bg-ivory py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-12 text-ivory shadow-lift sm:px-12">
              <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/30 blur-[70px]" />
              <div aria-hidden className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-coral/20 blur-[80px]" />
              <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-sage">CNAM · private insurers · installments</p>
                  <h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl">
                    We handle the <em className="font-light italic text-sage">paperwork,</em> you keep the smile.
                  </h2>
                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ivory/65">
                    The cabinet works with CNAM and all major Tunisian private insurers. Every visit ends with a
                    complete reimbursement dossier — certificate, itemised breakdown and receipts — so your claim
                    is approved, not argued.
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {["CNAM", "AXA", "API", "COTON", "Tunisienne", "Installments ×6, 0%"].map((b) => (
                      <li key={b} className="rounded-full border border-ivory/20 px-4 py-1.5 text-[12px] font-bold tracking-wide text-ivory/80">
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-ivory/15 bg-ivory/5 p-7 backdrop-blur">
                  <p className="font-display text-lg font-semibold">Good to know</p>
                  <ul className="mt-4 space-y-3.5 text-[14px] leading-relaxed text-ivory/70">
                    <li className="flex gap-3"><span className="font-display text-coral">—</span> Whitening & veneers: up to 6 interest-free installments</li>
                    <li className="flex gap-3"><span className="font-display text-coral">—</span> Full implant packages quoted at the 3D scan, in writing</li>
                    <li className="flex gap-3"><span className="font-display text-coral">—</span> 10-year craftsmanship warranty on prosthetics & implants</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory pb-20 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <Reveal>
              <SectionTag>Questions, answered</SectionTag>
              <h2 className="font-display text-3xl font-medium leading-[1.04] tracking-tight text-ink sm:text-4xl">
                Everything you'd ask at <em className="font-light italic text-coral">the front desk.</em>
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink/55">
                Anything else? The reception answers in French, Arabic or English —{" "}
                <a href={`tel:${CLINIC.phone.replace(/\s/g, "")}`} className="link-under font-bold text-teal">
                  {CLINIC.phone}
                </a>{" "}
                or WhatsApp, every open hour.
              </p>
            </Reveal>
          </div>

          <div className="space-y-3">
            {FAQS.map((f, i) => {
              const on = open === i;
              return (
                <Reveal key={f.q} delay={i * 50}>
                  <div
                    className={cn(
                      "rounded-2xl border transition-all duration-500",
                      on ? "border-teal/30 bg-cream shadow-soft" : "border-ink/10 bg-ivory hover:border-teal/20"
                    )}
                  >
                    <button
                      onClick={() => setOpen(on ? -1 : i)}
                      aria-expanded={on}
                      className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                    >
                      <span className="font-display text-[16px] font-semibold leading-snug text-ink">{f.q}</span>
                      <span
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-500",
                          on ? "rotate-45 border-coral bg-coral text-ivory" : "border-ink/15 text-ink"
                        )}
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <div className={cn("acc-panel", on && "open")}>
                      <div>
                        <p className="px-6 pb-6 text-[14px] leading-relaxed text-ink/60">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-16 text-ivory lg:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">
              Still have a question? <em className="font-light italic text-sage">We're one call away.</em>
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/reserver"
                className="group inline-flex items-center gap-3 rounded-full bg-coral px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-dark"
              >
                Book a free consultation
                <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                className="rounded-full border border-ivory/30 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-ivory hover:text-teal"
              >
                {CLINIC.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}