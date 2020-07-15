<template>
  <div class="display">
    {{ value }}
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style>
  .display {
    grid-column: span 3;
    background-color: #0004;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0px 2px;
    padding: 0px 10px;
    font-size: 1.8em;
    overflow: hidden;
  }
</style>