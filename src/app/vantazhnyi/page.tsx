import type { Metadata } from "next";
import { Truck, Tractor, Flame, Scissors } from "lucide-react";
import { Weight, Route, Building2, MapPin, Navigation } from "lucide-react";
import { TruckJsonLd } from "@/components/TruckJsonLd";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Advantages } from "@/components/Advantages";
import { PriceList } from "@/components/PriceList";
import { ServiceArea } from "@/components/ServiceArea";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { Contacts } from "@/components/Contacts";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import {
  site,
  truckPage,
  truckServices,
  truckAdvantages,
  truckPriceTables,
  truckServiceAreaRegions,
  truckFaq,
} from "@/lib/site-data";

const serviceIcons = [Truck, Tractor, Flame, Scissors];
const advantageIcons = [Weight, Route, Building2];

const serviceAreaPoints = [
  {
    icon: MapPin,
    title: "5 областей",
    description: "Хмельницька та суміжні - Тернопільська, Вінницька, Рівненська, Житомирська.",
  },
  {
    icon: Navigation,
    title: "Траси та поля",
    description: "Виїжджаємо на траси, бази й безпосередньо в поле до техніки.",
  },
  {
    icon: Truck,
    title: "Найближча бригада",
    description: "Направляємо мобільну бригаду, найближчу до вашої локації.",
  },
];

export const metadata: Metadata = {
  title: truckPage.title,
  description: truckPage.description,
  alternates: { canonical: truckPage.path },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: `${site.url}${truckPage.path}`,
    siteName: site.name,
    title: truckPage.title,
    description: truckPage.description,
    images: [{ url: "/hero-banner-truck.jpg", width: 2976, height: 1440, alt: truckPage.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: truckPage.title,
    description: truckPage.description,
    images: ["/hero-banner-truck.jpg"],
  },
};

export default function TruckTirePage() {
  return (
    <>
      <TruckJsonLd />
      <Header />
      <main>
        <Hero
          imageSrc="/hero-banner-truck.jpg"
          imageAlt="Майстер TSK mobile міняє колесо фури вночі на трасі, поруч фірмовий сервісний фургон"
          eyebrow={`${site.workHours} · Хмельницький та область`}
          title={truckPage.heroTitle}
          subtitle={truckPage.heroSubtitle}
        />
        <Services
          eyebrow="Вантажний шиномонтаж"
          title="Обслуговування вантажного та спецтранспорту з виїздом"
          description="Виконуємо шиномонтажні роботи для фур, тракторів і спецтехніки прямо на трасі, базі чи в полі."
          items={truckServices}
          icons={serviceIcons}
        />
        <Advantages
          eyebrow="Переваги"
          title="Чому автопарки обирають TSK mobile"
          items={truckAdvantages}
          icons={advantageIcons}
        />
        <PriceList
          eyebrow="Ціни"
          title="Ціни на вантажний шиномонтаж"
          description="Точна вартість залежить від типу техніки та складності робіт."
          tables={truckPriceTables}
        />
        <ServiceArea
          eyebrow="Зона обслуговування"
          title="Виїжджаємо по Хмельницькій та суміжних областях"
          points={serviceAreaPoints}
          showPricing={false}
          primaryLabel="Вантажний шиномонтаж виконуємо в цих областях:"
          primaryList={truckServiceAreaRegions}
          secondaryList={[]}
        />
        <Reviews />
        <Faq title="Часті запитання про вантажний шиномонтаж" items={truckFaq} />
        <Contacts />
        <CtaBanner />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
