<template>
  <v-container>
    <button :class="type" :style="disabledBtn" class="btn">
      <slot></slot>
    </button>
  </v-container>
</template>

<script>
export default {
  props: {
    type: String,
    disabled: Boolean,
    success: {
      backgroundColor: '#5AB55E',
      color: '#fff'
    }
  },
  computed: {
    disabledBtn() {
      return this.disabled == true ?
      {
        backgroundColor: '#E0E0E0 !important',
        opacity: '0.5',
        cursor: 'not-allowed !important',
        'pointer-events': 'none'
      } : ''
    }
  }
}
</script>

<style scoped>
  .btn {
    width: 150px;
    height: 40px;
    border-radius: 3px;
    background-color: #EAEAEA;
    color: #000;
    outline: none;
  }
  .btn:hover {
    opacity: 0.8;
  }
</style>