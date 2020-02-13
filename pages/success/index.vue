<template>
  <v-container>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <v-row justify="center">
      <v-col cols="12">
        <h1 class="success--text text-center">
          Your order<br />
          has been successfully placed!
        </h1>
      </v-col>
      <v-col cols="12" class="text-center">
        <p>
          Thank! Your order has been received by us. Our managers will contact
          you shortly to confirm the order.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <p class="font-weight-black mb-0">Return</p>
        <p class="mb-0">Want to continue shopping?</p>
      </v-col>
      <v-col cols="auto">
        <v-btn color="#0c5c6f" dark to="/">
          <v-icon left>mdi-home-circle</v-icon>
          To main
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb'

export default {
  components: {
    Breadcrumb
  },
  data() {
    return {}
  },
  computed: {
    breadcrumbs() {
      return [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Order success'
        }
      ]
    }
  }
}
</script>
