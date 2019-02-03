<template>
  <div id="page" class="hfeed site">
    <Header/>

    <div class="container">
        <nuxt/>
    </div>

    <Footer />
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  export default {
    components: {Header, Footer}
  }
</script>
