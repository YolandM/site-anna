import type { Lang } from "./content";
import { PERSON } from "./content";

export const SITE_URL = "https://www.annamariamosterlind.com";

// Cal.com link. Override with NEXT_PUBLIC_CAL_URL in Vercel. Empty = email only.
export const CAL_URL = process.env.NEXT_PUBLIC_CAL_URL ?? "";

export const seo: Record<Lang, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: `${PERSON.name} · Content and marketing in English, French and Swedish`,
    description: "Content and marketing that connects: web, email, organic and paid social, in English, French and Swedish.",
    ogLocale: "en_US",
  },
  fr: {
    title: `${PERSON.name} · Contenu et marketing en anglais, français et suédois`,
    description: "Du contenu et du marketing qui touchent : web, email, social organique et payant, en anglais, français et suédois.",
    ogLocale: "fr_FR",
  },
  sv: {
    title: `${PERSON.name} · Innehåll och marknadsföring på engelska, franska och svenska`,
    description: "Innehåll och marknadsföring som når fram: webb, e-post, organisk och betald social, på engelska, franska och svenska.",
    ogLocale: "sv_SE",
  },
};
