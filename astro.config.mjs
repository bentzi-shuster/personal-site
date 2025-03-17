// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/personal-site/',
  site: "https://bentzi-shuster.github.io/personal-site/",
  
  vite: {
    plugins: [tailwindcss()]
  }
});