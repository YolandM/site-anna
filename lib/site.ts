import type { Lang } from "./i18n";

export const SITE_URL = "https://www.annamariamosterlind.com";

export const OG_LOCALE: Record<Lang, string> = {
  en: "en_US",
  fr: "fr_FR",
  sv: "sv_SE",
};

/** Turns whatever is saved in the CMS into a Cal.com booking URL.
    Returns "" when nothing is set, so the buttons fall back to the contact form. */
export function calLink(calUrl: string): string {
  const raw = calUrl.trim();
  if (!raw) return "";
  return raw.startsWith("http") ? raw : `https://cal.com/${raw.replace(/^\/+/, "")}`;
}
