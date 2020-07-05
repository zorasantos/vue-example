<template>
  <div class="alert" v-bind:style="{ 'background-color': alerts[type].color, 'color': '#FFF' }">
    <div class="alert-items">
      <img :src="alerts[type].icon" />
      <span>{{ text }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      alerts: {
        success: {
          icon: require('../../assets/check.svg'),
          color: '#4CAF50'
        },
        warning: {
          icon: require('../../assets/warning.svg'),
          color: '#FB8C00'
        },
        error: {
          icon: require('../../assets/error.svg'),
          color: '#FF5252'
        },
        info: {
          icon: require('../../assets/notification.svg'),
          color: '#2196F3'
        }
      }
    }
  },
  props: ['type', 'text']
}
</script>

<style scoped>
  .alert {
    display: flex;
    align-items: center;
    min-height: 50px;
    color: grey;
    width: 800px;
    border-radius: 5px;
  }
  .alert-items {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .alert-items span {
    margin-left: 10px;
  }
</style>