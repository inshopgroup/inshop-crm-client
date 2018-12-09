<template>
  <div>
    <header id="masthead" class="site-header header-v2">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="header-logo">
              <router-link :to="localePath('index')" class="logo-link">
                <h1 class="logo">
                  Inshop eCommerce
                </h1>
                <span class="slogan">
                New & Used <br>
                Graphic Machinery Dealer
              </span>
              </router-link>
            </div>
          </div>
          <div class="col-lg-4 d-none d-lg-block d-xl-none">
            <SearchForm />
          </div>
          <div class="col-xl-4 offset-xl-4 col-lg-4 col-md-6">
            <div class="header-banner"></div>
          </div>
        </div><!-- /.row -->
      </div>
    </header><!-- #masthead -->
    <nav class="navbar navbar-primary navbar-full">
      <div class="container">
        <Menu />
        <div class="search-form-wrap d-lg-none d-xl-block">
          <SearchForm />
        </div>
        <LanguageSelect />
      </div>
    </nav>
  </div>
</template>

<script>
  import Menu from '../components/Menu.vue'
  import SearchForm from '../components/SearchForm.vue'
  import LanguageSelect from '../components/LanguageSelect.vue'

  export default {
    components: {
      Menu,
      SearchForm,
      LanguageSelect
    }
  }
</script>