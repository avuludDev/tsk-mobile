import { Phone } from "lucide-react";
import { telHref, site } from "@/lib/site-data";

export function MobileCallBar() {
  return (
    <a
      href={telHref}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-accent px-4 py-3.5 text-sm font-bold text-accent-foreground lg:hidden"
    >
      <Phone className="h-4 w-4" aria-hidden />
      Зателефонувати {site.phoneLocal}
    </a>
  );
}
