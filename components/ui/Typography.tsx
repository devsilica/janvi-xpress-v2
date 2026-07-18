import { ReactNode } from "react";
import clsx from "clsx";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

/* Hero Heading */
export function Display({ children, className }: TypographyProps) {
  return (
    <h1
      className={clsx(
        "font-[var(--font-heading)] text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-6xl lg:text-7xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

/* Section Heading */
export function Heading({ children, className }: TypographyProps) {
  return (
    <h2
      className={clsx(
        "font-[var(--font-heading)] text-3xl font-bold tracking-tight text-slate-900 md:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

/* Body Text */
export function Body({ children, className }: TypographyProps) {
  return (
    <p
      className={clsx(
        "font-[var(--font-body)] text-lg leading-8 text-slate-600",
        className
      )}
    >
      {children}
    </p>
  );
}

/* Statistic Number */
export function StatNumber({ children, className }: TypographyProps) {
  return (
    <span
      className={clsx(
        "font-[var(--font-number)] text-5xl font-bold text-[#0E9AA7]",
        className
      )}
    >
      {children}
    </span>
  );
}

/* Small Label */
export function Label({ children, className }: TypographyProps) {
  return (
    <span
      className={clsx(
        "font-[var(--font-body)] text-sm font-semibold uppercase tracking-[0.2em] text-[#0E9AA7]",
        className
      )}
    >
      {children}
    </span>
  );
}