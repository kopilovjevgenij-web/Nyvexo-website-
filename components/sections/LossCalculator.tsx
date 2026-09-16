"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/types";

const inputClasses =
  "w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-blue focus:ring-2 focus:ring-blue/15";

const numberFormatLocale: Record<Locale, string> = { lv: "lv-LV", ru: "ru-RU", en: "en-US" };

export function LossCalculator({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const t = dictionary.lossCalculator;
  const [calls, setCalls] = useState("");
  const [avgValue, setAvgValue] = useState("");
  const [share, setShare] = useState(30);

  const callsNum = parseFloat(calls.replace(",", "."));
  const valueNum = parseFloat(avgValue.replace(",", "."));
  const hasInputs = calls.trim() !== "" && avgValue.trim() !== "" && callsNum > 0 && valueNum > 0;
  const loss = hasInputs ? callsNum * 4.33 * valueNum * (share / 100) : 0;
  const formattedLoss = new Intl.NumberFormat(numberFormatLocale[locale], { maximumFractionDigits: 0 }).format(loss);

  return (
    <section id="calculator" className="scroll-mt-[4.5rem] py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.heading} description={t.subtitle} align="center" className="mx-auto" />

        <Reveal delay={120} className="mt-14">
          <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-mist p-7 sm:p-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">{t.callsLabel}</span>
                <input
                  type="number"
                  min={0}
                  inputMode="decimal"
                  value={calls}
                  onChange={(e) => setCalls(e.target.value)}
                  placeholder={t.callsPlaceholder}
                  className={inputClasses}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">{t.valueLabel}</span>
                <input
                  type="number"
                  min={0}
                  inputMode="decimal"
                  value={avgValue}
                  onChange={(e) => setAvgValue(e.target.value)}
                  placeholder={t.valuePlaceholder}
                  className={inputClasses}
                />
              </label>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <span className="text-sm font-medium text-ink">{t.shareLabel}</span>
                <span className="text-sm font-semibold text-blue">{share}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={share}
                onChange={(e) => setShare(Number(e.target.value))}
                className="w-full accent-blue"
                aria-label={t.shareLabel}
              />
              <span className="mt-1.5 block text-xs text-ink-soft">{t.shareNote}</span>
            </div>

            <p className="mt-6 border-t border-line pt-6 text-xs leading-relaxed text-ink-soft">{t.formulaLabel}</p>

            <div className="mt-4 rounded-2xl border border-line bg-white p-6 text-center">
              {hasInputs ? (
                <p className="text-balance text-lg font-medium text-ink sm:text-xl">
                  {t.resultPrefix}{" "}
                  <span className="font-display text-3xl font-bold text-blue sm:text-4xl">{formattedLoss}</span>{" "}
                  {t.resultSuffix}
                </p>
              ) : (
                <p className="text-balance text-base text-ink-soft">{t.resultEmpty}</p>
              )}
              <p className="mt-3 text-xs text-ink-soft">{t.disclaimer}</p>
            </div>

            <div className="mt-6 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
              <p className="max-w-sm text-sm leading-relaxed text-ink-soft">{t.ctaText}</p>
              <Button href="#audit" size="md" className="shrink-0">
                {t.ctaButton}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
