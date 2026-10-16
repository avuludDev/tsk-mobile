import type { LucideIcon } from "lucide-react";
import { Layers, Wallet, Truck } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { PhoneCta } from "./PhoneCta";
import type { TireOffer } from "@/lib/site-data";

const defaultIcons = [Layers, Wallet, Truck];

export function NewTires({
  id = "new-tires",
  offer,
  icons = defaultIcons,
}: {
  id?: string;
  offer: TireOffer;
  icons?: LucideIcon[];
}) {
  return (
    <section id={id} className="py-16 sm:py-24 border-b border-border">
      <Container>
        <SectionHeading eyebrow={offer.eyebrow} title={offer.title} description={offer.description} />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {offer.points.map((point, i) => {
            const Icon = icons[i];
            // Вибір і ціна - головні аргументи блоку, тому виділені акцентом
            const highlighted = i < 2;
            return (
              <div
                key={point.title}
                className={`rounded-2xl border p-6 ${
                  highlighted ? "border-accent/40 bg-accent/10" : "border-border bg-surface"
                }`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{point.title}</h3>
                <p className="mt-2 text-sm text-muted">{point.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-foreground font-semibold">{offer.cta}</p>
          <PhoneCta label="Підібрати шини" className="shrink-0" />
        </div>
      </Container>
    </section>
  );
}
