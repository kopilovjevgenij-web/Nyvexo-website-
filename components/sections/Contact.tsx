"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { contactServices } from "@/data/audit-options";
import { SITE } from "@/lib/constants";

const inputClasses =
  "w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-blue focus:ring-2 focus:ring-blue/15";

export function Contact() {
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
        body: JSON.stringify({ formType: "contact", ...payload }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              Контакты
            </span>
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Обсудим ваш проект
            </h2>
            <p className="mt-4 max-w-md text-balance text-base leading-relaxed text-ink-soft">
              Расскажите о задаче — ответим в ближайшее время и предложим, с чего лучше
              начать: сайта, автоматизации или AI.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-sm font-medium text-ink hover:text-blue"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-mist">
                  <Mail className="size-4" aria-hidden />
                </span>
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm font-medium text-ink hover:text-blue"
              >
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
                <p className="mt-4 text-lg font-semibold text-ink">Спасибо!</p>
                <p className="mt-2 max-w-sm text-sm text-ink-soft">
                  Мы получили вашу заявку. Свяжемся с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-mist p-6 sm:p-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input name="name" required placeholder="Имя" className={inputClasses} />
                  <input name="company" placeholder="Компания" className={inputClasses} />
                  <input name="email" type="email" required placeholder="Email" className={inputClasses} />
                  <input name="phone" type="tel" placeholder="Телефон" className={inputClasses} />
                  <input name="website" placeholder="Website" className={inputClasses} />
                  <select name="service" defaultValue="" className={inputClasses}>
                    <option value="" disabled>
                      Услуга
                    </option>
                    {contactServices.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Сообщение"
                  className={`${inputClasses} mt-4 resize-none`}
                />

                <label className="mt-4 flex items-start gap-2.5 text-sm text-ink-soft">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-0.5 size-4 shrink-0 accent-blue"
                  />
                  Я согласен(а) с{" "}
                  <Link href="/privacy-policy" className="font-medium text-ink underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </label>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue text-sm font-semibold text-white transition-colors hover:bg-blue-dark disabled:opacity-70 sm:w-auto sm:px-8"
                >
                  {status === "submitting" && <Loader2 className="size-4 animate-spin" aria-hidden />}
                  Отправить заявку
                </button>

                {status === "error" && (
                  <p className="mt-3 text-sm text-red-600">
                    Не удалось отправить форму. Попробуйте ещё раз или напишите нам напрямую на{" "}
                    {SITE.email}.
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
