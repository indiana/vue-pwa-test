<template>
  <h1>DEMO</h1>
  <ScanCode @scan-code="forceRefreshRemote" />
  <ItemListLocal />
  <ItemListRemote :key="itemListRemoteKey" />
</template>

<script>
import ScanCode from './components/ScanCode.vue'
import ItemListLocal from './components/ItemListLocal.vue'
import ItemListRemote from './components/ItemListRemote.vue'

export default {
  name: 'App',
  data () {
    return {
      itemListRemoteKey: 0
    }
  },
  methods: {
    forceRefreshRemote () {
      console.log('refreshing')
      this.itemListRemoteKey += 1
    }
  },
  components: {
    ScanCode,
    ItemListLocal,
    ItemListRemote
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
