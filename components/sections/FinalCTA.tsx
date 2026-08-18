import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/types";

export function FinalCTA({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.finalCta;

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.06]" />
      <Container className="relative text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
            {t.heading}
          </h2>
          <p className="mt-5 text-balance text-base leading-relaxed text-white/70 sm:text-lg">{t.subtitle}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="#audit" size="lg">
              {t.ctaPrimary}
            </Button>
            <Button
              href="#contact"
              size="lg"
              variant="secondary"
              showArrow={false}
              className="!bg-transparent !text-white !border-white/25 hover:!bg-white/10"
            >
              {t.ctaSecondary}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
