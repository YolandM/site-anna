import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getDictionary, getSettings } from "@/lib/content";
import { isLang, LANGS, type Lang } from "@/lib/i18n";
import { SITE_URL, OG_LOCALE } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export const viewport: Viewport = { themeColor: "#f8f5f0" };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const key: Lang = isLang(lang) ? lang : "en";
  const { seo } = await getDictionary(key);
  const { name } = await getSettings();

  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/${key}`,
      languages: { en: "/en", fr: "/fr", sv: "/sv", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      siteName: name,
      title: seo.title,
      description: seo.description,
      url: `${SITE_URL}/${key}`,
      locale: OG_LOCALE[key],
    },
    twitter: { card: "summary_large_image", title: seo.title, description: seo.description },
    robots: { index: true, follow: true },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const dict = await getDictionary(lang);
  const settings = await getSettings();

  return (
    <html lang={lang} className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <Nav lang={lang} copy={dict.nav} name={settings.name} />
        <main className="pt-14 sm:pt-16 lg:pt-20">{children}</main>
        <Footer tagline={dict.footer.tagline} settings={settings} />
      </body>
    </html>
  );
}
