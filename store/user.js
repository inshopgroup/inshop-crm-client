export const state = () => ({
  item: {},
  errors: {},
})

export const mutations = {
  SET_ITEM(state, item) {
    state.item = item
  },
  UPDATE_ITEM(state, item) {
    state.item = Object.assign({}, state.item, item)
  },
  SET_ERRORS(state, errors) {
    state.errors = errors
  }
}

export const getters = {
  item: state => state.item,
  errors: state => state.errors,
}

export const actions = {
  processErrors ({commit}, data) {
    if (data.violations) {
      let errors = {}

      data.violations.map(violation => {
        Object.assign(errors, {[violation.propertyPath]: violation.message})
      })

      commit('SET_ERRORS', errors)
    }

    throw data
  },
  get ({commit}, id) {
    let url = process.env.NUXT_ENV_API_URL + '/profile/users'

    return this.$axios.get(url)
      .then(response => {
        commit('SET_ITEM', response.data)
      })
  },
  update ({ state, commit, dispatch }) {
    commit('SET_ERRORS', {})

    let url = process.env.NUXT_ENV_API_URL + '/profile/users/' + state.item.id

    return this.$axios.put(url, state.item)
      .then(response => response.data)
      .catch(e => {
        dispatch('processErrors', e.response.data)
      })
  },
  add ({ state, commit, dispatch }) {
    commit('SET_ERRORS', {})

    let url = process.env.NUXT_ENV_API_URL + '/frontend/profile/users'

    return this.$axios.post(url, state.item)
      .then(response => response.data)
      .catch(e => {
        dispatch('processErrors', e.response.data)
      })
  },
  remindPassword ({ state, commit, dispatch }) {
    commit('SET_ERRORS', {})

    let url = process.env.NUXT_ENV_API_URL + '/frontend/remind/password'

    return this.$axios.post(url, state.item)
      .then(response => response.data)
      .catch(e => {
        dispatch('processErrors', e.response.data)
      })
  }
}
