module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Inshop eCommerce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic' }
    ],
    script: [
      { src: '/js/jquery.min.js' },
      { src: '/js/tether.min.js' },
      { src: '/js/bootstrap.min.js' },
      { src: '/js/bootstrap-hover-dropdown.min.js' },
      { src: '/js/common.js' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '~assets/css/bootstrap.min.css',
    '~assets/css/bootstrap-add.css',
    '~assets/css/font-awesome.min.css',
    '~assets/css/font-electro.min.css',
    { src: '~assets/sass/style.scss', lang: 'scss' },
    '~assets/css/colors/yellow.css',
  ],
  router: {
    middleware: 'locale'
  },
  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/dotenv',
    ['nuxt-i18n', {
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
        }
      ],
      lazy: true,
      langDir: 'lang/'
    }]
  ]
}

