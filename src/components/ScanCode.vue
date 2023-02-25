<template>
  <input type="text" v-on:keyup.enter="onEnter" v-model="scannedCode" autofocus>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'ScanCode',
  data: () => {
    return {
      scannedCode: ''
    }
  },
  methods: {
    onEnter: function () {
      this.addItem(this.scannedCode)
      this.scannedCode = ''
    },
    ...mapMutations(['addItem'])
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
