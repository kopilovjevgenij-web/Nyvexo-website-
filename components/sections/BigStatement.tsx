import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/types";

export function BigStatement({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.bigStatement;

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_50%_60%_at_50%_50%,black_0%,transparent_75%)] opacity-50" />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {t.line1}
            <br />
            {t.line2}
            <br />
            <span className="text-blue">{t.line3}</span>
          </h2>
        </Reveal>

        <Reveal delay={150} className="mt-14">
          <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-3">
            {t.inputs.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="rounded-full border border-line-strong bg-white px-4 py-2 text-sm font-medium text-ink-soft shadow-[var(--shadow-card)]">
                  {item}
                </span>
                {i < t.inputs.length - 1 && <span className="text-line-strong">+</span>}
              </span>
            ))}
          </div>
          <div className="mx-auto my-6 h-8 w-px bg-line-strong" aria-hidden />
          <span className="inline-flex rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white">SmartFlow</span>
        </Reveal>
      </Container>
    </section>
  );
}
