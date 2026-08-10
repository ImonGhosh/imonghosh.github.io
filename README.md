# imonghosh.github.io

Starter portfolio site for Imon Ghosh, built with the same general stack as the
reference project:

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

This version intentionally omits music playback and the AI chat assistant.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, builds the Vite app,
and publishes `dist/` to GitHub Pages.

In GitHub, set:

```text
Settings -> Pages -> Source -> GitHub Actions
```

## Where To Edit Content

Most placeholder content lives in:

```text
src/data/profile.ts
```
