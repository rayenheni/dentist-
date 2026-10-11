import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { useReveal } from "../hooks";

export function Reveal({
  children,
  className,
  delay = 0,
  variant,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "left" | "right" | "scale";
}) {
  const ref = useReveal<HTMLDivElement>();
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};
  return (
    <div
      ref={ref}
      style={style}
      className={cn("reveal", variant && `reveal-${variant}`, className)}
    >
      {children}
    </div>
  );
}

export function SectionTag({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={cn(
        "mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em]",
        light ? "text-sage" : "text-clay"
      )}
    >
      <span className={cn("h-px w-10", light ? "bg-sage/60" : "bg-clay/50")} />
      {children}
    </p>
  );
}

export function Stars({ className, size = 14 }: { className?: string; size?: number }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-clay", className)} aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.5l-5.8 3.05 1.1-6.5-4.7-4.6 6.5-.95L12 2.6z" />
        </svg>
      ))}
    </span>
  );
}

export function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={cn("h-5 w-5", className)} aria-label="Google" role="img">
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.14-3.1-.42-4.55H24v8.61h11.83c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.55-9.52 6.55-16.22z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

/** Tooth-shaped wordmark */
export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <Link to="/" className={cn("group flex items-center gap-2.5", className)} aria-label="Cabinet Dr. Walid Aouini — home">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-pine text-ivory transition-transform duration-500 group-hover:rotate-[-10deg]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3.2c-1.6-1.1-3.9-1.5-5.6-.5-2 1.2-2.7 3.8-1.9 6.6.9 3.1 1.6 6.4 2.1 9.6.15.9.6 1.8 1.5 1.8.8 0 1.2-.7 1.4-1.5.3-1.6.7-3.3 1.4-4.6.3-.6.7-.6 1 0 .7 1.3 1.1 3 1.4 4.6.2.8.6 1.5 1.4 1.5.9 0 1.35-.9 1.5-1.8.5-3.2 1.2-6.5 2.1-9.6.8-2.8.1-5.4-1.9-6.6-1.7-1-4-.6-5.6.5z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span className={cn("block font-display text-[17px] font-semibold tracking-tight", dark ? "text-ivory" : "text-ink")}>
          Dr. Walid Aouini
        </span>
        <span className={cn("mt-1 block text-[10px] font-bold uppercase tracking-[0.24em]", dark ? "text-sage" : "text-clay")}>
          Dental Studio · Tunis
        </span>
      </span>
    </Link>
  );
}

/* ---------- bespoke line icons ---------- */
const ic = "h-6 w-6";

export const IconTech = () => (
  <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M12 2.8 20 7v10l-8 4.2L4 17V7l8-4.2z" />
    <path d="M12 11.2c1.9 0 3.4.9 4.5 2.4M12 11.2c-1.9 0-3.4.9-4.5 2.4" />
    <circle cx="12" cy="14.4" r="3.2" />
    <path d="M12 13v1.4l1.1.9" />
  </svg>
);

export const IconBook = () => (
  <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.5h17M8 2.8V6M16 2.8V6" />
    <path d="m9 15 2 2 4-4.5" />
  </svg>
);

export const IconGentle = () => (
  <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M12 20.5s-7.2-4.3-8.6-9.2C2.4 7.8 4.4 4.9 7.4 4.9c2 0 3.5 1.1 4.6 2.8 1.1-1.7 2.6-2.8 4.6-2.8 3 0 5 2.9 4 6.4-1.4 4.9-8.6 9.2-8.6 9.2z" />
    <path d="M8.2 12.4h2l1-2 1.6 3.4 1-1.4h2" />
  </svg>
);

export const IconYears = () => (
  <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M12 2.9c1.7-1.1 4-.6 5.6.5 2 1.2 2.7 3.8 1.9 6.6-.9 3.1-1.6 6.4-2.1 9.6-.15.9-.6 1.8-1.5 1.8-.8 0-1.2-.7-1.4-1.5-.3-1.6-.7-3.3-1.4-4.6-.3-.6-.7-.6-1 0-.7 1.3-1.1 3-1.4 4.6-.2.8-.6 1.5-1.4 1.5-.9 0-1.35-.9-1.5-1.8-.5-3.2-1.2-6.5-2.1-9.6-.8-2.8-.1-5.4 1.9-6.6 1.6-1.1 3.9-1.6 5.4-.5z" />
  </svg>
);

export const IconPrice = () => (
  <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M14.8 9.2c-.5-.9-1.6-1.4-2.8-1.4-1.7 0-3 .9-3 2.2s1.3 1.9 3 2.2c1.7.3 3 .9 3 2.2s-1.3 2.2-3 2.2c-1.2 0-2.3-.5-2.8-1.4M12 5.5v2m0 9v2" />
  </svg>
);

export const IconSpa = () => (
  <svg className={ic} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M4 14c0-5.5 3.6-10 8-10 1 0 1.7.8 1.7 1.7 0 .4-.2.8-.5 1C7.5 8.5 6 11.4 6 14c0 2.8 2.2 5 5 5 2.6 0 4.9-2 5-4.6-.3-.2-.5-.6-.5-1 0-.9.7-1.7 1.6-1.7 1.4 0 2.4 1.2 2.4 2.6C19 18.9 15.2 22 11 22 6.6 22 4 18.5 4 14z" />
  </svg>
);

export const IconSparkle = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M12 3.5 13.8 9l5.5 1.8-5.5 1.8L12 18l-1.8-5.4L4.7 10.8 10.2 9 12 3.5z" />
    <path d="M19 16.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" />
  </svg>
);

export const IconGem = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M7 4h10l4 5.5L12 20 3 9.5 7 4z" />
    <path d="M3 9.5h18M9.5 4 12 9.5 14.5 4M12 20l-2.5-10.5M12 20l2.5-10.5" />
  </svg>
);

export const IconScrew = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M9 3h6M10 3v3.2M14 3v3.2" />
    <path d="M12 6.2 8 12l4 8.8 4-8.8-4-5.8z" />
    <path d="M8.6 12h6.8M9.6 15h4.8" />
  </svg>
);

export const IconFamily = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <circle cx="8.5" cy="7.5" r="3" />
    <circle cx="16.5" cy="9" r="2.4" />
    <path d="M3.5 19.5c0-3.3 2.2-5.5 5-5.5s5 2.2 5 5.5" />
    <path d="M14.8 14.6c.5-.3 1-.4 1.7-.4 2.2 0 4 1.8 4 4.3" />
  </svg>
);

export const CAT_ICONS = {
  sparkle: IconSparkle,
  gem: IconGem,
  screw: IconScrew,
  family: IconFamily,
};

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("h-4 w-4", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}
