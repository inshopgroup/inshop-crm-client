<template>
  <nuxt-link :to="localePath({name: 'catalog-categorySlug-productSlug', params: {categorySlug: categorySlug, productSlug: product.slug}})">
    <v-hover 
      v-slot:default="{ hover }"
      open-delay="200"
      close-delay="200"
    >
      <v-card 
        :elevation="hover ? 14 : 2" 
        max-width="316" 
        height="100%" 
        class="pb-10"
      >
        <v-img
          height="170px"
          :src="cardBg"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          :alt="translation(product).name"
        ></v-img>
        <v-card-title class="align-end">
          {{ translation(product).name }}
        </v-card-title>
        <v-card-text>
          <p class="mb-2">{{ translation(product.category).name }}</p>
          <p class="mb-2">{{ product.ean }}</p>
          <p class="text--primary mb-2">{{ translation(product).description | subString }}</p>
          <p class="mb-2">{{ product.price }} $</p>
        </v-card-text>
        <v-card-actions style="position: absolute; bottom: 0; width: 100%;">
          <v-btn @click="addToCart()" block color="primary">
            <v-icon left>mdi-cart-arrow-down</v-icon>
            Add to cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </nuxt-link>
</template>

<script>
  import Translate from '../mixins/Translate'
  import cardBg from '@/assets/category-card.jpg'

  export default {
    mixins: [Translate],
    data() {
      return {
        isActive: true,
        cardBg
      }
    },
    filters: {
      subString(value, q = 150) {
        return value.length > q ? value.slice(0, q) + '...' : value
      }
    },
    props: {
      product: {
        type: Object,
        required: true
      },
      categorySlug: {
        type: String,
        required: true
      },
    },
    methods: {
      addToCart() {
       
      }
    }
  }
</script>

<style scoped>
  a:hover {
    text-decoration: none;
  }
</style>