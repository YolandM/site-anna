import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getDictionary, isLang, LANGS, PERSON, type Lang } from "@/lib/content";
import { SITE_URL, seo } from "@/lib/site";

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

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const key: Lang = isLang(lang) ? lang : "en";
  const s = seo[key];
  return {
    metadataBase: new URL(SITE_URL),
    title: s.title,
    description: s.description,
    alternates: {
      canonical: `/${key}`,
      languages: { en: "/en", fr: "/fr", sv: "/sv", "x-default": "/en" },
    },
    openGraph: {
      type: "website",
      siteName: PERSON.name,
      title: s.title,
      description: s.description,
      url: `${SITE_URL}/${key}`,
      locale: s.ogLocale,
    },
    twitter: { card: "summary_large_image", title: s.title, description: s.description },
    robots: { index: true, follow: true },
  };
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <Nav lang={lang} copy={dict.nav} name={PERSON.name} />
        <main className="pt-14 sm:pt-16 lg:pt-20">{children}</main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}
