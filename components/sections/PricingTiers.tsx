import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/types";

export function PricingTiers({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.pricing;

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.heading} description={t.subtitle} />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {t.tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100} className="h-full">
              <div
                className={`flex h-full flex-col rounded-3xl border p-7 ${
                  i === 2 ? "border-ink bg-ink text-white" : "border-line bg-white"
                }`}
              >
                <span
                  className={`text-xs font-semibold uppercase tracking-[0.12em] ${
                    i === 2 ? "text-white/50" : "text-blue"
                  }`}
                >
                  {tier.tag}
                </span>
                <h3 className={`mt-2 font-display text-2xl font-bold ${i === 2 ? "text-white" : "text-ink"}`}>
                  {tier.name}
                </h3>
                <p className={`mt-4 font-display text-3xl font-bold ${i === 2 ? "text-white" : "text-ink"}`}>
                  {tier.price}
                </p>
                <p className={`mt-3 text-sm leading-relaxed ${i === 2 ? "text-white/70" : "text-ink-soft"}`}>
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className={`mt-0.5 size-4 shrink-0 ${i === 2 ? "text-blue-soft" : "text-blue"}`} aria-hidden />
                      <span className={i === 2 ? "text-white/90" : "text-ink"}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={350}>
          <p className="mx-auto mt-8 max-w-xl text-balance text-center text-sm text-ink-soft">{t.note}</p>
        </Reveal>
      </Container>
    </section>
  );
}
