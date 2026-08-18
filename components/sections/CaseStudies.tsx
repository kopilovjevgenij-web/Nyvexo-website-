import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/types";

export function CaseStudies({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.cases;

  return (
    <section id="cases" className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.heading} description={t.subtitle} />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {t.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-line bg-white p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue">{item.industry}</p>
                    <h3 className="mt-1.5 text-xl font-semibold text-ink">{item.title}</h3>
                  </div>
                  <Badge tone="neutral" className="shrink-0">
                    {t.badge}
                  </Badge>
                </div>

                <dl className="mt-5 space-y-3">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-ink-soft">{t.labels.problem}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink">{item.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-ink-soft">{t.labels.solution}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink">{item.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-ink-soft">{t.labels.automation}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink">{item.automation}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-ink-soft">{t.labels.result}</dt>
                    <dd className="mt-1 text-sm font-medium leading-relaxed text-ink">{item.result}</dd>
                  </div>
                </dl>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink-soft">
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
