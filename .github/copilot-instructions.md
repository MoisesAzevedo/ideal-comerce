## Objetivo

Fornecer instruções concisas e específicas para agentes de codificação (Copilot/AI) trabalharem rapidamente neste repositório Next.js (app dir).

## Visão geral (big picture)

- Projeto: Next.js 15 (app router) com React 19. Layout central em `src/app/layout.tsx` e página principal em `src/app/page.tsx`.
- Estrutura principal: componentes visuais em `src/app/components/*`, rotas API em `src/app/api/*` e dados mock em `db-mock-data/`.
- Objetivo técnico: site estático/SSG exportável para GitHub Pages (controle via env `GITHUB_PAGES`) mas com rotas API dinâmicas durante desenvolvimento.

## Principais arquivos e o porquê

- `next.config.js` — contém lógica por plataforma (GitHub Pages vs Netlify). Se `GITHUB_PAGES=true` o build faz `output: 'export'` e aplica `basePath` e `assetPrefix` (`/ideal-comerce`).
- `src/utils/paths.ts` — utilitário central `getAssetPath(path)`; usado por componentes para resolver caminhos de assets com suporte a GitHub Pages.
- `src/app/api/products/route.ts` — rota REST para produtos; usa `db-mock-data/featured-products.ts`. Exporta `dynamic = 'force-dynamic'` para evitar export estático.
- `src/app/components/Product_pagination/api/productsService.ts` — cliente que consome `/api/products` do frontend. Use como referência para chamadas e tratamento de erros.
- `db-mock-data/featured-products.ts` — tipagem e dados de exemplo (`Product`) usados pela API.

## Convenções de implementação

- Tipos TypeScript mínimos estão em `db-mock-data/*` e são importados nos serviços/components (ex.: `Product`).
- Estilo híbrido: Tailwind CSS + módulos SCSS por componente (ex.: `Banner.module.scss`, `Header.module.scss`).
- Atributos `data-name="..."` são amplamente usados nos componentes (bom para testes/seletores CSS/automação). Preserve-os ao refatorar.
- Imagens usam `next/image` e `next.config.js` define `images.unoptimized: true` — não há configuração de domains externa. Para imagens externas (Unsplash) isso já está permitido via `unoptimized`.

## Fluxo de dados e padrões

- Frontend -> API: o frontend usa `fetchFeaturedProducts()` em `Product_pagination/api/productsService.ts` que chama `/api/products` (query params: `page`, `perPage`, `category`, `q`).
- API -> dados: `src/app/api/products/route.ts` filtra/ paginar os dados usando `featuredProducts` do `db-mock-data`.
- Ao modificar a API, atualize os tipos em `db-mock-data/featured-products.ts` e as interfaces em `productsService.ts`.

## Comandos úteis / fluxo de desenvolvimento

- Instalação: `npm install`
- Desenvolvimento local: `npm run dev` (usa `next dev --turbopack`).
- Build: `npm run build` (Next build).
- Start server de produção: `npm run start`.
- Export estático (GitHub Pages): defina `GITHUB_PAGES=true` antes do build; já há `scripts` prontos: `npm run deploy` ou `npm run build:github` — note que nos scripts o projeto usa sintaxe `set GITHUB_PAGES=true&& next build` (Windows-friendly).
- Lint: `npm run lint` (usa `next lint`).

## Deploy / ambientes

- GitHub Pages: defina `GITHUB_PAGES=true` (ou `GITHUB_ACTIONS` na CI). `next.config.js` aplicará `basePath` e `assetPrefix` `/ideal-comerce`.
- Netlify: o `next.config.js` detecta `NETLIFY=true` e desativa trailing slash extra. Se for implantar no Netlify, ative `NETLIFY=true` nas variáveis.

## Exemplos concretos (copiar/colar)

- Chamar API de produtos (frontend):

```ts
import fetchFeaturedProducts from '@/app/components/Product_pagination/api/productsService';
const res = await fetchFeaturedProducts({
  page: 1,
  perPage: 16,
  q: 'camiseta',
});
// res.data : Product[]; res.meta: { page, perPage, total, totalPages }
```

- Resolver path de asset (ex.: logo):

```ts
import { getAssetPath } from '@/utils/paths';
const logo = getAssetPath('/logo-mod.png');
```

## Pontos de atenção / anti-padrões a evitar

- Não remover `dynamic = 'force-dynamic'` em `src/app/api/products/route.ts` se quiser a rota funcionando no modo dinâmico durante builds.
- Ao alterar `next.config.js`, verifique impacto no `basePath`/`assetPrefix` para GH Pages e no comportamento de export.
- Preserve os `data-name` quando for refatorar pois são usados como seletores e são convenções do projeto.

## Onde procurar mais contexto

- Componentes principais: `src/app/components/*` (Header, Banner, Product_pagination, Footer).
- Dados e tipos: `db-mock-data/featured-products.ts`.
- Configuração: `next.config.js`, `package.json`, `postcss.config.mjs`, `tailwind.config.js`.

Se algo estiver incompleto ou você precisar que eu adicione exemplos adicionais (CI, variáveis de ambiente, scripts de deploy), me diga e eu atualizo este arquivo.
