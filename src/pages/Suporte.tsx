import { Bell, Home, LogIn, Mail, MessageCircle, ShoppingBag, Trash2 } from "lucide-react";
import { FeatureCard } from "../components/ui/FeatureCard";
import { LinkButton } from "../components/ui/Button";
import { SectionTitle } from "../components/ui/SectionTitle";
import { SEO } from "../components/ui/SEO";
import { siteConfig } from "../data/siteConfig";

const supportCards = [
  { title: "Ajuda com login", description: "Suporte para acesso, senha e conta.", icon: LogIn },
  { title: "Ajuda com pedido", description: "Dúvidas sobre status, entrega e histórico.", icon: ShoppingBag },
  { title: "Ajuda com endereço", description: "Cadastro, edição e endereço principal.", icon: Home },
  { title: "Ajuda com notificações", description: "Permissões, avisos e preferências.", icon: Bell },
  { title: "Exclusão de conta", description: "Solicite remoção de conta e dados.", icon: Trash2 },
];

export function Suporte() {
  return (
    <>
      <SEO title="Suporte" path="/suporte" description="Fale com o suporte da Central Gás pelo WhatsApp para ajuda com cadastro, pedido, endereço, notificações ou conta." />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Atendimento"
          title="Precisa de ajuda?"
          description="Precisa de ajuda com cadastro, pedido, endereço, notificação ou acesso à conta?"
        />
        <div className="mt-7 rounded-[2rem] app-gradient p-7 text-white shadow-glow">
          <MessageCircle size={34} />
          <h2 className="mt-4 text-3xl font-black">WhatsApp oficial</h2>
          <p className="mt-2 text-lg text-white/90">{siteConfig.phoneDisplay}</p>
          <p className="mt-2 text-white/80">{siteConfig.supportHours}</p>
          <LinkButton href={siteConfig.whatsappUrl} className="mt-6 bg-white text-brand-700 shadow-none">
            Falar no WhatsApp
          </LinkButton>
        </div>
        <div className="mt-6 rounded-[2rem] border border-orange-100 bg-white p-6 shadow-soft">
          <div className="flex items-start gap-3">
            <Mail className="mt-1 shrink-0 text-brand-600" size={22} aria-hidden="true" />
            <div>
              <h2 className="text-xl font-black text-slate-950">E-mail oficial</h2>
              <p className="mt-2 text-slate-600">{siteConfig.emailPlaceholder}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {supportCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </main>
    </>
  );
}
