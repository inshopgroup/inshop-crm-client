<template>
  <v-app>
    <Header/>

    <nuxt/>   

    <Footer />
  </v-app>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  export default {
    components: {Header, Footer}
  }
</script>
