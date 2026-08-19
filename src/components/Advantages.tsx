import {
  LayoutGrid,
  Timer,
  Ban,
  ShieldCheck,
  Truck,
  Settings2,
  CreditCard,
  MapPin,
} from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { advantages } from "@/lib/site-data";

const icons = [LayoutGrid, Timer, Ban, ShieldCheck, Truck, Settings2, CreditCard, MapPin];

export function Advantages() {
  return (
    <section id="advantages" className="py-16 sm:py-24 border-b border-border bg-surface/40">
      <Container>
        <SectionHeading eyebrow="Переваги" title="Чому обирають TSK mobile" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="rounded-2xl border border-border bg-background p-6">
                <Icon className="h-5 w-5 text-accent" aria-hidden />
                <h3 className="mt-4 font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
