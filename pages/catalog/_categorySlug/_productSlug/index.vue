<template>
  <v-container>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <v-row>
      <v-col cols="8">

        <div class="product-info">

          <div class="product-gallery">
            <div class="product-gallery-thumbnails">
              <ol class="thumbnails-list list-unstyled">
                <li><img src="https://via.placeholder.com/350x350/ffcf5b" alt=""></li>
                <li><img src="https://via.placeholder.com/350x350/f16a22" alt=""></li>
                <li><img src="https://via.placeholder.com/350x350/d3ffce" alt=""></li>
                <li><img src="https://via.placeholder.com/350x350/7937fc" alt=""></li>
                <li><img src="https://via.placeholder.com/350x350/930000" alt=""></li>
              </ol>
            </div>
            <div class="product-gallery-featured">
              <img src="https://via.placeholder.com/350x350/ffcf5b" alt="">
            </div>
          </div>

          <div class="mb-5 mt-5">
            <h2 class="mb-5">Features</h2>
            <v-row class="mb-5">
              <v-col cols="3" class="font-weight-bold">Brand:</v-col>
              <v-col cols="9">Nickony</v-col>
              <v-col cols="3" class="font-weight-bold">Color:</v-col>
              <v-col cols="9">Red</v-col>
              <v-col cols="3" class="font-weight-bold">Size:</v-col>
              <v-col cols="9">XXL</v-col>
              <v-col cols="3" class="font-weight-bold">Fabric:</v-col>
              <v-col cols="9">Cottom</v-col>
            </v-row>
            <h2 class="mb-5">Description</h2>
            <p>{{ translation(product).description }}</p>
          </div>
        </div>
      </v-col>

      <v-col cols="4">
        <h4 class="display-3 mb-4 primary--text">{{ translation(product).name }}</h4>
        <h2 class="display-2 mb-4">$ 25.00</h2>
        <!-- <label for="quant">Quantity</label> -->
        <v-text-field 
          type="number" 
          name="quantity" 
          min="1" 
          id="quant" 
          class="mb-5" 
          label="Choose the quantity"
        />
        <v-btn block color="success">Buy Now</v-btn>
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
    }
  }
</script>
