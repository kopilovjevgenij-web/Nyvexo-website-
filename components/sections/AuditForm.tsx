"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/types";

const inputClasses =
  "w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-blue focus:ring-2 focus:ring-blue/15";

export function AuditForm({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const t = dictionary.audit;
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "audit", locale, ...payload }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="audit" className="scroll-mt-[4.5rem] py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 rounded-3xl border border-line bg-mist p-7 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
          <Reveal className="flex flex-col justify-center">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              {t.eyebrow}
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{t.heading}</h2>
            <p className="mt-4 max-w-md text-balance text-base leading-relaxed text-ink-soft sm:text-lg">{t.subtitle}</p>
            <p className="mt-4 text-sm text-ink-soft">{t.disclaimer}</p>
          </Reveal>

          <Reveal delay={120}>
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-line bg-white p-8 text-center">
                <CheckCircle2 className="size-10 text-blue" aria-hidden />
                <p className="mt-4 text-lg font-semibold text-ink">{t.form.successTitle}</p>
                <p className="mt-2 text-sm text-ink-soft">{t.form.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-line bg-white p-6 sm:p-7">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input name="name" required placeholder={t.form.name} className={inputClasses} />
                  <input name="company" placeholder={t.form.company} className={inputClasses} />
                  <input name="email" type="email" required placeholder={t.form.email} className={inputClasses} />
                  <input name="phone" type="tel" placeholder={t.form.phone} className={inputClasses} />
                </div>
                <input name="website" placeholder={t.form.website} className={`${inputClasses} mt-4`} />

                <select name="improve" defaultValue="" className={`${inputClasses} mt-4`}>
                  <option value="" disabled>
                    {t.improveLabel}
                  </option>
                  {t.improveOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue text-sm font-semibold text-white transition-colors hover:bg-blue-dark disabled:opacity-70"
                >
                  {status === "submitting" && <Loader2 className="size-4 animate-spin" aria-hidden />}
                  {status === "submitting" ? t.form.submitting : t.form.submit}
                </button>

                {status === "error" && <p className="mt-3 text-sm text-red-600">{t.form.error}</p>}
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
