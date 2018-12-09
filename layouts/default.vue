<template>
  <div id="page" class="hfeed site">

    <Header/>

    <div id="content" class="site-content" tabindex="-1">
      <div class="container">

        <Breadcrumb/>

        <div id="primary" class="content-area">
          <main id="main" class="site-main">
            <nuxt/>
          </main>
        </div>

        <div id="sidebar" class="sidebar" role="complementary">
          <WidgetProductFilters />
        </div>
      </div>
    </div>

    <Footer />

  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Breadcrumb from '~/components/Breadcrumb.vue'
  import WidgetProductFilters from '~/components/WidgetProductFilters.vue'
  import Footer from '~/components/Footer.vue'
  export default {
    components: {Header, Footer, WidgetProductFilters, Breadcrumb}
  }
</script>
