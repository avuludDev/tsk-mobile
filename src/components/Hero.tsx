import Image from "next/image";
import { Clock, ShieldCheck, MapPinned } from "lucide-react";
import { Container } from "./Container";
import { PhoneCta } from "./PhoneCta";
import { site } from "@/lib/site-data";

const badges = [
  { icon: Clock, label: "Приїзд за 30–60 хв" },
  { icon: ShieldCheck, label: "Гарантія на роботи" },
  { icon: MapPinned, label: "Місто й область" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <Image
          src="/hero-banner.jpg"
          alt="Мобільна бригада TSK mobile виконує шиномонтаж на виїзді вночі"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>
      <Container className="relative py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted">
            {site.workHours} · {site.legalCity} та область
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
            Мобільний шиномонтаж у Хмельницькому 24/7
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl">
            Приїжджаємо за 30–60 хвилин у будь-яку точку Хмельницького та області. Шиномонтаж,
            ремонт і заміна шин прямо біля вашого авто — без черг і поїздок на СТО.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <PhoneCta variant="solid" className="text-base" />
            <PhoneCta variant="outline" label={site.phoneDisplay} className="text-base" />
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted">
                <Icon className="h-4 w-4 text-accent" aria-hidden />
                {label}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
