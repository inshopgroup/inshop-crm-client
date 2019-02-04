<template>
  <b-dropdown id="language" :text="locale" class="m-md-2">
    <b-dropdown-item :href="switchLocalePath('en')" @click.prevent="setLocale('en')">en</b-dropdown-item>
    <b-dropdown-item :href="switchLocalePath('ru')" @click.prevent="setLocale('ru')">ru</b-dropdown-item>
  </b-dropdown>
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
