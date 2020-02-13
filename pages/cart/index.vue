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
        v-for="product in products"
        :key="product.id"
        width="100%"
        class="mb-5"
      >
        <v-row no-gutters justify="space-between" align="center">
          <v-col cols="12" xl="2" lg="2" md="2" sm="2">
            <a href="/">
              <v-img
                width="100%"
                height="100%"
                :src="product.srcImg"
                alt=""
              ></v-img>
            </a>
          </v-col>
          <v-col cols="3" xl="3" lg="3" md="3" sm="3">
            <h6 class="grey--text">Name</h6>
            <a href="/" class="text--primary">
              <p>{{ product.name }}</p>
            </a>
          </v-col>
          <v-col cols="2" xl="2" lg="1" md="1" sm="1">
            <h6 class="grey--text">Ean</h6>
            <p>{{ product.ean }}</p>
          </v-col>
          <v-col cols="2" xl="1" lg="1" md="1" sm="1">
            <h6 class="grey--text">Price</h6>
            <p>${{ product.price }}</p>
          </v-col>
          <v-col cols="3" xl="2" lg="1" md="1" sm="1">
            <div class="d-flex align-center">
              <v-btn icon small>
                <v-icon small color="red">mdi-minus</v-icon>
              </v-btn>
              <div>{{ product.quantity }}</div>
              <v-btn icon small>
                <v-icon small color="primary">mdi-plus</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="2" xl="2" lg="2" md="2" sm="2">
            <h6 class="grey--text">Total</h6>
            <p>${{ product.total }}</p>
          </v-col>
          <v-btn
            style="position: absolute; top: -15px; right: -15px;"
            icon
            color="error"
            @click="remove(product.id)"
          >
            <v-icon large>mdi-close-circle</v-icon>
          </v-btn>
        </v-row>
      </v-card>

      <v-divider class="mt-9"></v-divider>

      <v-row>
        <v-col cols="12" class="text-right">
          <p><b>Total: 0 $</b></p>
        </v-col>
      </v-row>

      <v-row justify="space-between" align="center">
        <v-col cols="12" xl="3" lg="3" md="3" sm="6">
          <v-btn block color="#0c5c6f" dark to="/">
            <v-icon left>mdi-cart-arrow-down</v-icon>
            Continue to shoping
          </v-btn>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="12" xl="3" lg="3" md="3" sm="6" class="text-right">
          <v-btn block color="success" to="/checkout">
            <v-icon left>mdi-cash-multiple</v-icon>
            Checkout
          </v-btn>
        </v-col>
      </v-row>
    </template>
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
          name: 'Cart'
        }
      ]
    },
    products() {
      return this.$store.getters['cart/items']
    }
  },
  methods: {
    remove(id) {
      let products = this.products.filter(item => item.id !== id)

      this.$store.commit('cart/SET_ITEMS', products)
    }
  }
}
</script>
