<template>
  <div>
    <section class="jumbotron text-center">
      <div class="container">
        <h1 class="jumbotron-heading">E-COMMERCE CATEGORY</h1>
        <p class="lead text-muted mb-0">Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte...</p>
      </div>
    </section>

    <b-pagination-nav align="right" :number-of-pages="pagesTotal" v-model="current" :link-gen="linkGen"></b-pagination-nav>

    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-3">
          <div class="card bg-light mb-3">
            <div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-list"></i> Categories</div>
            <ul class="list-group category_block">
              <li class="list-group-item"><a href="category.html">Cras justo odio</a></li>
              <li class="list-group-item"><a href="category.html">Dapibus ac facilisis in</a></li>
              <li class="list-group-item"><a href="category.html">Morbi leo risus</a></li>
              <li class="list-group-item"><a href="category.html">Porta ac consectetur ac</a></li>
              <li class="list-group-item"><a href="category.html">Vestibulum at eros</a></li>
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

            <template v-for="product in items">
              <product-item :product="product" :category-slug="categorySlug"></product-item>
            </template>

          </div>
        </div>
      </div>
    </div>

    <!--<div class="tab-content">-->
      <!--<div role="tabpanel" class="tab-pane active" id="grid-extended" aria-expanded="true">-->
        <!--<ul class="products columns-3">-->
        <!--</ul>-->
      <!--</div>-->
    <!--</div>-->

    <b-pagination-nav align="right" :number-of-pages="pagesTotal" v-model="current" :link-gen="linkGen"></b-pagination-nav>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
//import Breadcrumb from '~/components/Breadcrumb.vue'
import ProductItem from '~/components/ProductItem.vue'
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
    let current = parseInt(params.query.page) || 1;

    await params.store.dispatch('products/getItems', {
      'category.slug': params.params.categorySlug,
      'page': current,
      'itemsPerPage': ~~process.env.NUXT_ENV_PER_PAGE
    })

    return {
      categorySlug: params.params.categorySlug,
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
        return this.localePath({name: 'catalog-categorySlug', params: {categorySlug: this.categorySlug}})
      }

      return this.localePath({name: 'catalog-categorySlug', params: {categorySlug: this.categorySlug}, query: {page: page}})
    },
  }
}
</script>
