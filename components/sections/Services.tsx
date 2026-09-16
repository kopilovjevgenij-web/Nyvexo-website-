"use client";

import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/icons/icon-map";
import type { Dictionary } from "@/lib/i18n/types";
import { scrollToHash } from "@/lib/utils";

export function Services({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.services;

  return (
    <section id="services" className="scroll-mt-[4.5rem] bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.heading} />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {t.items.map((service, i) => (
            <Reveal key={service.slug} delay={i * 100} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)] sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-blue-soft text-blue">
                    <Icon name={service.icon} className="size-5" />
                  </span>
                  <span className="font-display text-2xl font-bold text-line-strong">{service.index}</span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{service.whatItIs}</p>

                {service.flow && (
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {service.flow.map((step, idx) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="rounded-lg bg-mist px-3 py-1.5 text-xs font-medium text-ink-soft">{step}</span>
                        {idx < service.flow!.length - 1 && <ArrowRight className="size-3.5 text-line-strong" aria-hidden />}
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

                <dl className="mt-7 space-y-3 border-t border-line pt-6">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">{t.labels.forWhom}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink">{service.forWhom}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">{t.labels.automates}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink">{service.automates}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-soft">{t.labels.businessGets}</dt>
                    <dd className="mt-1 text-sm font-medium leading-relaxed text-ink">{service.businessGets}</dd>
                  </div>
                </dl>

                <a
                  href="#contact"
                  onClick={(e) => scrollToHash(e, "#contact")}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink"
                >
                  {service.cta}
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={450} className="mt-10 flex justify-center">
          <Button href="#audit" size="md">
            {dictionary.hero.ctaSecondary}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
