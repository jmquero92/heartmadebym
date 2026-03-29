import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // SUSTITUYE ESTA URL POR LA TUYA REAL
  site: 'https://heartmadebym.vercel.app', 
  integrations: [react(), tailwind(), sitemap()]
});