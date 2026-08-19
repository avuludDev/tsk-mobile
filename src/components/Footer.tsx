import Image from "next/image";
import { Container } from "./Container";
import { PhoneNumber } from "./PhoneCta";
import { LegalLinks } from "./LegalLinks";
import { navLinks, site } from "@/lib/site-data";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="py-12">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <Image src="/logo.png" alt="TSK mobile" width={543} height={188} className="h-10 w-auto" />
            <p className="mt-3 max-w-xs text-sm text-muted">
              Мобільний шиномонтаж 24/7 у {site.legalCity} та області.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 sm:flex sm:flex-col">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-2 text-sm">
            <p className="text-muted">{site.addressFull}</p>
            <PhoneNumber />
            <p className="text-muted">{site.workHours}</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. Усі права захищено.
          </p>
          <div className="flex gap-4">
            <LegalLinks />
          </div>
        </div>
      </Container>
    </footer>
  );
}
