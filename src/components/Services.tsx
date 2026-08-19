import { Wrench, Disc3, Flame, ShoppingBag, Check } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { services } from "@/lib/site-data";

const icons = [Wrench, Disc3, Flame, ShoppingBag];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 border-b border-border">
      <Container>
        <SectionHeading
          eyebrow="Послуги"
          title="Все необхідне для ваших коліс — з виїздом до вас"
          description="Виконуємо повний спектр шиномонтажних робіт на місці, без буксирування та черг на СТО."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-border bg-surface p-6 hover:border-accent/60 transition-colors"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
