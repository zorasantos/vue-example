<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="modal-container">
          <CodeBtn @showCode="isVisibleCode = !isVisibleCode" />
          <v-card-actions>
            <v-row justify="center">
              <v-btn v-if="modalVisible === false" class="btn" @click="showModal">Abrir Modal</v-btn>
            </v-row>
          </v-card-actions>
          <Modal
            v-show="modalVisible"
            @close="closeModal"
            title="Título Padrão"
            text="Conteúdo do modal aqui!"
          />
        </v-card>
      </v-col>
    </v-row>

    <iframe
      v-if="isVisibleCode"
      src="https://codesandbox.io/embed/default-modal-component-vuejs-q42ye?fontsize=14&hidenavigation=1&theme=dark"
      style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
      title="Default Modal Component Vue.Js"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </v-container>
</template>

<script>
const Modal = () => import('./Modal')
const CodeBtn = () => import('../Shared/CodeBtn')

export default {
  name: 'ModalDefault',
  components: { Modal, CodeBtn },
  props: ['changeButton'],
  data () {
    return {
      modalVisible: true,
      isVisibleCode: false
    }
  },
  methods: {
    showModal() {
      this.modalVisible = true
    },
    closeModal() {
      this.modalVisible = false
    }
  }
}
</script>

<style>
  .btn {
    background-color: #39A576 !important;
    color: #FFF !important
  }
  .btn:hover {
    background-color: #52b88c !important;
    color: white !important;
  }
  .modal-container {
    padding: 8px;
    min-height: 250px;
  }
</style>