<template>
  <div>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">E-COMMERCE CATEGORY</h1>
        <p class="lead text-muted mb-0">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte...</p>
      </div>
    </section>

    <b-pagination-nav align="right" :number-of-pages="pagesTotal" v-model="currentPage" :link-gen="linkGen"></b-pagination-nav>

    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-3">
          <div class="card bg-light mb-3">
            <div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-list"></i> Categories</div>
            <ul class="list-group category_block">
              <li class="list-group-item"  v-for="category in categories" :key="category.id">
                <nuxt-link
                    :to="localePath({name: 'catalog-categorySlug', params: {categorySlug: translation(category).slug}})"
                    active-class="active"
                >{{translation(category).name}}</nuxt-link>

                <ul v-if="category.subCategories">
                  <li v-for="subCategory in category.subCategories">
                    <nuxt-link
                        :to="localePath({name: 'catalog-categorySlug', params: {id: translation(category).slug}})"
                        active-class="active"
                    >{{translation(subCategory).name}}</nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="card bg-light mb-3">
            <div class="card-header bg-success text-white text-uppercase">Last product</div>
            <div class="card-body">
              <img class="img-fluid" src="https://dummyimage.com/600x400/55595c/fff">
              <h5 class="card-title">Product title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p class="bloc_left_price">99.00 $</p>
            </div>
          </div>
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

    <b-pagination-nav align="right" :number-of-pages="pagesTotal" v-model="currentPage" :link-gen="linkGen"></b-pagination-nav>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
//import Breadcrumb from '~/components/Breadcrumb.vue'
import ProductItem from '~/components/ProductItem.vue'
//import SelectPerPage from '~/components/SelectPerPage.vue'
import Footer from '~/components/Footer.vue'
import Translate from '~/mixins/Translate.vue'
import Breadcrumb from "../../../components/Breadcrumb";

export default {
  // head: {
  //   bodyAttrs: {
  //     class: 'left-sidebar home-page'
  //   }
  // },
  mixins: [Translate],

  components: {
    Breadcrumb,
    Header,
    ProductItem,
//    Breadcrumb,
//    SelectPerPage,
    Footer
  },
  watchQuery: ['page'],
  // mounted () {
  //   this.$store.dispatch('products/getItems', {
  //     'category.slug': this.categorySlug,
  //     'page': 1,
  //     'itemsPerPage': ~~process.env.NUXT_ENV_PER_PAGE
  //   })
  // },
  async asyncData (params) {
    let currentPage = parseInt(params.query.page) || 1;

    await params.store.dispatch('products/getItems', {
      'category.slug': params.params.categorySlug,
      'page': currentPage,
      'itemsPerPage': ~~process.env.NUXT_ENV_PER_PAGE
    })

    return {
      categorySlug: params.params.categorySlug,
      currentPage: currentPage
    }
  },
  computed: {
    breadcrumbs () {
      return [{
        name: 'Home',
        link: '/'
      }, {
        name: 'Products',
      }]
    },
    products () {
      return this.$store.getters['products/items']
    },
    categories () {
      return this.$store.getters['categories/items']
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
        return this.localePath({name: 'catalog-categorySlug', params: {categorySlug: this.categorySlug}})
      }

      return this.localePath({name: 'catalog-categorySlug', params: {categorySlug: this.categorySlug}, query: {page: page}})
    },
  }
}
</script>
