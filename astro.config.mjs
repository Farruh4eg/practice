import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  server: { port: 8080 },
  integrations: [svelte(), tailwind()],
});
