<template>
  <h2>Local items</h2>
  <ul>
    <li v-for="item in items" v-bind:key="item.index">{{item.code}}</li>
  </ul>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'ItemListLocal',
  data () {
    return {
      items: []
    }
  },
  methods: {
    ...mapActions(['getLocalItemsFromDb']),
    ...mapGetters(['getLocalItems']),
    ...mapMutations(['clearLocalItems'])
  },
  async mounted () {
    this.clearLocalItems()
    this.getLocalItemsFromDb().then(() => {
      this.items = this.getLocalItems()
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
