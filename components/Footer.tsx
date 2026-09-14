import type { Dictionary } from "@/lib/content";
import { PERSON } from "@/lib/content";

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className="bg-deep text-deep-fg">
      <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10 lg:px-[60px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl">{PERSON.name}</p>
            <p className="mt-3 text-sm text-deep-fg/70">{dict.footer.tagline}</p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a href={`mailto:${PERSON.email}`} className="text-deep-fg/80 transition hover:text-deep-fg">{PERSON.email}</a>
            <a href={PERSON.linkedin} target="_blank" rel="noreferrer" className="text-deep-fg/80 transition hover:text-deep-fg">LinkedIn</a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-deep-fg/50">© 2026 {PERSON.name}</div>
      </div>
    </footer>
  );
}
