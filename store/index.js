export const strict = true

import pluralize from 'pluralize'
import cookie from 'cookie'

export const state = () => ({
  isLoading: 0,
  loadingAllow: true,
  locales: ['en', 'de', 'pl', 'ru', 'es', 'fr', 'it'],
  locale: 'en',
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
  },
  SET_LOCALE(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
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

      if (cookies.token) {
        commit('auth/AUTH_UPDATE_TOKEN', cookies.token)
      }

      if (cookies.refreshToken) {
        commit('auth/AUTH_UPDATE_REFRESH_TOKEN', cookies.refreshToken)
      }

      if (cookies.locale) {
        commit('SET_LOCALE', cookies.locale)
      }
    }

    await dispatch('category/getItems')
  }
}
