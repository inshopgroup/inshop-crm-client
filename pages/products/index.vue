<template>
  <div>

    <b-pagination-nav align="right" :number-of-pages="pagesTotal" v-model="current" :link-gen="linkGen"></b-pagination-nav>

    <div class="tab-content">
      <div role="tabpanel" class="tab-pane active" id="grid-extended" aria-expanded="true">
        <ul class="products columns-3">
          <template v-for="product in items">
            <ProductItem :product = product />
          </template>
        </ul>
      </div>
    </div>

    <b-pagination-nav align="right" :number-of-pages="pagesTotal" v-model="current" :link-gen="linkGen"></b-pagination-nav>

  </div>
</template>

<script>
import Header from '~/components/Header.vue'
//import Breadcrumb from '~/components/Breadcrumb.vue'
import ProductItem from '~/components/ProductItem.vue'
import WidgetProductFilters from '~/components/WidgetProductFilters.vue'
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
//    SelectPerPage,
    Footer
  },
  watchQuery: ['page'],
  mounted () {
    this.$store.dispatch('products/getItems', {
      // 'category.id': params.params.id,
      'page': 1,
      'itemsPerPage': ~~process.env.NUXT_ENV_PER_PAGE
    })
  },
  async asyncData (params) {
    let current = params.query.page || 1;

    await params.store.dispatch('products/getItems', {
      // 'category.id': params.params.id,
      'page': current,
      'itemsPerPage': ~~process.env.NUXT_ENV_PER_PAGE
    })

    return {
      // categoryId: params.params.id,
      current: current
    }
  },
  computed: {
    // products () {
    //   return this.$store.getters['products']
    // },
    // productsTotal () {
    //   return this.$store.getters['productsTotal']
    // },
    // perPage () {
    //   return ~~process.env.NUXT_ENV_PER_PAGE
    // },
    breadcrumbs () {
      return [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Products',
        }
      ]
    },
    items () {
      return this.$store.getters['products/items']
    },
    total () {
      return this.$store.getters['products/total']
    },
    aggregations () {
      return this.$store.getters['products/aggregations']
    },

    aggregationsCities () {
      return this.aggregations.cities.id.buckets
    },

    aggregationsSkills () {
      return this.aggregations.skills.id.buckets
    },

    aggregationsCategory () {
      return this.aggregations.category.id.buckets
    },

    aggregationsEnglishLevel () {
      return this.aggregations.englishLevel.id.buckets
    },

    aggregationsAuthorizationStatus () {
      return this.aggregations.authorizationStatus.id.buckets
    },

    aggregationsSalary() {
      return this.aggregations.salary.buckets
    },

    aggregationsYearsOfExperience() {
      return this.aggregations.yearsOfExperience.buckets
    },

    perPage () {
      return ~~process.env.NUXT_ENV_PER_PAGE
    },
    pagesTotal () {
      return Math.ceil(this.total / this.perPage)
    },
  },
  methods: {
    linkGen(page) {
      if (page === 1) {
        return {
          name: 'products'
        }
      }

      return {
        name: 'products',
        query: {
          page: page
        }
      }
    },
  }
}
</script>
