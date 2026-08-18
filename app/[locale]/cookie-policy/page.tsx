import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { LOCALES } from "@/lib/constants";
import { getDictionary } from "@/lib/i18n/config";
import { resolveLocale } from "@/lib/i18n/resolve-locale";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocale((await params).locale);
  const dictionary = await getDictionary(locale);
  return { title: dictionary.legal.cookiePolicy.title, description: dictionary.legal.cookiePolicy.description };
}

export default async function CookiePolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const dictionary = await getDictionary(locale);
  const t = dictionary.legal;

  return (
    <LegalPage
      title={t.cookiePolicy.title}
      updated={t.cookiePolicy.updated}
      updatedLabel={t.updatedLabel}
      disclaimer={t.disclaimer}
      sections={t.cookiePolicy.sections}
    />
  );
}
