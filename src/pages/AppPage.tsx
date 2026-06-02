import { CTASection } from "../components/ui/CTASection";
import { FeatureCard } from "../components/ui/FeatureCard";
import { PlayStoreButton } from "../components/ui/PlayStoreButton";
import { ScreenshotGallery } from "../components/ui/ScreenshotGallery";
import { SectionTitle } from "../components/ui/SectionTitle";
import { SEO } from "../components/ui/SEO";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { appFeatures } from "../data/features";

export function AppPage() {
  return (
    <>
      <SEO
        title="O app Central Gás"
        path="/app"
        description="Conheça as funções do app Central Gás: cadastro, endereços, loja, checkout, cupons, monitoramento, pedidos e notificações."
      />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="App Android"
          title="O app Central Gás"
          description="Uma experiência mobile para pedir gás, organizar endereços, acompanhar pedidos e planejar a próxima troca do botijão."
        />
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <PlayStoreButton />
          <WhatsAppButton />
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {appFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
        <div className="mt-14">
          <SectionTitle center title="Telas preparadas para o cliente" description="Use esses espaços para substituir pelos prints reais antes do lançamento público." />
          <div className="mt-8">
            <ScreenshotGallery />
          </div>
        </div>
      </main>
      <CTASection />
    </>
  );
}
