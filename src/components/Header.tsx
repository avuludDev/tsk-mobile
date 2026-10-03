"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "./Container";
import { PhoneCta, PhoneNumber } from "./PhoneCta";
import { VehicleTypeSwitch } from "./VehicleTypeSwitch";
import { navLinks, resolveNavHref, site } from "@/lib/site-data";

export function Header() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const primaryLinks = navLinks.filter((link) => !link.secondary);
  const secondaryLinks = navLinks.filter((link) => link.secondary);

  // Закриваємо "Ще" при кліку поза меню або по Escape
  useEffect(() => {
    if (!moreOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!moreRef.current?.contains(e.target as Node)) setMoreOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [moreOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
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
          {primaryLinks.map((link) => (
            <a
              key={link.href}
              href={resolveNavHref(link, pathname)}
              className="whitespace-nowrap text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.shortLabel ?? link.label}
            </a>
          ))}
          <div
            ref={moreRef}
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={moreOpen}
              // Лише відкриває: мишкою меню вже відкрилось наведенням, і перемикання закрило б його.
              // Закривається відведенням курсора, кліком поза меню або Escape.
              onClick={() => setMoreOpen(true)}
              className="flex items-center gap-1 whitespace-nowrap text-sm text-muted hover:text-foreground transition-colors"
            >
              Ще
              <ChevronDown className={`h-4 w-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} aria-hidden />
            </button>
            {/* pt-3 - "місток" між кнопкою і меню, щоб воно не закривалось, поки курсор переходить */}
            <div className={`absolute right-0 top-full pt-3 ${moreOpen ? "block" : "hidden"}`}>
              <div className="min-w-52 rounded-xl border border-border bg-background p-1.5 shadow-lg">
                {secondaryLinks.map((link) => (
                  <a
                    key={link.href}
                    href={resolveNavHref(link, pathname)}
                    onClick={() => setMoreOpen(false)}
                    className="block whitespace-nowrap rounded-lg px-3 py-2 text-sm text-muted hover:bg-surface hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
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
