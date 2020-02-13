export const state = () => ({
  item: {}
})

export const mutations = {
  SET_ITEM(state, item) {
    state.item = item
  }
}

export const getters = {
  item: state => state.item
}

export const actions = {
  getItem({ commit, getters }, slug) {
    let url = process.env.NUXT_ENV_API_URL + '/frontend/text/' + slug

    return this.$axios.get(url).then(response => {
      commit('SET_ITEM', response.data)
    })
  }
}
