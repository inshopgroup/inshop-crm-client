<template>
  <a :href="'#'" :class="{ active: filterSelected }" @click.prevent="click">{{
    value
  }}</a>
</template>

<script>
import pluralize from 'pluralize'

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    aggregation: {
      type: Object,
      required: true
    }
  },
  computed: {
    filters() {
      return this.$store.getters[this.route + '/filters']
    },
    query() {
      return this.$store.getters[this.route + '/query']
    },
    filter() {
      return this.filters[this.name]
    },
    filterSelected() {
      return this.filter && this.filter.includes(this.id)
    }
  },
  methods: {
    click() {
      let filters = Object.assign({}, this.filters)
      let filter = (this.filter || []).slice()

      let index = filter.indexOf(this.id)

      if (index > -1) {
        filter.splice(index, 1)
      } else {
        filter.push(this.id)
      }

      filters[this.name] = filter

      this.$store.commit(this.route + '/SET_FILTERS', filters)
      this.$router.push({ name: pluralize(this.route), query: this.query })
    }
  }
}
</script>
