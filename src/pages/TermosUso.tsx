import { LegalPageLayout } from "../components/ui/LegalPageLayout";
import { SEO } from "../components/ui/SEO";
import { siteConfig } from "../data/siteConfig";

export function TermosUso() {
  return (
    <>
      <SEO title="Termos de uso" path="/termos-de-uso" description="Termos de uso do Central Gás para utilização do app, cadastro, pedidos, disponibilidade e suporte." />
      <LegalPageLayout title="Termos de uso" description="Ao utilizar o Central Gás, você concorda com estas condições básicas de uso.">
        <h2>Uso do app</h2>
        <p>O app Central Gás permite solicitar pedidos de gás, cadastrar endereço, acompanhar status e acessar funções relacionadas ao serviço.</p>
        <h2>Cadastro correto</h2>
        <p>O usuário é responsável por informar dados corretos, incluindo telefone, endereço e informações necessárias para entrega.</p>
        <h2>Disponibilidade</h2>
        <p>A disponibilidade de entrega pode variar conforme região, horário, operação local, estoque e condições externas.</p>
        <h2>Pagamento</h2>
        <p>O pagamento deve seguir as opções informadas no app ou pela operação local no momento do pedido.</p>
        <h2>Alterações no serviço</h2>
        <p>Funcionalidades, textos, disponibilidade, produtos e condições podem ser atualizados para melhorar o serviço.</p>
        <h2>Limitação de responsabilidade</h2>
        <p>O Central Gás busca oferecer informações corretas e uma boa experiência, mas não garante disponibilidade contínua ou entrega em tempo fixo.</p>
        <h2>Contato oficial</h2>
        <p>WhatsApp: {siteConfig.phoneDisplay}</p>
        <p>E-mail: {siteConfig.emailPlaceholder}</p>
        <p>Site oficial: {siteConfig.baseUrl}</p>
      </LegalPageLayout>
    </>
  );
}
