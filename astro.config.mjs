// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dirección pública: se usa para las URLs absolutas (canonical, idiomas y vista previa al compartir)
  site: 'https://arturocespedes.netlify.app',
  vite: {
    plugins: [tailwindcss()]
  }
});
