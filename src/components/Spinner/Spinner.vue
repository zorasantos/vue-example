<template>
  <div
    class="spinner"
    :style="{
      'border-top': `2px solid ${this.spinners.color = color }`,
      'border-left': `2px solid ${this.spinners.color = color }`,
      width: this.spinners.width = width,
      height: this.spinners.height = height,
    }" />
</template>

<script>
export default {
  data () {
    return {
      spinners: {
        color: '',
        width: '',
        height: ''
      }
    }
  },
  props: {
    color: { type: String },
    width: { type: String || Number },
    height: { type: String || Number } }
}
</script>

<style scoped>
  .spinner {
    border: 2px solid #FFF;
    border-top: 2px solid #435B71;
    border-left: 2px solid #435B71;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: spin 0.7s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>