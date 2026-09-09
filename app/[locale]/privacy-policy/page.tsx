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
  return { title: dictionary.legal.privacy.title, description: dictionary.legal.privacy.description };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const dictionary = await getDictionary(locale);
  const t = dictionary.legal;

  return (
    <LegalPage
      title={t.privacy.title}
      updated={t.privacy.updated}
      updatedLabel={t.updatedLabel}
      sections={t.privacy.sections}
    />
  );
}
