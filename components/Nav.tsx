"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LANGS, type Lang, type Dictionary } from "@/lib/content";

export default function Nav({ lang, copy, name }: { lang: Lang; copy: Dictionary["nav"]; name: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const base = `/${lang}`;
  const links = [
    { href: `${base}#services`, label: copy.services },
    { href: `${base}#contact`, label: copy.contact },
  ];
  const rest = pathname.replace(/^\/(en|fr|sv)/, "");

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-background/90 border-b border-border backdrop-blur-md" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-14 max-w-[1920px] items-center justify-between px-5 sm:h-16 md:px-10 lg:h-20 lg:px-[60px]">
        <Link href={base} className="font-display text-lg tracking-tight text-foreground">{name}</Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link text-[15px] font-[550] text-nav">{l.label}</Link>
          ))}
          <LangSwitch current={lang} rest={rest} />
          <Link href={`${base}#contact`} className="btn rounded-md border border-accent/40 bg-accent/5 px-4 py-2 text-[15px] font-[550] text-nav">{copy.cta}</Link>
        </nav>

        <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="flex h-10 w-10 items-center justify-center lg:hidden">
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-foreground transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-foreground transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-lg text-foreground">{l.label}</Link>
            ))}
            <div className="mt-2 flex items-center justify-between border-t border-border pt-4">
              <LangSwitch current={lang} rest={rest} />
              <Link href={`${base}#contact`} className="rounded-md border border-accent/40 bg-accent/5 px-4 py-2 text-[15px] font-[550] text-nav">{copy.cta}</Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

function LangSwitch({ current, rest }: { current: Lang; rest: string }) {
  return (
    <div className="flex items-center gap-1.5 text-[13px] font-[550] uppercase tracking-wide">
      {LANGS.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-muted-foreground">/</span>}
          {l === current ? (
            <span className="text-foreground">{l}</span>
          ) : (
            <Link href={`/${l}${rest}`} className="text-muted-foreground hover:text-accent">{l}</Link>
          )}
        </span>
      ))}
    </div>
  );
}
