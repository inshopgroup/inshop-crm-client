<template>
  <div>
    <Header/>

    <v-container>
      <nuxt/>
    </v-container>

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
