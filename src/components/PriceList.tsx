"use client";

import { useState } from "react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { PhoneCta } from "./PhoneCta";
import { priceTables } from "@/lib/site-data";

export function PriceList() {
  const [active, setActive] = useState(priceTables[0].id);
  const table = priceTables.find((t) => t.id === active) ?? priceTables[0];

  return (
    <section id="prices" className="py-16 sm:py-24 border-b border-border bg-surface/40">
      <Container>
        <SectionHeading
          eyebrow="Ціни"
          title="Актуальні ціни на послуги"
          description="Остаточна вартість послуг залежить від конкретної ситуації — уточнюйте деталі за телефоном."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {priceTables.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors border ${
                active === t.id
                  ? "bg-accent text-accent-foreground border-accent"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full min-w-[480px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-surface text-left text-muted">
                {table.columns.map((col) => (
                  <th key={col} className="px-5 py-3 font-semibold">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, i) => (
                <tr key={i} className="border-b border-border last:border-0 odd:bg-surface/30">
                  {table.columns.map((col) => (
                    <td key={col} className="px-5 py-3 text-foreground">
                      {row[col]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {table.note && <p className="mt-3 text-xs text-muted">{table.note}</p>}

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-border bg-background p-6">
          <p className="text-sm text-muted">
            Не знайшли потрібну послугу в прайсі? Зателефонуйте — озвучимо точну вартість для вашого
            авто.
          </p>
          <PhoneCta className="shrink-0" />
        </div>
      </Container>
    </section>
  );
}
