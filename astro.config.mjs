import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://eugene55555.github.io',
  base: '/ffl-book',
  outDir: 'dist',
  vite: {
    plugins: [tailwindcss()],
  },
});
