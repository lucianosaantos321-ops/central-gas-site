import homeShot from "../assets/screenshots/app-home.svg";
import checkoutShot from "../assets/screenshots/app-checkout.svg";
import trackingShot from "../assets/screenshots/app-tracking.svg";
import monitorShot from "../assets/screenshots/app-monitoring.svg";

export const screenshots = [
  {
    title: "Início",
    description: "Atalhos para pedir, acompanhar e monitorar seu gás.",
    src: homeShot,
    alt: "Tela inicial do app Central Gás",
  },
  {
    title: "Checkout",
    description: "Endereço, telefone, cupom e confirmação do pedido.",
    src: checkoutShot,
    alt: "Tela de checkout do app Central Gás",
  },
  {
    title: "Pedido",
    description: "Status do pedido e acompanhamento da entrega.",
    src: trackingShot,
    alt: "Tela de acompanhamento de pedido do app Central Gás",
  },
  {
    title: "Monitorar",
    description: "Estimativa de nível e próxima troca do botijão.",
    src: monitorShot,
    alt: "Tela de monitoramento do gás no app Central Gás",
  },
];
