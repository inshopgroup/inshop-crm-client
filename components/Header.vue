<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">Inshop Ecommerce</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
          <ul class="navbar-nav m-auto">
            <template v-if="isAuthenticated">
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/profile">{{ username }}</nuxt-link>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link" @click.prevent="signout">Sign out</a>
              </li>
            </template>
            <template v-else>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/signin">Sign in</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/signup">Sign up</nuxt-link>
              </li>
            </template>
          </ul>

          <language-select></language-select>

            <a class="btn btn-success btn-sm ml-3" href="/cart">
              <font-awesome-icon icon="shopping-cart"/> Cart
              <span class="badge badge-light">3</span>
            </a>
        </div>
      </div>
    </nav>

    <category-nav></category-nav>
  </div>
</template>

<script>
  import Menu from '../components/Menu.vue'
  import LanguageSelect from '../components/LanguageSelect.vue'
  import Auth from '../mixins/Auth'
  import CategoryNav from "./CategoryNav";

  export default {
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
