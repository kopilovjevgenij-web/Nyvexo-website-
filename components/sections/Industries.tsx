import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/icons/icon-map";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Для бизнеса" title="Где SmartFlow может помочь?" />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <Reveal key={industry.title} delay={(i % 3) * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[var(--shadow-card-hover)]">
                <span className="flex size-11 items-center justify-center rounded-xl bg-mist text-ink transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
                  <Icon name={industry.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{industry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{industry.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
