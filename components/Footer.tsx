import type { Settings } from "@/lib/i18n";

export default function Footer({ tagline, settings }: { tagline: string; settings: Settings }) {
  return (
    <footer className="bg-deep text-deep-fg">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-3 border-t border-white/10 px-5 py-8 text-sm text-deep-fg/55 md:flex-row md:items-center md:justify-between md:px-10 lg:px-[60px]">
        <p className="max-w-md">{tagline}</p>
        <p className="shrink-0">
          © {new Date().getFullYear()} {settings.name}
        </p>
      </div>
    </footer>
  );
}
