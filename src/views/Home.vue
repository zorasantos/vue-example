<template>
  <v-container class="home">
    <v-card>
      <v-col>
        <v-row justify="center" class="pa-2">
          <Alert class="mb-3" text="Eu sou um alerta de sucesso!" type="success" />
          <Alert class="mb-3" text="Eu sou um alerta de informação!" type="info" />
          <Alert class="mb-3" text="Eu sou um alerta de warning!" type="warning" />
          <Alert text="Eu sou um alerta de error!" type="error" />
        </v-row>
      </v-col>
    </v-card>
    <v-row justify="center" class="mb-5 mt-12">
      <button
        type="button"
        class="btn"
        @click="showModal"
      >
        Abrir Modal
      </button>
    </v-row>
    <Dialog
      v-show="modalVisible"
      @close="closeModal"
      title="Título Padrão"
      text="Conteúdo do modal aqui!"
     />

    <iframe width="100%" height="300"
     src="//jsfiddle.net/zora_santos/jyLem17f/28/embedded/js,html,css,result/dark/"
     allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0">
    </iframe>

  </v-container>
</template>

<script>
const Dialog = () => import('../components/PageTitleDialog/Dialog')
const Alert = () => import('../components/Alert/Alert')
export default {
  name: 'Home',
  components: { Dialog, Alert },
  data () {
    return {
      modalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    }
  },
}
</script>
<style scoped>
  .home {
    color: white;
  }
  .btn {
    background-color: white;
    color: #004D40;
    padding: 5px 20px;
    border-radius: 3px;
  }
  .btn:hover {
    background-color: #00897B;
    color: white;
  }
</style>