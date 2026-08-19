import { MapPin, Clock, Phone } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { PhoneCta, PhoneNumber } from "./PhoneCta";
import { site } from "@/lib/site-data";

export function Contacts() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  // With a Place ID the map pin is labeled with the actual business name instead of a bare coordinate marker.
  const mapQuery = placeId ? `place_id:${placeId}` : `${site.geo.lat},${site.geo.lng}`;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=16&output=embed`;
  const mapLink = `https://www.google.com/maps/place/?q=${encodeURIComponent(mapQuery)}`;

  return (
    <section id="contacts" className="py-16 sm:py-24 border-b border-border bg-surface/40">
      <Container>
        <SectionHeading eyebrow="Контакти" title="Диспетчерська служба TSK mobile" />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-background p-6 sm:p-8">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-sm text-muted">Адреса</p>
                  <p className="font-semibold text-foreground">{site.addressFull}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-sm text-muted">Телефон</p>
                  <PhoneNumber className="text-lg" />
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <div>
                  <p className="text-sm text-muted">Графік роботи</p>
                  <p className="font-semibold text-foreground">{site.workHours}</p>
                </div>
              </div>
            </div>
            <PhoneCta className="mt-8 w-full sm:w-fit" />
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-border">
            <iframe
              title={`Карта: ${site.addressFull}`}
              src={mapSrc}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 rounded-full bg-background/90 backdrop-blur px-4 py-2 text-xs font-semibold text-foreground border border-border hover:border-accent hover:text-accent transition-colors"
            >
              Відкрити в Google Maps
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
