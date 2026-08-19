import { Star } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { reviews } from "@/lib/site-data";

export function Reviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 border-b border-border bg-surface/40">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading eyebrow="Відгуки" title="Нам довіряють водії" />
          <div className="flex items-center gap-2 shrink-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden />
            ))}
            <span className="text-sm text-muted">4.9 з 5</span>
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-2xl border border-border bg-background p-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted">&laquo;{review.text}&raquo;</p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                {review.name} <span className="font-normal text-muted">· {review.car}</span>
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
