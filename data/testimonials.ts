// No fabricated testimonials — this array intentionally ships empty.
// Populate it with verified client quotes; the Testimonials section
// automatically switches from the placeholder state once entries exist.
export type Testimonial = {
  name: string;
  position: string;
  company: string;
  avatar: string;
  text: string;
  rating: number; // 1–5
};

export const testimonials: Testimonial[] = [];
