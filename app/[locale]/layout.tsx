import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { Analytics } from "@/components/Analytics";
import { SITE, LOCALES, type Locale } from "@/lib/constants";
import { getDictionary } from "@/lib/i18n/config";
import { resolveLocale } from "@/lib/i18n/resolve-locale";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!LOCALES.includes(rawLocale as Locale)) return {};
  const locale = rawLocale as Locale;
  const dictionary = await getDictionary(locale);

  const languages = Object.fromEntries(LOCALES.map((loc) => [loc, `${SITE.url}/${loc}`]));

  return {
    metadataBase: new URL(SITE.url),
    title: { default: dictionary.meta.title, template: `%s — ${SITE.name}` },
    description: dictionary.meta.description,
    alternates: {
      canonical: `${SITE.url}/${locale}`,
      languages: { ...languages, "x-default": `${SITE.url}/lv` },
    },
    authors: [{ name: SITE.name }],
    openGraph: {
      type: "website",
      locale: locale === "lv" ? "lv_LV" : locale === "en" ? "en_US" : "ru_RU",
      url: `${SITE.url}/${locale}`,
      siteName: SITE.name,
      title: dictionary.meta.ogTitle,
      description: dictionary.meta.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.ogTitle,
      description: dictionary.meta.ogDescription,
    },
    robots: { index: true, follow: true },
  };
}

const HTML_LANG: Record<Locale, string> = { lv: "lv", en: "en", ru: "ru" };

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);

  const dictionary = await getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        description: dictionary.meta.description,
        email: SITE.email,
        telephone: SITE.phone,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: `${SITE.url}/${locale}`,
        name: SITE.name,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: HTML_LANG[locale],
      },
      ...dictionary.services.items.map((service) => ({
        "@type": "Service",
        name: service.title,
        description: service.whatItIs,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: "EU",
      })),
    ],
  };

  return (
    <html lang={HTML_LANG[locale]} className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink">
        <noscript>
          <style>{`.reveal { opacity: 1 !important; }`}</style>
        </noscript>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header dictionary={dictionary} locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer dictionary={dictionary} locale={locale} />
        <CookieBanner dictionary={dictionary} locale={locale} />
        <Analytics />
      </body>
    </html>
  );
}
