import { site, truckPage, truckServiceAreaRegions, truckFaq } from "@/lib/site-data";

export function TruckJsonLd() {
  const service = {
    "@type": "Service",
    "@id": `${site.url}${truckPage.path}#service`,
    name: "Вантажний виїзний шиномонтаж TIR",
    serviceType: "Вантажний шиномонтаж, ремонт шин трактора, виїзний шиномонтаж TIR",
    description: truckPage.description,
    url: `${site.url}${truckPage.path}`,
    provider: {
      "@type": "AutoRepair",
      "@id": `${site.url}/#business`,
      name: site.gbpName,
      alternateName: site.name,
      telephone: `+${site.phoneRaw}`,
      url: site.url,
    },
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
