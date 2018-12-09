<template>
  <div>
    <Pagination :total="productsTotal" :per-page="perPage" :route="'index'" :current="current" />

    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="grid-extended" aria-expanded="true">
        <ul class="products columns-3">
          <template v-for="product in products">
            <ProductItem :product = product />
          </template>
        </ul>
      </div>
    </div>

    <Pagination :total="productsTotal" :per-page="perPage" :route="'index'" :current="current" />
  </div>
</template>

<script>
import ProductItem from '~/components/ProductItem.vue'
import Pagination from '~/components/Pagination.vue'

export default {
  head: {
    bodyAttrs: {
      class: 'left-sidebar home-page'
    }
  },
  components: {
    ProductItem,
//    Breadcrumb,
    Pagination,
//    SelectPerPage,
  },
  watchQuery: ['page'],
  async asyncData (params) {
    let current = params.query.page || 1;

    await params.store.dispatch('getProducts', {
      'page': current,
      'itemsPerPage': ~~process.env.NUXT_ENV_PER_PAGE
    })

    return {
      current: current
    }
  },
  computed: {
    products () {
      return this.$store.getters['products']
    },
    productsTotal () {
      return this.$store.getters['productsTotal']
    },
    perPage () {
      return ~~process.env.NUXT_ENV_PER_PAGE
    }
  }
}
</script>

