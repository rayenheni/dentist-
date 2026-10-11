import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import { cn } from "./utils/cn";
import { useScrolled } from "./hooks";
import { CLINIC } from "./data";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

/* ── pages ── */
import { HomeHero, FeaturesStrip, MiniServices, StudioGallery, MiniResults, JourneyPreview, DoctorPreview, MiniReviews, HomeCta } from "./pages/Home";
import { ServicesPage } from "./pages/Services";
import { ResultsPage } from "./pages/ResultsPage";
import { DoctorPage } from "./pages/DoctorPage";
import { FAQPage } from "./pages/FAQPage";
import { BookPage } from "./pages/BookPage";
import { ServicePage } from "./pages/ServicePage";

/* ── scroll-to-top on route change ── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

/* ── scroll progress bar ── */
function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent" aria-hidden>
      <div className="h-full bg-coral transition-[width] duration-150 ease-out" style={{ width: `${p}%` }} />
    </div>
  );
}

/* ── WhatsApp floating button ── */
function WhatsAppFab() {
  const visible = useScrolled(420);
  const msg = encodeURIComponent("Bonjour Dr. Aouini, je souhaiterais prendre un rendez-vous. Merci.");
  const digits = CLINIC.phone.replace(/\D/g, "");
  return (
    <a
      href={`https://wa.me/${digits}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Dr. Aouini"
      className={cn(
        "fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_44px_-10px_rgba(37,211,102,0.7)]",
        visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      )}
    >
      <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.47 14.32c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07s-1.26-.47-2.4-1.48c-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52s-.67-1.6-.92-2.19c-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37s-1.05 1.03-1.05 2.51 1.08 2.92 1.23 3.12c.15.2 2.13 3.25 5.15 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35zM12 1.98c-5.52 0-10 4.47-10 9.98 0 1.76.47 3.47 1.37 4.97L1.1 22.35l5.55-1.45c1.47.8 3.13 1.26 4.86 1.26h.02c5.52 0 10-4.47 10-9.98S17.52 1.98 12 1.98zm0 18.28h-.02c-1.45 0-2.87-.39-4.1-1.14l-.3-.18-3.12.82.83-3.04-.2-.31c-.83-1.34-1.27-2.89-1.27-4.51 0-4.54 3.71-8.24 8.26-8.24 2.2 0 4.27.86 5.82 2.41a8.18 8.18 0 0 1 2.43 5.84c0 4.54-3.71 8.24-8.24 8.24h-.26z" />
      </svg>
      <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[9px] font-bold text-ivory shadow-lg">
        <span className="h-2 w-2 rounded-full bg-[#25D366] pulse-dot" />
      </span>
    </a>
  );
}

/* ── Back-to-top ── */
function BackToTop() {
  const visible = useScrolled(600);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-ink text-ivory shadow-soft transition-all duration-500 hover:-translate-y-1 hover:bg-teal",
        visible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      )}
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

/* ── JSON-LD ── */
function JsonLd() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: CLINIC.name,
    image: "/images/dr-aouini.jpg",
    url: "https://www.dr-aouini.tn",
    telephone: CLINIC.phone,
    email: CLINIC.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.address,
      addressLocality: "Tunis",
      postalCode: "1053",
      addressCountry: "TN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 36.8486, longitude: 10.2629 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "20:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "09:00", closes: "18:00" },
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "83", bestRating: "5" },
    priceRange: "Free consultations · written quotation for all treatments",
    knowsLanguage: ["fr", "ar", "en"],
    medicalSpecialty: ["Prosthodontics", "Implantology", "Cosmetic Dentistry"],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />;
}

/* ── Home page composed ── */
function Home() {
  return (
    <main>
      <HomeHero />
      <FeaturesStrip />
      <MiniServices />
      <StudioGallery />
      <MiniResults />
      <JourneyPreview />
      <DoctorPreview />
      <MiniReviews />
      <HomeCta />
    </main>
  );
}

/* ── page transition wrapper ── */
function PageTransition({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return <div key={pathname} className="page-transition">{children}</div>;
}

/* ── mobile sticky CTA ── */
function MobileStickyBar() {
  const { pathname } = useLocation();
  const show = pathname === "/" || pathname.startsWith("/services") || pathname === "/docteur";
  if (!show) return null;
  return (
    <div className="mobile-sticky-bar sm:hidden">
      <Link
        to="/reserver"
        className="btn-ripple glow flex w-full items-center justify-center gap-2 rounded-full bg-coral py-3.5 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory"
      >
        Book a free consultation
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
          <path d="M4 12h15M13 6l6 6-6 6" />
        </svg>
      </Link>
    </div>
  );
}

/* ── App ── */
export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen pb-16 sm:pb-0">
        <JsonLd />
        <div aria-hidden className="grain pointer-events-none fixed inset-0 z-[60] opacity-[0.05] mix-blend-multiply" />

        <ScrollProgress />
        <WhatsAppFab />
        <BackToTop />
        <Nav />
        <ScrollToTop />

        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/realisations" element={<ResultsPage />} />
            <Route path="/docteur" element={<DoctorPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/reserver" element={<BookPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageTransition>

        <MobileStickyBar />
        <Footer />
      </div>
    </BrowserRouter>
  );
}