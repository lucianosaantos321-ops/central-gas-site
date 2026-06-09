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
        title="O app Central Gas"
        path="/app"
        description="Conheca o app Central Gas para Android: cadastro, enderecos, loja, checkout, cupons, monitoramento, pedidos e notificacoes."
      />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="App Android"
          title="O app Central Gas"
          description="A primeira versao esta disponivel para Android na Play Store, com pedido de gas, enderecos, acompanhamento e monitoramento estimado."
        />
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <PlayStoreButton />
          <WhatsAppButton />
        </div>
        <p className="mt-3 max-w-2xl text-sm font-bold text-slate-500">
          No momento, o app oficial esta disponivel para dispositivos Android.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {appFeatures.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
        <div className="mt-14">
          <SectionTitle
            center
            title="Telas do app Central Gas"
            description="Conheca a experiencia da primeira versao para Android."
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
