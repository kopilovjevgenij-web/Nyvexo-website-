import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { technologies } from "@/data/technology";

export function Technology() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Мы используем технологии как инструменты
          </h2>
          <p className="mt-3 text-sm text-ink-soft">
            SmartFlow не является официальным партнёром перечисленных сервисов — это
            технологии, которые мы умеем внедрять и связывать между собой.
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-mist px-4 py-2 text-sm font-medium text-ink-soft"
            >
              {tech}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
