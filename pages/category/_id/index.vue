<template>
  <div>

    <Pagination :total="productsTotal" :per-page="perPage" :params="{id: categoryId}" :route="'category-id'" :current="current" />

    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="grid-extended" aria-expanded="true">
        <ul class="products columns-3">
          <template v-for="product in products">
            <ProductItem :product = product />
          </template>
        </ul>
      </div>
    </div>

    <Pagination :total="productsTotal" :per-page="perPage" :params="{id: categoryId}" :route="'category-id'" :current="current" />

  </div>
</template>

<script>
import Header from '~/components/Header.vue'
//import Breadcrumb from '~/components/Breadcrumb.vue'
import ProductItem from '~/components/ProductItem.vue'
import WidgetProductFilters from '~/components/WidgetProductFilters.vue'
import Pagination from '~/components/Pagination.vue'
//import SelectPerPage from '~/components/SelectPerPage.vue'
import Footer from '~/components/Footer.vue'

export default {
  head: {
    bodyAttrs: {
      class: 'left-sidebar home-page'
    }
  },
  components: {
    Header,
    ProductItem,
//    Breadcrumb,
    WidgetProductFilters,
    Pagination,
//    SelectPerPage,
    Footer
  },
  watchQuery: ['page'],
  async asyncData (params) {
    let current = params.query.page || 1;

    await params.store.dispatch('getProducts', {
      'category.id': params.params.id,
      'page': current,
      'itemsPerPage': ~~process.env.NUXT_ENV_PER_PAGE
    })

    return {
      categoryId: params.params.id,
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
