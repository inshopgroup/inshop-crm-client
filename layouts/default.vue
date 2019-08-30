<template>
  <v-app>
    <Header/>

    <v-content>
      <nuxt/>   
    </v-content>
    
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
