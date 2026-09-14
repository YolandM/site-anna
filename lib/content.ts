export type Lang = "en" | "fr" | "sv";
export const LANGS: Lang[] = ["en", "fr", "sv"];

/* ---------- Fill these in once ---------- */
export const PERSON = {
  name: "Anna-Mariam Österlind",
  email: "hello@example.com", // TODO
  linkedin: "https://www.linkedin.com/in/", // TODO
  years: "[X]", // TODO e.g. "Ten"
  city: "Provence, France", // TODO
};

/* ---------- Types ---------- */
export type Dictionary = {
  nav: { services: string; covered: string; about: string; contact: string; cta: string };
  hero: { eyebrow: string; headline: string; subhead: string; ctaPrimary: string; ctaSecondary: string };
  proofLine: { prefix: string; names: string[] };
  problem: { title: string; body: string };
  services: { title: string; items: { title: string; body: string }[]; link: string };
  covered: { title: string; items: { label: string; body: string }[] };
  about: { title: string; body: string };
  contact: { title: string; body: string; cta: string; emailPrompt: string; linkedin: string };
  footer: { tagline: string };
};

const PROOF = ["Publicis Groupe", "Vaimo", "Lidl", "Volvo"];

/* ---------- EN ---------- */
const en: Dictionary = {
  nav: { services: "Services", covered: "What's covered", about: "About", contact: "Contact", cta: "Book a call" },
  hero: {
    eyebrow: "Content across Nordic, French and English markets",
    headline: "Content that lands, in every market you enter.",
    subhead: `I'm ${PERSON.name}. I help Nordic companies expanding into French and English-speaking markets create content their new audience connects with: email, blog content and copy, written natively in English, French and Swedish.`,
    ctaPrimary: "Book a call",
    ctaSecondary: "See services",
  },
  proofLine: { prefix: "Trusted by teams at", names: PROOF },
  problem: {
    title: "You're ready for a new market. Your content isn't.",
    body: "Expanding into France or an English-speaking market usually means one of two things: a translation agency turning your Swedish copy into something technically correct but flat, or a freelancer per language with no one coordinating the voice across them. Neither reads like it was written for the people you're trying to reach.",
  },
  services: {
    title: "Three ways to work together",
    items: [
      { title: "Ongoing content", body: "Blog and content programs written for each market, not translated into it. Set up once, runs monthly." },
      { title: "Email and lifecycle", body: "Campaigns and newsletters that sound like they came from inside the market, not from headquarters." },
      { title: "Launch copy and landing pages", body: "The page you need before you go live in a new market, written in the language your new customers actually speak." },
    ],
    link: "Let's talk about your next market",
  },
  covered: {
    title: "What's covered",
    items: [
      { label: "Languages", body: "English, French, Swedish, all native-level, not machine-assisted translation." },
      { label: "Content", body: "Blog, SEO content, product content, ongoing editorial calendars." },
      { label: "Email", body: "Campaigns, newsletters, lifecycle sequences." },
      { label: "Copy", body: "Landing pages, launch pages, product pages." },
    ],
  },
  about: {
    title: "Proof",
    body: `${PERSON.years} years in B2B and B2C marketing. Based in ${PERSON.city}, working across French and Nordic markets daily, not guessing at them from abroad.`,
  },
  contact: {
    title: "Let's talk about your next market.",
    body: "Thirty minutes, no deck. Tell me where you're expanding, I'll tell you what the content needs to do.",
    cta: "Book a call",
    emailPrompt: "Prefer email?",
    linkedin: "LinkedIn",
  },
  footer: { tagline: "Content that lands, in every market you enter." },
};

/* ---------- FR ---------- */
const fr: Dictionary = {
  nav: { services: "Services", covered: "Ce que ça couvre", about: "À propos", contact: "Contact", cta: "Réserver un appel" },
  hero: {
    eyebrow: "Du contenu pour les marchés nordiques, français et anglophones",
    headline: "Du contenu qui touche juste, sur chaque marché où vous arrivez.",
    subhead: `Je suis ${PERSON.name}. J'aide les entreprises nordiques qui s'ouvrent aux marchés français et anglophones à créer du contenu auquel leur nouveau public s'attache : emails, articles de blog et textes, écrits nativement en anglais, en français et en suédois.`,
    ctaPrimary: "Réserver un appel",
    ctaSecondary: "Voir les services",
  },
  proofLine: { prefix: "Des équipes m'ont fait confiance chez", names: PROOF },
  problem: {
    title: "Vous êtes prêts pour un nouveau marché. Votre contenu, non.",
    body: "S'implanter en France ou sur un marché anglophone, en général, ça veut dire l'une de ces deux choses : une agence de traduction qui transforme votre texte suédois en quelque chose de techniquement correct mais plat, ou un freelance par langue sans personne pour coordonner la voix entre eux. Dans les deux cas, ça ne se lit pas comme si c'était écrit pour les gens que vous voulez toucher.",
  },
  services: {
    title: "Trois façons de travailler ensemble",
    items: [
      { title: "Contenu régulier", body: "Des programmes de blog et de contenu écrits pour chaque marché, pas traduits vers lui. Mis en place une fois, livrés chaque mois." },
      { title: "Email et lifecycle", body: "Des campagnes et des newsletters qui sonnent comme si elles venaient du marché lui-même, pas du siège." },
      { title: "Textes de lancement et landing pages", body: "La page qu'il vous faut avant d'ouvrir un nouveau marché, écrite dans la langue que parlent vraiment vos futurs clients." },
    ],
    link: "Parlons de votre prochain marché",
  },
  covered: {
    title: "Ce que ça couvre",
    items: [
      { label: "Langues", body: "Anglais, français, suédois, niveau natif dans les trois, pas de traduction assistée par machine." },
      { label: "Contenu", body: "Blog, contenu SEO, contenu produit, calendriers éditoriaux au long cours." },
      { label: "Email", body: "Campagnes, newsletters, séquences lifecycle." },
      { label: "Textes", body: "Landing pages, pages de lancement, pages produit." },
    ],
  },
  about: {
    title: "Preuve",
    body: `${PERSON.years} ans de marketing B2B et B2C. Basée en ${PERSON.city}, au contact des marchés français et nordiques tous les jours, pas depuis l'étranger en devinant.`,
  },
  contact: {
    title: "Parlons de votre prochain marché.",
    body: "Trente minutes, pas de deck. Dites-moi où vous vous développez, je vous dis ce que le contenu doit faire.",
    cta: "Réserver un appel",
    emailPrompt: "Vous préférez l'email ?",
    linkedin: "LinkedIn",
  },
  footer: { tagline: "Du contenu qui touche juste, sur chaque marché où vous arrivez." },
};

/* ---------- SV (native proofread required) ---------- */
const sv: Dictionary = {
  nav: { services: "Tjänster", covered: "Vad som ingår", about: "Om mig", contact: "Kontakt", cta: "Boka ett samtal" },
  hero: {
    eyebrow: "Innehåll för nordiska, franska och engelskspråkiga marknader",
    headline: "Innehåll som träffar rätt, på varje marknad ni går in på.",
    subhead: `Jag heter ${PERSON.name}. Jag hjälper nordiska företag som expanderar till franska och engelskspråkiga marknader att skapa innehåll som deras nya publik känner igen sig i: e-post, blogginnehåll och copy, skrivet på modersmålsnivå på engelska, franska och svenska.`,
    ctaPrimary: "Boka ett samtal",
    ctaSecondary: "Se tjänster",
  },
  proofLine: { prefix: "Anlitad av team på", names: PROOF },
  problem: {
    title: "Ni är redo för en ny marknad. Ert innehåll är det inte.",
    body: "Att expandera till Frankrike eller en engelskspråkig marknad betyder oftast ett av två alternativ: en översättningsbyrå som gör er svenska text tekniskt korrekt men platt, eller en frilansare per språk utan någon som håller ihop tonen mellan dem. Ingetdera läses som om det vore skrivet för de människor ni vill nå.",
  },
  services: {
    title: "Tre sätt att arbeta tillsammans",
    items: [
      { title: "Löpande innehåll", body: "Blogg- och innehållsprogram skrivna för varje marknad, inte översatta till den. Sätts upp en gång, levereras varje månad." },
      { title: "E-post och lifecycle", body: "Kampanjer och nyhetsbrev som låter som om de kom inifrån marknaden, inte från huvudkontoret." },
      { title: "Lanseringstexter och landningssidor", body: "Sidan ni behöver innan ni går live på en ny marknad, skriven på det språk era nya kunder faktiskt talar." },
    ],
    link: "Låt oss prata om er nästa marknad",
  },
  covered: {
    title: "Vad som ingår",
    items: [
      { label: "Språk", body: "Engelska, franska, svenska, alla på modersmålsnivå, ingen maskinstödd översättning." },
      { label: "Innehåll", body: "Blogg, SEO-innehåll, produktinnehåll, löpande redaktionella kalendrar." },
      { label: "E-post", body: "Kampanjer, nyhetsbrev, lifecycle-sekvenser." },
      { label: "Copy", body: "Landningssidor, lanseringssidor, produktsidor." },
    ],
  },
  about: {
    title: "Bakgrund",
    body: `${PERSON.years} år inom B2B- och B2C-marknadsföring. Baserad i ${PERSON.city}, med daglig närvaro på de franska och nordiska marknaderna, inte gissningar på avstånd.`,
  },
  contact: {
    title: "Låt oss prata om er nästa marknad.",
    body: "Trettio minuter, ingen presentation. Berätta vart ni expanderar, så berättar jag vad innehållet behöver göra.",
    cta: "Boka ett samtal",
    emailPrompt: "Föredrar du e-post?",
    linkedin: "LinkedIn",
  },
  footer: { tagline: "Innehåll som träffar rätt, på varje marknad ni går in på." },
};

export const dictionaries: Record<Lang, Dictionary> = { en, fr, sv };
export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang] ?? dictionaries.en;
}
export function isLang(v: string): v is Lang {
  return (LANGS as string[]).includes(v);
}
