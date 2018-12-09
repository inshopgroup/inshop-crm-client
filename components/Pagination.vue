<template>
  <div class="shop-control-bar-bottom">
      <!--<SelectPerPage />-->
      <p class="woocommerce-result-count">Total ads: {{total}}</p>

      <nav class="woocommerce-pagination">
      <ul class="page-numbers">
        <li v-for="page in pages">
            <nuxt-link
                    :to="localePath({name: route, params: params, query: { page: page }})"
                    :class="{'nuxt-link-exact-active': current === page}"
            >
                <span class="page-numbers">{{page}}</span>
            </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    props: {
      route: null,
      params: {},
      total: 0,
      current: 0,
      perPage: 0
    },
    computed: {
      pages () {
        return Math.ceil(this.total / this.perPage)
      }
    }
  }
</script>
