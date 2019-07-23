<template>
  <div>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <h1>{{ translation(item).title }}</h1>

    <div v-html="translation(item).content"></div>
  </div>
</template>

<script>
  import Breadcrumb from '../../../components/Breadcrumb'
  import Translate from "../../../mixins/Translate";

  export default {
    mixins: [Translate],
    components: {
      Breadcrumb,
    },
    head() {
      return {
        title: this.translation(this.item).seoTitle,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.translation(this.item).seoDescription
        }, {
          hid: 'keywords',
          name: 'keywords',
          content: this.translation(this.item).seoKeywords
        }]
      }
    },
    async asyncData(params) {
      await params.store.dispatch('text/getItem', params.params.slug)

      return {
        slug: params.params.slug
      }
    },
    computed: {
      breadcrumbs() {
        return [{
          name: this.$t('home'),
          link: '/'
        }, {
          name: this.translation(this.item).title
        }]
      },
      item() {
        return this.$store.getters['text/item']
      },
    }
  }
</script>
