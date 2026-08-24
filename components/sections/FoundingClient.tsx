import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/types";

export function FoundingClient({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.foundingClient;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-ink bg-ink p-8 text-white sm:p-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              {t.eyebrow}
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.heading}
            </h2>
            <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
              {t.text}
            </p>
            <ul className="mt-8 space-y-3">
              {t.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base">
                  <Check className="mt-0.5 size-4 shrink-0 text-blue-soft" aria-hidden />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="#audit" size="lg">
                {t.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
