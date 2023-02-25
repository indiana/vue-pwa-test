import { createStore } from 'vuex'

export default createStore({
  state: {
    items: []
  },
  getters: {
    getItems: (state) => {
      return state.items
    }
  },
  mutations: {
    addItem: (state, data) => {
      state.items.push({ code: data })
    }
  },
  actions: {
  },
  modules: {
  }
})
