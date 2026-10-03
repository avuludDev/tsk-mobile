import Image from "next/image";
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
  const cards = block.sections.map((section) => (
    <article key={section.heading} className="rounded-2xl border border-border bg-background p-6">
      <h3 className="font-bold text-foreground">{section.heading}</h3>
      <p className="mt-2 text-sm text-muted">{section.text}</p>
    </article>
  ));

  return (
    <section id={id} className="py-16 sm:py-24 border-b border-border bg-surface/40">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={block.title} description={block.intro} />
        {block.image ? (
          // З фото: картки колонкою зліва, фото на всю висоту блоку справа (на мобільному - під картками)
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            <div className="grid gap-4 lg:col-span-3">{cards}</div>
            <figure className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background lg:col-span-2">
              <div className="relative aspect-[3/4] lg:aspect-auto lg:flex-1">
                <Image
                  src={block.image.url}
                  alt={block.image.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-4 text-sm text-muted">{block.image.caption}</figcaption>
            </figure>
          </div>
        ) : (
          <div className="mt-12 grid gap-4 sm:grid-cols-2">{cards}</div>
        )}
      </Container>
    </section>
  );
}
