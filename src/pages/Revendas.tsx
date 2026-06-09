import { CheckCircle2 } from "lucide-react";
import { CTASection } from "../components/ui/CTASection";
import { LinkButton } from "../components/ui/Button";
import { RevealOnScroll } from "../components/ui/RevealOnScroll";
import { SectionTitle } from "../components/ui/SectionTitle";
import { SEO } from "../components/ui/SEO";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { partnerFeatures, resellerAudience } from "../data/features";
import { siteConfig } from "../data/siteConfig";

export function Revendas() {
  return (
    <>
      <SEO
        title="Central Gás para Revendas"
        path="/revendas"
        description="Programa de revendas em preparação para operações interessadas em receber pedidos pelo digital, organizar entregas e se aproximar dos clientes."
      />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <RevealOnScroll className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-start">
          <div>
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-brand-700">
              Em breve
            </span>
            <SectionTitle
              eyebrow="Programa de revendas"
              title="Central Gás para Revendas"
              description="Estamos preparando soluções para revendas que desejam receber pedidos pelo digital, organizar entregas e fortalecer o relacionamento com clientes."
            />
            <p className="mt-5 leading-8 text-slate-600">
              O programa ainda está em fase de preparação. Cadastre seu interesse para saber mais
              sobre as próximas etapas e entender como sua operação pode participar quando a
              solução estiver disponível.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <LinkButton href={siteConfig.resellerInterestUrl}>Tenho interesse</LinkButton>
              <WhatsAppButton label="Falar no WhatsApp" />
            </div>
          </div>
          <div className="rounded-[2rem] border border-orange-100 bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black">O que está sendo planejado</h2>
            <div className="mt-5 grid gap-3">
              {partnerFeatures.map((feature, index) => (
                <RevealOnScroll key={feature} delay={index * 45}>
                <div className="premium-card flex items-center gap-3 rounded-2xl border border-orange-100 bg-orange-50 px-4 py-3 font-bold text-slate-800">
                  <CheckCircle2 className="text-brand-600" size={20} />
                  {feature}
                </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className="mt-12">
          <SectionTitle
            eyebrow="Perfil"
            title="Para quem é"
            description="A iniciativa é voltada para operações que desejam estruturar melhor o atendimento digital."
          />
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {resellerAudience.map((item, index) => (
              <RevealOnScroll key={item} delay={index * 70}>
              <div className="premium-card rounded-2xl border border-orange-100 bg-white px-5 py-4 font-black text-slate-800 shadow-soft">
                {item}
              </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className="mt-12 rounded-[2rem] border border-orange-100 bg-white p-7 shadow-soft md:p-10">
          <SectionTitle
            eyebrow="Cadastre seu interesse"
            title="Fale conosco para saber mais"
            description="Não é necessário preencher formulário. O botão abaixo abre o WhatsApp oficial com uma mensagem pronta para registrar seu interesse."
          />
          <div className="mt-7">
            <LinkButton href={siteConfig.resellerInterestUrl} showArrow>
              Quero saber mais sobre revendas
            </LinkButton>
          </div>
        </RevealOnScroll>
      </main>
      <CTASection title="Programa de revendas em breve" description="Estamos preparando novas soluções comerciais. Fale conosco pelo WhatsApp para entrar na lista de interesse." />
    </>
  );
}
