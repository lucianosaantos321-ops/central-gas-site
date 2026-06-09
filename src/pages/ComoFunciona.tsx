import { CTASection } from "../components/ui/CTASection";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";
import { SectionTitle } from "../components/ui/SectionTitle";
import { SEO } from "../components/ui/SEO";
import { StepCard } from "../components/ui/StepCard";
import { howItWorksSteps } from "../data/features";

export function ComoFunciona() {
  return (
    <>
      <SEO
        title="Como funciona"
        path="/como-funciona"
        description="Veja o fluxo para baixar o app, criar conta, cadastrar endereço, escolher botijão, confirmar pedido e acompanhar a entrega."
      />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <RevealOnScroll>
        <SectionTitle
          center
          eyebrow="Passo a passo"
          title="Como funciona o Central Gás"
          description="Uma jornada simples para o cliente pedir gás pelo celular e acompanhar o pedido com clareza."
        />
        </RevealOnScroll>
        <div className="timeline-grid mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step, index) => (
            <RevealOnScroll key={step.title} delay={index * 70}>
              <StepCard index={index + 1} {...step} />
            </RevealOnScroll>
          ))}
        </div>
      </main>
      <CTASection />
    </>
  );
}
