<template>
  <div>
    <v-app-bar
      color="#435B71"
      dark
      app
    >
      <router-link to="/">
        <v-img
          alt="logo"
          title="logo site"
          class="logo mt-1"
          src="../../assets/logo.png"
        />
      </router-link>
      <h3 class="ml-5">Vue Tutorials</h3>

      <v-spacer></v-spacer>

      <v-navigation-drawer
        v-model="sideNav"
        temporary
        hide-overlay
        app
        right
      >

      </v-navigation-drawer>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up icon-bar"
        @click.stop="sideNav = !sideNav"
      />
      <v-col class="mr-12 ml-5" sm="6">
        <v-row justify="end">
          <v-btn text dark class="ml-2 hidden-xs-only" to='/'>
            Home
          </v-btn>

          <v-menu bottom open-on-hover :offset-y="offset" :close-on-content-click="closeOnContentClick">
            <template v-slot:activator="{ on }">
              <v-btn text dark v-on="on" :prepend-icon="closeOnContentClick" class="ml-2 hidden-xs-only">
                Ui
              </v-btn>
            </template>
            <v-list>
              <v-list-item class="dropdown-opacity" to="/alerts">
                <v-list-item-title>
                    ALERTS
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="dropdown-opacity" to="/modals">
                <v-list-item-title>
                    MODALS
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="dropdown-opacity" to="/inputs">
                <v-list-item-title >INPUTS</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-btn text dark class="ml-2 hidden-xs-only" to='/artigos'>
            Artigos
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
    collapseOnScroll: true,
    closeOnClick: true,
    closeOnContentClick: true,
  })
}
</script>

<style scoped>
  .logo {
    width: 40px;
    margin-left: 40px;
  }
</style>