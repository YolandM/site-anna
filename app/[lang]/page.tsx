import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import LogoRow from "@/components/LogoRow";
import ContactForm from "@/components/ContactForm";
import { getDictionary, getSettings } from "@/lib/content";
import { isLang, type Lang } from "@/lib/i18n";
import { calLink } from "@/lib/site";
import {
  Container,
  PrimaryButton,
  SecondaryButton,
  Eyebrow,
  Label,
  SectionTitle,
} from "@/components/ui";

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const d = await getDictionary(lang);
  const settings = await getSettings();
  const base = `/${lang}`;
  const cal = calLink(settings.calUrl);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
          style={{
            background: "radial-gradient(100% 60% at 50% 0%, rgba(142,47,77,0.14), transparent 70%)",
          }}
        />
        <Container className="relative pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <Eyebrow>{d.hero.eyebrow}</Eyebrow>
              <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.1rem)] leading-[1.03]">
                {d.hero.headline}
              </h1>
              <p className="mt-7 max-w-[620px] text-lg leading-relaxed text-muted-foreground md:text-xl">
                {d.hero.subhead}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <PrimaryButton href={cal || `${base}#contact`}>{d.hero.ctaPrimary}</PrimaryButton>
                {d.hero.showCtaSecondary && d.services.show && (
                  <SecondaryButton href={`${base}#services`}>{d.hero.ctaSecondary}</SecondaryButton>
                )}
              </div>
            </div>
            <figure className="mx-auto w-full max-w-[320px] lg:max-w-[380px] lg:justify-self-end">
              <Image
                src="/anna-hero-2.jpg"
                alt={settings.name}
                width={800}
                height={1000}
                priority
                sizes="(max-width: 1024px) 320px, 380px"
                className="h-auto w-full rounded-lg border border-accent/15 object-cover shadow-lg"
              />
            </figure>
          </div>
        </Container>
      </section>

      {d.proofLine.show && <LogoRow title={d.proofLine.prefix} items={d.proofLine.names} />}

      {/* Problem */}
      {d.problem.show && (
      <section className="bg-background-alt">
        <Container className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-14">
            <SectionTitle>{d.problem.title}</SectionTitle>
            <p className="text-lg leading-relaxed text-foreground/85">{d.problem.body}</p>
          </div>
        </Container>
      </section>
      )}

      {/* Services */}
      {d.services.show && (
      <section id="services" className="scroll-mt-20">
        <Container className="py-16 md:py-24">
          <SectionTitle>{d.services.title}</SectionTitle>
          <div className="mt-10 grid gap-[22px] md:grid-cols-2 md:gap-[30px]">
            {d.services.items.map((s, i) => (
              <div
                key={`${s.title}-${i}`}
                className="card-lift flex flex-col rounded-lg border border-border bg-background p-7 shadow-md md:p-8"
              >
                <span className="font-display text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-2xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/85">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[620px] text-lg text-muted-foreground">{d.services.outro}</p>
          <Link
            href={`${base}#contact`}
            className="mt-4 inline-block text-accent underline-offset-4 hover:underline"
          >
            {d.services.link} →
          </Link>
        </Container>
      </section>
      )}

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-deep text-deep-fg">
        <Container className="py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            {/* Left: the invitation */}
            <div className="lg:pt-2">
              <h2 className="text-3xl md:text-4xl">{d.contact.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-deep-fg/75">{d.contact.body}</p>

              {cal && (
                <a
                  href={cal}
                  target="_blank"
                  rel="noreferrer"
                  className="btn mt-8 inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-[500] text-white shadow-sm hover:shadow-md"
                >
                  {d.contact.cta}
                </a>
              )}

              {settings.linkedin && (
                <div className="mt-12 border-t border-white/10 pt-8">
                  <Label>{d.contact.linkedin}</Label>
                  <a
                    href={settings.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block text-lg text-deep-fg transition hover:text-deep-fg/70"
                  >
                    LinkedIn
                  </a>
                </div>
              )}
            </div>

            {/* Right: the form */}
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-7 md:p-9">
              <ContactForm copy={d.form} lang={lang} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
