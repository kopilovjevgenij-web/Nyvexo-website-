import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { Analytics } from "@/components/Analytics";
import { SITE } from "@/lib/constants";
import { services } from "@/data/services";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "SmartFlow — Websites, Automation & AI for Business",
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "SmartFlow",
    "AI автоматизация бизнеса",
    "AI чат-бот",
    "AI голосовой агент",
    "разработка сайтов",
    "бизнес автоматизация",
    "интеграция CRM",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE.url,
    siteName: SITE.name,
    title: "SmartFlow — Websites, Automation & AI for Business",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartFlow — Websites, Automation & AI for Business",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      description: SITE.description,
      email: SITE.email,
      telephone: SITE.phone,
      sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "ru-RU",
    },
    ...services.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.summary,
      provider: { "@id": `${SITE.url}/#organization` },
      areaServed: "EU",
    })),
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-ink">
        <noscript>
          <style>{`.reveal { opacity: 1 !important; }`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
