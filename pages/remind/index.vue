<template>
  <div class="content-center">
    <form method="post" @submit.prevent="remindPassword">
      <h1>Remind password</h1>

      <form-input
          :type="'email'"
          :label="'Email'"
          :item="item"
          :errors="errors"
          :property="'username'"
          @formUpdated="updateValue"
      ></form-input>

      <button type="submit" class="btn btn-primary btn-lg">{{ $t('continue') }}</button>

      <p>
        {{ $t('already_have_account') }}
        <nuxt-link to="/signin">{{ $t('signin') }}</nuxt-link>
      </p>
    </form>
  </div>
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
