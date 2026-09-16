"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/lib/constants";
import type { Dictionary } from "@/lib/i18n/types";
import { cn, scrollToHash } from "@/lib/utils";

function switchLocaleHref(pathname: string, target: Locale) {
  const segments = pathname.split("/");
  segments[1] = target;
  const path = segments.join("/") || `/${target}`;
  return typeof window !== "undefined" ? `${path}${window.location.hash}` : path;
}

function LanguageSwitcher({ locale, className }: { locale: Locale; className?: string }) {
  const pathname = usePathname();

  return (
    <div className={cn("flex items-center gap-0.5 rounded-full border border-line-strong p-0.5", className)}>
      {LOCALES.map((loc) => (
        <Link
          key={loc}
          href={switchLocaleHref(pathname, loc)}
          aria-current={loc === locale ? "true" : undefined}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors",
            loc === locale ? "bg-ink text-white" : "text-ink-soft hover:text-ink"
          )}
        >
          {LOCALE_LABELS[loc]}
        </Link>
      ))}
    </div>
  );
}

export function Header({ dictionary, locale }: { dictionary: Dictionary; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-white/85 backdrop-blur-md"
          : "border-b border-transparent bg-white/0"
      )}
    >
      <Container className="flex h-[4.5rem] items-center justify-between py-4">
        <Link href={`/${locale}`} onClick={() => setOpen(false)} aria-label="Nyvexo">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {dictionary.nav.links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToHash(e, item.href)}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Button href="#contact" size="md">
            {dictionary.nav.cta}
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong text-ink"
            aria-label={open ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-line bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {dictionary.nav.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  setOpen(false);
                  scrollToHash(e, item.href);
                }}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-mist"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between gap-4 border-t border-line px-3 pt-4">
              <LanguageSwitcher locale={locale} />
              <Button href="#contact" size="md" onClick={() => setOpen(false)}>
                {dictionary.nav.cta}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
