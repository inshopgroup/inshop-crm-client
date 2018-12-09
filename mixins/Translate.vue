<script>
  export default {
    methods: {
      translation (item) {
        let translationLocale = null
        let translationAny = null

        item.translations.forEach(translation => {
          if (translationAny === null) {
            translationAny = translation
          }

          if (translation.language.code === this.$i18n.locale) {
            translationLocale = translation
          }
        })

        return translationLocale || translationAny || {}
      }
    }
  }
</script>
