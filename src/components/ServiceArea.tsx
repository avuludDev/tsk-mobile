import { MapPin, Navigation, Truck } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { serviceAreaDistricts, serviceAreaTowns } from "@/lib/site-data";

const points = [
  { icon: MapPin, title: "Весь Хмельницький", description: "Виїжджаємо в усі райони міста." },
  { icon: Navigation, title: "Виїзд по області", description: "Обслуговуємо населені пункти Хмельницької області." },
  { icon: Truck, title: "Найближча бригада", description: "Направляємо мобільну бригаду, найближчу до вашого місця." },
];

export function ServiceArea() {
  return (
    <section id="service-area" className="py-16 sm:py-24 border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Зона обслуговування"
          title="Працюємо по всьому Хмельницькому та області"
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="grid gap-4 sm:grid-cols-3">
              {points.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-border bg-surface p-5">
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                  <h3 className="mt-3 font-bold text-sm text-foreground">{title}</h3>
                  <p className="mt-1 text-xs text-muted">{description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-surface p-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted">Виїзд по місту</span>
                <span className="font-semibold text-foreground">від 500 грн</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-muted">Заміський тариф</span>
                <span className="font-semibold text-foreground">40 грн/км</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted mb-4">
              Виїжджаємо в усі райони Хмельницького, а також на об&apos;їзну дорогу й траси області:
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreaDistricts.map((district) => (
                <span
                  key={district}
                  className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted"
                >
                  {district}
                </span>
              ))}
            </div>

            <p className="text-sm text-muted mt-6 mb-4">
              Приймаємо заявки з наступних населених пунктів Хмельницької області:
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreaTowns.map((town) => (
                <span
                  key={town}
                  className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted"
                >
                  {town}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
