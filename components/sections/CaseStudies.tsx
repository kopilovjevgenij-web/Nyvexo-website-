import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/data/cases";

export function CaseStudies() {
  return (
    <section id="cases" className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Кейсы"
          title="Примеры решений"
          description="Реальных клиентских кейсов пока нет в публичном доступе — ниже demo-примеры того, как решения SmartFlow работают на практике. Структуру легко заменить на подтверждённые результаты клиентов."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {caseStudies.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-line bg-white p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue">{item.industry}</p>
                    <h3 className="mt-1.5 text-xl font-semibold text-ink">{item.title}</h3>
                  </div>
                  <Badge tone="neutral" className="shrink-0">
                    Concept / Demo
                  </Badge>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
