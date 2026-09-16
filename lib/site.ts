import type { Lang } from "./i18n";

export const SITE_URL = "https://www.annamariamosterlind.com";

export const OG_LOCALE: Record<Lang, string> = {
  en: "en_US",
  fr: "fr_FR",
  sv: "sv_SE",
};

/** Turns whatever is saved in the CMS into a Cal.com embed URL. Empty string = no calendar. */
export function calEmbedUrl(calUrl: string): string {
  const raw = calUrl.trim();
  if (!raw) return "";
  const url = raw.startsWith("http") ? raw : `https://cal.com/${raw.replace(/^\/+/, "")}`;
  return `${url}${url.includes("?") ? "&" : "?"}embed=true&theme=light&layout=month_view`;
}
