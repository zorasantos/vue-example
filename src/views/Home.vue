<template>
  <v-container class="home">
    <button
      type="button"
      class="btn"
      @click="showModal"
    >
      Abrir Modal
    </button>
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
export default {
  name: 'Home',
  components: { Dialog },
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