import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://giovaninb.github.io",
  base: "/bahrista-web/",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
});
