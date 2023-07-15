import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), react(), vue(), robotsTxt(),AstroPWA()]
});