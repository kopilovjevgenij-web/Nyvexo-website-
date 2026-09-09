import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { SITE, type Locale } from "@/lib/constants";
import { localeHref } from "@/lib/i18n/paths";
import type { Dictionary } from "@/lib/i18n/types";

export function Footer({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const nav = dictionary.footer;

  return (
    <footer className="bg-ink text-white">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo variant="dark" />
            <p className="mt-4 max-w-xs text-sm font-medium text-white/50">{SITE.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{nav.solutionsHeading}</h3>
            <ul className="mt-4 space-y-3">
              {nav.solutions.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{nav.companyHeading}</h3>
            <ul className="mt-4 space-y-3">
              {nav.company.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">{nav.contactHeading}</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneHref}`}
                  className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-white/40">{nav.legalNotice}</p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()} {SITE.name}. {nav.rights}
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {nav.legal.map((item) => (
                <li key={item.label}>
                  <Link href={localeHref(locale, item.href)} className="text-xs text-white/50 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
