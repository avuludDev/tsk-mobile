import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import type { SeoTextBlock } from "@/lib/site-data";

export function SeoText({
  id = "about",
  eyebrow,
  block,
}: {
  id?: string;
  eyebrow: string;
  block: SeoTextBlock;
}) {
  return (
    <section id={id} className="py-16 sm:py-24 border-b border-border bg-surface/40">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={block.title} description={block.intro} />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {block.sections.map((section) => (
            <article key={section.heading} className="rounded-2xl border border-border bg-background p-6">
              <h3 className="font-bold text-foreground">{section.heading}</h3>
              <p className="mt-2 text-sm text-muted">{section.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
