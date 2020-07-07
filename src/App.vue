<template>
  <v-app>
    <TopBar />
    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
const TopBar = () => import('../src/components/TopBar/TopBar')
export default {
  name: 'App',
  components: { TopBar },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
  .main {
    background-color: #F8F8F8;
  }
</style>
