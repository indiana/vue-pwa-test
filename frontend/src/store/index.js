import axios from 'axios'
import { createStore } from 'vuex'
import itemsdb from '../idb/items'
import paths from '../const/api'

export default createStore({
  state: {
    localItems: [],
    remoteitems: []
  },
  getters: {
    getLocalItems: (state) => {
      return state.localItems
    },
    getRemoteItems: (state) => {
      return state.remoteItems
    }
  },
  mutations: {
    addLocalItemAndSave: (state, data) => {
      const item = { code: data }
      state.localItems.push(item)
      itemsdb.saveItem(item)
    },
    clearLocalItems: (state) => {
      state.localItems = []
    },
    clearRemoteItems: (state) => {
      state.remoteItems = []
    },
    addLocalItem: (state, item) => {
      state.localItems.push(item)
    },
    addRemoteItem: (state, item) => {
      state.remoteItems.push(item)
    }
  },
  actions: {
    async getLocalItemsFromDb (state) {
      itemsdb.getItems().then((result) => {
        result.forEach(element => {
          this.commit('addLocalItem', element)
        })
      })
    },
    async getRemoteItemsFromApi (state) {
      axios.get(paths.item.list).then(response => {
        response.data.forEach(element => {
          this.commit('addRemoteItem', element)
        })
      })
    },
    async addRemoteItem (state, data) {
      axios.post(paths.item.add, { code: data }).then(() => {
        this.commit('addRemoteItem', data)
      }).catch(() => {
        this.commit('addLocalItemAndSave', data)
      })
    }
  },
  modules: {
  }
})
