export type Industry = {
  icon: "utensils" | "stethoscope" | "sparkles" | "hotel" | "building-2" | "shopping-bag" | "briefcase";
  title: string;
  description: string;
};

export const industries: Industry[] = [
  {
    icon: "utensils",
    title: "Restaurants",
    description: "AI отвечает на вопросы, принимает заявки и помогает с бронированиями столиков.",
  },
  {
    icon: "stethoscope",
    title: "Clinics",
    description: "Запись на приём, консультации, напоминания и коммуникация с пациентами.",
  },
  {
    icon: "sparkles",
    title: "Beauty",
    description: "Запись клиентов, ответы на вопросы и автоматические напоминания о визите.",
  },
  {
    icon: "hotel",
    title: "Hotels",
    description: "Бронирования, ответы на частые вопросы, коммуникация с гостями до и после заезда.",
  },
  {
    icon: "building-2",
    title: "Real Estate",
    description: "Обработка заявок, квалификация клиентов и автоматический follow-up по объектам.",
  },
  {
    icon: "shopping-bag",
    title: "E-commerce",
    description: "Поддержка клиентов, ответы по товарам и заказам, обработка обращений.",
  },
  {
    icon: "briefcase",
    title: "Professional Services",
    description: "Сбор лидов, квалификация обращений и автоматизация коммуникации с клиентами.",
  },
];
