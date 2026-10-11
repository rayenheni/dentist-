import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../utils/cn";
import { useScrolled } from "../hooks";
import { CLINIC } from "../data";
import { Logo } from "./Shared";

const NAV_LINKS = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Réalisations", to: "/realisations" },
  { label: "Le Docteur", to: "/docteur" },
  { label: "FAQ", to: "/faq" },
  { label: "Réserver", to: "/reserver" },
];

export function Nav() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* announcement bar */}
      <div className="bg-ink text-ivory">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-2 text-[10.5px] font-semibold tracking-wide sm:px-8 sm:text-[11px]">
          <p className="truncate">
            <span className="text-coral">NEW-PATIENT OFFER ·</span>{" "}
            <span className="text-ivory/80">Complimentary check-up + 3D scan with any whitening visit — this month only.</span>
          </p>
          <a href={CLINIC.phone} className="hidden shrink-0 items-center gap-2 text-sage hover:text-ivory sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-coral pulse-dot" />
            {CLINIC.phone} · open until 20:30 Thu
          </a>
        </div>
      </div>

      {/* main bar */}
      <div
        className={cn(
          "transition-all duration-500",
          scrolled ? "bg-cream/90 shadow-[0_10px_40px_-18px_rgba(15,27,45,0.35)] backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
          <Logo />

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => {
              const on = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={cn(
                      "link-under text-[12px] font-bold uppercase tracking-[0.14em] transition-colors",
                      on ? "text-ink border-b-2 border-teal" : "text-ink/60 hover:text-ink"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/reserver"
              className="group hidden items-center gap-2 rounded-full bg-coral px-6 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-ivory shadow-[0_14px_30px_-12px_rgba(232,109,74,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-dark sm:inline-flex"
            >
              Book a visit
              <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/12 text-ink lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <div className="relative h-3.5 w-5">
                <span className={cn("absolute left-0 top-0 h-0.5 w-full bg-ink transition-all duration-300", open && "top-1.5 rotate-45")} />
                <span className={cn("absolute left-0 top-1.5 h-0.5 w-full bg-ink transition-all duration-300", open && "opacity-0")} />
                <span className={cn("absolute left-0 top-3 h-0.5 w-full bg-ink transition-all duration-300", open && "top-1.5 -rotate-45")} />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* mobile panel */}
      <div
        className={cn(
          "overflow-hidden bg-cream/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "max-h-[460px] border-b border-ink/10 shadow-xl" : "max-h-0"
        )}
      >
        <ul className="space-y-0.5 px-6 py-5">
          {NAV_LINKS.map((l, i) => {
            const on = pathname === l.to;
            return (
              <li key={l.to} style={{ transitionDelay: `${i * 40}ms` }}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 font-display text-xl transition-colors",
                    on ? "bg-mint text-teal font-semibold" : "text-ink hover:bg-mint"
                  )}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
          <li className="pt-3">
            <Link
              to="/reserver"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-coral px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-ivory"
            >
              Réserver maintenant
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}