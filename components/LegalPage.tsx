import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function LegalPage({
  title,
  updated,
  updatedLabel,
  disclaimer,
  sections,
}: {
  title: string;
  updated: string;
  updatedLabel: string;
  disclaimer: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <article className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-ink-soft">
          {updatedLabel} {updated}
        </p>

        <div className="mt-6 flex gap-3 rounded-2xl border border-blue-soft-line bg-blue-soft p-4 text-sm leading-relaxed text-ink">
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden />
          <p>{disclaimer}</p>
        </div>

        <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-display prose-headings:font-semibold prose-a:text-blue">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.length > 1 ? (
                <ul>
                  {section.body.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.body[0]}</p>
              )}
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
