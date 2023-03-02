<template>
  <h2>Remote items</h2>
  <ul>
    <li v-for="item in getRemoteItems" v-bind:key="item.index">{{item.code}}</li>
  </ul>
</template>
<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const getRemoteItems = computed(() => store.getters.getRemoteItems)
const getRemoteItemsFromApi = () => store.dispatch('getRemoteItemsFromApi')
const clearRemoteItems = () => store.commit('clearRemoteItems')
onMounted(() => {
  clearRemoteItems()
  getRemoteItemsFromApi()
})
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
