<template>
  <v-app-bar app max-height="65px" color="#003145" dark :src="bg">
    <v-container class="header-container">
      <v-row justify="space-between" align="center">
        <v-col cols="3">
          <v-toolbar-title class="d-flex">
            <v-icon>mdi-home</v-icon>
            <a href="/" class="white--text hidden-sm-and-down mx-2"
              >Inshop Ecommerce</a
            >
          </v-toolbar-title>
        </v-col>

        <v-col cols="5" class="d-flex align-center">
          <category-nav></category-nav>
        </v-col>

        <v-col cols="4" class="d-flex align-center">
          <template v-if="isAuthenticated">
            <nuxt-link class="white--text mx-1" to="/profile">{{
              username
            }}</nuxt-link>
            <a class="white--text mx-1" @click.prevent="signout">Sign out</a>
          </template>
          <template v-else>
            <v-btn text class="mx-1" to="/signin">
              <v-icon left>mdi-account</v-icon>
              Sign in
            </v-btn>
            <v-btn text class="mx-1" to="/signup">
              <v-icon left>mdi-account-plus</v-icon>
              Sign up
            </v-btn>
          </template>

          <language-select></language-select>

          <v-btn color="success" class="mx-1" to="/cart">
            <v-icon left>mdi-cart</v-icon>
            Cart
            <span class="badge badge-light ml-2">3</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import bg from '@/assets/bg.png'
import Menu from './Menu.vue'
import LanguageSelect from './LanguageSelect.vue'
import Auth from '../mixins/Auth'
import CategoryNav from './CategoryNav'

export default {
  components: {
    CategoryNav,
    Menu,
    LanguageSelect
  },
  mixins: [Auth],
  data() {
    return {
      bg,
      drawer: null
    }
  },
  computed: {
    username() {
      if (this.isAuthenticated) {
        return this.jwtDecoded.name
      }
    }
  },
  methods: {
    signout() {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>
.header-container {
  position: relative;
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;
}
</style>
