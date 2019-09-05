<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="4" class="text-center">
        <form method="post" @submit.prevent="signIn">
          <h1 class="display-3 mb-5">Sign In</h1>
          <v-text-field
            auto-grow
            outlined
            color="success"
            type="email"
            label="Email"
            :item="credentials"
            :errors="errors"
            property="username"
            @input="updateValue($event, 'username')"
          />
          <v-text-field
            auto-grow
            outlined
            color="success"
            type="password"
            label="Password"
            :item="credentials"
            :errors="errors"
            property="password"
            @input="updateValue($event, 'password')"
          />
          <div class="text-center mt-1">
            <v-btn class="mx-auto" type="submit" color="#0c5c6f" dark>Sign In</v-btn>
          </div>
          <div class="text-center mt-1">
            <v-btn text to="/remind" class="text-capitalize p-2" color="primary">Forgot password?</v-btn>
          </div>
          <div class="d-flex align-baseline justify-center mt-3">
            Don't have profile yet?
            <v-btn text height="27" to="/signup" class="text-capitalize p-2" color="primary">Sign up</v-btn>
          </div>
        </form>
      </v-col>
    </v-row>
  </v-container>
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
      updateValue(value, property) {
        this.credentials[property] = value
      }
    }
  }
</script>
