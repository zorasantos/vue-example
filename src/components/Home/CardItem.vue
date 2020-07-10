<template>
  <v-col class="d-flex" cols="12" sm="4" md="4" lg="3" xl="3">
    <v-card
      class="card-item pt-6 px-5 d-flex"
      @mouseover="cardHovering = true"
      @mouseleave="cardHovering = false"
      :class="{ hover: cardHovering }"
      min-width="100%"
    >

      <v-card-text>
        <v-row justify="center">
          <span class="card-tag font-weight-light text-uppercase">{{ item.tag }}</span>
        </v-row>
        <v-row justify="center">
          <p class="mt-2 mb-5">
            <router-link v-if="!item.link" class="card-title text-uppercase font-weight-medium" :to="item.url" > {{ item.title }} </router-link>
            <a v-else :href="item.url" target="_blank" class="card-title text-uppercase font-weight-medium"> {{ item.title }} </a>
          </p>
        </v-row>
        <v-row justify="center">
          <v-btn :to="item.url" class="btn-card" rounded>
            {{ item.button }}
          </v-btn>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      cardHovering:false
    }
  },
  props: ['item']
}
</script>

<style scoped>
  .card-link {
    text-decoration: none;
    font-size: 14px;
    color: #009b89;
  }
  .hover {
    border-bottom: 16px solid #39A576 !important;
    top: -10px !important;
  }
  .card-item {
    height: 360px;
    border-bottom: 16px solid #fff;
    border-radius: 20px !important;
    transition: top ease .5s;
    top: 0;
  }
  .btn-card {
    margin-top: 140px;
    background-color: #39A576 !important;
    color: #FFF;
    width: 150px;
  }
  .card-tag {
    font-size: 14px;
  }
  .card-title {
    color: #36393a;
    font-size: 18px;
    line-height: 1em;
  }
  .card-text {
    font-size: 10px;
    color: #222;
  }
  .card-text-flex {
    color: #444444;
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
</style>
