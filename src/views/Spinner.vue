<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="spinner-card">
          <v-row justify="center" class="mb-12">
            <z-spinner class="mr-3" width="35px" height="35px" />
            <z-spinner class="mr-3" color="green" />
            <z-spinner class="mr-3" color="red" />
            <z-spinner class="mr-3" color="purple" />
            <z-spinner class="mr-3" color="#673AB7" />
            <z-spinner class="mr-3" color="#E91E63" width="35px" height="35px" />
          </v-row>

          <v-row>
            <button :style="spinnerButton" class="button-spinner" @click="isSpinner = !isSpinner">
              <z-spinner v-if="isSpinner == true" color="purple" width="22px" height="22px" />
              <span v-else>Button</span>
            </button>

            <button :style="spinnerButtonTwo" style="background-color: #E91E63" class="button-spinner" @click="buttonTwo = !buttonTwo">
              <z-spinner v-if="buttonTwo == true" color="purple" width="22px" height="22px" />
              <span>Button</span>
            </button>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const Spinner = () => import('../components/Spinner/Spinner')
export default {
  name: 'SpinnerView',
  components: { 'z-spinner': Spinner  },
  data: () => {
    return {
      isSpinner: false,
      buttonTwo: false
    }
  },
  computed: {
    spinnerButton() {
      return this.isSpinner == true ? { 'background-color': '#FAFAFA',  border: '1px solid grey' } : ''
    },
    spinnerButtonTwo() {
      return this.buttonTwo == true ? { 'background-color': '#FAFAFA', fontSize: '15px', color: '#435B71',  border: '1px solid grey' } : ''
    }
  }
}
</script>

<style scoped>
  .spinner-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    padding: 100px;
  }
  .button-spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    background-color: #4CAF50;
    color: #FFF;
    padding: 10px 20px;
    margin-right: 5px;
    border-radius: 5px;
    outline: none;
  }
  :hover.button-spinner {
    background-color: #6fb171;
  }
</style>