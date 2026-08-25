# link-roots

Página de enlaces (estilo Linktree) de Kevin Ady Guzmán. Next.js estático, sin límites ni marca de agua, desplegado en GitHub Pages.

## Editar contenido

Todo el contenido (nombre, tagline, secciones, enlaces) vive en `src/data/links.ts`. Edita ese archivo y haz push a `main` — el workflow de GitHub Actions reconstruye y despliega automáticamente.

## Desarrollo local

```bash
npm install
npm run dev
```

## Deploy

Automático vía `.github/workflows/deploy.yml` en cada push a `main`, publicado en:

```
https://kevinho71.github.io/link-roots/
```
