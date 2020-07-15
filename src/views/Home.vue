<template>
  <v-container>
    <!-- {{ data }} -->
    <CardList />
  </v-container>
</template>

<script>
const CardList = () => import('../components/Home/CardList')
// import axios from 'axios'
export default {
  name: 'Home',
  components: { CardList },
  data: () => {
    return {
      data: {}
    }
  },
  // mounted() {
  //   axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     .then(res => this.data = res.data)
  // }
}
</script>
<style scoped>
</style>