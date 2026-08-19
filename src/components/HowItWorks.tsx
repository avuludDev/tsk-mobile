import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { PhoneCta } from "./PhoneCta";
import { processSteps } from "@/lib/site-data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 border-b border-border">
      <Container>
        <SectionHeading eyebrow="Як працюємо" title="Лише 4 простих кроки" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.step} className="relative rounded-2xl border border-border bg-surface p-6">
              <span className="text-4xl font-extrabold text-accent/30">{step.step}</span>
              <h3 className="mt-3 font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <PhoneCta />
        </div>
      </Container>
    </section>
  );
}
