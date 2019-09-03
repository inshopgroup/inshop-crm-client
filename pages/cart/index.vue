<template>
  <v-container>
    <v-card 
      width="100%"
      raised
      class="mb-3"
      v-for="product in products"
      :key="product.id"
    >
      <v-row justify="space-between" align="center">
        <v-col cols="2" class="p-0">
          <v-img
            width="100%"
            height="100%"
            :src="product.srcImg"
            alt=""
          ></v-img>
        </v-col>
        <v-col cols="4">
          <h6 class="grey--text">Name</h6>
          <p>{{ product.name }}</p>
        </v-col>
        <v-col cols="1">
          <h6 class="grey--text">Ean</h6>
          <p>{{ product.ean }}</p>
        </v-col>
        <v-col cols="1">
          <h6 class="grey--text">Price</h6>
          <p>{{ product.price }}</p>
        </v-col>
        <v-col cols="1" class="text-center d-flex">
          <v-text-field type="number" name="quantity" min="1" id="quant" />
        </v-col>
        <v-col cols="2">
          <h6 class="grey--text">Total</h6>
          <p>{{ product.total }}</p>
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
        <p>Price: 1000 $</p>
        <p><b>Total: 3800 $</b></p>
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

  </v-container>
</template>

<script>
  export default {
    computed: {
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
