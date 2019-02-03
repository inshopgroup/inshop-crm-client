import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

export const state = () => ({
  token: null,
  refreshToken: null,
  type: null,
  error: null,
})

export const mutations = {
  AUTH_UPDATE_TOKEN (state, data) {
    Cookie.set('token', data)
    state.token = data
  },
  AUTH_UPDATE_REFRESH_TOKEN (state, data) {
    Cookie.set('refreshToken', data)
    state.refreshToken = data
  },
  AUTH_ERROR_CHANGE (state, error) {
    state.error = error
  },
  AUTH_RESET (state) {
    Cookie.remove('token')
    Cookie.remove('refreshToken')

    state.token = null
    state.refreshToken = null
    state.error = null
  }
}

export const getters = {
  jwtDecoded: state => {
    let token = state.token || null
    if (token !== null) {
      return jwtDecode(state.token)
    }
  },
  refreshToken: state => state.refreshToken,
  error: state => state.error,
  id: (state, getters) => {
    if (getters.jwtDecoded) {
      return getters.jwtDecoded.id
    }
  }
}

export const actions = {
  login ({ commit }, data) {
    commit('AUTH_ERROR_CHANGE', null)

    let link = process.env.NUXT_ENV_API_URL + '/login'

    return this.$axios.post(link, data).
      then(response => {
        commit('AUTH_UPDATE_TOKEN', response.data.token)
        commit('AUTH_UPDATE_REFRESH_TOKEN', response.data.refresh_token)
      })
      .catch(error => {
        commit('AUTH_ERROR_CHANGE', 'Username or password is incorrect')
        throw error
      })
  },
  refreshToken ({ commit, getters }) {
    let link = process.env.NUXT_ENV_API_URL + '/frontend/token/refresh'

    return this.$axios.post(link, {refresh_token: getters.refreshToken}).
      then(response => {
        commit('AUTH_UPDATE_TOKEN', response.data.token)

        return response
      })
  },
  loginByToken ({ commit, getters }, token) {
    let link = process.env.NUXT_ENV_API_URL + '/frontend/login/' + token

    return this.$axios.get(link).
      then(response => {
        commit('AUTH_UPDATE_TOKEN', response.data.token)
        commit('AUTH_UPDATE_REFRESH_TOKEN', response.data.refresh_token)

        return response
      }).catch(e => {
        throw e
    })
  },
  logout ({ commit }) {
    commit('AUTH_RESET')
  }
}
