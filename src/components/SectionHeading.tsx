export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className="inline-block text-sm font-semibold tracking-wide text-accent uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{title}</h2>
      {description && <p className="mt-4 text-muted text-base sm:text-lg">{description}</p>}
    </div>
  );
}
