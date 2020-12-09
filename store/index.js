import pluralize from 'pluralize'

export const strict = true

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
  isLoading: (state) => state.isLoading !== 0,
}

export const actions = {
  loadingStart({ commit }) {
    commit('LOADING_START')
  },
  loadingStop({ commit }) {
    commit('LOADING_STOP')
  },
  loadingAllow({ commit }, value) {
    commit('LOADING_ALLOW', value)
  },
  async nuxtServerInit({ commit, dispatch }, context) {
    if (context.route.name === 'products') {
      let filters = {}

      Object.keys(context.query).map((key, index) => {
        let val = context.query[key].split(',')

        if (key === 'q' || key === 'sort') {
          val = context.query[key]
        }

        filters[key] = val
      })

      commit(pluralize.singular(context.route.name) + '/SET_FILTERS', filters)
    }

    const ft = context.app.$cookiz.get('ft')
    const frt = context.app.$cookiz.get('frt')
    const locale = context.app.$cookiz.get('locale')

    if (ft) {
      commit('auth/AUTH_UPDATE_TOKEN', ft)
    }

    if (frt) {
      commit('auth/AUTH_UPDATE_REFRESH_TOKEN', frt)
    }

    if (locale) {
      commit('SET_LOCALE', locale)
    }

    await dispatch('category/getItems')
  },
}
