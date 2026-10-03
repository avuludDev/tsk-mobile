import Image from "next/image";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export type GalleryImage = {
  url: string;
  alt: string;
  caption: string;
};

export function Gallery({
  id = "gallery",
  eyebrow = "Наші роботи",
  title,
  description,
  images,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  images: GalleryImage[];
}) {
  return (
    <section id={id} className="py-16 sm:py-24 border-b border-border">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <figure
              key={image.url}
              className="overflow-hidden rounded-2xl border border-border bg-surface"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-4 text-sm text-muted">{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
