import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Advantages } from "@/components/Advantages";
import { HowItWorks } from "@/components/HowItWorks";
import { PriceList } from "@/components/PriceList";
import { ServiceArea } from "@/components/ServiceArea";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { Contacts } from "@/components/Contacts";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Advantages />
        <HowItWorks />
        <PriceList />
        <ServiceArea />
        <Reviews />
        <Faq />
        <Contacts />
        <CtaBanner />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
