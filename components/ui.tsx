import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, width = "wide", className = "" }: { children: ReactNode; width?: "wide" | "narrow"; className?: string }) {
  const max = width === "narrow" ? "max-w-[820px]" : "max-w-[1180px]";
  return <div className={`mx-auto ${max} px-5 md:px-10 lg:px-[60px] ${className}`}>{children}</div>;
}

export function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="btn inline-flex items-center justify-center rounded-md bg-btn-primary px-5 py-2.5 font-[500] text-btn-primary-fg shadow-sm hover:shadow-md">
      {children}
    </Link>
  );
}

export function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="btn inline-flex items-center justify-center rounded-md border border-border bg-secondary px-5 py-2.5 font-[500] text-foreground hover:shadow-sm">
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="text-xs font-[550] uppercase tracking-[0.18em] text-accent">{children}</span>;
}

export function Label({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-[550] uppercase tracking-[0.18em] text-muted-foreground">{children}</p>;
}

export function SectionTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h2 className={`max-w-[820px] text-3xl leading-[1.15] md:text-4xl ${className}`}>{children}</h2>;
}
