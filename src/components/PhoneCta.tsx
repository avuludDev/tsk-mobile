import { Phone } from "lucide-react";
import { site, telHref } from "@/lib/site-data";

export function PhoneCta({
  variant = "solid",
  className = "",
  label = "Замовити виїзд",
}: {
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  label?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm sm:text-base font-semibold transition-colors";
  const styles = {
    solid: "bg-accent text-accent-foreground hover:brightness-110",
    outline: "border border-border text-foreground hover:border-accent hover:text-accent",
    ghost: "text-foreground hover:text-accent",
  };

  return (
    <a href={telHref} className={`${base} ${styles[variant]} ${className}`}>
      <Phone className="h-4 w-4" aria-hidden />
      {label}
    </a>
  );
}

export function PhoneNumber({ className = "" }: { className?: string }) {
  return (
    <a
      href={telHref}
      className={`font-semibold tracking-wide text-foreground hover:text-accent transition-colors ${className}`}
    >
      {site.phoneDisplay}
    </a>
  );
}
