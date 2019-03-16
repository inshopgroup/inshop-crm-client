<template>
  <b-row class="signup">
    <b-col xl="6" offset-xl="3" lg="8" offset-lg="2" md="10" offset-md="1">
      <b-row>
        <b-col cols="12">
          <div class="page-header">
            <h1>Sign In</h1>
          </div>
        </b-col>
        <b-col sm="6" class="col-left">
          <div class="col-left__wrap">
            <form method="post" @submit.prevent="signIn">
              <b-row>
                <b-col cols="12">
                  <form-input
                      type="email"
                      label="Email"
                      :item="credentials"
                      :errors="errors"
                      property="username"
                      @fieldUpdated="updateValue"
                  ></form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <form-input
                      type="password"
                      label="Password"
                      :item="credentials"
                      :errors="errors"
                      property="password"
                      @fieldUpdated="updateValue"
                  ></form-input>
                </b-col>
              </b-row>

              <b-button type="submit" variant="primary" size="lg">Sign In</b-button>
            </form>
            <div class="signup__bottom">
              <p>
                <nuxt-link to="/remind">Forgot password?</nuxt-link>
              </p>
              <p>Don't have profile yet?
                <nuxt-link to="/signup">Sign up</nuxt-link>
              </p>
            </div>
          </div>
        </b-col>

      </b-row>
    </b-col>
  </b-row>
</template>

<script>
  import FormInput from '../../components/form/FormInput'
  import FormRadio from '../../components/form/FormRadio'

  export default {
    middleware: 'authenticatedSignin',
    components: {
      FormInput,
      FormRadio,
    },
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
