import { createStore } from 'vuex'
import itemsdb from '../idb/items'

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
    addItemAndSave: (state, data) => {
      const item = { code: data }
      state.items.push(item)
      itemsdb.saveItem(item)
    },
    clearItems: (state) => {
      state.items = []
    },
    addItem: (state, item) => {
      state.items.push(item)
    }
  },
  actions: {
    async getItemsFromDb (state) {
      this.commit('clearItems')
      itemsdb.getItems().then((result) => {
        result.forEach(element => {
          this.commit('addItem', element)
        })
      })
    }
  },
  modules: {
  }
})
