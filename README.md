# Site Oficial Central Gás

Landing page e páginas institucionais do Central Gás, criada em projeto separado do app para não aumentar o peso do aplicativo Android.

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router DOM
- Lucide React
- SEO component próprio sem dependência pesada

## Como rodar

```bash
cd central-gas-site
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

## Como trocar screenshots

Os arquivos ficam em:

```text
src/assets/screenshots/
```

Substitua os SVGs atuais por prints reais do app mantendo os nomes ou edite:

```text
src/data/screenshots.ts
```

## Como trocar o link da Play Store

Edite:

```text
src/data/siteConfig.ts
```

Troque:

```ts
playStoreUrl: "PLAY_STORE_URL"
```

pelo link real da Play Store.

## Como editar WhatsApp

Edite:

```text
src/data/siteConfig.ts
```

Campos:

```ts
phoneDisplay
whatsappUrl
accountDeletionUrl
```

## Como publicar na Vercel

1. Crie um projeto novo na Vercel.
2. Aponte para a pasta `central-gas-site`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Configure domínio quando estiver pronto.

## Observações

- O site é estático nesta primeira versão.
- Não possui backend.
- Foi preparado para futura integração com Supabase/Admin.
- Não promete tempo fixo de entrega, cobertura nacional ou medição física do botijão.
