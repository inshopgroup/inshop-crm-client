<template>
  <div class="col-12 col-md-6 col-lg-4">
    <div class="card">
      <img class="card-img-top" src="https://dummyimage.com/600x400/55595c/fff" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">
          <nuxt-link :to="localePath({name: 'catalog-categorySlug-productSlug', params: {categorySlug: categorySlug, productSlug: translation(product).slug}})">
            {{translation(product).name}}
          </nuxt-link>
        </h4>
        <p class="card-text">{{product.ean}}</p>
        <p class="card-text">{{translation(product).description}}</p>
        <p class="card-text">{{product.price}} $</p>

        <div class="row">
          <div class="col">
            <a href="#" class="btn btn-success btn-block">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Translate from '../mixins/Translate'

  export default {
    mixins: [Translate],
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
