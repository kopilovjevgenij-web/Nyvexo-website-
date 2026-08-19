import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/icons/icon-map";
import type { Dictionary } from "@/lib/i18n/types";

export function WhyNyvexo({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.why;

  return (
    <section className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.heading} />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <div className="flex h-full gap-4 rounded-2xl border border-line bg-white p-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
