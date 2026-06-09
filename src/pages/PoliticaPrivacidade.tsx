import { LegalPageLayout } from "../components/ui/LegalPageLayout";
import { SEO } from "../components/ui/SEO";
import { siteConfig } from "../data/siteConfig";

export function PoliticaPrivacidade() {
  return (
    <>
      <SEO title="Política de privacidade" path="/politica-de-privacidade" description="Política de privacidade do app Central Gás, com informações sobre dados coletados, uso, segurança, direitos e contato." />
      <LegalPageLayout title="Política de privacidade" description="Esta política explica como o Central Gás trata dados pessoais usados na operação do app, do site e do serviço.">
        <h2>Dados coletados</h2>
        <p>O Central Gás pode coletar nome, telefone, CPF quando usado no cadastro, data de nascimento quando usada, endereço, localização quando permitida, dados de pedidos e dados técnicos de notificações/dispositivo.</p>
        <h2>Uso dos dados</h2>
        <p>Os dados são usados para criar conta, processar pedidos, viabilizar entrega, prestar suporte, enviar notificações importantes e manter a segurança do serviço.</p>
        <h2>Compartilhamento</h2>
        <p>O Central Gás não vende dados pessoais. Dados podem ser tratados por sistemas necessários ao funcionamento do serviço, como hospedagem, banco de dados, Firebase, Supabase e serviços técnicos relacionados.</p>
        <h2>Segurança</h2>
        <p>Utilizamos conexões seguras e medidas técnicas razoáveis para proteger as informações. Mesmo assim, nenhum sistema digital é absolutamente imune a riscos.</p>
        <h2>Direitos do usuário</h2>
        <p>Você pode solicitar acesso, correção ou exclusão de dados pessoais, conforme aplicável, entrando em contato pelo WhatsApp oficial.</p>
        <h2>Exclusão de conta</h2>
        <p>Para solicitar exclusão de conta e dados, acesse a página <a href="/exclusao-de-conta">Exclusão de conta</a>.</p>
        <h2>Contato</h2>
        <p>WhatsApp: {siteConfig.phoneDisplay}</p>
        <p>E-mail: {siteConfig.emailPlaceholder}</p>
        <p>Site oficial: {siteConfig.baseUrl}</p>
      </LegalPageLayout>
    </>
  );
}
