import { useState } from "react";
import { cn } from "../utils/cn";
import { CLINIC, CATEGORIES } from "../data";
import { Reveal, SectionTag } from "./Shared";

const TIMES = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:30", "20:00 (Thu)"];
const SERVICES = [
  "Complimentary first visit",
  ...CATEGORIES.flatMap((c) => c.services.map((s) => `${s.name} — ${c.label}`)),
];

type Form = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const EMPTY: Form = { name: "", phone: "", email: "", service: "", date: "", time: "", message: "" };

export function Booking() {
  const [form, setForm] = useState<Form>(EMPTY);
  const [errors, setErrors] = useState<Partial<Form>>({});
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const er: Partial<Form> = {};
    if (form.name.trim().length < 2) er.name = "Please tell us your name";
    if (form.phone.replace(/\D/g, "").length < 8) er.phone = "A valid phone number, please";
    if (!form.service) er.service = "Choose a treatment";
    if (!form.date) er.date = "Pick a day";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) er.email = "That email doesn't look right";
    setErrors(er);
    if (Object.keys(er).length) return;
    setState("sending");
    window.setTimeout(() => setState("done"), 1100);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="book" className="relative overflow-hidden bg-sand/45 py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-mint blur-[110px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          {/* info */}
          <div>
            <Reveal>
              <SectionTag>Book your visit</SectionTag>
              <h2 className="font-display text-4xl font-medium leading-[1.04] tracking-tight text-ink sm:text-5xl">
                One click between you and <em className="font-light italic text-clay">the best chair in Tunis.</em>
              </h2>
              <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink/65">
                Send the request and the reception confirms by SMS within the hour. Prefer a human voice? Call or
                WhatsApp — we answer in French, Arabic or English.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <InfoIcon>
                    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </InfoIcon>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">The studio</p>
                    <p className="mt-1 text-[15px] font-semibold text-ink">{CLINIC.address}</p>
                    <p className="text-[14px] text-ink/60">{CLINIC.city}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <InfoIcon>
                    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                  </InfoIcon>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">Call · WhatsApp</p>
                    <a href={`tel:${CLINIC.phone.replace(/\s/g, "")}`} className="link-under mt-1 inline-block text-[15px] font-semibold text-ink">
                      {CLINIC.phone}
                    </a>
                    <p className="text-[14px] text-ink/60">
                      <a className="link-under" href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <InfoIcon>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.5 2" />
                  </InfoIcon>
                  <div className="w-full max-w-xs">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/45">Opening hours</p>
                    <ul className="mt-2 space-y-1.5">
                      {CLINIC.hours.map((h) => (
                        <li key={h.day} className="flex items-baseline justify-between gap-4 text-[13.5px]">
                          <span className="font-semibold text-ink/75">{h.day}</span>
                          <span className={cn("font-bold", h.time.startsWith("Closed") ? "text-clay" : "text-pine")}>{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-9 flex items-center gap-4 rounded-2xl border border-clay/30 bg-cream p-5">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="absolute h-full w-full rounded-full bg-clay pulse-dot" />
                </span>
                <p className="text-[14px] font-semibold text-ink/75">
                  Urgent tonight? We keep an evening chair open — call before 18h for same-day care.
                </p>
              </div>
            </Reveal>
          </div>

          {/* form */}
          <Reveal variant="right" delay={120}>
            <div className="relative rounded-[2rem] bg-cream p-7 shadow-lift sm:p-10">
              {state === "done" ? (
                <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-pine/10">
                    <svg className="h-9 w-9 text-pine" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                      <path d="M4 12.5l5 5L20 6.5" />
                    </svg>
                  </span>
                  <h3 className="mt-6 font-display text-3xl font-semibold text-ink">Request received, {form.name.split(" ")[0]}.</h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink/65">
                    {form.service} · {form.date} {form.time && `at ${form.time}`}. The reception will confirm by SMS on{" "}
                    <span className="font-bold text-pine">{form.phone}</span> within the hour.
                  </p>
                  <p className="mt-5 rounded-full bg-mint px-5 py-2 text-[12px] font-bold uppercase tracking-[0.16em] text-pine">
                    Keep your insurance card handy for the first visit
                  </p>
                  <button
                    onClick={() => {
                      setForm(EMPTY);
                      setState("idle");
                    }}
                    className="link-under mt-8 text-[13px] font-bold uppercase tracking-[0.14em] text-clay"
                  >
                    Book another visit
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="mb-7 flex items-center justify-between">
                    <h3 className="font-display text-2xl font-semibold text-ink">Request an appointment</h3>
                    <span className="rounded-full bg-mint px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-pine">
                      Reply &lt; 1h
                    </span>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name *" error={errors.name}>
                      <input className={inputCls(!!errors.name)} value={form.name} onChange={set("name")} placeholder="e.g. Salma Ben Ali" autoComplete="name" />
                    </Field>
                    <Field label="Phone / WhatsApp *" error={errors.phone}>
                      <input className={inputCls(!!errors.phone)} value={form.phone} onChange={set("phone")} placeholder="+216 XX XXX XXX" inputMode="tel" autoComplete="tel" />
                    </Field>
                    <Field label="Email" error={errors.email} className="sm:col-span-2">
                      <input className={inputCls(!!errors.email)} value={form.email} onChange={set("email")} placeholder="you@example.com" type="email" autoComplete="email" />
                    </Field>
                    <Field label="Treatment *" error={errors.service} className="sm:col-span-2">
                      <select className={cn(inputCls(!!errors.service), !form.service && "text-ink/35")} value={form.service} onChange={set("service")}>
                        <option value="" disabled>
                          Choose from the care menu…
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Preferred day *" error={errors.date}>
                      <input type="date" min={today} className={inputCls(!!errors.date)} value={form.date} onChange={set("date")} />
                    </Field>
                    <Field label="Preferred time">
                      <select className={cn(inputCls(false), !form.time && "text-ink/35")} value={form.time} onChange={set("time")}>
                        <option value="">Any time</option>
                        {TIMES.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Anything we should know?" className="sm:col-span-2">
                      <textarea
                        className={cn(inputCls(false), "min-h-[88px] resize-y")}
                        value={form.message}
                        onChange={set("message")}
                        placeholder="Dental anxiety, a photo of your goal smile, old records to share…"
                      />
                    </Field>
                  </div>

                  <button
                    type="submit"
                    disabled={state === "sending"}
                    className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-ink px-8 py-4.5 text-sm font-bold uppercase tracking-[0.14em] text-ivory transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine disabled:translate-y-0 disabled:opacity-70"
                  >
                    {state === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-ivory/40 border-t-ivory" />
                        Sending your request…
                      </>
                    ) : (
                      <>
                        Request my appointment
                        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                          <path d="M4 12h15M13 6l6 6-6 6" />
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="mt-4 text-center text-[12px] text-ink/45">
                    No payment now. You'll only ever pay the fixed price quoted at your visit.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-pine text-ivory">
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
        {children}
      </svg>
    </span>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-ink/50">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-[12px] font-semibold text-clay-2">{error}</span>}
    </label>
  );
}

function inputCls(err: boolean) {
  return cn(
    "w-full rounded-xl border bg-ivory px-4 py-3.5 text-[15px] text-ink placeholder:text-ink/30 outline-none transition-all duration-300",
    "focus:border-pine focus:bg-cream focus:ring-4 focus:ring-pine/12",
    err ? "border-clay" : "border-ink/15"
  );
}
