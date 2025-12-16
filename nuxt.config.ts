// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      mgrBaseURL: "https://app.colloafrica.com/mgr",
      apiBaseURL: "https://live-server.colloafrica.com/api/v1",
    },
  },
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
});
