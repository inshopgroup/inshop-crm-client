<template>
  <div class="content-center">
    <form method="post" @submit.prevent="signIn">
      <h1>Sign In</h1>

      <form-input
          type="email"
          label="Email"
          :item="credentials"
          :errors="errors"
          property="username"
          @formUpdated="updateValue"
      ></form-input>

      <form-input
          type="password"
          label="Password"
          :item="credentials"
          :errors="errors"
          property="password"
          @formUpdated="updateValue"
      ></form-input>

      <button type="submit" class="btn btn-primary btn-lg">Sign In</button>

      <p>
        <nuxt-link to="/remind">Forgot password?</nuxt-link>
      </p>
      <p>
        Don't have profile yet?
        <nuxt-link to="/signup">Sign up</nuxt-link>
      </p>
    </form>
  </div>
</template>

<script>
  export default {
    middleware: 'authenticatedSignin',
    data() {
      return {
        credentials: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      errors() {
        return {
          username: this.$store.getters['auth/error'],
          password: this.$store.getters['auth/error']
        }
      }
    },
    methods: {
      signIn() {
        this.$store.dispatch('auth/login', this.credentials)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
      },
      updateValue(property, value) {
        this.credentials[property] = value
      }
    }
  }
</script>
