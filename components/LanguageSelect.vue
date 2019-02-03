<template>
    <div class="dropdown language-select">
        <div class="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
            <template v-if="locale == 'en'"><span class="icon"></span>English</template>
            <template v-if="locale == 'ru'"><span class="icon"></span>Russian</template>
            <span class="caret"></span>
        </div>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a :href="switchLocalePath('en')" @click.prevent="setLocale('en')">
                <span class="icon"></span>English
              </a>
            </li>
            <li>
              <a :href="switchLocalePath('ru')" @click.prevent="setLocale('ru')">
                <span class="icon"></span>Russian
              </a>
            </li>
        </ul>
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
