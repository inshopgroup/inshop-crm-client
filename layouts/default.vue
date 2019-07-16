<template>
  <div>
    <Header/>

    <div class="container mt-5 mb-5">
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
