<template>
  <div class="dropdown mr-2">
    <v-btn 
      class="dropdown-toggle" 
      color="primary" 
      dark 
      id="language" 
      data-toggle="dropdown" 
      aria-haspopup="true" 
      aria-expanded="false"
    >
      <v-icon small left>mdi-map-search-outline</v-icon>{{ locale }}
    </v-btn>
    <div class="dropdown-menu" aria-labelledby="language">
      <a class="dropdown-item" :href="switchLocalePath('en')" @click.prevent="setLocale('en')">en</a>
      <a class="dropdown-item" :href="switchLocalePath('de')" @click.prevent="setLocale('de')">de</a>
      <a class="dropdown-item" :href="switchLocalePath('pl')" @click.prevent="setLocale('pl')">pl</a>
      <a class="dropdown-item" :href="switchLocalePath('ru')" @click.prevent="setLocale('ru')">ru</a>
      <a class="dropdown-item" :href="switchLocalePath('es')" @click.prevent="setLocale('es')">es</a>
      <a class="dropdown-item" :href="switchLocalePath('fr')" @click.prevent="setLocale('fr')">fr</a>
      <a class="dropdown-item" :href="switchLocalePath('it')" @click.prevent="setLocale('it')">it</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setLocale (locale) {
      this.$cookies.set('locale', locale)
      this.$store.commit('SET_LOCALE', locale)
      this.$router.push(this.switchLocalePath(locale))
    }
  },
  computed: {
    locale () {
      return this.$store.state.locale
    }
  }
}
</script>
