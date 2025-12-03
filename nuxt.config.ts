// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Inter:wght@400;500&display=swap'
        }
      ]
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            yoga: {
              'primary': '#225761',
              'accent': '#E68257',
              'secondary': '#BDCABF',
              'light': '#F9ECE0',
              'dark': '#2F3E46',
            }
          },
          fontFamily: {
            'heading': ['Montserrat', 'sans-serif'],
            'body': ['Inter', 'system-ui', 'sans-serif']
          }
        }
      }
    }
  }
})
