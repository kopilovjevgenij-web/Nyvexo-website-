export type WhyItem = {
  icon: "target" | "layers" | "puzzle" | "message-square" | "trending-up" | "life-buoy";
  title: string;
  description: string;
};

export const whyItems: WhyItem[] = [
  {
    icon: "target",
    title: "Business-first",
    description: "Сначала понимаем бизнес-задачу, потом выбираем технологию.",
  },
  {
    icon: "layers",
    title: "One system",
    description: "Объединяем сайт, AI, CRM и автоматизацию в единую систему.",
  },
  {
    icon: "puzzle",
    title: "Custom",
    description: "Решение создаётся под конкретный процесс вашего бизнеса.",
  },
  {
    icon: "message-square",
    title: "Simple",
    description: "Сложные технологии объясняем простым, понятным языком.",
  },
  {
    icon: "trending-up",
    title: "Scalable",
    description: "Систему можно развивать вместе с ростом бизнеса.",
  },
  {
    icon: "life-buoy",
    title: "Support",
    description: "Помогаем и сопровождаем систему после запуска.",
  },
];
