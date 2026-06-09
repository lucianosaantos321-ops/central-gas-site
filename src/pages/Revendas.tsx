import { CheckCircle2 } from "lucide-react";
import { CTASection } from "../components/ui/CTASection";
import { SectionTitle } from "../components/ui/SectionTitle";
import { SEO } from "../components/ui/SEO";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { partnerFeatures } from "../data/features";

export function Revendas() {
  return (
    <>
      <SEO
        title="Central Gás para revendas"
        path="/revendas"
        description="Canal comercial para revendas interessadas em operar com o Central Gás."
      />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="Revendas"
              title="Central Gás para revendas"
              description="Receba pedidos pelo digital, organize entregas e fortaleça o relacionamento com clientes."
            />
            <p className="mt-5 leading-8 text-slate-600">
              Fale conosco para conhecer as condições comerciais para revendas e operações locais.
            </p>
            <div className="mt-7">
              <WhatsAppButton label="Tenho interesse" />
            </div>
          </div>
          <div className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black">Soluções para operação</h2>
            <div className="mt-5 grid gap-3">
              {partnerFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-2xl bg-orange-50 px-4 py-3 font-bold text-slate-800">
                  <CheckCircle2 className="text-brand-600" size={20} />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <CTASection title="Quer operar com mais praticidade?" description="Fale conosco pelo WhatsApp para atendimento comercial." />
    </>
  );
}
