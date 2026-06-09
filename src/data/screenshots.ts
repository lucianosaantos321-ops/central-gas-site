import checkoutShot from "../assets/screenshots/app-real-checkout.jpeg";
import homeShot from "../assets/screenshots/app-real-home.jpeg";
import monitorShot from "../assets/screenshots/app-real-monitor.jpeg";
import trackingShot from "../assets/screenshots/app-real-order.jpeg";

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
