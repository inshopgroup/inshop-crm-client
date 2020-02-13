<template></template>

<script>
export default {
  async asyncData(params) {
    return {
      token: params.params.token
    }
  },
  mounted() {
    this.$store
      .dispatch('auth/loginByToken', this.token)
      .then(data => {
        window.location = '/profile'
      })
      .catch(e => {
        window.location = '/'
      })
  }
}
</script>
