import { useParams, Link, Navigate } from "react-router-dom";
import { getServiceBySlug, IMAGES } from "../data";
import { Reveal, SectionTag, Stars, ArrowIcon, CAT_ICONS } from "../components/Shared";

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const result = slug ? getServiceBySlug(slug) : null;

  if (!result) return <Navigate to="/services" replace />;

  const { service: s, category: cat } = result;
  const CatIcon = CAT_ICONS[cat.icon];

  return (
    <main className="pt-[120px]">
      {/* hero */}
      <section className="relative overflow-hidden bg-ivory pb-10 pt-8 lg:pb-16 lg:pt-12">
        <div aria-hidden className="pointer-events-none absolute -right-40 top-10 h-[360px] w-[360px] rounded-full bg-mint blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          {/* breadcrumb */}
          <Reveal>
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-[12px] font-semibold text-ink/45">
              <Link to="/" className="link-under hover:text-ink">Accueil</Link>
              <span>/</span>
              <Link to="/services" className="link-under hover:text-ink">Services</Link>
              <span>/</span>
              <span className="text-ink">{s.name}</span>
            </nav>
          </Reveal>

          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* info */}
            <div>
              <Reveal>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-mint px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-teal transition-colors hover:bg-teal hover:text-ivory">
                    <CatIcon /> {cat.label}
                  </Link>
                  {s.tag && <span className="rounded-full bg-coral/12 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-coral">{s.tag}</span>}
                  {s.free && <span className="rounded-full bg-teal/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-teal">Complimentary</span>}
                </div>
                <h1 className="font-display text-4xl font-medium leading-[1.04] tracking-tight text-ink sm:text-5xl">{s.name}</h1>
                <p className="mt-2 text-[14px] font-bold uppercase tracking-[0.14em] text-ink/40">{s.minutes} · {s.time}</p>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-ink/65">{s.longDesc}</p>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/reserver"
                    className="group inline-flex items-center gap-3 rounded-full bg-coral px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory shadow-[0_14px_30px_-12px_rgba(232,109,74,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-dark"
                  >
                    {s.free ? "Book this consultation" : "Request a quotation"}
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <span className="flex items-center gap-2 text-sm font-bold text-ink/50"><Stars size={12} /> 5.0 · 83+ reviews</span>
                </div>
              </Reveal>
            </div>

            {/* image */}
            <Reveal variant="scale" delay={200}>
              <div className="kenburns overflow-hidden rounded-[2rem] shadow-lift">
                <img
                  src={cat.id === "clean" ? IMAGES.gallery[0].src : cat.id === "shine" ? IMAGES.gallery[4].src : cat.id === "restore" ? IMAGES.gallery[1].src : IMAGES.gallery[2].src}
                  alt={s.name}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* what's included */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <div>
                <SectionTag>What's included</SectionTag>
                <ul className="mt-6 space-y-4">
                  {s.includes.map((inc, i) => (
                    <li key={inc} className="flex items-start gap-4 text-[15px] text-ink/70">
                      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-teal/10 text-[12px] font-bold text-teal">{i + 1}</span>
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {s.steps && (
              <Reveal delay={150}>
                <div>
                  <SectionTag>How it works</SectionTag>
                  <div className="mt-6 space-y-4">
                    {s.steps.map((step, i) => (
                      <div key={step} className="swap-in flex items-start gap-4" style={{ animationDelay: `${i * 100}ms` }}>
                        <span className="relative mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-[13px] font-bold text-ivory">
                          {i + 1}
                          {i < (s.steps?.length ?? 0) - 1 && <span className="absolute left-1/2 top-full h-6 w-px -translate-x-1/2 bg-teal/25" />}
                        </span>
                        <p className="text-[14.5px] leading-relaxed text-ink/65">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ideal for */}
      {s.idealFor && s.idealFor.length > 0 && (
        <section className="bg-sky/30 py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <Reveal>
              <SectionTag>Is this treatment right for you?</SectionTag>
              <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                <em className="font-light italic text-coral">{s.name}</em> is ideal for:
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {s.idealFor.map((item, i) => (
                <Reveal key={item} delay={i * 80}>
                  <div className="flex items-start gap-3 rounded-2xl border border-ink/8 bg-ivory p-5 text-left">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                      <path d="M4 12.5l5 5L20 6.5" />
                    </svg>
                    <span className="text-[14.5px] text-ink/65">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* note / disclaimer */}
      {s.note && (
        <section className="bg-ivory py-10">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <Reveal>
              <p className="inline-flex items-center gap-3 rounded-full border border-coral/25 bg-sand/40 px-6 py-3 text-[13px] font-semibold text-ink/60">
                <svg className="h-4 w-4 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><circle cx="12" cy="12" r="9" /><path d="M12 8v4M12 16h.01" /></svg>
                {s.note}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* other treatments in category */}
      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionTag>Other treatments in {cat.label}</SectionTag>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cat.services
              .filter((other) => other.slug !== s.slug)
              .map((other, i) => (
                <Reveal key={other.slug} delay={i * 100}>
                  <Link
                    to={`/services/${other.slug}`}
                    className="group block rounded-2xl border border-ink/8 bg-ivory p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-soft"
                  >
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-lg font-semibold text-ink">{other.name}</h3>
                      {other.free && <span className="rounded-full bg-teal/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-teal">Free</span>}
                    </div>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink/50">{other.desc.slice(0, 90)}…</p>
                    <p className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-coral">
                      Learn more <ArrowIcon className="h-3 w-3" />
                    </p>
                  </Link>
                </Reveal>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-16 text-ivory lg:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">
              Ready to start <em className="font-light italic text-sage">{s.name}?</em>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ivory/65">
              {s.free ? "This consultation is complimentary — no obligation, no commitment." : "Request a written quotation at your first visit — it does not move."}
            </p>
            <Link
              to="/reserver"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-coral px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-coral-dark"
            >
              {s.free ? "Book now — it's free" : "Request my quotation"}
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}