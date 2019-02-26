<template>
  <div class="card bg-light mb-3">
    <div class="card-header bg-primary text-white text-uppercase"><i class="fa fa-list"></i> Categories</div>
    <ul class="list-group category_block">
      <li class="list-group-item"  v-for="category in categories" :key="category.id">
        <nuxt-link :to="localePath({name: 'catalog-categorySlug', params: {categorySlug: translation(category).slug}})" active-class="active">
          {{translation(category).name}}
        </nuxt-link>

        <ul v-if="category.subCategories">
          <li v-for="subCategory in category.subCategories">
            <nuxt-link :to="localePath({name: 'catalog-categorySlug', params: {id: translation(category).slug}})" active-class="active">
              {{translation(subCategory).name}}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import Translate from '~/mixins/Translate.vue'

  export default {
    mixins: [Translate],
    name: 'CategoryBlock',
    computed: {
      categories() {
        return this.$store.getters['categories/items']
      }
    }
  }
</script>
