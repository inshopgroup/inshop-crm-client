export const strict = false

import pluralize from 'pluralize'
import cookie from 'cookie'
// import cookieparser from 'cookieparser'

export const state = () => ({
  isLoading: 0,
  loadingAllow: true,
})

export const mutations = {
  LOADING_START(state) {
    if (state.loadingAllow) {
      state.isLoading += 1
    }
  },
  LOADING_STOP(state) {
    state.loadingAllow = true

    if (state.isLoading > 0) {
      state.isLoading -= 1
    }
  },
  LOADING_ALLOW(state, value) {
    state.loadingAllow = value
  }
}

export const getters = {
  isLoading: state => state.isLoading !== 0,
}

export const actions = {
  loadingStart({commit}) {
    commit('LOADING_START')
  },
  loadingStop({commit}) {
    commit('LOADING_STOP')
  },
  loadingAllow({commit}, value) {
    commit('LOADING_ALLOW', value)
  },
  async nuxtServerInit ({ commit, dispatch }, { query, route, req, $axios }) {
    if (route.name === 'products') {
      let filters = {};

      Object.keys(query).map((key, index) => {
        let val = query[key].split(',')

        if (key === 'q' || key === 'sort') {
          val = query[key]
        }

        filters[key] = val
      })

      commit(pluralize.singular(route.name)+ '/SET_FILTERS', filters)
    }

    if (req.headers.cookie) {
      let cookies = cookie.parse(req.headers.cookie)

      if (typeof cookie.token !== 'undefined') {
        commit('auth/AUTH_UPDATE_TOKEN', cookie.token)
      }

      if (typeof cookie.refreshToken !== 'undefined') {
        commit('auth/AUTH_UPDATE_REFRESH_TOKEN', cookie.refreshToken)
      }

      if (cookies.locale) {
        commit('SET_LOCALE', cookies.locale)
      }
    }

    await dispatch('getCategories')
  }
}


// import Vuex from 'vuex'
// import cookie from 'cookie'
// import axios from '../interceptor'
//
// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       categories: [],
//       locales: ['en', 'ru'],
//       locale: 'en',
//       isLoading: 0,
//       loadingAllow: true,
//     },
//     mutations: {
//       SET_LOCALE(state, locale) {
//         if (state.locales.includes(locale)) {
//           state.locale = locale
//         }
//       },
//       SET_CATEGORIES(state, categories) {
//         state.categories = categories
//       },
//       LOADING_START(state) {
//         if (state.loadingAllow) {
//           state.isLoading += 1
//         }
//       },
//       LOADING_STOP(state) {
//         state.loadingAllow = true
//
//         if (state.isLoading > 0) {
//           state.isLoading -= 1
//         }
//       },
//       LOADING_ALLOW(state, value) {
//         state.loadingAllow = value
//       }
//     },
//     getters: {
//       categories: state => state.categories,
//       isLoading: state => state.isLoading !== 0,
//     },
//     actions: {
//       loadingStart({commit}) {
//         commit('LOADING_START')
//       },
//       loadingStop({commit}) {
//         commit('LOADING_STOP')
//       },
//       loadingAllow({commit}, value) {
//         commit('LOADING_ALLOW', value)
//       },
//       getCategories ({commit}) {
//         let url = process.env.NUXT_ENV_API_URL + '/frontend/categories'
//
//         return axios.get(url)
//           .then(response => {
//             commit('SET_CATEGORIES', response.data['hydra:member'])
//           })
//       },
//
//     }
//   })
// }
//
// export default createStore
