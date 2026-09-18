"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, Truck } from "lucide-react";
import { truckPage } from "@/lib/site-data";

const options = [
  { href: "/", label: "Легковий", icon: Car },
  { href: truckPage.path, label: "Вантажний", icon: Truck },
] as const;

export function VehicleTypeSwitch({
  iconOnly = false,
  className = "",
}: {
  iconOnly?: boolean;
  className?: string;
}) {
  const pathname = usePathname();
  const isTruck = pathname.startsWith(truckPage.path);

  return (
    <div
      role="group"
      aria-label="Тип транспорту"
      className={`inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1 ${className}`}
    >
      {options.map(({ href, label, icon: Icon }) => {
        const active = href === "/" ? !isTruck : isTruck;
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            aria-label={label}
            title={label}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              active ? "bg-accent text-accent-foreground" : "text-muted hover:text-foreground"
            }`}
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden />
            {!iconOnly && <span>{label}</span>}
          </Link>
        );
      })}
    </div>
  );
}
