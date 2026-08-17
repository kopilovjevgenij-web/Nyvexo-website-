import { Container } from "@/components/ui/Container";
import { integrations } from "@/data/technology";

export function TrustStrip() {
  const loop = [...integrations, ...integrations];

  return (
    <section className="border-y border-line bg-mist py-10">
      <Container>
        <p className="mb-6 text-center text-sm font-medium text-ink-soft">
          Цифровые решения, которые работают вместе
        </p>
      </Container>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 motion-reduce:animate-none">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="flex items-center rounded-full border border-line-strong bg-white px-5 py-2.5 text-sm font-medium text-ink-soft"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
