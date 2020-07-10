<template>
  <!-- <v-container> -->
    <v-row justify="center">
      <v-card class="card-container">
        <z-btn type="success">Submit</z-btn>
      </v-card>
    </v-row>
  <!-- </v-container> -->
</template>

<script>
const Button = () => import('../components/Button/Button')
export default {
  components: { 'z-btn': Button }
}
</script>

<style scoped>
  .card-container {
    display: flex;
    align-items: center;
    width: 400px;
    height: 300px;
  }
</style>