import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/icons/icon-map";
import type { Locale } from "@/lib/constants";
import { localeHref } from "@/lib/i18n/paths";
import type { Dictionary } from "@/lib/i18n/types";

export function TrustSection({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const trust = dictionary.trustBadges;
  const why = dictionary.why;
  const cases = dictionary.cases;
  const termsLink = dictionary.footer.legal.find((item) => item.href === "/terms");
  const privacyLink = dictionary.footer.legal.find((item) => item.href === "/privacy-policy");

  return (
    <section className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={why.eyebrow} title={trust.heading} align="center" className="mx-auto" />

        {/* Legal transparency facts */}
        <Reveal delay={100} className="mt-14">
          <div className="mx-auto max-w-3xl rounded-3xl border border-line bg-white p-7 sm:p-8">
            <ul className="space-y-3">
              {trust.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-2.5 text-sm leading-relaxed text-ink">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden />
                <span>
                  {trust.legalPrefix}{" "}
                  {privacyLink && (
                    <Link href={localeHref(locale, privacyLink.href)} className="font-medium text-ink underline underline-offset-2">
                      {privacyLink.label}
                    </Link>
                  )}
                  {trust.legalJoiner}
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

        {/* Why choose Nyvexo */}
        <div className="mt-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h3 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{why.heading}</h3>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {why.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 90}>
                <div className="flex h-full gap-4 rounded-2xl border border-line bg-white p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                    <Icon name={item.icon} className="size-5" />
                  </span>
                  <div>
                    <h4 className="text-base font-semibold text-ink">{item.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Case studies */}
        <div id="cases" className="mt-16 scroll-mt-[4.5rem]">
          <SectionHeading eyebrow={cases.eyebrow} title={cases.heading} description={cases.subtitle} align="center" className="mx-auto" />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {cases.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-line bg-white p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue">{item.industry}</p>
                      <h4 className="mt-1.5 text-xl font-semibold text-ink">{item.title}</h4>
                    </div>
                    <Badge tone="neutral" className="shrink-0">
                      {cases.badge}
                    </Badge>
                  </div>

                  <dl className="mt-5 space-y-3">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-ink-soft">{cases.labels.problem}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-ink">{item.problem}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-ink-soft">{cases.labels.solution}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-ink">{item.solution}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-ink-soft">{cases.labels.automation}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-ink">{item.automation}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-[0.06em] text-ink-soft">{cases.labels.result}</dt>
                      <dd className="mt-1 text-sm font-medium leading-relaxed text-ink">{item.result}</dd>
                    </div>
                  </dl>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink-soft">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
