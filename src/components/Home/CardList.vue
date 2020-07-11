<template>
  <div>
    <v-row justify="center" align="center">
      <span class="title-vue mr-3">Vue.Js</span>
      <span class="title mb-12 mt-12">Tutorials</span>
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
          tag: 'Vue Tutorials',
          url: '/alert',
          link: false
        },
        {
          title: 'Modals Components',
          button: 'Modals',
          tag: 'Vue Tutorials',
          url: '/modal',
          link: false
        },
        {
          title: 'Spiners Components',
          button: 'Spinner',
          tag: 'Vue Tutorials',
          url: '/spinner',
          link: false
        },
        {
          title: 'No Content',
          button: 'No Content',
          tag: 'Vue Tutorials',
          url: '/table',
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