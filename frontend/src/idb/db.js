export default {

  async getDb () {
    const DB_NAME = 'itemsdb'
    const DB_VERSION = 1
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(DB_NAME, DB_VERSION)

      request.onerror = e => {
        console.log('Error opening db', e)
        reject(new Error('Error'))
      }

      request.onsuccess = e => {
        resolve(e.target.result)
      }

      request.onupgradeneeded = e => {
        console.log('onupgradeneeded')
        const db = e.target.result
        db.createObjectStore('items', { autoIncrement: true, keyPath: 'id' })
      }
    })
  }
}
