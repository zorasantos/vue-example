<template>
  <button class="btn-style" @click="$emit('onBtnClick', label)">
    {{ label }}
    <img :src="imgButton" />
  </button>
</template>

<script>
export default {
  data: () => {
    return {
      img: require('../../assets/backspace.png')
    }
  },
  props: {
    label: {},
    imgBtn: { type: Boolean }
  },
  computed: {
    imgButton() {
      return this.imgBtn == true ? this.img : ''
    }
  }
}
</script>

<style scoped>
  .btn-style {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    margin: 2px;
    outline: none;
  }
  .btn-style:active {
    background-color: #CCC;
  }
</style>