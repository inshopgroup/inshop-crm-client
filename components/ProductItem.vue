<template>
  <!-- <div class="product-item card m-2">
    <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" :alt="translation(product).name">

    <div class="card-body d-flex flex-column justify-content-between">
      <div>
        <h4 class="card-title">
          <nuxt-link :to="localePath({name: 'catalog-categorySlug-productSlug', params: {categorySlug: categorySlug, productSlug: product.slug}})">
            {{ translation(product).name }}
          </nuxt-link>
        </h4>

        <p class="card-text">{{product.ean}}</p>
        <p class="card-text">{{translation(product).description}}</p>
        <p class="card-text">{{product.price}} $</p>
      </div>

      <div class="row">
        <div class="col">
          <a href="#" class="btn btn-success btn-block">Add to cart</a>
        </div>
      </div>
    </div>
  </div> -->
  <v-card class="mx-auto" max-width="340">
    <v-img
      height="170px"
      :src="cardBg"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-card-title class="align-end fill-height">
        <nuxt-link class="white--text" :to="localePath({name: 'catalog-categorySlug-productSlug', params: {categorySlug: categorySlug, productSlug: product.slug}})">
          {{ translation(product).name }}
        </nuxt-link>
      </v-card-title>
    </v-img>
    <v-card-text>
      <p>{{ product.ean }}</p>
      <p class="text--primary">{{ translation(product).description }}</p>
      <p class="mb-0">{{ product.price }} $</p>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
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
    props: {
      product: {
        type: Object,
        required: true
      },
      categorySlug: {
        type: String,
        required: true
      },
    }
  }
</script>
