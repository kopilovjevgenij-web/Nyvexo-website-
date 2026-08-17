// Demo / concept cases only — no real clients or numbers are implied.
// Replace with verified client work once available; keep the `status` field
// so the UI can distinguish real cases from concept demos automatically.
export type CaseStudy = {
  title: string;
  industry: string;
  description: string;
  tags: string[];
  status: "concept";
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Restaurant AI Assistant",
    industry: "Restaurants",
    description:
      "AI-ассистент принимает бронирования в Instagram и WhatsApp, проверяет доступность столиков и подтверждает бронь без участия администратора.",
    tags: ["AI-чат-бот", "Instagram", "WhatsApp", "Бронирование"],
    status: "concept",
  },
  {
    title: "Dental Clinic Automation",
    industry: "Clinics",
    description:
      "Voice AI принимает звонки, записывает пациентов на приём и напоминает о визите, а данные автоматически попадают в CRM клиники.",
    tags: ["Voice AI", "CRM", "Напоминания", "Календарь"],
    status: "concept",
  },
  {
    title: "Real Estate Lead Automation",
    industry: "Real Estate",
    description:
      "Заявки с сайта и соцсетей автоматически квалифицируются, распределяются между менеджерами и получают follow-up без ручной работы.",
    tags: ["Автоматизация", "CRM", "Lead-квалификация"],
    status: "concept",
  },
  {
    title: "Business Website + AI",
    industry: "Professional Services",
    description:
      "Корпоративный сайт с формами заявок, интеграцией CRM и AI-чат-ботом, который консультирует посетителей и собирает контакты 24/7.",
    tags: ["Сайт", "AI-чат-бот", "CRM"],
    status: "concept",
  },
];
