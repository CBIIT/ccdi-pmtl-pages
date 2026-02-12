# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:


## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# ccdi-pmtl-pages

React + Vite app for PMTL pages.

## Local development

Install dependencies and start the dev server:

	npm install --legacy-peer-deps
	npm run dev

Build and preview a production build locally:

	npm install --legacy-peer-deps
	npm run build
	npm run preview

Note: this repo uses Material UI v4 which has peer-dependency constraints; using `--legacy-peer-deps` avoids npm resolution failures.

## Host on GitHub Pages

This repo deploys to GitHub Pages via GitHub Actions.

### 1) Repo settings

In GitHub:

1. Go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

### 2) Deployment workflow

The workflow is in `.github/workflows/deploy-pages.yml`.

On every push to the `main` branch, it:

1. Runs `npm ci --legacy-peer-deps`
2. Runs `npm run build` (Vite outputs to `dist/`)
3. Uploads `dist/` and deploys it to GitHub Pages

### 3) URL

After the workflow completes, your site will be available at:

`https://<owner>.github.io/<repo>/`

### 4) Vite base path

GitHub Pages project sites are served under `/<repo>/`.

This repo already configures Vite to work on Pages by setting `base` from `GITHUB_REPOSITORY` in `vite.config.js`.
