<template>
  <div>
    <v-app-bar
      color="#004D40"
      dark
    >
      <router-link to="/">
        <v-img
          alt="logo"
          title="logo site"
          class="logo ml-12 mr-4"
          src="../../assets/logo.png"
        />
      </router-link>
      <h3>Vue Exemplos</h3>

      <v-spacer></v-spacer>

      <v-navigation-drawer
        v-model="sideNav"
        temporary
        hide-overlay
        app
        right
      >
        <v-list>
          <v-list-item
            v-for="(link, index) in links"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title class="mb-5 ml-2">
                <router-link :to="link.url">
                  {{ link.title }}
                </router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up icon-bar"
        @click.stop="sideNav = !sideNav"
      />
      <v-col
        style="text-align: right;"
        class="mr-12 ml-5"
        sm="6"
      >
        <v-row justify="end">
          <v-btn
            v-for="(link, index) in links"
            :key="index"
            text
            class="ml-2 hidden-xs-only"
            :to="link.url"
            :color="link.color"
            right
          >
            {{ link.title }}
          </v-btn>
        </v-row>
      </v-col>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    offset: true,
    sideNav: false,
    links: [
      {
        title: 'HOME',
        url: '/',
      },
      {
        title: 'UI',
        url: '/',
      },
      {
        title: 'ARTIGOS',
        url: '/',
      }
    ]
  })
}
</script>

<style scoped>
  .logo {
    width: 40px;
    border: white;
  }
</style>