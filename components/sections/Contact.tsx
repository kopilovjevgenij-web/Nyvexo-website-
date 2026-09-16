"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SITE, type Locale } from "@/lib/constants";
import { localeHref } from "@/lib/i18n/paths";
import type { Dictionary } from "@/lib/i18n/types";

const inputClasses =
  "w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-blue focus:ring-2 focus:ring-blue/15";

export function Contact({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const t = dictionary.contact;
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
        body: JSON.stringify({ formType: "contact", locale, ...payload }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-[4.5rem] py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              {t.eyebrow}
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{t.heading}</h2>
            <p className="mt-4 max-w-md text-balance text-base leading-relaxed text-ink-soft">{t.subtitle}</p>

            <p className="mt-6 text-sm font-semibold text-ink">
              {SITE.name} <span className="font-normal text-ink-soft">— {SITE.tagline}</span>
            </p>

            <div className="mt-4 space-y-3">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm font-medium text-ink hover:text-blue">
                <span className="flex size-10 items-center justify-center rounded-full bg-mist">
                  <Mail className="size-4" aria-hidden />
                </span>
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-3 text-sm font-medium text-ink hover:text-blue">
                <span className="flex size-10 items-center justify-center rounded-full bg-mist">
                  <Phone className="size-4" aria-hidden />
                </span>
                {SITE.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-line bg-mist p-10 text-center">
                <CheckCircle2 className="size-10 text-blue" aria-hidden />
                <p className="mt-4 text-lg font-semibold text-ink">{t.form.successTitle}</p>
                <p className="mt-2 max-w-sm text-sm text-ink-soft">{t.form.successText}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-mist p-6 sm:p-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input name="name" required placeholder={t.form.name} className={inputClasses} />
                  <input name="company" placeholder={t.form.company} className={inputClasses} />
                  <input name="email" type="email" required placeholder={t.form.email} className={inputClasses} />
                  <input name="phone" type="tel" placeholder={t.form.phone} className={inputClasses} />
                  <input name="website" placeholder={t.form.website} className={inputClasses} />
                  <select name="service" defaultValue="" className={inputClasses}>
                    <option value="" disabled>
                      {t.serviceLabel}
                    </option>
                    {t.serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea name="message" rows={4} placeholder={t.form.message} className={`${inputClasses} mt-4 resize-none`} />

                <label className="mt-4 flex items-start gap-2.5 text-sm text-ink-soft">
                  <input type="checkbox" name="consent" required className="mt-0.5 size-4 shrink-0 accent-blue" />
                  {t.form.consentPrefix}{" "}
                  <Link href={localeHref(locale, "/privacy-policy")} className="font-medium text-ink underline underline-offset-2">
                    {t.form.consentLink}
                  </Link>
                  .
                </label>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue text-sm font-semibold text-white transition-colors hover:bg-blue-dark disabled:opacity-70 sm:w-auto sm:px-8"
                >
                  {status === "submitting" && <Loader2 className="size-4 animate-spin" aria-hidden />}
                  {status === "submitting" ? t.form.submitting : t.form.submit}
                </button>

                {status === "error" && (
                  <p className="mt-3 text-sm text-red-600">
                    {t.form.error} {SITE.email}.
                  </p>
                )}
              </form>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
