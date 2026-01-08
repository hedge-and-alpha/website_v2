import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/scripts"],
  scripts: {
    registry: {
      googleAnalytics: {
        id: "G-KEWLN4BNV5",
      },
    },
  },
  runtimeConfig: {
    public: {
      mgrBaseURL: "https://app.colloafrica.com/mgr",
      apiBaseURL: "https://live-collo-backend.colloafrica.com/api/v1",
    },
  },
  vite: {
    build: {
      rollupOptions: {
        external: ["unenv/runtime/mock/noop"],
      },
    },
  },
  nitro: {
    rollupConfig: {
      external: ["unenv/runtime/mock/noop"],
    },
  },
});
