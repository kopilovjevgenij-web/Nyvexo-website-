import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Процесс" title="От идеи до работающей системы" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={i * 80} className="h-full">
              <div className="relative h-full rounded-2xl border border-line bg-white p-6">
                <span className="font-display text-3xl font-bold text-blue-soft-line">{step.index}</span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
