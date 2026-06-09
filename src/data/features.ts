import {
  Bell,
  ClipboardCheck,
  Clock3,
  Flame,
  Gift,
  History,
  Home,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Truck,
  Wallet,
} from "lucide-react";

export const homeBenefits = [
  {
    title: "Pedido rapido",
    description: "Escolha o botijao, confirme o endereco e envie seu pedido em poucos toques.",
    icon: ShoppingBag,
  },
  {
    title: "Acompanhamento em tempo real",
    description: "Veja o status do pedido e acompanhe cada etapa ate a entrega.",
    icon: Truck,
  },
  {
    title: "Monitoramento do gas",
    description: "Receba uma estimativa do nivel do seu botijao e planeje melhor a proxima troca.",
    icon: Flame,
  },
  {
    title: "Historico de pedidos",
    description: "Consulte pedidos anteriores e mantenha tudo organizado.",
    icon: History,
  },
  {
    title: "Notificacoes",
    description: "Receba avisos importantes sobre pedido, gas e promocoes.",
    icon: Bell,
  },
  {
    title: "Suporte direto",
    description: "Fale com atendimento pelo WhatsApp quando precisar.",
    icon: Phone,
  },
];

export const appFeatures = [
  { title: "Cadastro e login", description: "Acesso por telefone, senha e conta do cliente.", icon: Smartphone },
  { title: "Enderecos salvos", description: "Cadastre endereco principal, telefone e localizacao opcional.", icon: Home },
  { title: "Loja", description: "Estrutura para botijoes P13, P20, P45 e catalogo organizado.", icon: ShoppingBag },
  { title: "Checkout", description: "Endereco, WhatsApp, pagamento na entrega, cupom e observacao.", icon: ClipboardCheck },
  { title: "Cupons", description: "Aproveite cupons e campanhas disponíveis na hora do pedido.", icon: Gift },
  { title: "Pagamento na entrega", description: "Finalize o pedido com pagamento conforme as opções disponíveis no app.", icon: Wallet },
  { title: "Acompanhamento", description: "Status do pedido do inicio a entrega.", icon: Truck },
  { title: "PIN de seguranca", description: "Pedido pode usar PIN para confirmar a entrega com mais seguranca.", icon: ShieldCheck },
  { title: "Notificacoes", description: "Alertas sobre pedido, gas e novidades importantes.", icon: Bell },
  { title: "Historico", description: "Pedidos anteriores ficam organizados para consulta.", icon: History },
  { title: "Monitoramento", description: "Estimativa de duracao do botijao com base nos dados informados.", icon: Flame },
  { title: "Conta", description: "Dados, preferencias, suporte e acesso as informacoes do cliente.", icon: Phone },
];

export const howItWorksSteps = [
  { title: "Baixe o app", description: "Instale o Central Gás para Android pela Play Store.", icon: Smartphone },
  { title: "Crie sua conta", description: "Informe seus dados principais para fazer pedidos com seguranca.", icon: ShieldCheck },
  { title: "Cadastre o endereco", description: "Salve o local de entrega e defina o endereco principal.", icon: MapPin },
  { title: "Escolha o botijao", description: "Selecione o produto disponivel na loja do app.", icon: PackageCheck },
  { title: "Confirme o pedido", description: "Revise telefone, endereco, pagamento, cupom e observacoes.", icon: ClipboardCheck },
  { title: "Acompanhe a entrega", description: "Veja as etapas do pedido ate a conclusao.", icon: Truck },
  { title: "Receba seu gas", description: "Finalize a entrega com seguranca e mantenha seu historico organizado.", icon: Flame },
  { title: "Monitore a proxima troca", description: "Use a estimativa para se preparar melhor para o proximo pedido.", icon: Clock3 },
];

export const orderStatuses = [
  "Criado",
  "Confirmado",
  "Buscando entregador",
  "Preparando",
  "Saiu para entrega",
  "Entregue",
];

export const partnerFeatures = [
  "Receba pedidos pelo app",
  "Organize entregas",
  "Use cupons e campanhas",
  "Acompanhe clientes",
  "Trabalhe com entregadores",
  "Envie notificacoes para clientes",
  "Acompanhe a operação com painel administrativo",
];
