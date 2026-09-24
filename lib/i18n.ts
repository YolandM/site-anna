/* Types and constants shared by server and browser code.
   Nothing here touches the filesystem, so client components can import it. */

export type Lang = "en" | "fr" | "sv";
export const LANGS: Lang[] = ["en", "fr", "sv"];

export function isLang(v: string): v is Lang {
  return (LANGS as string[]).includes(v);
}

/* Client names shown in the logo bar. The matching files live in
   /public/logos and are wired up in components/LogoRow.tsx, so this list
   stays in code rather than in the CMS. */
export const PROOF = ["Publicis Groupe", "Vaimo", "Lidl", "Volvo"];

export type Dictionary = {
  nav: { services: string; contact: string; cta: string };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    showCtaSecondary: boolean;
  };
  proofLine: { show: boolean; prefix: string; names: string[] };
  problem: { show: boolean; title: string; body: string };
  services: {
    show: boolean;
    title: string;
    items: { title: string; body: string }[];
    outro: string;
    link: string;
  };
  contact: {
    title: string;
    body: string;
    cta: string;
    linkedin: string;
  };
  form: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: { tagline: string };
  seo: { title: string; description: string };
};

export type Settings = {
  name: string;
  email: string;
  linkedin: string;
  calUrl: string;
};
