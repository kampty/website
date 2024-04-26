import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import qwikdev from "@qwikdev/astro";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://ivanporto.io",
  srcDir: "source",
  outDir: "build",
  output: "static",

  compressHTML: true,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    qwikdev(),
    sitemap(),
    robotsTxt(),
  ],

  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
});
