<template>
  <v-container>

    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <v-row>
      <v-col cols="12">
        <h1>Cart</h1>
      </v-col>
    </v-row>

    <template v-if="products.length">
      <v-card 
        width="100%"
        class="mb-3"
        v-for="product in products"
        :key="product.id"
      >
        <v-row no-gutters justify="space-between" align="center">
          <v-col cols="2" class="">
            <a href="/">
              <v-img
                width="100%"
                height="100%"
                :src="product.srcImg"
                alt=""
              ></v-img>
            </a>
          </v-col>
          <v-col cols="3">
            <h6 class="grey--text">Name</h6>
            <a href="/" class="text--primary">
              <p>{{ product.name }}</p>
            </a>
          </v-col>
          <v-col cols="1">
            <h6 class="grey--text">Ean</h6>
            <p>{{ product.ean }}</p>
          </v-col>
          <v-col cols="1">
            <h6 class="grey--text">Price</h6>
            <p>${{ product.price }}</p>
          </v-col>
          <v-col cols="1">
            <div class="d-flex align-center">
              <v-btn icon small>
                <v-icon small color="primary">mdi-plus</v-icon>
              </v-btn>
              <div>{{ product.quantity }}</div>
              <v-btn icon small :disabled="product.quantity === 0">
                <v-icon small color="red">mdi-minus</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="2">
            <h6 class="grey--text">Total</h6>
            <p>${{ product.total }}</p>
          </v-col>
          <v-col cols="1">
            <v-btn icon color="error" @click="remove(product.id)">
              <v-icon large>mdi-close-circle-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
 
      <v-divider class="mt-9"></v-divider>

      <v-row justify="end">
        <v-col cols="auto">
          <p><b>Total: 0 $</b></p>
        </v-col>
      </v-row>

      <v-row justify="space-between" align="center">
        <v-col cols="auto">
          <v-btn outlined color="primary">
            <v-icon to="" left>mdi-cart-arrow-down</v-icon>
            Continue to shoping
          </v-btn>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="auto">
          <v-btn outlined color="success" class="mb-3">
            <v-icon left>mdi-cash-multiple</v-icon>
            Checkout
          </v-btn>
        </v-col>
      </v-row>
    </template>

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
            name: 'Cart',
          }
        ]
      },
      products() {
        return this.$store.getters['cart/items']
      },
    },
    methods: {
      remove(id) {
        let products = this.products.filter(item => item.id !== id)
    
        this.$store.commit('cart/SET_ITEMS', products)
      }
    }
  }
</script>
