<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item><router-link to="/">PollIndex</router-link></b-nav-item>
            <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
            <b-nav-item><router-link to="/login">Login</router-link></b-nav-item>
            <b-nav-item><router-link to="/animated">Animated</router-link></b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
            <b-dropdown-item href="#">JP</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <router-link v-show="!isLoggedIn" :to="{name: 'Login'}">Login</router-link>
            <b-nav-item v-show="isLoggedIn" @click="logout">Logout</b-nav-item>
          </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapGetters(['isLoggedIn']),
    },
    created () {
      this.tryLoggedIn()
    },
    methods: {
      ...mapActions(['login','logout','tryLoggedIn']),
    },
  }
</script>