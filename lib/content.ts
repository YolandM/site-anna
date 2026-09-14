export type Lang = "en" | "fr" | "sv";
export const LANGS: Lang[] = ["en", "fr", "sv"];

/* ---------- Fill these in once ---------- */
export const PERSON = {
  name: "Anna-Mariam Österlind",
  email: "hello@example.com", // TODO
  linkedin: "https://www.linkedin.com/in/", // TODO
};

/* ---------- Types ---------- */
export type Dictionary = {
  nav: { services: string; contact: string; cta: string };
  hero: { eyebrow: string; headline: string; subhead: string; ctaPrimary: string; ctaSecondary: string };
  proofLine: { prefix: string; names: string[] };
  problem: { title: string; body: string };
  services: { title: string; items: { title: string; body: string }[]; outro: string; link: string };
  contact: { title: string; body: string; cta: string; emailPrompt: string; linkedin: string };
  footer: { tagline: string };
};

const PROOF = ["Publicis Groupe", "Vaimo", "Lidl", "Volvo"];

/* ---------- EN ---------- */
const en: Dictionary = {
  nav: { services: "Services", contact: "Contact", cta: "Book a call" },
  hero: {
    eyebrow: "English · French · Swedish",
    headline: "Content and marketing that connects, wherever your audience is.",
    subhead: `I'm ${PERSON.name}. I help companies create content that connects. From email and landing pages to organic and paid social. I write in English, French and Swedish.`,
    ctaPrimary: "Book a call",
    ctaSecondary: "See services",
  },
  proofLine: { prefix: "Trusted by teams at", names: PROOF },
  problem: {
    title: "Content that doesn't land, doesn't grow anything.",
    body: "I create content that connects, across social, web and email, in English, French and Swedish.",
  },
  services: {
    title: "Ways to work together",
    items: [
      { title: "Web", body: "Blog, landing pages, product pages, and website copy." },
      { title: "Email", body: "Campaigns, newsletters and lifecycle emails." },
      { title: "Organic social", body: "Copy, visuals, videos and community management." },
      { title: "Paid social", body: "Campaigns and creative, built and managed across Meta and LinkedIn." },
    ],
    outro: "Pick one channel or combine a few, whatever fits where you're at.",
    link: "Let's talk about your content",
  },
  contact: {
    title: "Let's talk about your content.",
    body: "Tell me what you need done, I'll tell you where I can help.",
    cta: "Book a call",
    emailPrompt: "Prefer email?",
    linkedin: "LinkedIn",
  },
  footer: { tagline: "Content and marketing that connects, wherever your audience is." },
};

/* ---------- FR ---------- */
const fr: Dictionary = {
  nav: { services: "Services", contact: "Contact", cta: "Réserver un appel" },
  hero: {
    eyebrow: "Anglais · Français · Suédois",
    headline: "Du contenu et du marketing qui touchent, où que soit votre audience.",
    subhead: `Je suis ${PERSON.name}. J'aide les entreprises à créer du contenu qui touche. De l'email et des landing pages au social organique et payant. J'écris en anglais, en français et en suédois.`,
    ctaPrimary: "Réserver un appel",
    ctaSecondary: "Voir les services",
  },
  proofLine: { prefix: "Des équipes m'ont fait confiance chez", names: PROOF },
  problem: {
    title: "Un contenu qui ne touche pas ne fait rien grandir.",
    body: "Je crée du contenu qui touche, sur les réseaux, le web et l'email, en anglais, en français et en suédois.",
  },
  services: {
    title: "Façons de travailler ensemble",
    items: [
      { title: "Web", body: "Blog, landing pages, pages produit et textes de site." },
      { title: "Email", body: "Campagnes, newsletters et emails lifecycle." },
      { title: "Social organique", body: "Textes, visuels, vidéos et community management." },
      { title: "Social payant", body: "Campagnes et créas, construites et pilotées sur Meta et LinkedIn." },
    ],
    outro: "Un seul canal ou plusieurs combinés, selon où vous en êtes.",
    link: "Parlons de votre contenu",
  },
  contact: {
    title: "Parlons de votre contenu.",
    body: "Dites-moi ce dont vous avez besoin, je vous dis où je peux aider.",
    cta: "Réserver un appel",
    emailPrompt: "Vous préférez l'email ?",
    linkedin: "LinkedIn",
  },
  footer: { tagline: "Du contenu et du marketing qui touchent, où que soit votre audience." },
};

/* ---------- SV (native proofread required) ---------- */
const sv: Dictionary = {
  nav: { services: "Tjänster", contact: "Kontakt", cta: "Boka ett samtal" },
  hero: {
    eyebrow: "Engelska · Franska · Svenska",
    headline: "Innehåll och marknadsföring som når fram, var din publik än finns.",
    subhead: `Jag heter ${PERSON.name}. Jag hjälper företag att skapa innehåll som når fram. Från e-post och landningssidor till organisk och betald social. Jag skriver på engelska, franska och svenska.`,
    ctaPrimary: "Boka ett samtal",
    ctaSecondary: "Se tjänster",
  },
  proofLine: { prefix: "Anlitad av team på", names: PROOF },
  problem: {
    title: "Innehåll som inte når fram får ingenting att växa.",
    body: "Jag skapar innehåll som når fram, i sociala medier, på webben och via e-post, på engelska, franska och svenska.",
  },
  services: {
    title: "Sätt att arbeta tillsammans",
    items: [
      { title: "Webb", body: "Blogg, landningssidor, produktsidor och webbtexter." },
      { title: "E-post", body: "Kampanjer, nyhetsbrev och lifecycle-mejl." },
      { title: "Organisk social", body: "Texter, bilder, video och community management." },
      { title: "Betald social", body: "Kampanjer och kreativt material, byggda och hanterade på Meta och LinkedIn." },
    ],
    outro: "Välj en kanal eller kombinera några, det som passar där ni är just nu.",
    link: "Låt oss prata om ert innehåll",
  },
  contact: {
    title: "Låt oss prata om ert innehåll.",
    body: "Berätta vad ni behöver få gjort, så berättar jag var jag kan hjälpa till.",
    cta: "Boka ett samtal",
    emailPrompt: "Föredrar du e-post?",
    linkedin: "LinkedIn",
  },
  footer: { tagline: "Innehåll och marknadsföring som når fram, var din publik än finns." },
};

export const dictionaries: Record<Lang, Dictionary> = { en, fr, sv };
export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang] ?? dictionaries.en;
}
export function isLang(v: string): v is Lang {
  return (LANGS as string[]).includes(v);
}
