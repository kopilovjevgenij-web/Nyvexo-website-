export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Разбираемся",
    description: "Изучаем бизнес, цели и текущие процессы.",
  },
  {
    index: "02",
    title: "Находим возможности",
    description: "Определяем, что можно автоматизировать.",
  },
  {
    index: "03",
    title: "Создаём",
    description: "Разрабатываем сайт, AI-ассистента или систему автоматизации.",
  },
  {
    index: "04",
    title: "Запускаем",
    description: "Интегрируем, тестируем и запускаем в работу.",
  },
  {
    index: "05",
    title: "Поддерживаем",
    description: "При необходимости сопровождаем систему и развиваем её дальше.",
  },
];
