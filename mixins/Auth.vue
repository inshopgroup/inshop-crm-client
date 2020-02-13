<script>
export default {
  computed: {
    jwtDecoded() {
      return this.$store.getters['auth/jwtDecoded'] || null
    },
    isAuthenticated() {
      return this.jwtDecoded && this.jwtDecoded.exp > Date.now() / 1000
    }
  }
}
</script>
