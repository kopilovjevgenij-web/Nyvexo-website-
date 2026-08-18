import "server-only";
import type { Dictionary } from "./types";
import type { Locale } from "@/lib/constants";

const loaders: Record<Locale, () => Promise<{ dictionary: Dictionary }>> = {
  lv: () => import("./dictionaries/lv"),
  en: () => import("./dictionaries/en"),
  ru: () => import("./dictionaries/ru"),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const mod = await loaders[locale]();
  return mod.dictionary;
}
