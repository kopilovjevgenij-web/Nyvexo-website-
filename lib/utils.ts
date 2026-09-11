import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { MouseEvent } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Same-page hash links must scroll reliably every time, including repeat
 * clicks to a hash that's already active and clicks that travel a very
 * long distance (e.g. a footer link back up to the top of the page) —
 * both cases where the browser's native fragment-navigation scroll is
 * unreliable. Driving the scroll explicitly sidesteps that entirely.
 */
export function scrollToHash(e: MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;
  const el = document.getElementById(href.slice(1));
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  if (window.location.hash !== href) {
    window.history.pushState(null, "", href);
  }
}
