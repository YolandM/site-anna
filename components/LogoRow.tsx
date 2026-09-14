/* eslint-disable @next/next/no-img-element */
import { Container, Label } from "@/components/ui";

// Files in /public/logos/, pre-processed to one dark grey on transparent.
// h = display height in px, tuned per logo for equal visual weight.
const LOGOS: Record<string, { file: string; h: number }> = {
  "Publicis Groupe": { file: "publicis.svg", h: 44 },
  Vaimo: { file: "vaimo.svg", h: 24 },
  Lidl: { file: "lidl.svg", h: 36 },
  Volvo: { file: "volvo.svg", h: 15 },
};

export default function LogoRow({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="border-y border-border bg-background">
      <Container className="py-8 md:py-10">
        <Label>{title}</Label>
        <ul className="mt-5 flex flex-wrap items-center gap-x-12 gap-y-5 md:gap-x-16">
          {items.map((name) => {
            const l = LOGOS[name];
            return (
              <li key={name} className="flex items-center">
                {l ? (
                  <img src={`/logos/${l.file}`} alt={name} style={{ height: l.h }} className="w-auto opacity-80" loading="lazy" />
                ) : (
                  <span className="font-display text-xl tracking-tight text-foreground/80">{name}</span>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
