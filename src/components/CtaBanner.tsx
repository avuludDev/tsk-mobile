import { Container } from "./Container";
import { PhoneCta } from "./PhoneCta";
import { site } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-20 border-b border-border">
      <Container>
        <div className="rounded-3xl bg-accent-2 px-6 py-12 sm:px-12 sm:py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-accent-2-foreground">
            Потрібна допомога прямо зараз?
          </h2>
          <p className="mt-3 text-accent-2-foreground">
            Виїжджаємо по всьому {site.legalCity} та області — {site.workHours.toLowerCase()}.
          </p>
          <div className="mt-8 flex justify-center">
            <PhoneCta
              variant="outline"
              className="!bg-accent-2-foreground !text-accent-2 !border-transparent"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
