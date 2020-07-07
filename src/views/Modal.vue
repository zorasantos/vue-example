<template>
  <v-container>
    <ModalDefault />
  </v-container>
</template>

<script>
const ModalDefault = () => import('../components/Modal/ModalDefault')
export default {
  name: 'ModalViews',
  components: { ModalDefault }
}
</script>

<style>

</style>