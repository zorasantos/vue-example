<template>
  <v-container>
    <v-card class="mb-5">
      <v-col>
        <v-row justify="end" class="mr-2">
          <v-card-actions>
            <v-btn
              class="btn-code"
              small
              @click="isVisibleCode = !isVisibleCode"
            >
              Ver código
            </v-btn>
          </v-card-actions>
        </v-row>
        <v-row justify="center" class="pa-2">
          <z-alert class="mb-3" text="Eu sou um alerta de sucesso!" type="success" />
          <z-alert class="mb-3" text="Eu sou um alerta de informação!" type="info" />
          <z-alert class="mb-3" text="Eu sou um alerta de warning!" type="warning" />
          <z-alert text="Eu sou um alerta de error!" type="error" />
        </v-row>
      </v-col>
    </v-card>

    <iframe
      v-if="isVisibleCode"
      src="https://codesandbox.io/embed/dynamic-alert-component-vuejs-vlbhr?fontsize=14&hidenavigation=1&theme=dark"
      style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
      title="Dynamic Alert Component Vue.Js"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </v-container>
</template>

<script>
const Alert = () => import('./Alert')
export default {
  components: { 'z-alert': Alert },
  data: () => {
    return {
      isVisibleCode: false
    }
  }
}
</script>

<style scoped>
  .btn-code {
    background-color: #435B71 !important;
    color: #FFF !important;
  }
</style>