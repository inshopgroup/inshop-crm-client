<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="4" class="text-center">
        <form method="post" @submit.prevent="remindPassword">
          <h1 class="display-5 mb-5">Remind password</h1>

          <v-text-field
            :type="'email'"
            :label="'Email'"
            :item="item"
            :errors="errors"
            :property="'username'"
            color="#0c5c6f"
            @formUpdated="updateValue"
          ></v-text-field>

          <v-btn type="submit" class="mx-auto" color="#0c5c6f" dark>{{ $t('continue') }}</v-btn>

          <div class="mt-3">
            {{ $t('already_have_account') }}
            <v-btn text to="/signin" color="#0c5c6f">{{ $t('signin') }}</v-btn>
          </div>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    layout: 'signin',
    head() {
      return {
        title: this.$t('remind'),
        meta: [{
          hid: `description`,
          name: 'description',
          content: this.$t('remind')
        }, {
          hid: `keywords`,
          name: 'keywords',
          keywords: this.$t('remind')
        }]
      }
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
      remindPassword() {
        this.$store.dispatch('user/remindPassword')
          .then(() => {
            this.$router.push('/remind/complete')
          })
          .catch(() => {
            this.$toast.error(this.$t('save_error'))
          })
      },
      updateValue(property, value) {
        this.$store.commit('user/UPDATE_ITEM', {[property]: value})
      }
    }
  }
</script>
