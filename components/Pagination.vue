<!--<template>-->
<!---->
<!--  <div class="shop-control-bar-bottom">-->
<!--    <SelectPerPage />-->
<!--    <slot></slot>-->
<!---->
<!--    <nav class="woocommerce-pagination">-->
<!--      <ul class="page-numbers">-->
<!--        <li v-for="page in pages">-->
<!--          <nuxt-link-->
<!--              :to="localePath({name: route, params: params, query: { page: page }})"-->
<!--              :class="{'nuxt-link-exact-active': current === page}"-->
<!--          >-->
<!--            <span class="page-numbers">{{ page }}</span>-->
<!--          </nuxt-link>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </nav>-->
<!--  </div>-->
<!--</template>-->

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>

      <li class="page-item" v-for="page in pages">
        <a class="page-link" :href="linkGen(page)">{{ page }}</a>
      </li>

      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
</template>

<script>
  const PAGER_OFFSET = 5;

  export default {
    name: 'Pagination',
    props: {
      linkGen: null,
      // params: {},
      total: 0,
      value: 0,
      // perPage: 0
    },
    computed: {
      perPage() {
        return ~~process.env.NUXT_ENV_PER_PAGE
      },
      pagesTotal() {
        return Math.ceil(this.total / this.perPage)
      },
      pagerStart () {
        let start = this.value - PAGER_OFFSET

        return (start < 1) ? 1 : start
      },
      pagerEnd () {
        let end = this.value + PAGER_OFFSET

        return (end > this.pagesTotal) ? this.pagesTotal : end
      },
      pages () {
        let pages = []

        for (let i = this.pagerStart; i <= this.pagerEnd; i++) {
          pages.push(i)
        }

        return pages
      }
    }
  }
</script>
