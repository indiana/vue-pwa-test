<template>
  <h2>Remote items</h2>
  <ul>
    <li v-for="item in items" v-bind:key="item.index">{{item.code}}</li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ItemListRemote',
  data () {
    return {
      items: []
    }
  },
  computed: {
  },
  async created () {
    axios.get('http://localhost:5100/items')
      .then(response => {
        response.data.forEach(element => {
          this.items.push(element)
        })
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
