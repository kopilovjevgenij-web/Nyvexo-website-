import { X, Check, ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/types";

export function BeforeAfter({ dictionary }: { dictionary: Dictionary }) {
  const t = dictionary.beforeAfter;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <Reveal className="rounded-3xl border border-line bg-white p-7 sm:p-9">
            <h3 className="text-xl font-semibold text-ink">{t.beforeTitle}</h3>
            <ul className="mt-6 space-y-3">
              {t.beforeItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ink-soft">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-mist text-ink-soft">
                    <X className="size-3.5" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100} className="flex justify-center py-2 lg:py-0">
            <ArrowDown className="size-6 rotate-90 text-line-strong lg:rotate-0" aria-hidden />
          </Reveal>

          <Reveal delay={200} className="rounded-3xl border border-blue-soft-line bg-blue-soft p-7 sm:p-9">
            <h3 className="text-xl font-semibold text-ink">{t.afterTitle}</h3>
            <ul className="mt-6 space-y-3">
              {t.afterItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-ink">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue text-white">
                    <Check className="size-3.5" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
