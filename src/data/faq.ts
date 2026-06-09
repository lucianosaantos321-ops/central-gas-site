export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    question: "Como baixar o app?",
    answer:
      "A primeira versao do Central Gas esta disponivel para Android na Play Store. Use os botoes de download deste site para acessar o link oficial.",
  },
  {
    question: "Como fazer um pedido?",
    answer:
      "Baixe o app, crie sua conta, cadastre seu endereco, escolha o botijao disponivel e confirme o pedido no checkout.",
  },
  {
    question: "Como cadastrar endereco?",
    answer:
      "No app, acesse a area de enderecos, informe apelido, rua, numero, bairro, cidade e WhatsApp com DDD. A localizacao exata e opcional.",
  },
  {
    question: "Como acompanhar a entrega?",
    answer:
      "Depois de criar o pedido, acompanhe os status no app: criado, confirmado, buscando entregador, preparando, saiu para entrega e entregue.",
  },
  {
    question: "Como funciona o monitoramento do gas?",
    answer:
      "Voce informa a media de duracao do botijao e a data aproximada da ultima troca. O app calcula uma estimativa para ajudar no planejamento.",
  },
  {
    question: "O app mede o botijao de verdade?",
    answer:
      "Nao. O monitoramento e estimado e depende das informacoes preenchidas pelo usuario. O app nao mede fisicamente peso ou volume do botijao.",
  },
  {
    question: "Como usar cupom?",
    answer:
      "Quando houver campanha disponivel, o cupom podera ser informado no checkout antes de confirmar o pedido.",
  },
  {
    question: "Como recebo notificacoes?",
    answer:
      "Ao permitir notificacoes no Android, o app pode avisar sobre pedido, monitoramento do gas e promocoes conforme suas preferencias.",
  },
  {
    question: "Como alterar meus dados?",
    answer:
      "Acesse a pagina Conta dentro do app para revisar dados disponiveis e preferencias. Para dados sensiveis, fale com o suporte.",
  },
  {
    question: "Como excluir minha conta?",
    answer:
      "Acesse a pagina Exclusao de conta deste site e solicite atendimento pelo WhatsApp oficial informando o numero cadastrado.",
  },
  {
    question: "O app vende meus dados?",
    answer:
      "Nao. Os dados sao usados para operacao do servico, atendimento, entrega, suporte, seguranca e notificacoes.",
  },
  {
    question: "Quais regioes sao atendidas?",
    answer:
      "A disponibilidade pode variar conforme regiao, horario e operacao local. A regiao inicial e Guara/DF, conforme disponibilidade.",
  },
  {
    question: "Quais formas de pagamento existem?",
    answer:
      "A primeira versao trabalha com pagamento conforme informado no app, sem prometer pagamento online quando ele ainda nao estiver ativo.",
  },
  {
    question: "O app cobra taxa?",
    answer:
      "Valores, taxas e disponibilidade podem variar conforme operacao local e serao informados no fluxo do pedido quando aplicavel.",
  },
  {
    question: "O que fazer se o pedido atrasar?",
    answer:
      "Acompanhe o status pelo app e, se precisar, fale com o suporte pelo WhatsApp oficial.",
  },
];
