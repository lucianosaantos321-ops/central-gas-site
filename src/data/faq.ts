export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    question: "Como baixar o app?",
    answer:
      "Baixe o Central Gás para Android pela Play Store usando os botões de download deste site.",
  },
  {
    question: "Como fazer um pedido?",
    answer:
      "Baixe o app, crie sua conta, cadastre seu endereço, escolha o botijão disponível e confirme o pedido no checkout.",
  },
  {
    question: "Como cadastrar endereço?",
    answer:
      "No app, acesse a área de endereços, informe apelido, rua, número, bairro, cidade e WhatsApp com DDD. A localização exata é opcional.",
  },
  {
    question: "Como acompanhar a entrega?",
    answer:
      "Depois de criar o pedido, acompanhe os status no app: criado, confirmado, buscando entregador, preparando, saiu para entrega e entregue.",
  },
  {
    question: "Como funciona o monitoramento do gás?",
    answer:
      "Você informa a média de duração do botijão e a data aproximada da última troca. O app calcula uma estimativa para ajudar no planejamento.",
  },
  {
    question: "O app mede o botijão de verdade?",
    answer:
      "Não. O monitoramento é estimado e depende das informações preenchidas pelo usuário. O app não mede fisicamente peso ou volume do botijão.",
  },
  {
    question: "Como usar cupom?",
    answer:
      "Quando houver campanha disponível, o cupom poderá ser informado no checkout antes de confirmar o pedido.",
  },
  {
    question: "Como recebo notificações?",
    answer:
      "Ao permitir notificações no Android, o app pode avisar sobre pedido, monitoramento do gás e promoções conforme suas preferências.",
  },
  {
    question: "Como alterar meus dados?",
    answer:
      "Acesse a página Conta dentro do app para revisar dados disponíveis e preferências. Para dados sensíveis, fale com o suporte.",
  },
  {
    question: "Como excluir minha conta?",
    answer:
      "Acesse a página Exclusão de conta deste site e solicite atendimento pelo WhatsApp oficial informando o número cadastrado.",
  },
  {
    question: "O app vende meus dados?",
    answer:
      "Não. Os dados são usados para operação do serviço, atendimento, entrega, suporte, segurança e notificações.",
  },
  {
    question: "Quais regiões são atendidas?",
    answer:
      "A disponibilidade pode variar conforme região, horário e operação local. A região inicial é Guará/DF, conforme disponibilidade.",
  },
  {
    question: "Quais formas de pagamento existem?",
    answer:
      "As formas de pagamento são informadas no app durante a confirmação do pedido.",
  },
  {
    question: "O app cobra taxa?",
    answer:
      "Valores, taxas e disponibilidade podem variar conforme operação local e serão informados no fluxo do pedido quando aplicável.",
  },
  {
    question: "O que fazer se o pedido atrasar?",
    answer:
      "Acompanhe o status pelo app e, se precisar, fale com o suporte pelo WhatsApp oficial.",
  },
];
