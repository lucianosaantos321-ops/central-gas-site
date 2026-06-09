import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "../../data/faq";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="premium-card rounded-3xl border border-orange-100 bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-black text-slate-950"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <ChevronDown
                size={20}
                className={`shrink-0 transition ${isOpen ? "rotate-180 text-brand-600" : ""}`}
                aria-hidden="true"
              />
            </button>
            <div className={`faq-panel ${isOpen ? "is-open" : ""}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 leading-7 text-slate-600">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
