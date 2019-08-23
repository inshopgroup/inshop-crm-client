<template>
  <v-container>
    <v-row justify="center" style="justify-content: center;">
      <v-col cols="4" class="text-center">
        <div class="content-center">
          <form method="post" @submit.prevent="signUp">
            <h1 class="display-3 mb-5">Registration</h1>

            <v-text-field
              :item="item"
              :property="'username'"
              :label="'email'"
              :type="'email'"
              :required="true"
              :errors="errors"
              color="#0c5c6f"
              @formUpdated="updateValue"
            ></v-text-field>

            <v-text-field
              :item="item"
              :property="'name'"
              :label="'Name'"
              :required="true"
              :errors="errors"
              color="#0c5c6f"
              @formUpdated="updateValue"
            ></v-text-field>

            <v-text-field
              :item="item"
              :property="'plainPassword'"
              :label="'Password'"
              :required="true"
              :errors="errors"
              :type="'password'"
              color="#0c5c6f"
              @formUpdated="updatePassword"
            ></v-text-field>

            <v-text-field
                :item="item"
                :property="'repeatPassword'"
                :label="'Repeat password'"
                :required="true"
                :errors="errors"
                :type="'password'"
                color="#0c5c6f"
                @formUpdated="updatePassword"
            ></v-text-field>

            <v-btn type="submit" color="#0c5c6f" dark class="mx-auto mt-1">Continue</v-btn>

            <div class="mt-3">
              Already have profile?
              <v-btn text to="/signin" color="#0c5c6f">Sign in</v-btn>
            </div>
          </form>
        </div>
      </v-col>
    </v-row>
  </v-container>
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
