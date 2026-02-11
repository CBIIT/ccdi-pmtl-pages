import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')?.[1]
  return {
    // For GitHub Pages project sites, assets must be served under /<repo>/
    base: repo ? `/${repo}/` : '/',
    plugins: [react()],
  }
})
