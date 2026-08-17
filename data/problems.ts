export type Problem = {
  icon: "repeat" | "clock" | "shuffle" | "monitor-x";
  title: string;
  description: string;
};

export const problems: Problem[] = [
  {
    icon: "repeat",
    title: "Слишком много ручной работы",
    description: "Сотрудники выполняют повторяющиеся действия вместо важных задач.",
  },
  {
    icon: "clock",
    title: "Клиенты ждут ответа",
    description: "Заявки и сообщения приходят вечером, ночью и в выходные.",
  },
  {
    icon: "shuffle",
    title: "Информация разбросана",
    description: "Instagram, WhatsApp, CRM, таблицы и календарь не связаны между собой.",
  },
  {
    icon: "monitor-x",
    title: "Сайт просто существует",
    description: "Сайт может выглядеть хорошо, но не помогать продавать или обслуживать клиентов.",
  },
];
