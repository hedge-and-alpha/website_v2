// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      mgrBaseURL: process.env.MGR_BASE_URL || "https://app.colloafrica.com/mgr",
      apiBaseURL: process.env.API_BASE_URL || "https://live-server.colloafrica.com/api/v1",
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/scripts'],
  scripts: {
    registry: {
      googleAnalytics: {
        id: 'G-KEWLN4BNV5',
      }
    }
  }
})