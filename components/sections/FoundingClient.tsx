import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/types";

export function FoundingClient({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.foundingClient;

  return (
    <section className="py-6 sm:py-8">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-5 rounded-2xl border border-ink bg-ink p-6 text-white sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-7">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                {t.eyebrow}
              </span>
              <h2 className="mt-2 text-balance text-xl font-bold tracking-tight sm:text-2xl">{t.heading}</h2>
              <p className="mt-2 max-w-2xl text-balance text-sm leading-relaxed text-white/70">{t.text}</p>
              <ul className="mt-3 flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-1.5">
                {t.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs sm:text-sm">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-blue-soft" aria-hidden />
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button href="#audit" className="shrink-0">
              {t.cta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
