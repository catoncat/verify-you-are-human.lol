export default defineNuxtConfig({
  modules: [
    '@zadigetvoltaire/nuxt-gtm'
  ],
  gtm: {
    enabled: true,
    id: 'GTM-MWDDQJL9',
    defer: true
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
