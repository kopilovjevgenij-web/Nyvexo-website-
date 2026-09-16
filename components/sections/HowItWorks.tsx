import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/types";

export function HowItWorks({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.process;

  return (
    <section id="how-it-works" className="scroll-mt-[4.5rem] bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.heading} />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.steps.map((step, i) => (
            <Reveal key={step.index} delay={i * 80} className="h-full">
              <div className="relative h-full rounded-2xl border border-line bg-white p-6">
                <span className="font-display text-3xl font-bold text-blue-soft-line">{step.index}</span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mx-auto mt-10 max-w-xl text-balance text-center text-lg font-medium text-ink">
            {t.emphasis}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
