<template>
  <div>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">E-COMMERCE CATEGORY</h1>
        <p class="lead text-muted mb-0">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la
          mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années
          1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de
          polices de texte...</p>
      </div>
    </section>

    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-3">
          <category-block></category-block>
        </div>
        <div class="col">
          <div class="row">
            <template v-for="product in products">
              <product-item :product="product" :category-slug="categorySlug"></product-item>
            </template>
          </div>
        </div>
      </div>
    </div>

    <pagination
        :total="total"
        v-model="currentPage"
        :link-gen="linkGen"
    ></pagination>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import ProductItem from '~/components/ProductItem.vue'
  import Footer from '~/components/Footer.vue'
  import Translate from '~/mixins/Translate.vue'
  import Breadcrumb from "../../../components/Breadcrumb";
  import CategoryBlock from "../../../components/CategoryBlock";
  import Pagination from "../../../components/Pagination";

  export default {
    mixins: [Translate],
    components: {
      Pagination,
      CategoryBlock,
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
