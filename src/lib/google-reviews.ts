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

/**
 * Fetches live reviews for the business from the Google Places API (Place Details, legacy endpoint).
 * Requires GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID env vars — returns null when either is missing
 * or the request fails, so callers can fall back to static example reviews.
 *
 * Google's Places API returns at most 5 of the "most relevant" reviews per request — there is no way
 * to fetch the full review history through this API.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsResult | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) return null;

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "reviews,rating,user_ratings_total");
  url.searchParams.set("language", "uk");
  url.searchParams.set("key", apiKey);

  try {
    const res = await fetch(url.toString(), {
      // Revalidate periodically instead of caching indefinitely, per Google's ToS on displaying fresh data.
      next: { revalidate: 60 * 60 * 6 },
    });
    if (!res.ok) return null;

    const data = await res.json();
    if (data.status !== "OK" || !data.result) return null;

    const rawReviews: Array<{
      author_name: string;
      rating: number;
      text: string;
      relative_time_description: string;
    }> = data.result.reviews ?? [];

    return {
      reviews: rawReviews.slice(0, 3).map((r) => ({
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        relativeTime: r.relative_time_description,
      })),
      rating: data.result.rating ?? 0,
      totalReviews: data.result.user_ratings_total ?? 0,
    };
  } catch {
    return null;
  }
}
