import { Trash2 } from "lucide-react";
import { LinkButton } from "../components/ui/Button";
import { LegalPageLayout } from "../components/ui/LegalPageLayout";
import { SEO } from "../components/ui/SEO";
import { siteConfig } from "../data/siteConfig";

export function ExclusaoConta() {
  return (
    <>
      <SEO title="Exclusão de conta e dados" path="/exclusao-de-conta" description="Solicite exclusão da sua conta e dos seus dados no Central Gás pelo WhatsApp oficial." />
      <LegalPageLayout title="Exclusão de conta e dados" description="Veja como solicitar a exclusão da sua conta e de dados pessoais relacionados ao Central Gás.">
        <p>Para solicitar a exclusão da sua conta e dos seus dados, entre em contato pelo WhatsApp {siteConfig.phoneDisplay} informando o número cadastrado no app.</p>
        <p>
          <LinkButton href={siteConfig.accountDeletionUrl}>
            <Trash2 size={18} aria-hidden="true" />
            Solicitar exclusão pelo WhatsApp
          </LinkButton>
        </p>
        <h2>Dados que podem ser excluídos</h2>
        <ul>
          <li>Cadastro</li>
          <li>Endereço</li>
          <li>Preferências</li>
          <li>Dados de notificações</li>
        </ul>
        <h2>Dados que podem ser mantidos</h2>
        <p>Alguns registros de pedidos podem ser mantidos por prazo necessário para segurança, auditoria, obrigações legais ou resolução de conflitos.</p>
      </LegalPageLayout>
    </>
  );
}
