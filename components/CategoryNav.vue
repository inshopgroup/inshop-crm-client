<template>
  <div>
    <div class="d-flex">
      <div
        v-for="category in categories"
        :key="category.id"
        class="p-3"
        @mouseover="mouseover(category.id)"
        @mouseleave="mouseleave"
        @click="mouseleave"
      >
        <nuxt-link
          :to="localePath({ name: 'catalog-categorySlug', params: {categorySlug: category.slug} })"
          class="white--text"
        >
          {{ translation(category).name }}
        </nuxt-link>
      </div>
    </div>

    <div
      v-for="category in categories"
      :key="category.id"
      dark
      color="success"
      :class="['position-absolute', 'submenu-bg', {'d-none': hover !== category.id}, {'d-flex': hover === category.id}]"
      @mouseover="mouseover(category.id)"
      @mouseleave="mouseleave"
      @click="mouseleave"
    >
      <v-col cols="auto" class="ml-2 mr-2">
        <v-row justify="space-between">
          <nuxt-link
            :to="localePath({name: 'catalog-categorySlug', params: {categorySlug: subCategory.slug}})"
            v-for="subCategory in category.subCategories"
            v-if="category.subCategories"
            :key="subCategory.id"
            class="m-2 w-25 text-left white--text"
          >
            {{ translation(subCategory).name }}
          </nuxt-link>
        </v-row>
      </v-col>
    </div>
  </div>
  
</template>

<script>
  import Translate from '~/mixins/Translate.vue'

  export default {
    mixins: [Translate],
    name: 'CategoryNav',
    data() {
      return {
        hover: null,
        timeout: null,
      }
    },
    computed: {
      categories() {
        return this.$store.getters['category/items']
      }
    },
    methods: {
      mouseover(id) {
        this.hover = id
        clearTimeout(this.timeout)
      },
      mouseleave() {
        this.timeout = setTimeout(() => {
          this.hover = null
        }, 50)
      }
    }
  }
</script>

<style>
  .submenu-bg {
    background-color: #255769;
  }
</style>