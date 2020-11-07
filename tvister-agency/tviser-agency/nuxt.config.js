export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  loading: false,
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    meta: [
      // {name: "robots", content: "index, follow"},
      // {name: "googlebot", content: "index, follow"},
      {'http-equiv': 'X-UA-Compatible', content: 'ie=edge'},
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0 user-scalable=0 minimum-scale=1.0' },
      {property: "og:type", content: "website"},
      {property: "og:site_name", content: "Tviser"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {src: '~/plugins/directives.js'},
    {src: '~/plugins/mask.js'},
    {src: '~/plugins/swiper.js'},
    {src: '~/plugins/components'},
    {src: '~/plugins/anime.js'},
    {src: '~/plugins/bus.js'}
  ],

  router: {
    middleware: 'router'
  },
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'vue-scrollto/nuxt',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          sm: 400,
          md: 1250,
          lg: Infinity
        }
      }
    ],
    [
      'nuxt-i18n',
      {
        noPrefixDefaultLocale: true,
        locales: [
          {code: 'en', iso: 'en-US', file: 'en.json'},
          {code: 'az', iso: 'az-AZ', file: 'az.json'},
          {code: 'de', iso: 'de-DE', file: 'de.json'},
          {code: 'ru', iso: 'ru-RU', file: 'ru.json'}
        ],
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        },
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en'
        },
        lazy: true,
        langDir: 'locales/'
      },
    ],
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
}
