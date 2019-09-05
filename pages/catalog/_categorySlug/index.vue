<template>
  <v-container>
    <breadcrumb :breadcrumbs="breadcrumbs" />

    <v-row>
      <v-col cols="12">
        <v-card 
          color="#ECEFF1" 
          min-height="230" 
          class="d-flex flex-column justify-center align-center text-center">
          <v-card-title>
            <h1 class="display-1">E-COMMERCE CATEGORY</h1>
          </v-card-title>
          <v-card-text>
            <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
            mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années
            1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de
            polices de texte...</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center" justify-xl="start" justify-lg="start" justify-md="start" justify-sm="start">
      <template v-for="product in products">
        <v-col cols="auto" xl="3" lg="3" md="4" sm="6"> 
          <product-item 
            :product="product" 
            :category-slug="categorySlug"
          />
        </v-col>
      </template>
    </v-row>

    <pagination
      :total="total"
      v-model="currentPage"
      :link-gen="linkGen"
    />
  </v-container>
</template>

<script>
  import Header from '~/components/Header.vue'
  import ProductItem from '~/components/ProductItem.vue'
  import Footer from '~/components/Footer.vue'
  import Translate from '~/mixins/Translate.vue'
  import Breadcrumb from "../../../components/Breadcrumb"
  import Pagination from "../../../components/Pagination"

  export default {
    mixins: [Translate],
    components: {
      Pagination,
      Breadcrumb,
      Header,
      ProductItem,
      Footer
    },
    watchQuery: ['page'],
    async asyncData(params) {
      let currentPage = parseInt(params.query.page) || 1;

      await params.store.dispatch('category/getItem', params.params.categorySlug)
      await params.store.dispatch('product/getItems', {
        'categorySlug': params.params.categorySlug,
        'page': currentPage,
        'perPage': ~~process.env.NUXT_ENV_PER_PAGE,
      })

      return {
        categorySlug: params.params.categorySlug,
        currentPage: currentPage
      }
    },
    computed: {
      breadcrumbs() {
        return [{
          name: 'Home',
          link: '/'
        }, {
          name: this.translation(this.category).name,
        }]
      },
      category() {
        return this.$store.getters['category/item']
      },
      products() {
        return this.$store.getters['product/items']
      },
      total() {
        return this.$store.getters['product/itemsTotal']
      },
      aggregations() {
        return this.$store.getters['product/aggregations']
      },
    },
    methods: {
      linkGen(page) {
        if (page === 1) {
          return this.localePath({name: 'catalog-categorySlug', params: {categorySlug: this.categorySlug}})
        }

        return this.localePath({
          name: 'catalog-categorySlug',
          params: {categorySlug: this.categorySlug},
          query: {page: page}
        })
      },
    }
  }
</script>
