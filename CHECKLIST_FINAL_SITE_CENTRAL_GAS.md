# Checklist Final - Site Central Gás

## Implementado

- Projeto separado em `central-gas-site`.
- React + Vite + TypeScript.
- Tailwind CSS configurado.
- React Router DOM com rotas institucionais.
- Lucide React para ícones.
- SEO por página com React Helmet Async.
- Header responsivo.
- Menu mobile.
- Footer completo.
- Botão flutuante de WhatsApp.
- Botão Play Store com placeholder.
- Componentes reutilizáveis.
- Dados estáticos organizados em `src/data`.
- Screenshots placeholder em `src/assets/screenshots`.
- Página Home premium.
- Página App.
- Página Como funciona.
- Página Monitoramento.
- Página Revendas.
- Página Suporte.
- Página FAQ.
- Página Política de privacidade.
- Página Termos de uso.
- Página Exclusão de conta.
- Página Contato.
- `robots.txt`.
- `sitemap.xml`.
- `site.webmanifest`.
- README com instruções.

## Antes do deploy

- Trocar `PLAY_STORE_URL` pelo link real da Play Store.
- Trocar domínio `https://centralgas.com.br` em `siteConfig.ts`, `robots.txt` e `sitemap.xml`, caso o domínio real seja outro.
- Substituir screenshots placeholder por prints reais do app.
- Revisar e-mail de contato quando existir.
- Confirmar WhatsApp oficial.
- Conferir política de privacidade com dados finais do app.
- Rodar `npm run build`.
- Testar menu mobile.
- Testar links de WhatsApp.
- Testar páginas legais.

## Pós-deploy

- Enviar sitemap no Google Search Console.
- Configurar domínio.
- Medir Lighthouse mobile.
- Conectar Google Analytics/Tag Manager somente se necessário.
- Atualizar Play Store com URL da política de privacidade.
