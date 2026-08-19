"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { LegalKey } from "@/lib/legal-content";
import { legalContent } from "@/lib/legal-content";

export function LegalModal({ openKey, onClose }: { openKey: LegalKey | null; onClose: () => void }) {
  useEffect(() => {
    if (!openKey) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openKey, onClose]);

  if (!openKey) return null;

  const content = legalContent[openKey];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <button
        type="button"
        aria-label="Закрити"
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />
      <div className="relative max-h-[85vh] w-full sm:max-w-2xl overflow-y-auto rounded-t-2xl sm:rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h2 id="legal-modal-title" className="text-2xl font-extrabold text-foreground">
            {content.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрити"
            className="shrink-0 rounded-full p-1.5 text-muted hover:bg-surface-2 hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="text-xs italic">{content.note}</p>
        </div>
      </div>
    </div>
  );
}
