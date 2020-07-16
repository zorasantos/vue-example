<template>
  <v-container>
    <ProductEcommerce />
    <SimpleCard />
  </v-container>
</template>

<script>
const ProductEcommerce = () => import('../components/Cards/ProductEcommerce')
const SimpleCard = () => import('../components/Cards/SimpleCard')
export default {
  components: { ProductEcommerce, SimpleCard }
}
</script>

<style>

</style>