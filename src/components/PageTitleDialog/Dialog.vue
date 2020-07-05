<template>
  <transition name="modal-fade">
    <div class="modal-container">
      <div class="modal">
        <header class="modal-header">
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <p>
            {{ text }}
          </p>
        </slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <button
            type="button"
            class="btn-close"
            @click="close"
          >
            Fechar
          </button>
        </slot>
      </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
  .modal-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 500px;
    border-radius: 3px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    color: grey;
    justify-content: space-between;
  }

  .modal-footer {
    justify-content: flex-end;
  }

  .modal-body {
    color: grey;
    position: relative;
    padding: 20px 10px;
    margin-left: 6px;
  }
  .btn-close {
    color: #4DB6AC;
    background: #E0F2F1;
    padding: 5px 20px;
    border-radius: 3px;
  }
  .btn-close:hover {
    background-color: #4DB6AC;
    color: white;
  }

  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .10s ease
  }
</style>