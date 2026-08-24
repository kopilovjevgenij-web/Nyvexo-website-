export const SITE = {
  name: "Nyvexo",
  tagline: "Websites. Automation. AI.",
  legalName: "Nyvexo",
  url: "https://nyvexo.lv",
  email: "jevgenij@nyvexo.lv",
  phone: "+371 28106463",
  phoneHref: "+37128106463",
  social: {
    instagram: "https://instagram.com/nyvexo",
    facebook: "https://facebook.com/nyvexo",
    linkedin: "https://linkedin.com/company/nyvexo",
  },
} as const;

export const LOCALES = ["lv", "en", "ru"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "lv";

export const LOCALE_LABELS: Record<Locale, string> = {
  lv: "LV",
  en: "EN",
  ru: "RU",
};
