import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import type { Locale } from "@/lib/constants";

/**
 * INACTIVE — not imported by app/[locale]/page.tsx.
 *
 * Do not enable with the data below: these are placeholder names/quotes,
 * not real customers. Publishing fabricated reviews is a consumer-protection
 * violation (EU / Latvia) and a reputational risk. Before activating this
 * section, replace `MOCK_TESTIMONIALS` with verified real submissions and
 * remove this notice.
 */
const MOCK_TESTIMONIALS: Record<
  Locale,
  { name: string; role: string; quote: string; rating: number }[]
> = {
  ru: [
    { name: "Имя Фамилия (заглушка)", role: "Должность, компания", quote: "Текст отзыва-заглушки.", rating: 5 },
    { name: "Имя Фамилия (заглушка)", role: "Должность, компания", quote: "Текст отзыва-заглушки.", rating: 5 },
    { name: "Имя Фамилия (заглушка)", role: "Должность, компания", quote: "Текст отзыва-заглушки.", rating: 5 },
  ],
  lv: [
    { name: "Vārds Uzvārds (aizpildvieta)", role: "Amats, uzņēmums", quote: "Aizpildījuma atsauksmes teksts.", rating: 5 },
    { name: "Vārds Uzvārds (aizpildvieta)", role: "Amats, uzņēmums", quote: "Aizpildījuma atsauksmes teksts.", rating: 5 },
    { name: "Vārds Uzvārds (aizpildvieta)", role: "Amats, uzņēmums", quote: "Aizpildījuma atsauksmes teksts.", rating: 5 },
  ],
  en: [
    { name: "Placeholder Name", role: "Role, company", quote: "Placeholder review text.", rating: 5 },
    { name: "Placeholder Name", role: "Role, company", quote: "Placeholder review text.", rating: 5 },
    { name: "Placeholder Name", role: "Role, company", quote: "Placeholder review text.", rating: 5 },
  ],
};

const HEADING: Record<Locale, { eyebrow: string; title: string }> = {
  ru: { eyebrow: "Отзывы", title: "Что говорят клиенты" },
  lv: { eyebrow: "Atsauksmes", title: "Ko saka klienti" },
  en: { eyebrow: "Testimonials", title: "What clients say" },
};

export function Testimonials({ locale }: { locale: Locale }) {
  const t = HEADING[locale];
  const items = MOCK_TESTIMONIALS[locale];

  return (
    <section className="bg-mist py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} align="center" className="mx-auto" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={i} delay={i * 90}>
              <Card className="h-full">
                <div className="flex gap-0.5 text-blue">
                  {Array.from({ length: item.rating }).map((_, star) => (
                    <Star key={star} className="size-4 fill-current" aria-hidden />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-ink">{item.name}</p>
                <p className="text-xs text-ink-soft">{item.role}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
