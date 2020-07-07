<template>
  <v-container>
    <AlertDefault />
  </v-container>
</template>

<script>
const AlertDefault = () => import('../components/Alert/AlertDefault')
export default {
  components: { AlertDefault }
}
</script>

<style>

</style>