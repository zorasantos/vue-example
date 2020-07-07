<template>
  <v-container>
    <CardList />
  </v-container>
</template>

<script>
const CardList = () => import('../components/Home/CardList')
export default {
  name: 'Home',
  components: { CardList }
}
</script>
<style scoped>
</style>