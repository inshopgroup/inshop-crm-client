<template>
  <v-container>

    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <v-row>
      <v-col cols="12">
        <h1>Checkout</h1>
      </v-col>
    </v-row>



  </v-container>
</template>

<script>
  import Breadcrumb from "../../components/Breadcrumb"

  export default {
    data() {
      return {}
    },
    components: {
      Breadcrumb,
    },
    computed: {
      breadcrumbs() {
        return [
          {
            name: 'Home',
            link: '/'
          },
          {
            name: 'Checkout',
          }
        ]
      },
    },
  }
</script>
