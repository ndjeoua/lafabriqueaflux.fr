import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://lafabriqueaflux.fr/",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    build: { sourcemap: "inline", minify: false },
  },
  prefetch: true,
});
