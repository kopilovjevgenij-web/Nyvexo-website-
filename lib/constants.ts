export const SITE = {
  name: "Nyvexo",
  tagline: "Websites. Automation. AI.",
  legalName: "Nyvexo",
  // Domain intentionally left as-is: the smart-flow-website.vercel.app
  // deployment URL predates the rename and hasn't been re-pointed to a
  // Nyvexo domain yet — see rebrand notes.
  url: "https://smart-flow-website.vercel.app",
  email: "kopilov.jevgenij@gmail.com",
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
