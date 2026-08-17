"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquareHeart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const hasTestimonials = testimonials.length > 0;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Отзывы" title="Что говорят клиенты" align="center" className="mx-auto" />

        <div className="mt-14">
          {hasTestimonials ? (
            <Reveal className="mx-auto max-w-2xl">
              <div className="rounded-3xl border border-line bg-white p-8 text-center sm:p-10">
                <div className="mb-4 flex justify-center gap-1">
                  {Array.from({ length: testimonials[index].rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-blue text-blue" aria-hidden />
                  ))}
                </div>
                <p className="text-balance text-lg leading-relaxed text-ink">
                  &ldquo;{testimonials[index].text}&rdquo;
                </p>
                <p className="mt-6 text-sm font-semibold text-ink">{testimonials[index].name}</p>
                <p className="text-sm text-ink-soft">
                  {testimonials[index].position}, {testimonials[index].company}
                </p>

                {testimonials.length > 1 && (
                  <div className="mt-6 flex justify-center gap-3">
                    <button
                      onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                      className="flex size-9 items-center justify-center rounded-full border border-line-strong text-ink-soft hover:bg-mist"
                      aria-label="Предыдущий отзыв"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    <button
                      onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                      className="flex size-9 items-center justify-center rounded-full border border-line-strong text-ink-soft hover:bg-mist"
                      aria-label="Следующий отзыв"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                )}
              </div>
            </Reveal>
          ) : (
            <Reveal className="mx-auto max-w-md">
              <div className="flex flex-col items-center rounded-3xl border border-dashed border-line-strong bg-mist p-10 text-center">
                <MessageSquareHeart className="size-8 text-ink-soft" aria-hidden />
                <p className="mt-4 text-base font-medium text-ink-soft">
                  Отзывы клиентов появятся здесь
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
