import { Star } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { reviews as fallbackReviews, site } from "@/lib/site-data";
import { getGoogleReviews } from "@/lib/google-reviews";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < count ? "fill-accent text-accent" : "text-border"}`}
          aria-hidden
        />
      ))}
    </div>
  );
}

export async function Reviews() {
  const live = await getGoogleReviews();

  const cards = live
    ? live.reviews.map((r) => ({ name: r.author, subtitle: r.relativeTime, text: r.text, rating: r.rating }))
    : fallbackReviews.map((r) => ({ name: r.name, subtitle: r.car, text: r.text, rating: 5 }));

  const overallRating = live ? live.rating : 4.9;
  const ratingLabel = live ? `${live.rating.toFixed(1)} з 5 · ${live.totalReviews} відгуків` : "4.9 з 5";

  return (
    <section id="reviews" className="py-16 sm:py-24 border-b border-border bg-surface/40">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeading eyebrow="Відгуки" title="Нам довіряють водії" />
          <div className="flex flex-col items-start sm:items-end gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <Stars count={Math.round(overallRating)} />
              <span className="text-sm text-muted">{ratingLabel}</span>
            </div>
            <a
              href={`https://search.google.com/local/writereview?placeid=${site.placeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent hover:brightness-110 transition-[filter]"
            >
              Залишити відгук на Google →
            </a>
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {cards.map((review) => (
            <div key={review.name + review.text.slice(0, 20)} className="rounded-2xl border border-border bg-background p-6">
              <Stars count={review.rating} />
              <p className="mt-4 text-sm text-muted">&laquo;{review.text}&raquo;</p>
              <p className="mt-4 text-sm font-semibold text-foreground">
                {review.name} <span className="font-normal text-muted">· {review.subtitle}</span>
              </p>
            </div>
          ))}
        </div>
        {!live && (
          <p className="mt-6 text-xs text-muted">
            Приклади відгуків — підключіть Google Places API, щоб показувати реальні.
          </p>
        )}
      </Container>
    </section>
  );
}
