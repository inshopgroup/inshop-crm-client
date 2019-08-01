<template>
  <div>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <div class="card-body store-body">
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
        <div class="product-seller-recommended">
          <div class="product-description mb-5 mt-5">
            <h2 class="mb-5">Features</h2>
            <dl class="row mb-5">
              <dt class="col-sm-3">Brand</dt>
              <dd class="col-sm-9">Nickony</dd>
              <dt class="col-sm-3">Color</dt>
              <dd class="col-sm-9">Red</dd>
              <dt class="col-sm-3">Size</dt>
              <dd class="col-sm-9">XXL</dd>
              <dt class="col-sm-3">Fabric</dt>
              <dd class="col-sm-9">Cottom</dd>
            </dl>
            <h2 class="mb-5">Description</h2>
            <p>{{translation(product).description}}</p>
          </div>
        </div>
      </div>
      <div class="product-payment-details">
        <h4 class="product-title mb-2">{{translation(product).name}}</h4>
        <h2 class="product-price display-4">$ 25.00</h2>
        <label for="quant">Quantity</label>
        <input type="number" name="quantity" min="1" id="quant" class="form-control mb-5 input-lg" placeholder="Choose the quantity">
        <button class="btn btn-success btn-lg btn-block">Buy Now</button>
      </div>
    </div>
  </div>
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
