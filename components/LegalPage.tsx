import { AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <article className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-ink-soft">Последнее обновление: {updated}</p>

        <div className="mt-6 flex gap-3 rounded-2xl border border-blue-soft-line bg-blue-soft p-4 text-sm leading-relaxed text-ink">
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden />
          <p>
            Этот документ является шаблоном для сайта SmartFlow и приведён в ознакомительных
            целях. Перед публикацией и использованием в реальном бизнесе он должен быть
            проверен и адаптирован квалифицированным юристом с учётом применимого
            законодательства (включая GDPR) и юрисдикции компании.
          </p>
        </div>

        <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-display prose-headings:font-semibold prose-a:text-blue">
          {children}
        </div>
      </Container>
    </article>
  );
}
