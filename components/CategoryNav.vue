<template>
  <div class="bg-light">
    <div class="container">
      <div class="d-flex">
        <div
            v-for="category in categories"
            :key="category.id"
            class="p-3 text-center"
            @mouseover="mouseover(category.id)"
            @mouseleave="mouseleave"
            @click="mouseleave"
        >
          <nuxt-link
              :to="localePath({name: 'catalog-categorySlug', params: {categorySlug: category.slug}})"
              class="font-weight-bold"
          >
            {{translation(category).name}}
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="container">
      <div
          v-for="category in categories"
          :key="category.id"
          :class="['position-absolute', 'bg-light', {'d-none': hover !== category.id}, {'d-flex': hover === category.id}]"
          @mouseover="mouseover(category.id)"
          @mouseleave="mouseleave"
          @click="mouseleave"
      >
        <div class="col ml-2 mr-2">
          <div class="row">
            <nuxt-link
                :to="localePath({name: 'catalog-categorySlug', params: {categorySlug: subCategory.slug}})"
                v-for="subCategory in category.subCategories"
                v-if="category.subCategories"
                :key="subCategory.id"
                class="m-2 w-25 text-left"
            >
              {{translation(subCategory).name}}
            </nuxt-link>
          </div>
        </div>
      </div>
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
