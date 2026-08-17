import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const before = ["Ручная работа", "Сообщения", "Таблицы", "Звонки", "Упущенные лиды", "Повторяющиеся задачи"];
const after = ["AI", "Автоматизация", "CRM", "Календарь", "Сайт", "Уведомления", "Коммуникация 24/7"];

export function ValueProposition() {
  return (
    <section id="value" className="bg-ink py-20 text-white sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Мы автоматизируем не технологии.
            <br />
            Мы автоматизируем <span className="text-blue">бизнес</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal delay={100} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Before</p>
            <ul className="flex flex-wrap gap-2">
              {before.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 px-3.5 py-1.5 text-sm text-white/60"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="flex items-center justify-center gap-3 py-2 lg:flex-col lg:py-0">
            <ArrowRight className="size-5 text-white/30 lg:-rotate-0" aria-hidden />
            <span className="rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white">
              SmartFlow
            </span>
            <ArrowRight className="size-5 text-white/30" aria-hidden />
          </Reveal>

          <Reveal delay={300} className="rounded-2xl border border-blue-soft-line/30 bg-blue/[0.08] p-6 sm:p-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-soft/90">After</p>
            <ul className="flex flex-wrap gap-2">
              {after.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-white"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={380}>
          <p className="mx-auto mt-16 max-w-2xl text-balance text-center text-xl font-medium text-white/90 sm:text-2xl">
            Вы не покупаете ещё один инструмент. Вы получаете систему, которая выполняет
            работу за вас.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
