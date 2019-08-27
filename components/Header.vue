<template>
  <div>
    <v-navigation-drawer 
      v-model="drawer" 
      fixed 
      app 
      dark 
      hide-overlay 
      temporary
      :src="bg"
    >
      <v-list 
        dense
      >
        <template v-for="category in categories">
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
           :key="category.id"
          >
          <v-list-item>
            <v-list-item-title>
              {{translation(category).name}}
            </v-list-item-title>
          </v-list-item>

        </v-list-item-group>
        </template>
        
      </v-list>
    </v-navigation-drawer>

    <v-app-bar 
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#003145" 
      dark
      :src="bg"
    >
      <v-container>
        <v-row justify="space-between">
          <v-col cols="auto">

            <v-toolbar-title>
              <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
              <a href="/" class="text-white hidden-sm-and-down mx-2">Inshop Ecommerce</a>
            </v-toolbar-title>

          </v-col>
          
          <v-spacer></v-spacer>
    

            <!-- <a href="/">Inshop Ecommerce</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button> -->

          <v-col cols="auto" class="d-flex align-center">
            <template v-if="isAuthenticated">
              <nuxt-link class="nav-link" to="/profile">{{ username }}</nuxt-link>
              <a href="#" class="nav-link" @click.prevent="signout">Sign out</a>
            </template>
            <template v-else>
              <v-btn text class="nav-link" to="/signin">Sign in</v-btn>
              <v-btn text class="nav-link" to="/signup">Sign up</v-btn>
            </template>
            
            <language-select></language-select>

            <v-btn color="success" href="/cart">
              <font-awesome-icon icon="shopping-cart"/> Cart
              <span class="badge badge-light">3</span>
            </v-btn>
          </v-col>
        

            <!-- <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
              

              <language-select></language-select>

                <a class="btn btn-success btn-sm ml-3" href="/cart">
                  <font-awesome-icon icon="shopping-cart"/> Cart
                  <span class="badge badge-light">3</span>
                </a>
            </div> -->
              
        
        </v-row>
        
        <!-- <category-nav></category-nav> -->
  
      </v-container>

    </v-app-bar>
  </div>
</template>

<script>
  import Menu from '../components/Menu.vue'
  import LanguageSelect from '../components/LanguageSelect.vue'
  import Auth from '../mixins/Auth'
  import CategoryNav from "./CategoryNav";
  import Translate from '~/mixins/Translate.vue'

  export default {
    data() {
      return {
        bg: require('../assets/bg.png'),
        drawer: null,
      }
    },
    components: {
      CategoryNav,
      Menu,
      LanguageSelect
    },
    mixins: [Auth, Translate],
    computed: {
      username () {
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
      },
    }
  }
</script>

<style>
  /* header {
    z-index: 10!important;
  } */
</style>