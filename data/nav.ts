export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: "Решения", href: "#value" },
  { label: "Услуги", href: "#services" },
  { label: "Для бизнеса", href: "#industries" },
  { label: "Как работаем", href: "#how-it-works" },
  { label: "Кейсы", href: "#cases" },
  { label: "FAQ", href: "#faq" },
];

export const footerNav = {
  solutions: [
    { label: "Сайты для бизнеса", href: "#services" },
    { label: "Автоматизация бизнеса", href: "#services" },
    { label: "AI-чат-боты", href: "#services" },
    { label: "AI-голосовые агенты", href: "#services" },
  ],
  company: [
    { label: "Как работаем", href: "#how-it-works" },
    { label: "Кейсы", href: "#cases" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};
