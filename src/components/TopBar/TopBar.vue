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
          class="logo"
          src="../../assets/logo.png"
        />
      </router-link>
      <v-col cols="9" md="3" sm="3">
        <h3>Vue Code Example</h3>
      </v-col>

      <v-spacer></v-spacer>

      <v-navigation-drawer
        v-model="sideNav"
        temporary
        hide-overlay
        app
        right
      >
        <v-btn text dark class="ml-9" to='/'>
          Home
        </v-btn>

        <v-row>
          <v-menu bottom :offset-y="offset" :close-on-content-click="closeOnContentClick">
            <template v-slot:activator="{ on }">
              <v-btn text dark v-on="on" :prepend-icon="closeOnContentClick" class="ml-12 mt-4 mb-4">
                Ui
              </v-btn>
            </template>
            <v-list>
              <v-list-item class="dropdown-opacity" to="/alert">
                <v-list-item-title>
                    ALERTS
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="dropdown-opacity" to="/modal">
                <v-list-item-title>
                    MODALS
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="dropdown-opacity" to="/spinner">
                <v-list-item-title >Spinners</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
        <v-btn text dark class="ml-9" to='/artigos'>
          Artigos
        </v-btn>
      </v-navigation-drawer>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up icon-bar style-icon"
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
              <v-list-item class="dropdown-opacity" to="/alert">
                <v-list-item-title>
                    ALERTS
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="dropdown-opacity" to="/modal">
                <v-list-item-title>
                    MODALS
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="dropdown-opacity" to="/spinner">
                <v-list-item-title >SPINNERS</v-list-item-title>
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
  @media (max-width: 425px) {
    .logo {
      margin-left: 5px;
      width: 35px;
    }
    .style-icon {
      margin-right: 50px;
    }
  }
</style>