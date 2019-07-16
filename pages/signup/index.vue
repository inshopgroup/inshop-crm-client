<template>
  <div class="content-center">
    <form method="post" @submit.prevent="signUp">
      <h1>Registration</h1>

      <form-input
          :item="item"
          :property="'username'"
          :label="'email'"
          :type="'email'"
          :required="true"
          :errors="errors"
          @formUpdated="updateValue"
      ></form-input>

      <form-input
          :item="item"
          :property="'name'"
          :label="'Name'"
          :required="true"
          :errors="errors"
          @formUpdated="updateValue"
      ></form-input>

      <form-input
          :item="item"
          :property="'plainPassword'"
          :label="'Password'"
          :required="true"
          :errors="errors"
          :type="'password'"
          @formUpdated="updatePassword"
      ></form-input>

      <form-input
          :item="item"
          :property="'repeatPassword'"
          :label="'Repeat password'"
          :required="true"
          :errors="errors"
          :type="'password'"
          @formUpdated="updatePassword"
      ></form-input>

      <button type="submit" class="btn btn-primary btn-lg">Continue</button>

      <p>
        Already have profile?
        <nuxt-link to="/signin">Sign in</nuxt-link>
      </p>
    </form>
  </div>
</template>

<script>
  export default {
    middleware: 'authenticatedSignin',
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

        this.$store.dispatch('user/signup')
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
