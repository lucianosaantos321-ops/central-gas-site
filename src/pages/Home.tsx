import { Link } from "react-router-dom";
import { CheckCircle2, MapPin } from "lucide-react";
import { AppMockup } from "../components/ui/AppMockup";
import { CTASection } from "../components/ui/CTASection";
import { FAQAccordion } from "../components/ui/FAQAccordion";
import { FeatureCard } from "../components/ui/FeatureCard";
import { LinkButton } from "../components/ui/Button";
import { PartnerCTA } from "../components/ui/PartnerCTA";
import { PlayStoreButton } from "../components/ui/PlayStoreButton";
import { ScreenshotGallery } from "../components/ui/ScreenshotGallery";
import { SectionTitle } from "../components/ui/SectionTitle";
import { SEO } from "../components/ui/SEO";
import { StepCard } from "../components/ui/StepCard";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { faqItems } from "../data/faq";
import { homeBenefits, howItWorksSteps, orderStatuses } from "../data/features";
import { siteConfig } from "../data/siteConfig";

export function Home() {
  return (
    <>
      <SEO
        title="Central Gás | Peça gás em minutos"
        path="/"
        description="Peça gás pelo app Central Gás, acompanhe a entrega e monitore a estimativa do seu botijão."
        keywords="Central Gás, entrega de gás, pedir gás, comprar gás, gás de cozinha, botijão de gás, app para pedir gás, gás no Guará"
      />
      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1fr_0.78fr] md:items-center lg:px-8 lg:py-16">
          <div className="rounded-[2.2rem] app-gradient p-7 text-white shadow-glow md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white/85">
              {siteConfig.name}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-black tracking-tight md:text-6xl">
              Peça seu gás em minutos
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/92">
              Com o Central Gás, você faz seu pedido pelo app, acompanha a entrega
              e ainda monitora a estimativa do seu botijão.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PlayStoreButton className="bg-white text-brand-700 shadow-none" />
              <WhatsAppButton className="border-white/35 bg-white/10 text-white shadow-none" label="Falar com suporte" />
            </div>
            <div className="mt-7 grid gap-3 text-sm font-bold text-white/90 sm:grid-cols-3">
              <span className="rounded-2xl bg-white/14 px-4 py-3">Pedido rápido</span>
              <span className="rounded-2xl bg-white/14 px-4 py-3">Acompanhamento</span>
              <span className="rounded-2xl bg-white/14 px-4 py-3">Monitoramento estimado</span>
            </div>
          </div>
          <AppMockup />
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Benefícios"
            title="Tudo para pedir gás com mais controle"
            description="O site apresenta as funções do app cliente de forma clara, sem prometer recursos que ainda não estão ativos."
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeBenefits.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <SectionTitle
            center
            eyebrow="Como funciona"
            title="Do pedido à entrega em poucos passos"
            description="O fluxo foi pensado para ser simples no celular: escolha, confirme, acompanhe e receba."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.slice(3, 7).map((step, index) => (
              <StepCard key={step.title} index={index + 1} {...step} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div className="rounded-[2rem] bg-slate-950 p-7 text-white md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-200">
                Monitoramento do gás
              </p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                Estimativa para planejar a próxima troca
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                O Central Gás ajuda você a acompanhar a estimativa de duração do seu
                botijão. Informe a média de consumo e acompanhe quando pode estar perto
                da próxima troca.
              </p>
              <p className="mt-4 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-slate-200">
                Transparência: o app não mede fisicamente peso ou volume. O cálculo é
                estimado e depende das informações preenchidas pelo usuário.
              </p>
            </div>
            <div className="rounded-[2rem] border border-orange-100 bg-white p-7 shadow-soft">
              <SectionTitle title="Acompanhe seu pedido" description="Status claros ajudam o cliente a entender cada etapa." />
              <div className="mt-6 grid gap-3">
                {orderStatuses.map((status) => (
                  <div key={status} className="flex items-center gap-3 rounded-2xl bg-orange-50 px-4 py-3 font-bold text-slate-800">
                    <CheckCircle2 className="text-brand-600" size={20} aria-hidden="true" />
                    {status}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <SectionTitle
            center
            eyebrow="Screenshots"
            title="Visual do app Central Gás"
            description="Estrutura pronta para trocar por prints reais do app. Os modelos atuais seguem a identidade visual da primeira versão."
          />
          <div className="mt-8">
            <ScreenshotGallery />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[2rem] border border-orange-100 bg-white p-7 shadow-soft md:p-10">
              <SectionTitle title="Por que usar o Central Gás?" />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Mais praticidade", "Mais controle", "Histórico organizado", "Notificações", "Pedido pelo celular", "Suporte local"].map(
                  (item) => (
                    <div key={item} className="rounded-2xl bg-orange-50 px-4 py-3 font-bold text-slate-800">
                      {item}
                    </div>
                  )
                )}
              </div>
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
                <MapPin className="mt-0.5 shrink-0 text-brand-600" size={20} aria-hidden="true" />
                A disponibilidade de entrega pode variar conforme região, horário e operação local.
              </div>
            </div>
            <PartnerCTA />
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
          <SectionTitle center eyebrow="FAQ" title="Dúvidas frequentes" />
          <div className="mt-8">
            <FAQAccordion items={faqItems.slice(0, 6)} />
          </div>
          <div className="mt-6 text-center">
            <LinkButton to="/faq" variant="secondary" showArrow>
              Ver FAQ completo
            </LinkButton>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
