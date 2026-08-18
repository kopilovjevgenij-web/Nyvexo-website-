import type { Locale } from "@/lib/constants";

// Builds a locale-prefixed internal path. Anchors (#services) and the
// contact form's absolute API route are left untouched.
export function localeHref(locale: Locale, path: string): string {
  if (path.startsWith("#")) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean === "/" ? "" : clean}`;
}
