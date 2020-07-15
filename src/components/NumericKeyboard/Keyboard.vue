<template>
  <div class="keyboard">
    <Display :value="displayValueDefault" />
    <Button label="7" @onBtnClick="addNumber" />
    <Button label="8" @onBtnClick="addNumber" />
    <Button label="9" @onBtnClick="addNumber" />
    <Button label="4" @onBtnClick="addNumber" />
    <Button label="5" @onBtnClick="addNumber" />
    <Button label="6" @onBtnClick="addNumber" />
    <Button label="1" @onBtnClick="addNumber" />
    <Button label="2" @onBtnClick="addNumber" />
    <Button label="3" @onBtnClick="addNumber" />
    <Button label="0" @onBtnClick="addNumber" />
    <Button label="C" @onBtnClick="clearAll" />
    <Button :imgBtn="true" @onBtnClick="clearDisplay">
    </Button>
  </div>
</template>

<script>
const Button = () => import('./Button')
const Display = () => import('./Display')
export default {
  name: 'Keyboard',
  components: { Button, Display },
  data: () => {
    return {
      displayValueDefault: '0',
      clearNumberDisplay: false,
    }
  },
  methods: {
    clearAll() {
      this.displayValueDefault = '0'
    },
    clearDisplay() {
      const clearDisplay = this.displayValueDefault
      const newDisplay = clearDisplay.slice(0, -1)
      this.displayValueDefault = newDisplay || '0'
    },
    addNumber(n) {
      const clearDisplay = this.displayValueDefault === "0" || this.clearNumberDisplay
      const currentValue = clearDisplay? '' : this.displayValueDefault
      const display = currentValue + n
      this.displayValueDefault = display
    }
  }
}
</script>

<style scoped>
  .keyboard {
    height: 250px;
    width: 250px;
    border-radius: 5px;
    overflow: hidden;
    display: grid;
    justify-content: end;
    grid-template-columns: repeat(3, 25%);
  }
</style>