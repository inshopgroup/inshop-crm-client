export const state = () => ({
  item: null,
  items: {},
})

export const mutations = {
  SET_ITEM(state, item) {
    state.item = item
  },
  SET_ITEMS(state, items) {
    state.items = items
  },
}

export const getters = {
  item: state => state.item,
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
  getItem({commit}, slug) {
    let url = process.env.NUXT_ENV_API_URL + '/frontend/categories/' + slug

    return this.$axios.get(url)
      .then(response => {
        commit('SET_ITEM', response.data)
      })
  }
}
