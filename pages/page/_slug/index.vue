<template>
  <div>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <h1>{{ item.title }}</h1>

    <div v-html="item.content"></div>
  </div>
</template>

<script>
  import Breadcrumb from '../../../components/Breadcrumb'

  export default {
    components: {
      Breadcrumb,
    },
    head() {
      return {
        title: this.item.seoTitle,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.item.seoDescription
        }, {
          hid: 'keywords',
          name: 'keywords',
          content: this.item.seoKeywords
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
          name: this.item.title
        }]
      },
      item() {
        return this.$store.getters['text/item']
      },
    }
  }
</script>
