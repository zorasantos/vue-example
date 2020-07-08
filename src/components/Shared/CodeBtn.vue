<template>
  <v-row justify="end" class="mr-2">
    <v-card-actions>
      <v-btn
        class="btn-code"
        small
        @click="showCode"
      >
        {{ changeButton }}
      </v-btn>
    </v-card-actions>
  </v-row>
</template>

<script>
export default {
  data: () => {
    return {
      isVisibleCode: false
    }
  },
  computed: {
    changeButton() {
      return this.isVisibleCode === false ? 'Ver código' : 'Fechar x'
    }
  },
  methods: {
    showCode() {
      this.$emit('showCode');
    }
  }
}
</script>

<style>
  .btn-code {
    background-color: #435B71 !important;
    color: #FFF !important;
  }
</style>