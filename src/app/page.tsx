import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Advantages } from "@/components/Advantages";
import { Gallery } from "@/components/Gallery";
import { SeoText } from "@/components/SeoText";
import { HowItWorks } from "@/components/HowItWorks";
import { PriceList } from "@/components/PriceList";
import { ServiceArea } from "@/components/ServiceArea";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { Contacts } from "@/components/Contacts";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";
import { homeGallery, homeSeoText } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <Gallery
          title="Мобільний шиномонтаж у роботі"
          description="Реальні виїзди нашої бригади - вдень і вночі, у місті та на трасі."
          images={homeGallery}
        />
        <HowItWorks />
        <PriceList />
        <ServiceArea />
        <Reviews />
        <SeoText eyebrow="Допомога на дорозі" block={homeSeoText} />
        <Faq />
        <Contacts />
        <CtaBanner />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
