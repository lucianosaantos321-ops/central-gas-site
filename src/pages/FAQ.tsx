import { FAQAccordion } from "../components/ui/FAQAccordion";
import { SectionTitle } from "../components/ui/SectionTitle";
import { SEO } from "../components/ui/SEO";
import { faqItems } from "../data/faq";

export function FAQ() {
  return (
    <>
      <SEO title="FAQ" path="/faq" description="Perguntas frequentes sobre o app Central Gás, pedidos, endereço, notificações, cupons e dados." />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle center eyebrow="Dúvidas" title="Perguntas frequentes" />
        <div className="mt-8">
          <FAQAccordion items={faqItems} />
        </div>
      </main>
    </>
  );
}
