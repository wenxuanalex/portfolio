// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Absolute URLs for canonical + Open Graph tags.
  site: 'https://wenxuanalex.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});