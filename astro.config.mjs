import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://resilient-horse-c2ac8a.netlify.app/",
  integrations: [preact()]
});