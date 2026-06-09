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
    title: "Pedido rápido",
    description: "Escolha o botijão, confirme o endereço e envie seu pedido em poucos toques.",
    icon: ShoppingBag,
  },
  {
    title: "Acompanhamento em tempo real",
    description: "Veja o status do pedido e acompanhe cada etapa até a entrega.",
    icon: Truck,
  },
  {
    title: "Monitoramento do gás",
    description: "Receba uma estimativa do nível do seu botijão e planeje melhor a próxima troca.",
    icon: Flame,
  },
  {
    title: "Histórico de pedidos",
    description: "Consulte pedidos anteriores e mantenha tudo organizado.",
    icon: History,
  },
  {
    title: "Notificações",
    description: "Receba avisos importantes sobre pedido, gás e promoções.",
    icon: Bell,
  },
  {
    title: "Suporte direto",
    description: "Fale com atendimento pelo WhatsApp quando precisar.",
    icon: Phone,
  },
];

export const appFeatures = [
  { title: "Cadastro e login", description: "Acesso por telefone e senha para manter sua conta protegida.", icon: Smartphone },
  { title: "Endereços salvos", description: "Cadastre endereço principal, telefone, WhatsApp e localização opcional.", icon: Home },
  { title: "Loja P13, P20 e P45", description: "Catálogo organizado para escolher o botijão disponível para pedido.", icon: ShoppingBag },
  { title: "Checkout completo", description: "Endereço, WhatsApp, pagamento na entrega, cupom e observação antes de confirmar.", icon: ClipboardCheck },
  { title: "Cupons", description: "Aproveite cupons e campanhas disponíveis na hora do pedido.", icon: Gift },
  { title: "Pagamento na entrega", description: "Finalize o pedido com pagamento conforme as opções disponíveis no app.", icon: Wallet },
  { title: "Acompanhamento", description: "Status do pedido do início à entrega.", icon: Truck },
  { title: "PIN de segurança", description: "Pedido pode usar PIN para confirmar a entrega com mais segurança.", icon: ShieldCheck },
  { title: "Notificações", description: "Alertas sobre pedido, gás e novidades importantes.", icon: Bell },
  { title: "Histórico", description: "Pedidos anteriores ficam organizados para consulta.", icon: History },
  { title: "Monitoramento", description: "Estimativa de duração do botijão com base nos dados informados.", icon: Flame },
  { title: "Conta", description: "Dados, preferências, suporte e acesso às informações do cliente.", icon: Phone },
];

export const howItWorksSteps = [
  { title: "Baixe o app", description: "Instale o Central Gás para Android pela Play Store.", icon: Smartphone },
  { title: "Crie sua conta", description: "Informe seus dados principais para fazer pedidos com segurança.", icon: ShieldCheck },
  { title: "Cadastre o endereço", description: "Salve o local de entrega e defina o endereço principal.", icon: MapPin },
  { title: "Escolha o botijão", description: "Selecione o produto disponível na loja do app.", icon: PackageCheck },
  { title: "Confirme o pedido", description: "Revise telefone, endereço, pagamento, cupom e observações.", icon: ClipboardCheck },
  { title: "Acompanhe a entrega", description: "Veja as etapas do pedido até a conclusão.", icon: Truck },
  { title: "Receba seu gás", description: "Finalize a entrega com segurança e mantenha seu histórico organizado.", icon: Flame },
  { title: "Monitore a próxima troca", description: "Use a estimativa para se preparar melhor para o próximo pedido.", icon: Clock3 },
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
  "Recebimento de pedidos pelo app",
  "Organização de entregas",
  "Campanhas e cupons",
  "Relacionamento com clientes",
  "Notificações para clientes",
  "Painel administrativo",
  "Gestão de entregadores",
  "Expansão regional",
];

export const resellerAudience = [
  "Revendas de gás",
  "Operações locais",
  "Distribuidores regionais",
  "Negócios que querem vender mais pelo digital",
];
