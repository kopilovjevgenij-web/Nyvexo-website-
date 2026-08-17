import { Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/icons/icon-map";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Услуги" title="Что мы создаём" />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 100} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-blue-soft text-blue">
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <span className="font-display text-2xl font-bold text-line-strong">{service.index}</span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{service.summary}</p>

                {service.flow && (
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {service.flow.map((step, idx) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="rounded-lg bg-mist px-3 py-1.5 text-xs font-medium text-ink-soft">
                          {step}
                        </span>
                        {idx < service.flow!.length - 1 && (
                          <ArrowRight className="size-3.5 text-line-strong" aria-hidden />
                        )}
                      </span>
                    ))}
                  </div>
                )}

                {service.channels && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.channels.map((channel) => (
                      <span
                        key={channel}
                        className="rounded-full border border-blue-soft-line bg-blue-soft px-3 py-1 text-xs font-medium text-blue"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="mt-7 grid grid-cols-1 gap-x-4 gap-y-2.5 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
                      <Check className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink"
                >
                  {service.cta}
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
