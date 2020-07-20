<template>
  <v-app class="app-style">
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
<style>
  .main {
    background-color: #ecebeb;
    box-sizing: border-box;
  }
</style>
