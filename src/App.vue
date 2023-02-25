<template>
  <h1>DEMO</h1>
  <ScanCode />
  <ItemList />
</template>

<script>
import ScanCode from './components/ScanCode.vue'
import ItemList from './components/ItemList.vue'

export default {
  name: 'App',
  components: {
    ScanCode,
    ItemList
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
