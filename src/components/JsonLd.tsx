import { site, faq } from "@/lib/site-data";
import { getGoogleReviews } from "@/lib/google-reviews";

export async function JsonLd() {
  const live = await getGoogleReviews();

  const business: Record<string, unknown> = {
    "@type": "AutoRepair",
    "@id": `${site.url}/#business`,
    name: site.gbpName,
    alternateName: site.name,
    image: `${site.url}/logo.png`,
    url: site.url,
    telephone: `+${site.phoneRaw}`,
    priceRange: "₴₴",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressShort,
      addressLocality: site.legalCity,
      addressRegion: site.region,
      addressCountry: "UA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: [
      { "@type": "City", name: "Хмельницький" },
      { "@type": "AdministrativeArea", name: "Хмельницька область" },
    ],
    makesOffer: [
      { "@type": "Offer", name: "Виїзд по місту", priceCurrency: "UAH", price: "500" },
      { "@type": "Offer", name: "Шиномонтаж (1 колесо)", priceCurrency: "UAH", price: "300" },
      { "@type": "Offer", name: "Ремонт шин", priceCurrency: "UAH", price: "450" },
      { "@type": "Offer", name: "Аргонно-дугове зварювання дисків", priceCurrency: "UAH", price: "600" },
      { "@type": "Offer", name: "Рихтування дисків", priceCurrency: "UAH", price: "300" },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [site.instagram],
  };

  // Google's Review Snippet guidelines require aggregateRating to reflect real, visible
  // reviews — only attach it when live Google data is available, never a stale placeholder,
  // so it always matches the rating shown in the Reviews section (same fetch, deduped by Next.js).
  if (live && live.totalReviews > 0) {
    business.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: live.rating,
      reviewCount: live.totalReviews,
    };
  }

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const data = {
    "@context": "https://schema.org",
    "@graph": [business, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
