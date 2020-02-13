<template>
  <div>
    <div class="d-flex">
      <div
        v-for="category in categories"
        :key="category.id"
        class="mr-3"
        @mouseover="mouseover(category.id)"
        @mouseleave="mouseleave"
        @click="mouseleave"
      >
        <nuxt-link
          :to="
            localePath({
              name: 'catalog-categorySlug',
              params: { categorySlug: category.slug }
            })
          "
          class="white--text"
        >
          {{ translation(category).name }}
        </nuxt-link>
      </div>
    </div>

    <div class="submenu">
      <div
        v-for="category in categories"
        :key="category.id"
        :class="[
          'container',
          { 'd-none': hover !== category.id },
          { 'd-flex': hover === category.id }
        ]"
        @mouseover="mouseover(category.id)"
        @mouseleave="mouseleave"
        @click="mouseleave"
      >
        <v-col cols="auto" class="ml-2 mr-2">
          <v-row justify="space-between">
            <nuxt-link
              v-for="subCategory in category.subCategories"
              v-if="category.subCategories"
              :key="subCategory.id"
              :to="
                localePath({
                  name: 'catalog-categorySlug',
                  params: { categorySlug: subCategory.slug }
                })
              "
              class="white--text ma-3"
            >
              {{ translation(subCategory).name }}
            </nuxt-link>
          </v-row>
        </v-col>
      </div>
    </div>
  </div>
</template>

<script>
import Translate from '~/mixins/Translate.vue'

export default {
  name: 'CategoryNav',
  mixins: [Translate],
  data() {
    return {
      hover: null,
      timeout: null
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
.submenu {
  background-color: #255769;
  position: absolute;
  width: 100%;
  left: 0;
  top: 100%;
}

.v-toolbar__content,
.v-toolbar__extension {
  padding: 0 16px !important;
}
</style>
