import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/icons/icon-map";
import type { Dictionary } from "@/lib/i18n/types";

export function Industries({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.industries;

  return (
    <section id="industries" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.heading} />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((industry, i) => (
            <Reveal key={industry.title} delay={(i % 3) * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[var(--shadow-card-hover)]">
                <span className="flex size-11 items-center justify-center rounded-xl bg-mist text-ink transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                  <Icon name={industry.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{industry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{industry.description}</p>
                <p className="mt-3 border-t border-line pt-3 text-xs font-medium leading-relaxed text-blue">
                  {industry.capability}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
