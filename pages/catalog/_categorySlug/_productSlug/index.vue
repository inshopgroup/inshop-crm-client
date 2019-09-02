<template>
  <v-container>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <v-row justify="space-between">
      <v-col cols="4" offset="1">

        <div class="product-info">

          <template v-if="imageSelected">
            <img :src="imageSelected.contentUrl" class="mb-2" style="width: 100%; cursor: zoom-in;" alt="">

            <v-row>
              <v-col cols="2" v-for="image in images" :key="image.id">
                <img @click="selectImage(image.id)" :src="image.contentUrl" alt="" style="width: 100%;">
              </v-col>
            </v-row>
          </template>

          <!-- <v-divider></v-divider> -->
        
        </div>
      </v-col>

      <v-col cols="6" offset="1">
        <h4 class="display-3 mb-5">{{ translation(product).name }}</h4>
        <h2 class="display-2 mb-5">$ 25.00</h2>
        <v-btn color="primary">
          <v-icon left>mdi-cart-arrow-down</v-icon>
          Add to cart
        </v-btn>
        
        <v-row class="mb-5">
          <v-col cols="12">
            <h2 class="mb-1">Features</h2>
          </v-col>
          <v-col cols="3" class="font-weight-bold">Brand:</v-col>
          <v-col cols="9">Nickony</v-col>
          <v-col cols="3" class="font-weight-bold">Color:</v-col>
          <v-col cols="9">Red</v-col>
          <v-col cols="3" class="font-weight-bold">Size:</v-col>
          <v-col cols="9">XXL</v-col>
          <v-col cols="3" class="font-weight-bold">Fabric:</v-col>
          <v-col cols="9">Cottom</v-col>
        </v-row>
      </v-col>

    </v-row>

    <v-row>
      <v-col cols="12">
        <h2 class="mb-3">Description</h2>
        <p>{{ translation(product).description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Breadcrumb from '~/components/Breadcrumb.vue'
  import Translate from '~/mixins/Translate.vue'

  export default {
    mixins: [Translate],
    components: {
      Header,
      Breadcrumb,
    },
    async asyncData (params) {
      await params.store.dispatch('category/getItem', params.params.categorySlug)
      await params.store.dispatch('product/getItem', params.params.productSlug)
    },
    data() {
      return {
        images: [
          {
            id: 1,
            contentUrl: 'https://via.placeholder.com/350x350/ffcf5b',
          },
          {
            id: 2,
            contentUrl: 'https://via.placeholder.com/350x350/f16a22',
          },
          {
            id: 3,
            contentUrl: 'https://via.placeholder.com/350x350/d3ffce',
          },
          {
            id: 4,
            contentUrl: 'https://via.placeholder.com/350x350/7937fc',
          },
          {
            id: 5,
            contentUrl: 'https://via.placeholder.com/350x350/930000',
          },
          {
            id: 6,
            contentUrl: 'https://via.placeholder.com/350x350/f16a22',
          },
        ],
        imageSelected: null,
      }
    },
    mounted() {
      this.imageSelected = this.images[0]
    },
    computed: {
      breadcrumbs () {
        return [{
          name: 'Home',
          link: '/'
        }, {
          name: this.translation(this.category).name,
          link: '/catalog/' + this.category.slug
        }, {
          name: this.translation(this.product).name,
        }]
      },
      category() {
        return this.$store.getters['category/item']
      },
      product () {
        return this.$store.getters['product/item']
      },
    },
    methods: {
      selectImage(id) {
        [this.imageSelected] = this.images.filter(item => item.id === id)
      }
    }
  }
</script>
