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
  return { title: dictionary.legal.terms.title, description: dictionary.legal.terms.description };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const dictionary = await getDictionary(locale);
  const t = dictionary.legal;

  return (
    <LegalPage
      title={t.terms.title}
      updated={t.terms.updated}
      updatedLabel={t.updatedLabel}
      sections={t.terms.sections}
    />
  );
}
