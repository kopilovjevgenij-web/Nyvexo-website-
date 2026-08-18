import { ChevronRight, MessageSquareText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/types";

export function Scenarios({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.scenarios;

  return (
    <section className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.heading} />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.items.map((scenario, i) => (
            <Reveal key={scenario.label} delay={i * 100} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-blue">{scenario.label}</span>
                <h3 className="mt-2 text-xl font-semibold text-ink">{scenario.title}</h3>

                <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-mist p-4">
                  <MessageSquareText className="mt-0.5 size-4 shrink-0 text-ink-soft" aria-hidden />
                  <p className="text-sm italic leading-relaxed text-ink-soft">{scenario.trigger}</p>
                </div>

                <ol className="mt-6 space-y-0">
                  {scenario.steps.map((step, idx) => (
                    <li key={step} className="relative flex gap-3 pb-4 pl-1 last:pb-0">
                      {idx < scenario.steps.length - 1 && (
                        <span className="absolute left-[0.6rem] top-6 bottom-0 w-px bg-line" aria-hidden />
                      )}
                      <span className="relative z-10 mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white">
                        {idx + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-ink">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300} className="mt-10 flex justify-center">
          <a href="#contact" className="inline-flex items-center gap-1 text-sm font-semibold text-ink">
            {t.linkCta}
            <ChevronRight className="size-4" aria-hidden />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
