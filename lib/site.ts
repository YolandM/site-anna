import type { Lang } from "./content";
import { PERSON } from "./content";

export const SITE_URL = "https://www.annamariamosterlind.com";

// Cal.com link. Override with NEXT_PUBLIC_CAL_URL in Vercel. Empty = email only.
export const CAL_URL = process.env.NEXT_PUBLIC_CAL_URL ?? "";

export const seo: Record<Lang, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: `${PERSON.name} · Content for Nordic, French and English markets`,
    description: "Email, blog content and copy for Nordic companies expanding into French and English-speaking markets, written natively in English, French and Swedish.",
    ogLocale: "en_US",
  },
  fr: {
    title: `${PERSON.name} · Contenu pour les marchés nordiques, français et anglophones`,
    description: "Emails, articles et textes pour les entreprises nordiques qui s'ouvrent aux marchés français et anglophones, écrits nativement en anglais, français et suédois.",
    ogLocale: "fr_FR",
  },
  sv: {
    title: `${PERSON.name} · Innehåll för nordiska, franska och engelskspråkiga marknader`,
    description: "E-post, blogginnehåll och copy för nordiska företag som expanderar till franska och engelskspråkiga marknader, skrivet på modersmålsnivå på engelska, franska och svenska.",
    ogLocale: "sv_SE",
  },
};
