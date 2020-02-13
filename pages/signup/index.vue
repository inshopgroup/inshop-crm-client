<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="4" class="text-center">
        <form method="post" @submit.prevent="signUp">
          <h1 class="display-3 mb-5">Registration</h1>
          <v-text-field
            auto-grow
            outlined
            color="success"
            :item="item"
            :required="true"
            :errors="errors"
            property="username"
            label="Email"
            type="email"
            @input="updateValue($event, 'username')"
          />
          <v-text-field
            auto-grow
            outlined
            color="success"
            :item="item"
            :required="true"
            :errors="errors"
            property="name"
            label="Name"
            @input="updateValue($event, 'name')"
          />
          <v-text-field
            auto-grow
            outlined
            counter
            color="success"
            :item="item"
            :required="true"
            :errors="errors"
            property="plainPassword"
            label="Password"
            type="password"
            @input="updateValue($event, 'plainPassword')"
          />
          <v-text-field
            auto-grow
            outlined
            counter
            color="success"
            :item="item"
            :required="true"
            :errors="errors"
            property="repeatPassword"
            label="Repeat password"
            type="password"
            @input="updateValue($event, 'repeatPassword')"
          />
          <v-btn type="submit" color="#0c5c6f" dark class="mx-auto mt-1"
            >Continue</v-btn
          >
          <div class="d-flex align-baseline justify-center mt-3">
            Already have profile?
            <v-btn
              text
              height="27"
              to="/signin"
              class="text-capitalize p-2"
              color="primary"
              >Sign in</v-btn
            >
          </div>
        </form>
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
    }
  },
  beforeDestroy() {
    this.$store.commit('user/SET_ERRORS', {})
  },
  methods: {
    signUp() {
      if (this.errors && this.errors.repeatPassword) {
        return
      }

      this.$store
        .dispatch('user/signup')
        .then(() => {
          this.$router.push('/signup/complete')
        })
        .catch(() => {
          this.$toast.error('Some error! Please, check form')
        })
    },
    updateValue(value, property) {
      this.$store.commit('user/UPDATE_ITEM', { [property]: value })
    },
    updatePassword(property, value) {
      this.updateValue(property, value)

      if (
        (this.item.plainPassword || this.item.repeatPassword) &&
        this.item.plainPassword !== this.item.repeatPassword
      ) {
        this.$store.commit('user/SET_ERRORS', {
          repeatPassword: 'Passwords are not the same'
        })
      } else {
        this.$store.commit('user/SET_ERRORS', {})
      }
    }
  }
}
</script>
