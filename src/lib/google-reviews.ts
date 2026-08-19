import { site } from "./site-data";

export type GoogleReview = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
};

export type GoogleReviewsResult = {
  reviews: GoogleReview[];
  rating: number;
  totalReviews: number;
};

type PlacesApiReview = {
  rating: number;
  text?: { text: string; languageCode: string };
  relativePublishTimeDescription: string;
  authorAttribution?: { displayName: string };
};

type PlacesApiResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesApiReview[];
  error?: { code: number; message: string; status: string };
};

/**
 * Fetches live reviews for the business from the Places API (New) — Place Details.
 * Requires the GOOGLE_PLACES_API_KEY env var — returns null when it's missing or the request
 * fails, so callers can fall back to static example reviews.
 *
 * Google's Places API returns at most 5 of the "most relevant" reviews per request — there is no way
 * to fetch the full review history through this API.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsResult | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    console.error("[google-reviews] GOOGLE_PLACES_API_KEY env var is missing");
    return null;
  }

  const url = new URL(`https://places.googleapis.com/v1/places/${site.placeId}`);
  url.searchParams.set("languageCode", "uk");

  try {
    const res = await fetch(url.toString(), {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
      // Revalidate periodically instead of caching indefinitely, per Google's ToS on displaying fresh data.
      next: { revalidate: 60 * 60 * 6 },
    });

    const data: PlacesApiResponse = await res.json();

    if (!res.ok || data.error) {
      console.error(`[google-reviews] API error: ${data.error?.status ?? res.status} — ${data.error?.message ?? res.statusText}`);
      return null;
    }

    return {
      reviews: (data.reviews ?? []).slice(0, 3).map((r) => ({
        author: r.authorAttribution?.displayName ?? "Клієнт",
        rating: r.rating,
        text: r.text?.text ?? "",
        relativeTime: r.relativePublishTimeDescription,
      })),
      rating: data.rating ?? 0,
      totalReviews: data.userRatingCount ?? 0,
    };
  } catch (err) {
    console.error("[google-reviews] fetch failed:", err);
    return null;
  }
}
