import { Link } from "react-router-dom";
import { CLINIC } from "../data";
import { Logo } from "./Shared";

const FOOTER_LINKS = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Réalisations", to: "/realisations" },
  { label: "Le Docteur", to: "/docteur" },
  { label: "FAQ", to: "/faq" },
  { label: "Réserver", to: "/reserver" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      {/* CTA band */}
      <div className="border-b border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-5 py-14 sm:px-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-sage">Ready when you are</p>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight sm:text-4xl">
              Your smile deserves the <em className="font-light italic text-sage">quiet, precise kind</em> of care.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/reserver"
              className="rounded-full bg-coral px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-dark"
            >
              Book a free consultation
            </Link>
            <a
              href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
              className="rounded-full border border-ivory/25 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:border-ivory hover:bg-ivory hover:text-ink"
            >
              {CLINIC.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ivory/50">
            A boutique dental studio in Centre Urbain Nord, Tunis — implantology, whitening, veneers and preventive
            care, delivered in French, Arabic and English.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { label: "Instagram", d: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.6 6.2a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8z" },
              { label: "Facebook", d: "M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.2 0-1-.1-1.9-.1-2 0-3.4 1.2-3.4 3.5V11H8.5v3h2.6v7h2.4z" },
              { label: "Google", d: "M21.35 11.1h-10v2.9h5.7c-.5 2.3-2.4 3.6-5.2 3.6a5.6 5.6 0 1 1 0-11.2c1.5 0 2.8.5 3.8 1.5l2.2-2.2A8.6 8.6 0 1 0 21.35 11.1z" },
            ].map((s) => (
              <a
                key={s.label}
                href="#top"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-ivory/20 text-ivory/65 transition-all duration-300 hover:-translate-y-1 hover:border-coral hover:text-coral"
              >
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-sage">Explore</p>
          <ul className="mt-5 space-y-2.5">
            {FOOTER_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-under text-[14px] font-semibold text-ivory/65 hover:text-ivory">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-sage">Find us</p>
          <address className="mt-5 space-y-2.5 not-italic text-[14px] leading-relaxed text-ivory/65">
            <p>{CLINIC.address}<br />{CLINIC.city}</p>
            <p>
              <a href={`tel:${CLINIC.phone.replace(/\s/g, "")}`} className="link-under font-semibold text-ivory">{CLINIC.phone}</a>
              <br />
              <a href={`mailto:${CLINIC.email}`} className="link-under">{CLINIC.email}</a>
            </p>
            <p className="pt-1 text-ivory/40">
              Mon–Wed, Fri–Sat 09:00–18:00<br />Thu 09:00–20:30 · Sun closed
            </p>
          </address>
        </div>
      </div>

      {/* legal disclaimer */}
      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-[11px] leading-relaxed text-ivory/30 sm:px-8">
          <p>
            <strong className="text-ivory/50">Avertissement médical :</strong> Les informations présentes sur ce site sont
            fournies à titre indicatif et ne remplacent pas une consultation dentaire. Les avant/après, témoignages et prix
            publiés peuvent varier selon l'état de santé de chaque patient. Les contenus de ce site ne constituent pas une
            publicité au sens de la réglementation de l'Ordre National des Chirurgiens-Dentistes de Tunisie. Les images à
            visées illustratives proviennent de banques d'images libres de droits et ne représentent pas les patients réels
            du cabinet. Ce site respecte la loi tunisienne relative à la protection des données personnelles (Loi n°2004-63).
            Pour toute question légale : <a href={`mailto:${CLINIC.email}`} className="link-under">{CLINIC.email}</a>
          </p>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-[12px] text-ivory/35 sm:px-8">
          <p>© 2026 Cabinet Dentaire Dr. Walid Aouini · Centre Urbain Nord, Tunis, Tunisia.</p>
          <p className="flex items-center gap-2">
            <a href="#" className="link-under text-ivory/45 hover:text-ivory">Mentions légales</a>
            <span className="text-ivory/20">·</span>
            <a href="#" className="link-under text-ivory/45 hover:text-ivory">Politique de confidentialité</a>
            <span className="text-ivory/20">·</span>
            <a href="#" className="link-under text-ivory/45 hover:text-ivory">Consentement cookies</a>
          </p>
        </div>
      </div>
    </footer>
  );
}