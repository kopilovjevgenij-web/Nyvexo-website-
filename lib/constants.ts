export const SITE = {
  name: "SmartFlow",
  tagline: "Websites. Automation. AI.",
  legalName: "SmartFlow",
  url: "https://smartflow.example.com",
  description:
    "SmartFlow создаёт сайты, автоматизирует бизнес-процессы и внедряет AI-чат-ботов и голосовых агентов для бизнеса.",
  locale: "ru",
  // Placeholder contact details — replace with real company details before launch.
  email: "hello@smartflow.example.com",
  phone: "+371 00 000 000",
  social: {
    instagram: "https://instagram.com/smartflow",
    facebook: "https://facebook.com/smartflow",
    linkedin: "https://linkedin.com/company/smartflow",
  },
} as const;

// Prepared for future locales — Russian ships first, EN/LV routes can be
// added under app/[locale] using this same data layer without touching components.
export const LOCALES = ["ru", "en", "lv"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ru";
