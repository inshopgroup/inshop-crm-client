import Vue from 'vue'

export const state = () => ({
  item: null,
  items: {},
  filters: {},
})

export const mutations = {
  SET_ITEM(state, item) {
    state.item = item
  },
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_FILTERS(state, filters) {
    Object.keys(filters).map((key, index) => {
      Vue.set(state.filters, key, filters[key]);
    })
  }
}

export const getters = {
  item: state => state.item,
  items: state => state.items['hydra:member'],
  itemsTotal: state => state.items['hydra:totalItems'],
  aggregations: state => state.items['hydra:aggregations'],
  filters: state => state.filters,
  query: (state, getters) => {
    let values = {};

    Object.keys(getters.filters).map((key, index) => {
      if ((key === 'q' || key === 'sort') && getters.filters[key]) {
        values[key] = getters.filters[key]
      } else {
        if (getters.filters[key].length) {
          values[key] = getters.filters[key].join(',')
        }
      }
    })

    return values;
  }
}

export const actions = {
  getItems({commit}, params) {
    let url = process.env.NUXT_ENV_API_URL + '/frontend/products'

    return this.$axios.get(url, {params: params})
      .then(response => {
        commit('SET_ITEMS', response.data)
      })
  },
  getItem({commit}, id) {
    let url = process.env.NUXT_ENV_API_URL + '/frontend/products/' + id

    return this.$axios.get(url)
      .then(response => {
        commit('SET_ITEM', response.data)
      })
  }
}
