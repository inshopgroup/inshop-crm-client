<template>
  <v-app-bar 
    app
    class="header"
    height="64px"
    color="#003145" 
    dark
    :src="bg"
  >
    <v-container class="header-container py-0">
      <v-row justify="space-between" align="center" class="fill-height">
        <v-col class="col-auto d-flex align-center">
          <v-toolbar-title class="d-flex header-logo">
            <v-icon>mdi-home</v-icon>
            <nuxt-link to="/" class="white--text hidden-sm-and-down mx-2">Inshop Ecommerce</nuxt-link>
          </v-toolbar-title>
          <category-nav></category-nav>
        </v-col>

        <v-col class="col-auto d-flex align-center">
          <template v-if="isAuthenticated">
            <nuxt-link class="white--text mx-1" to="/profile">{{ username }}</nuxt-link>
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
  import Menu from '~/components/Menu'
  import LanguageSelect from '~/components/LanguageSelect'
  import Auth from '~/mixins/Auth'
  import CategoryNav from '~/components/CategoryNav'
  import bg from '@/assets/bg.png'

  export default {
    data() {
      return {
        bg,
        drawer: null
      }
    },
    components: {
      CategoryNav,
      Menu,
      LanguageSelect
    },
    mixins: [Auth],
    computed: {
      username () {
        if (this.isAuthenticated) {
          return this.jwtDecoded.name
        }
      },
    },
    methods: {
      signout() {
        this.$store.dispatch('auth/logout').then(() => {
          this.$router.push('/')
        })
      },
    }
  }
</script>
