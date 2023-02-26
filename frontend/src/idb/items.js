import DB from './db'

export default {

  async getItems () {
    const db = await DB.getDb()
    return new Promise(resolve => {
      const trans = db.transaction(['items'], 'readonly')
      trans.oncomplete = () => {
        resolve(items)
      }
      const store = trans.objectStore('items')
      const items = []

      store.openCursor().onsuccess = e => {
        const cursor = e.target.result
        if (cursor) {
          items.push(cursor.value)
          cursor.continue()
        }
      }
    })
  },

  async saveItem (item) {
    const db = await DB.getDb()

    return new Promise(resolve => {
      const trans = db.transaction(['items'], 'readwrite')
      trans.oncomplete = () => {
        resolve()
      }

      const store = trans.objectStore('items')
      store.put(item)
    })
  }
}
