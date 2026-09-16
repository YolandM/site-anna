import type { Settings } from "@/lib/i18n";

export default function Footer({ tagline, settings }: { tagline: string; settings: Settings }) {
  return (
    <footer className="bg-deep text-deep-fg">
      <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10 lg:px-[60px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl">{settings.name}</p>
            <p className="mt-3 text-sm text-deep-fg/70">{tagline}</p>
          </div>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href={`mailto:${settings.email}`}
              className="text-deep-fg/80 transition hover:text-deep-fg"
            >
              {settings.email}
            </a>
            {settings.linkedin && (
              <a
                href={settings.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-deep-fg/80 transition hover:text-deep-fg"
              >
                LinkedIn
              </a>
            )}
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-deep-fg/50">
          © {new Date().getFullYear()} {settings.name}
        </div>
      </div>
    </footer>
  );
}
