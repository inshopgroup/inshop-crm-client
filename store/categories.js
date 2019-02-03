import Vue from 'vue'

export const state = () => ({
  items: {},
})

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
}

export const getters = {
  items: state => state.items['hydra:member'],
}

export const actions = {
  getItems({commit}, params) {
    let url = process.env.NUXT_ENV_API_URL + '/frontend/categories'

    return this.$axios.get(url, {params: params})
      .then(response => {
        commit('SET_ITEMS', response.data)
      })
  },
}
