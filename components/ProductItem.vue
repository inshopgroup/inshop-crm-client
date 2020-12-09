<template>
  <nuxt-link
    :to="
      localePath({
        name: 'catalog-categorySlug-productSlug',
        params: { categorySlug: categorySlug, productSlug: product.slug },
      })
    "
  >
    <v-hover v-slot:default="{ hover }" open-delay="200" close-delay="200">
      <v-card
        :elevation="hover ? 14 : 2"
        max-width="100%"
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
          <p class="text--primary mb-2">
            {{ translation(product).description | subString }}
          </p>
          <p class="mb-2">{{ product.price }} $</p>
        </v-card-text>
        <v-card-actions style="position: absolute; bottom: 0; width: 100%">
          <v-btn block color="#0c5c6f" dark>
            <v-icon left>mdi-cart-arrow-down</v-icon>
            Add to cart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-hover>
  </nuxt-link>
</template>

<script>
import cardBg from '@/assets/category-card.jpg'
import Translate from '../mixins/Translate'

export default {
  filters: {
    subString(value, q = 150) {
      return value.length > q ? value.slice(0, q) + '...' : value
    },
  },
  mixins: [Translate],
  props: {
    product: {
      type: Object,
      required: true,
    },
    categorySlug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isActive: true,
      cardBg,
    }
  },
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}
</style>
