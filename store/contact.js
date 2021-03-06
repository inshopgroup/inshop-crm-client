import * as crud from '~/utils/crud'

const defaultState = () => ({
  item: {
    isActive: true,
  },
  items: [],
  error: null,
  errors: {},
})

export const state = () => defaultState()

export const mutations = {
  CONTACT_SET_ITEM(state, item) {
    Object.assign(state, { item })
  },
  CONTACT_UPDATE_ITEM(state, item) {
    state.item = Object.assign({}, state.item, item)
  },
  CONTACT_SET_ITEMS(state, items) {
    Object.assign(state, { items })
  },
  CONTACT_SET_ERROR(state, error) {
    Object.assign(state, { error })
  },
  CONTACT_SET_ERRORS(state, errors) {
    Object.assign(state, { errors })
  },
  CONTACT_RESET(state) {
    Object.assign(state, defaultState())
  },
}

export const getters = {
  item: (state) => state.item,
  items: (state) => state.items,
  error: (state) => state.error,
  errors: (state) => state.errors,
}

export const actions = {
  getItem(context, id) {
    return crud.getItem(context, this.$axios, 'CONTACT', id)
  },
  getItems(context, query) {
    return crud.getItems(context, this.$axios, 'CONTACT', query)
  },
  create(context) {
    return crud.create(context, this.$axios, 'CONTACT')
  },
  update(context) {
    return crud.update(context, this.$axios, 'CONTACT')
  },
  remove(context, item) {
    return crud.remove(context, this.$axios, 'CONTACT', item)
  },
  reset(context) {
    return crud.reset(context, 'CONTACT')
  },
}
