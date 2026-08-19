"use client";

import { useState } from "react";
import { LegalModal } from "./LegalModal";
import type { LegalKey } from "@/lib/legal-content";

export function LegalLinks() {
  const [openKey, setOpenKey] = useState<LegalKey | null>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpenKey("privacy")}
        className="text-xs text-muted hover:text-foreground transition-colors"
      >
        Політика конфіденційності
      </button>
      <button
        type="button"
        onClick={() => setOpenKey("offer")}
        className="text-xs text-muted hover:text-foreground transition-colors"
      >
        Публічна оферта
      </button>
      <LegalModal openKey={openKey} onClose={() => setOpenKey(null)} />
    </>
  );
}
