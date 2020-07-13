<template>
  <div
    class="chip"
    :style="{ 'background-color': `${this.chips.color = color }` }">
    <slot>{{ text }}</slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chips: {
        color: ''
      }
    }
  },
  props: {
    color: {
      type: String
    },
    text: {
      type: String,
    }
  }
}
</script>

<style scoped>
  .chip {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    padding: 0px 20px;
    height: 40px;
    font-size: 14px;
    border-radius: 50px;
    color: #FFF;
    opacity: 0.7;
    background-color: rgba(241,241,241,1);
  }
</style>