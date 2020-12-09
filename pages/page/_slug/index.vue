<template>
  <v-container>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <v-row>
      <v-col cols="12">
        <h1>{{ translation(item).title }}</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <div v-html="translation(item).content"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumb from '../../../components/Breadcrumb'
import Translate from '../../../mixins/Translate'

export default {
  components: {
    Breadcrumb,
  },
  mixins: [Translate],
  async asyncData(params) {
    await params.store.dispatch('text/getItem', params.params.slug)

    return {
      slug: params.params.slug,
    }
  },
  computed: {
    breadcrumbs() {
      return [
        {
          name: this.$t('home'),
          link: '/',
        },
        {
          name: this.translation(this.item).title,
        },
      ]
    },
    item() {
      return this.$store.getters['text/item']
    },
  },
  head() {
    return {
      title: this.translation(this.item).seoTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.translation(this.item).seoDescription,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.translation(this.item).seoKeywords,
        },
      ],
    }
  },
}
</script>
