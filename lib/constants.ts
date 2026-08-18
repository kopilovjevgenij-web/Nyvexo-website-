export const SITE = {
  name: "SmartFlow",
  tagline: "Websites. Automation. AI.",
  legalName: "SmartFlow",
  url: "https://smart-flow-website.vercel.app",
  email: "kopilov.jevgenij@gmail.com",
  phone: "+371 28106463",
  phoneHref: "+37128106463",
  social: {
    instagram: "https://instagram.com/smartflow",
    facebook: "https://facebook.com/smartflow",
    linkedin: "https://linkedin.com/company/smartflow",
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
