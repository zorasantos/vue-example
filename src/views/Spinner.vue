<template>
  <v-container>
    <v-row justify="center">
      <v-card class="spinner-card">
        <v-row justify="center">
          <Spinner class="mr-3" color="default" />
          <Spinner class="mr-3" color="green" />
          <Spinner class="mr-3" color="red" />
          <Spinner class="mr-3" color="purple" />
          <Spinner class="mr-3" color="deep-purple" />
          <Spinner class="mr-3" color="yellow" />
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
const Spinner = () => import('../components/Spinner/Spinner')
export default {
  name: 'SpinnerView',
  components: { Spinner }
}
</script>

<style scoped>
  .spinner-card {
    max-width: 500px;
    padding: 100px;
  }
</style>