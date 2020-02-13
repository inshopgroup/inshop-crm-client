<script>
export default {
  computed: {
    jwtDecoded() {
      return this.$store.getters['auth/jwtDecoded']
    }
  },
  mounted() {
    if (this.jwtDecoded.exp - Date.now() / 1000 < 900) {
      this.$store.dispatch('auth/refreshToken').catch(e => {})
    }
  }
}
</script>
