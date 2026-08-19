import { site, faq } from "@/lib/site-data";

export function JsonLd() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
    "@type": "AutoRepair",
    name: site.gbpName,
    alternateName: site.name,
    image: `${site.url}/logo.png`,
    "@id": site.url,
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
      { "@type": "Offer", name: "Сезонна заміна шин", priceCurrency: "UAH", price: "850" },
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
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </>
  );
}
