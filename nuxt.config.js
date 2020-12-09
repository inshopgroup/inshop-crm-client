const webpack = require('webpack')
const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap',
      },
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [{ src: '~assets/scss/main.scss', lang: 'scss' }],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/axios'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    [
      'nuxt-i18n',
      {
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            iso: 'en_US',
            name: 'English',
            file: 'en.js'
          },
          {
            code: 'ru',
            iso: 'ru_RU',
            name: 'Russian',
            file: 'ru.js'
          },
          {
            code: 'de',
            iso: 'de',
            name: 'German',
            file: 'de.js'
          },
          {
            code: 'it',
            iso: 'it',
            name: 'Italian',
            file: 'it.js'
          },
          {
            code: 'es',
            iso: 'es',
            name: 'Spanish',
            file: 'es.js'
          },
          {
            code: 'fr',
            iso: 'fr',
            name: 'French',
            file: 'fr.js'
          },
          {
            code: 'pl',
            iso: 'pl',
            name: 'Polish',
            file: 'pl.js'
          }
        ],
        lazy: true,
        langDir: 'lang/'
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    debug: false,
    proxy: true,
  },

  proxy: {
    '/api/proxy': {
      target: process.env.NUXT_ENV_API_PROXY_URL,
      pathRewrite: { '/api/proxy': '' },
      changeOrigin: true,
      headers: {
        Connection: 'keep-alive',
      },
      onProxyReq: function log(proxyReq, req, res) {
        //  console.log(req.body)
        // console.log(proxyReq.getHeader('Content-Type'))

        if (!req.body || !Object.keys(req.body).length) {
          return
        }

        const contentType = proxyReq.getHeader('Content-Type')
        const writeBody = (bodyData) => {
          proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData))
          proxyReq.write(bodyData)
        }
        if (
          contentType.includes('application/json') ||
          contentType.includes('application/x-www-form-urlencoded')
        ) {
          writeBody(JSON.stringify(req.body))
        }
      },
    },
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    treeShake: true,
    customVariables: ['~/assets/scss/variables.scss'],
    optionsPath: './vuetify.options.js',
    defaultAssets: {
      font: {
        family: 'Source Sans Pro',
      },
    },
  },

  /*
   ** Build configuration
   */
  build: {
    analyze: false,

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }

      config.node = {
        fs: 'empty',
        net: 'empty',
      }
    },
  },
  router: {
    linkActiveClass: 'active',
    middleware: 'locale'
  }
}
