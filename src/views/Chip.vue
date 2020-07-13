<template>
  <v-container>
    <div class="div-color mb-7">
      <CodeBtn class="pt-5" @showCode="isVisibleCode = !isVisibleCode" />
      <div class="div-chip">
        <z-chip class="color-chip" text="Default Chip"/>
        <z-chip color="red" text="Red Chip"/>
        <z-chip color="green">Grenn Chip</z-chip>
        <z-chip color="blue">Blue Chip</z-chip>
        <z-chip color="#E91E63">Pink Chip</z-chip>
      </div>
    </div>
    <iframe
      v-if="isVisibleCode"
      src="https://codesandbox.io/embed/chips-component-vuejs-mgvjk?fontsize=14&hidenavigation=1&theme=dark"
      style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
      title="Chips Component Vue.Js"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </v-container>
</template>

<script>
const Chip = () => import('../components/Chip/Chip')
const CodeBtn = () => import('../components/Shared/CodeBtn')
export default {
  components: { 'z-chip': Chip, CodeBtn },
  data: () => {
    return {
      isVisibleCode: false
    }
  }
}
</script>

<style scoped>
  .div-color {
    background-color: #FFF;
    border-radius: 5px;
  }
  .div-chip {
    display: flex;
    align-items: center;
    padding: 0px 50px;
    justify-content: space-between;
    background-color: #FFF;
    height: 300px;
  }
  .color-chip {
    color: grey !important;
  }
  @media (max-width: 425px) {
    .div-chip {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 50px 0px;
    }
  }
</style>