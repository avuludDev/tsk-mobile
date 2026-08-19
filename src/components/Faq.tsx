import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { faq } from "@/lib/site-data";

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24 border-b border-border">
      <Container>
        <SectionHeading eyebrow="Питання" title="Часті запитання" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {faq.map((item) => (
            <div key={item.question} className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="font-bold text-foreground">{item.question}</h3>
              <p className="mt-2 text-sm text-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
