import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

const copy404Plugin = (): Plugin => ({
  name: 'copy-404-for-github-pages',
  closeBundle() {
    const distDir = path.resolve(import.meta.dirname, 'dist');
    const indexHtml = path.join(distDir, 'index.html');
    const notFoundHtml = path.join(distDir, '404.html');
    if (fs.existsSync(indexHtml)) {
      fs.copyFileSync(indexHtml, notFoundHtml);
    }
  },
});

export default defineConfig(() => {
  // In GitHub Actions, process.env.GITHUB_REPOSITORY is "owner/repo"
  // For GitHub Pages, this ensures assets load from "/<repo>/" even without trailing slashes
  const ghRepo = process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : './';
  const base = process.env.BASE_PATH || ghRepo;

  return {
    base,
    plugins: [react(), tailwindcss(), copy404Plugin()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
