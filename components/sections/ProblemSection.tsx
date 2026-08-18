import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/icons/icon-map";
import type { Dictionary } from "@/lib/i18n/types";

export function ProblemSection({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.problems;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.heading} align="center" className="mx-auto" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((problem, i) => (
            <Reveal key={problem.title} delay={i * 80}>
              <Card className="h-full">
                <span className="flex size-11 items-center justify-center rounded-xl bg-mist text-ink">
                  <Icon name={problem.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{problem.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <p className="mx-auto mt-14 max-w-2xl text-balance text-center text-xl font-semibold text-ink sm:text-2xl">
            {t.closing}
          </p>
        </Reveal>

        <Reveal delay={380} className="mt-8 flex justify-center">
          <Button href="#audit" size="md">
            {dictionary.hero.ctaSecondary}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
