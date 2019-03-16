<script>
  export default {
    mounted () {
      if (this.jwtDecoded.exp - (Date.now() / 1000) < 900) {
        this.$store.dispatch('auth/refreshToken').catch(e => {})
      }
    },
    computed: {
      jwtDecoded() {
        return this.$store.getters['auth/jwtDecoded']
      },
    }
  }
</script>
