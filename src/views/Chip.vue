<template>
  <v-container>
    <div class="div-chip">
      <z-chip class="color-chip" text="Default Chip"/>
      <z-chip color="red" text="Red Chip"/>
      <z-chip color="green">Grenn Chip</z-chip>
      <z-chip color="blue">Blue Chip</z-chip>
      <z-chip color="#E91E63">Pink Chip</z-chip>

    </div>
  </v-container>
</template>

<script>
const Chip = () => import('../components/Chip/Chip')
export default {
  components: { 'z-chip': Chip }
}
</script>

<style scoped>
  .div-chip {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    background-color: #FFF;
    height: 400px;
  }
  .color-chip {
    color: grey !important;
  }
</style>