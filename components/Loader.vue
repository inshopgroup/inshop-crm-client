<template>
  <v-overlay :value="isLoading">
    <v-progress-circular
      v-if="isLoading"
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  name: 'Loader',
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    },
  },
}
</script>
