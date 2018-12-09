import Vuex from 'vuex'
import cookie from 'cookie'
import axios from '../interceptor'

const createStore = () => {
  return new Vuex.Store({
    state: {
      categories: [],
      products: [],
      product: {},
      locales: ['en', 'ru'],
      locale: 'en'
    },
    mutations: {
      SET_LOCALE(state, locale) {
        if (state.locales.includes(locale)) {
          state.locale = locale
        }
      },
      SET_CATEGORIES(state, categories) {
        state.categories = categories
      },
      SET_PRODUCTS(state, products) {
        state.products = products
      },
      SET_PRODUCT(state, product) {
        state.product = product
      }
    },
    getters: {
      categories: state => state.categories,
      products: state => state.products['hydra:member'],
      productsTotal: state => ~~state.products['hydra:totalItems'],
      product: state => state.product
    },
    actions: {
      getCategories ({commit}) {
        let url = process.env.NUXT_ENV_API_URL + '/frontend/categories'

        return axios.get(url)
          .then(response => {
            commit('SET_CATEGORIES', response.data['hydra:member'])
          })
      },
      getProducts ({commit}, params) {
        let url = process.env.NUXT_ENV_API_URL + '/frontend/products'

        return axios.get(url, {params: params})
          .then(response => {
            commit('SET_PRODUCTS', response.data)
          })
      },
      getProduct ({commit}, id) {
        let url = process.env.NUXT_ENV_API_URL + '/frontend/products/' + id

        return axios.get(url)
          .then(response => {
            commit('SET_PRODUCT', response.data)
          })
      },
      async nuxtServerInit ({ commit, dispatch }, { req }) {
        if (req.headers.cookie) {
          let cookies = cookie.parse(req.headers.cookie)

          if (cookies.locale) {
            commit('SET_LOCALE', cookies.locale)
          }
        }

        await dispatch('getCategories')
      }
    }
  })
}

export default createStore
