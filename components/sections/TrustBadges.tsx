import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/constants";
import { localeHref } from "@/lib/i18n/paths";
import type { Dictionary } from "@/lib/i18n/types";

export function TrustBadges({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const t = dictionary.trustBadges;
  const termsLink = dictionary.footer.legal.find((item) => item.href === "/terms");
  const privacyLink = dictionary.footer.legal.find((item) => item.href === "/privacy-policy");

  return (
    <section className="py-6 sm:py-8">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-white p-7 sm:p-8">
            <h3 className="text-lg font-semibold text-ink">{t.heading}</h3>
            <ul className="mt-5 space-y-3">
              {t.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-2.5 text-sm leading-relaxed text-ink">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden />
                <span>
                  {t.legalPrefix}{" "}
                  {privacyLink && (
                    <Link href={localeHref(locale, privacyLink.href)} className="font-medium text-ink underline underline-offset-2">
                      {privacyLink.label}
                    </Link>
                  )}
                  {t.legalJoiner}
                  {termsLink && (
                    <Link href={localeHref(locale, termsLink.href)} className="font-medium text-ink underline underline-offset-2">
                      {termsLink.label}
                    </Link>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
