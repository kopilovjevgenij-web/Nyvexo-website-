import { Fragment } from "react";
import { Globe, Bot, Workflow, Database, CalendarCheck, UserCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/types";

const flowIcons = [Globe, Bot, Workflow, Database, CalendarCheck, UserCheck];

export function Hero({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.hero;

  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)] opacity-60" />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line-strong bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">
            {t.badge}
          </span>
          <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {t.titleMain}
            <br />
            <span className="text-blue">{t.titleAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-soft">{t.subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" size="lg">
              {t.ctaPrimary}
            </Button>
            <Button href="#audit" size="lg" variant="secondary" showArrow={false}>
              {t.ctaSecondary}
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-soft">
            {t.trustItems.map((item, i) => (
              <Fragment key={item}>
                {i > 0 && <span className="h-1 w-1 rounded-full bg-line-strong" aria-hidden />}
                <span>{item}</span>
              </Fragment>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="relative">
          <div className="relative rounded-3xl border border-line bg-mist p-6 sm:p-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft">{t.flowLabel}</p>
            <div className="relative flex flex-col gap-3 pl-[1.15rem]">
              <div
                className="pointer-events-none absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-blue/50 via-line-strong to-transparent"
                aria-hidden
              />
              {t.flowNodes.map((label, i) => {
                const NodeIcon = flowIcons[i];
                return (
                  <div key={label} className="relative flex items-center gap-3">
                    <span
                      className="absolute -left-[1.15rem] size-2 rounded-full border-2 border-white bg-blue"
                      aria-hidden
                    />
                    <div className="flex flex-1 items-center gap-3 rounded-xl border border-line bg-white px-4 py-3.5 shadow-[var(--shadow-card)]">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-soft text-blue">
                        <NodeIcon className="size-[18px]" aria-hidden />
                      </span>
                      <span className="text-sm font-semibold text-ink">{label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
