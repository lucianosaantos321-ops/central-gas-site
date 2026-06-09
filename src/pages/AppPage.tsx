import { CheckCircle2 } from "lucide-react";
import { CTASection } from "../components/ui/CTASection";
import { FeatureCard } from "../components/ui/FeatureCard";
import { PlayStoreButton } from "../components/ui/PlayStoreButton";
import { ScreenshotGallery } from "../components/ui/ScreenshotGallery";
import { SectionTitle } from "../components/ui/SectionTitle";
import { SEO } from "../components/ui/SEO";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { appFeatures } from "../data/features";

const appHighlights = [
  "Disponível inicialmente para Android, com download pela Play Store.",
  "Cadastro e login por telefone e senha.",
  "Endereços salvos para repetir pedidos com mais praticidade.",
  "Loja com estrutura para botijões P13, P20 e P45.",
  "Checkout com endereço, WhatsApp, pagamento na entrega, cupom e observação.",
  "Acompanhamento do pedido, PIN de segurança, notificações e histórico.",
  "Monitoramento estimado do botijão e área de conta do cliente.",
];

export function AppPage() {
  return (
    <>
      <SEO
        title="O app Central Gás"
        path="/app"
        description="Conheça o app Central Gás para Android: cadastro, endereços, loja, checkout, cupons, monitoramento, pedidos e notificações."
      />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="App Android"
          title="O app Central Gás"
          description="Baixe o Central Gás para Android pela Play Store e faça seu pedido com cadastro, endereços salvos, checkout completo e acompanhamento pelo celular."
        />
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <PlayStoreButton />
          <WhatsAppButton />
        </div>
        <p className="mt-3 max-w-2xl text-sm font-bold text-slate-500">
          Disponível inicialmente para Android na Play Store.
        </p>
        <div className="mt-8 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-slate-950">O que você encontra no app</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {appHighlights.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-orange-50 px-4 py-3 text-sm font-bold leading-6 text-slate-800">
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand-600" size={20} aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {appFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
        <div className="mt-14">
          <SectionTitle
            center
            title="Telas do app Central Gás"
            description="Veja como o app organiza pedido, entrega e monitoramento pelo celular."
          />
          <div className="mt-8">
            <ScreenshotGallery />
          </div>
        </div>
      </main>
      <CTASection />
    </>
  );
}
