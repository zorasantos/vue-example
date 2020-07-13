<template>
  <div>
    <v-row justify="center" align="center">
      <span class="title-vue mr-3">Vue.Js</span>
      <span class="title mb-12 mt-12">Examples</span>
    </v-row>
    <v-row>
      <v-col>
        <v-row>
          <CardItem
           v-for="(card, index) in cards" :key="index" :item="card" />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
const CardItem = () => import('./CardItem')

export default {
  data() {
    return {
      cards: [
        {
          title: 'Alerts Components',
          button: 'Alerts',
          alert: true,
          tag: 'Vue code example',
          url: '/alert',
          link: false
        },
        {
          title: 'Modals Components',
          button: 'Modals',
          modal: true,
          tag: 'Vue Code Example',
          url: '/modal',
          link: false
        },
        {
          title: 'Spinners Components',
          button: 'Spinner',
          tag: 'Vue Code Example',
          spinner: true,
          url: '/spinner',
          link: false
        },
        {
          title: 'Chips Components',
          button: 'Chip',
          chip: true,
          tag: 'Vue Code Example',
          url: '/chip',
          link: false
        }
      ]
    }
  },
  components: {
    CardItem
  }
}
</script>

<style scoped>
  .title-vue {
    font-size: 35px !important;
    color: #39A576;
  }
  .title {
    font-size: 35px !important;
    color: #435B71;
  }
  .img-news {
    margin-top: -40px;
  }
  .icon-scroll-down {
    color: #009587;
    font-size: 50px;
  }
  .service-header {
    color: #36393a;
    font-size: 55px;
  }
  @media (max-width: 1000px) {
    h1 {
      text-align: center;
    }
  }
</style>