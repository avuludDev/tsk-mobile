import { site, truckPage, truckServiceAreaRegions, truckFaq } from "@/lib/site-data";
import { getGoogleReviews } from "@/lib/google-reviews";

export async function TruckJsonLd() {
  const live = await getGoogleReviews();

  const provider: Record<string, unknown> = {
    "@type": "AutoRepair",
    "@id": `${site.url}/#business`,
    name: site.gbpName,
    alternateName: site.name,
    telephone: `+${site.phoneRaw}`,
    url: site.url,
  };

  // Ті самі живі відгуки Google, що й на головній (Reviews.tsx) — блок відгуків тепер
  // дубльовано і на цій сторінці, бо це загальна оцінка сервісу, а не конкретно вантажних робіт.
  if (live && live.totalReviews > 0) {
    provider.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: live.rating,
      reviewCount: live.totalReviews,
    };
  }

  const service = {
    "@type": "Service",
    "@id": `${site.url}${truckPage.path}#service`,
    name: "Мобільний вантажний шиномонтаж TIR",
    serviceType: "Вантажний шиномонтаж, ремонт шин трактора, виїзний шиномонтаж TIR",
    description: truckPage.description,
    url: `${site.url}${truckPage.path}`,
    provider,
    areaServed: [
      { "@type": "City", name: "Хмельницький" },
      ...truckServiceAreaRegions.map((name) => ({ "@type": "AdministrativeArea", name })),
    ],
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${site.url}${truckPage.path}#faq`,
    mainEntity: truckFaq.map((item) => ({
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
    "@graph": [service, faqPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
