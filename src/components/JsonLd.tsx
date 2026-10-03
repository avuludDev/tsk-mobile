import { site, faq, homeGallery } from "@/lib/site-data";

export function JsonLd() {
  // aggregateRating навмисно не додаємо: Google не показує зірки для рейтингу бізнесу
  // про самого себе, а відгуки з Google Maps (сторонні) в розмітці заборонені правилами.
  const business = {
    "@type": "AutoRepair",
    "@id": `${site.url}/#business`,
    name: site.gbpName,
    alternateName: site.name,
    // Логотип першим, далі реальні фото робіт з галереї
    image: [`${site.url}/logo.png`, ...homeGallery.map((image) => `${site.url}${image.url}`)],
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
