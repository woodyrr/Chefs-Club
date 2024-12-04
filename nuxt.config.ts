// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/supabase",
    '@nuxt/image',
    'nuxt-resend'
  ],
  // nitro: {
  //   preset: 'node-server', // Or adjust for your deployment target
  // },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL
    },
  },
  
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm',
    },
  },

})