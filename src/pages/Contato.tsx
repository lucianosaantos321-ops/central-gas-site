import { Mail, MapPin, MessageCircle, Store } from "lucide-react";
import { CTASection } from "../components/ui/CTASection";
import { FeatureCard } from "../components/ui/FeatureCard";
import { LinkButton } from "../components/ui/Button";
import { SectionTitle } from "../components/ui/SectionTitle";
import { SEO } from "../components/ui/SEO";
import { siteConfig } from "../data/siteConfig";

export function Contato() {
  return (
    <>
      <SEO title="Contato" path="/contato" description="Entre em contato com a Central Gás por WhatsApp, suporte, Play Store ou interesse para revendas." />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Contato" title="Fale com a Central Gás" description="Use os canais abaixo para suporte, dúvidas e interesse comercial." />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard title="WhatsApp" description={siteConfig.phoneDisplay} icon={MessageCircle} />
          <FeatureCard title="E-mail" description={siteConfig.emailPlaceholder} icon={Mail} />
          <FeatureCard title="Região" description={siteConfig.region} icon={MapPin} />
          <FeatureCard title="Revendas" description="Parcerias comerciais e atendimento para revendas." icon={Store} />
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href={siteConfig.whatsappUrl}>Falar no WhatsApp</LinkButton>
          <LinkButton to="/revendas" variant="secondary">Falar sobre revendas</LinkButton>
        </div>
      </main>
      <CTASection />
    </>
  );
}
