<template>
  <is-main-template
    title="country_edit"
    :title-params="{ entity: item && item.name }"
  >
    <country-form :handle-submit="onSendForm" :item="item" />
  </is-main-template>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CountryForm from '../Form'

export default {
  components: {
    CountryForm,
  },
  layout: 'dashboard',
  middleware: 'authenticated',
  head() {
    return {
      title: 'Homepage title',
    }
  },
  computed: {
    ...mapGetters({
      item: 'country/item',
    }),
  },
  created() {
    this.getItem(this.$route.params.id)
  },
  beforeDestroy() {
    this.reset()
  },
  methods: {
    ...mapActions({
      getItem: 'country/getItem',
      update: 'country/update',
      reset: 'country/reset',
    }),
    onSendForm() {
      this.update()
        .then((item) => {
          this.$router.push({
            name: 'country-id-show___en',
            params: { id: item.id },
          })
        })
        .catch()
    },
  },
}
</script>
