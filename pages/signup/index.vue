<template>
  <b-row class="signup">
    <b-col xl="6" offset-xl="3" lg="8" offset-lg="2" md="10" offset-md="1">
      <b-row>
        <b-col cols="12">
          <div class="page-header">
            <h1>Registration</h1>
          </div>
        </b-col>
        <b-col sm="6" class="col-left">
          <div class="col-left__wrap">
            <form method="post" @submit.prevent="signUp">
              <b-row>
                <b-col cols="12">
                  <form-input
                      :item="item"
                      :property="'username'"
                      :label="'email'"
                      :type="'email'"
                      :required="true"
                      :errors="errors"
                      @fieldUpdated="updateValue"
                  ></form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <form-input
                      :item="item"
                      :property="'name'"
                      :label="'Name'"
                      :required="true"
                      :errors="errors"
                      @fieldUpdated="updateValue"
                  ></form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <form-input
                      :item="item"
                      :property="'plainPassword'"
                      :label="'Password'"
                      :required="true"
                      :errors="errors"
                      :type="'password'"
                      @fieldUpdated="updatePassword"
                  ></form-input>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <form-input
                      :item="item"
                      :property="'repeatPassword'"
                      :label="'Repeat password'"
                      :required="true"
                      :errors="errors"
                      :type="'password'"
                      @fieldUpdated="updatePassword"
                  ></form-input>
                </b-col>
              </b-row>

              <b-button type="submit" variant="primary" size="lg">Continue</b-button>
              <div class="signup__bottom d-block">
                Already have profile? <nuxt-link to="/signin">Sign in</nuxt-link>
              </div>
            </form>

          </div>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
  import FormInput from '../../components/form/FormInput'

  export default {
    middleware: 'authenticatedSignin',
    components: {
      FormInput,
    },
    computed: {
      item() {
        return this.$store.getters['user/item']
      },
      errors() {
        return this.$store.getters['user/errors']
      },
    },
    methods: {
      signUp() {
        if (this.errors && this.errors.repeatPassword) {
          return
        }

        this.$store.dispatch('user/add')
          .then(() => {
            this.$router.push('/signup/complete')
          })
          .catch(() => {
            this.$toast.error('Some error! Please, check form')
          })
      },
      updateValue(property, value) {
        this.$store.commit('user/UPDATE_ITEM', {[property]: value})
      },
      updatePassword(property, value) {
        this.updateValue(property, value)

        if ((this.item.plainPassword || this.item.repeatPassword) && this.item.plainPassword !== this.item.repeatPassword) {
          this.$store.commit('user/SET_ERRORS', {repeatPassword: 'Passwords are not the same'})
        } else {
          this.$store.commit('user/SET_ERRORS', {})
        }
      },
    },
    beforeDestroy() {
      this.$store.commit('user/SET_ERRORS', {})
    },
  }
</script>