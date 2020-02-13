<template>
  <v-menu offset-y class="mx-1">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">
        {{ locale }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="language in languages"
        :key="language"
        @click="setLocale(language)"
      >
        <v-list-item-title>{{ language }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    languages: ['en', 'de', 'pl', 'ru', 'es', 'fr', 'it']
  }),
  computed: {
    locale() {
      return this.$store.state.locale
    }
  },
  methods: {
    setLocale(locale) {
      this.$cookies.set('locale', locale)
      this.$store.commit('SET_LOCALE', locale)
      this.$router.push(this.switchLocalePath(locale))
    }
  }
}
</script>
