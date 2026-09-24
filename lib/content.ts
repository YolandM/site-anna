/* Server-only: reads the YAML files that Keystatic edits.
   Never import this from a "use client" component — use lib/i18n.ts instead. */

import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../keystatic.config";
import { PROOF, type Dictionary, type Lang, type Settings } from "./i18n";

const reader = createReader(process.cwd(), keystaticConfig);

export async function getDictionary(lang: Lang): Promise<Dictionary> {
  const d = await reader.singletons[lang].read();
  if (!d) throw new Error(`Missing content file: content/${lang}.yaml`);

  return {
    nav: { ...d.nav },
    hero: { ...d.hero },
    proofLine: { show: d.showProof, prefix: d.proofPrefix, names: PROOF },
    problem: { ...d.problem },
    services: {
      show: d.services.show,
      title: d.services.title,
      items: d.services.items.map((i) => ({ title: i.title, body: i.body })),
      outro: d.services.outro,
      link: d.services.link,
    },
    contact: { ...d.contact },
    footer: { tagline: d.footerTagline },
    seo: { title: d.seoTitle, description: d.seoDescription },
  };
}

export async function getSettings(): Promise<Settings> {
  const s = await reader.singletons.settings.read();
  if (!s) throw new Error("Missing content file: content/settings.yaml");
  return {
    name: s.name,
    email: s.email,
    linkedin: s.linkedin ?? "",
    calUrl: s.calUrl,
  };
}
