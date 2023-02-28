<template>
  <h2>Remote items</h2>
  <ul>
    <li v-for="item in items" v-bind:key="item.index">{{item.code}}</li>
  </ul>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'ItemListRemote',
  data () {
    return {
      items: []
    }
  },
  methods: {
    ...mapActions(['getRemoteItemsFromApi']),
    ...mapGetters(['getRemoteItems']),
    ...mapMutations(['clearRemoteItems'])
  },
  async mounted () {
    this.clearRemoteItems()
    this.getRemoteItemsFromApi().then(() => {
      this.items = this.getRemoteItems()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
