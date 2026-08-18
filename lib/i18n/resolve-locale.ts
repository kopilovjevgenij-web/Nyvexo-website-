import { notFound } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/constants";

// Next.js's typed-route validator requires dynamic segment params to be typed
// as plain `string`, so [locale] pages accept `{ locale: string }` and
// narrow it to `Locale` here — 404s on anything outside LOCALES.
export function resolveLocale(locale: string): Locale {
  if (!LOCALES.includes(locale as Locale)) notFound();
  return locale as Locale;
}
