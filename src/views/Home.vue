<template>
  <v-container>
      <v-card class="pa-5">
        <router-link to="/tab">
          <v-row justify="center"><h4 class="title text-uppercase font-weight-regular">Tab Component</h4></v-row>
        </router-link>
        <Tab />
      </v-card>
    <CardList />
  </v-container>
</template>

<script>
const CardList = () => import('../components/Home/CardList')
const Tab = () => import('../components/Tabs/Tab')
export default {
  name: 'Home',
  components: { CardList, Tab }
}
</script>
<style scoped>
  a {
    text-decoration: none;
  }
  .title {
    color: #36393a;
    font-size: 14px;
  }
</style>