const items = [
  {
    id: 1,
    srcImg: 'https://via.placeholder.com/350x350/ffcf5b',
    name: 'Wisozk, Blick and Stehr',
    ean: 123451,
    price: 200,
    total: 200,
    quantity: 1,
  },
  {
    id: 2,
    srcImg: 'https://via.placeholder.com/350x350/930000',
    name: 'Wisozk and Stehr',
    ean: 789123,
    price: 400,
    total: 400,
    quantity: 1,
  },
  {
    id: 3,
    srcImg: 'https://via.placeholder.com/350x350/d3ffce',
    name: 'Blick and Stehr',
    ean: 111111,
    price: 5000,
    total: 5000,
    quantity: 1,
  },
]

export const state = () => ({
  items,
})

export const mutations = {
  SET_ITEMS(state, items) {
    state.items = items
  },
}

export const getters = {
  items: (state) => state.items,
}
