<template>
  <div class="spinner" :style="{ 'border-top': `3px solid ${spinners[color].color}`, 'border-left': `3px solid ${spinners[color].color}` }"></div>
</template>

<script>
export default {
  data () {
    return {
      spinners: {
        default: {
          color: '#435B71'
        },
        red: {
          color: '#F44336'
        },
        green: {
          color: '#4CAF50'
        },
        purple: {
          color: '#9C27B0'
        },
        'deep-purple': {
          color: '#673AB7'
        },
        yellow: {
          color: '#FFEB3B'
        }
      }
    }
  },
  props: ['color']
}
</script>

<style scoped>
  .spinner {
    border: 3px solid #FFF;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>