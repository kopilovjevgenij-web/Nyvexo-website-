import { Hero } from "@/components/sections/Hero";
import { FoundingClient } from "@/components/sections/FoundingClient";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Services } from "@/components/sections/Services";
import { BigStatement } from "@/components/sections/BigStatement";
import { Industries } from "@/components/sections/Industries";
import { Scenarios } from "@/components/sections/Scenarios";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LossCalculator } from "@/components/sections/LossCalculator";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { AuditForm } from "@/components/sections/AuditForm";
import { TrustSection } from "@/components/sections/TrustSection";
import { Technology } from "@/components/sections/Technology";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Contact } from "@/components/sections/Contact";
import { LOCALES } from "@/lib/constants";
import { getDictionary } from "@/lib/i18n/config";
import { resolveLocale } from "@/lib/i18n/resolve-locale";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const dictionary = await getDictionary(locale);

  return (
    <>
      <Hero dictionary={dictionary} />
      <TrustStrip dictionary={dictionary} />
      <ProblemSection dictionary={dictionary} />
      <BeforeAfter dictionary={dictionary} />
      <ValueProposition dictionary={dictionary} />
      <Services dictionary={dictionary} />
      <Industries dictionary={dictionary} />
      <Scenarios dictionary={dictionary} />
      <BigStatement dictionary={dictionary} />
      <HowItWorks dictionary={dictionary} />
      <TrustSection dictionary={dictionary} locale={locale} />
      <Technology dictionary={dictionary} />
      <FoundingClient dictionary={dictionary} />
      <LossCalculator dictionary={dictionary} locale={locale} />
      <PricingTiers dictionary={dictionary} />
      <AuditForm dictionary={dictionary} locale={locale} />
      <FAQ dictionary={dictionary} />
      <FinalCTA dictionary={dictionary} />
      <Contact dictionary={dictionary} locale={locale} />
    </>
  );
}
