import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/icons/icon-map";
import { problems } from "@/data/problems";

export function ProblemSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Реальность бизнеса"
          title="Где бизнес теряет время каждый день?"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, i) => (
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
            SmartFlow соединяет эти процессы в одну работающую систему.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
