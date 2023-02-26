<template>
  <h1>DEMO</h1>
  <ScanCode />
  <ItemListLocal />
  <ItemListRemote />
</template>

<script>
import ScanCode from './components/ScanCode.vue'
import ItemListLocal from './components/ItemListLocal.vue'
import ItemListRemote from './components/ItemListRemote.vue'

export default {
  name: 'App',
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
