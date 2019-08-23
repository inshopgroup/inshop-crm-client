const pkg = require('./package')
const webpack = require('webpack')

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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/node_modules/bootstrap/dist/css/bootstrap.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios',
    '~/plugins/font-awesome',
    { src: '~/plugins/inshop-form-components', ssr: false },
    { src: '~/plugins/bootstrap', ssr: false },
    { src: '~/plugins/vue-select', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/toast',
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify',
    'cookie-universal-nuxt',
    ['nuxt-i18n', {
      defaultLocale: 'en',
      locales: [{
        code: 'en',
        iso: 'en_US',
        name: 'English',
        file: 'en.js'
      }, {
        code: 'ru',
        iso: 'ru_RU',
        name: 'Russian',
        file: 'ru.js'
      }, {
        code: 'de',
        iso: 'de',
        name: 'German',
        file: 'de.js'
      }, {
        code: 'it',
        iso: 'it',
        name: 'Italian',
        file: 'it.js'
      }, {
        code: 'es',
        iso: 'es',
        name: 'Spanish',
        file: 'es.js'
      }, {
        code: 'fr',
        iso: 'fr',
        name: 'French',
        file: 'fr.js'
      }, {
        code: 'pl',
        iso: 'pl',
        name: 'Polish',
        file: 'pl.js'
      }],
      lazy: true,
      langDir: 'lang/'
    }]
  ],
  toast: {
    position: 'top-right',
    duration: 3000,
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    vendor: ['bootstrap'],

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  router: {
    linkActiveClass: 'active',
    middleware: 'locale'
  }
}
