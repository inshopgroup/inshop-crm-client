import Vue from 'vue'

export const state = () => ({
  item: null,
  items: {},
  itemsTotal: 0,
  filters: {},
  aggregations: {}
})

export const mutations = {
  SET_ITEM(state, item) {
    state.item = item
  },
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_ITEMS_TOTAL(state, itemsTotal) {
    state.itemsTotal = itemsTotal
  },
  SET_AGGREGATIONS(state, aggregations) {
    state.aggregations = aggregations
  },
  SET_FILTERS(state, filters) {
    Object.keys(filters).map((key, index) => {
      Vue.set(state.filters, key, filters[key])
    })
  }
}

export const getters = {
  item: state => state.item,
  items: state => state.items,
  itemsTotal: state => state.itemsTotal,
  aggregations: state => state.aggregations,
  filters: state => state.filters,
  query: (state, getters) => {
    let values = {}

    Object.keys(getters.filters).map((key, index) => {
      if ((key === 'q' || key === 'sort') && getters.filters[key]) {
        values[key] = getters.filters[key]
      } else {
        if (getters.filters[key].length) {
          values[key] = getters.filters[key].join(',')
        }
      }
    })

    return values
  }
}

export const actions = {
  getItems({ commit }, params) {
    let url = process.env.NUXT_ENV_API_URL + '/frontend/products'

    return this.$axios.get(url, { params: params }).then(response => {
      commit('SET_ITEMS', response.data['hydra:member'])
      commit('SET_ITEMS_TOTAL', response.data['hydra:totalItems'])
      commit('SET_AGGREGATIONS', response.data['hydra:aggregations'])
    })
  },
  getItem({ commit }, id) {
    let url = process.env.NUXT_ENV_API_URL + '/frontend/products/' + id

    return this.$axios.get(url).then(response => {
      commit('SET_ITEM', response.data)
    })
  }
}
