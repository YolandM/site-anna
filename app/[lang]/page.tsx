import Link from "next/link";
import Image from "next/image";
import LogoRow from "@/components/LogoRow";
import { getDictionary, PERSON, type Lang } from "@/lib/content";
import { CAL_URL } from "@/lib/site";
import { Container, PrimaryButton, SecondaryButton, Eyebrow, Label, SectionTitle } from "@/components/ui";

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const d = getDictionary(lang);
  const base = `/${lang}`;
  const calSrc = CAL_URL ? `${CAL_URL}${CAL_URL.includes("?") ? "&" : "?"}embed=true&theme=light&layout=month_view` : "";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[560px]"
          style={{ background: "radial-gradient(100% 60% at 50% 0%, rgba(142,47,77,0.14), transparent 70%)" }}
        />
        <Container className="relative pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <Eyebrow>{d.hero.eyebrow}</Eyebrow>
              <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.1rem)] leading-[1.03]">{d.hero.headline}</h1>
              <p className="mt-7 max-w-[620px] text-lg leading-relaxed text-muted-foreground md:text-xl">{d.hero.subhead}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <PrimaryButton href={`${base}#contact`}>{d.hero.ctaPrimary}</PrimaryButton>
                <SecondaryButton href={`${base}#services`}>{d.hero.ctaSecondary}</SecondaryButton>
              </div>
            </div>
            <figure className="mx-auto w-full max-w-[320px] lg:max-w-[380px] lg:justify-self-end">
              <Image
                src="/anna-hero-2.jpg"
                alt={PERSON.name}
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

      <LogoRow title={d.proofLine.prefix} items={d.proofLine.names} />

      {/* Problem */}
      <section className="bg-background-alt">
        <Container className="py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-14">
            <SectionTitle>{d.problem.title}</SectionTitle>
            <p className="text-lg leading-relaxed text-foreground/85">{d.problem.body}</p>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-20">
        <Container className="py-16 md:py-24">
          <SectionTitle>{d.services.title}</SectionTitle>
          <div className="mt-10 grid gap-[22px] md:grid-cols-2 md:gap-[30px]">
            {d.services.items.map((s, i) => (
              <div key={s.title} className="card-lift flex flex-col rounded-lg border border-border bg-background p-7 shadow-md md:p-8">
                <span className="font-display text-2xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-2xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/85">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[620px] text-lg text-muted-foreground">{d.services.outro}</p>
          <Link href={`${base}#contact`} className="mt-4 inline-block text-accent underline-offset-4 hover:underline">
            {d.services.link} →
          </Link>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-deep text-deep-fg">
        <Container className="py-20 md:py-28">
          <div className="max-w-[720px]">
            <h2 className="text-3xl md:text-4xl">{d.contact.title}</h2>
            <p className="mt-4 text-lg text-deep-fg/75">{d.contact.body}</p>
          </div>
          {calSrc ? (
            <div className="mt-10 overflow-hidden rounded-lg bg-background shadow-lg">
              <iframe src={calSrc} title="Cal.com" className="h-[680px] w-full" loading="lazy" />
            </div>
          ) : (
            <div className="mt-8">
              <a href={`mailto:${PERSON.email}`} className="btn inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 font-[500] text-white shadow-sm hover:shadow-md">
                {d.contact.cta}
              </a>
            </div>
          )}
          <div className="mt-10 flex flex-wrap gap-10 border-t border-white/10 pt-8 text-sm">
            <div>
              <Label>{d.contact.emailPrompt}</Label>
              <a href={`mailto:${PERSON.email}`} className="mt-1 inline-block text-lg text-deep-fg transition hover:text-deep-fg/70">{PERSON.email}</a>
            </div>
            <div>
              <Label>{d.contact.linkedin}</Label>
              <a href={PERSON.linkedin} target="_blank" rel="noreferrer" className="mt-1 inline-block text-lg text-deep-fg transition hover:text-deep-fg/70">LinkedIn</a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
