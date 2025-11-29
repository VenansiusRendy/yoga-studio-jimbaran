// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            yoga: {
              'primary-green': '#4A7856',
              'sand': '#D6C7A1',
              'earth': '#A27B5C',
              'cream': '#F7F4EC',
              'ocean-dark': '#2F3E46',
            }
          },
          fontFamily: {
            'sans': ['system-ui', 'sans-serif']
          }
        }
      }
    }
  }
})
