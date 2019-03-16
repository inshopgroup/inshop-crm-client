<template>
  <b-container>
    <b-row class="signup">
      <b-col xl="4" offset-xl="4" lg="6" offset-lg="3" md="10" offset-md="1">
        <b-col cols="12">
          <div class="page-header">
            <h1>Remind password</h1>
          </div>
        </b-col>
        <div class="signup-wrap">
          <div class="signup-ttl text-center">
            {{ $t('reset_password') }}
          </div>
          <form method="post" @submit.prevent="remindPassword">
            <form-input
                :type="'email'"
                :label="'Email'"
                :item="item"
                :errors="errors"
                :property="'username'"
                @fieldUpdated="updateValue"
            ></form-input>
            <div class="text-center">
              <b-button type="submit" variant="primary" size="lg">{{ $t('continue') }}</b-button>
              <div class="signup-remind">
                {{ $t('already_have_account') }} <nuxt-link to="/">{{ $t('signin') }}</nuxt-link>
              </div>
            </div>
          </form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import FormInput from '../../components/form/FormInput'

  export default {
    layout: 'signin',
    head () {
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
    components: {
      FormInput
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