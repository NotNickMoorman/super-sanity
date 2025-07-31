// @ts-check
import alpine from "@astrojs/alpinejs";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  integrations: [alpine()],
  vite: {
    plugins: [tailwindcss()],
  },
});
