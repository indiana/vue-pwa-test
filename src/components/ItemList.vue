<template>
  <ul>
    <li v-for="item in items" v-bind:key="item.index">{{item.code}}</li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ItemList',
  data () {
    return {
      items: []
    }
  },
  computed: {
  },
  methods: {
    ...mapActions(['getItemsFromDb']),
    ...mapGetters(['getItems'])
  },
  async created () {
    await this.getItemsFromDb()
    this.items = this.getItems()
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
