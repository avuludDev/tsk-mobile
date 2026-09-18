"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { PhoneCta, PhoneNumber } from "./PhoneCta";
import { VehicleTypeSwitch } from "./VehicleTypeSwitch";
import { navLinks, resolveNavHref, site } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur xl:relative">
      <Container className="flex h-16 sm:h-20 items-center justify-between gap-4">
        <Link href="/#top" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo.png"
            alt="TSK mobile"
            width={543}
            height={188}
            className="h-9 sm:h-10 w-auto"
            priority
          />
          <span className="hidden sm:block text-[10px] font-semibold uppercase tracking-wide text-muted leading-tight max-w-[90px]">
            {site.tagline}
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-5 min-w-0">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveNavHref(link, pathname)}
              className="whitespace-nowrap text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.shortLabel ?? link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <PhoneNumber className="whitespace-nowrap" />
          <PhoneCta />
        </div>

        <div className="flex xl:hidden items-center gap-2 shrink-0">
          <VehicleTypeSwitch iconOnly />
          <button
            type="button"
            className="p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Закрити меню" : "Відкрити меню"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      <div className="hidden xl:block absolute right-[50px] border-t border-border">
        <Container className="flex justify-end py-1.5">
        <VehicleTypeSwitch />
        </Container>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={resolveNavHref(link, pathname)}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-foreground hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center justify-between px-3">
              <PhoneNumber />
            </div>
            <PhoneCta className="mt-3 w-full" />
          </Container>
        </div>
      )}
    </header>
  );
}
