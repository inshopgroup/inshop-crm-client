<template>
  <b-container>
    <b-row class="signup">
      <b-col xl="6" offset-xl="3" lg="8" offset-lg="2" md="10" offset-md="1">
        <b-row>
          <b-col cols="12">
            <div class="page-header">
              <h1>{{ $t('remind_password_complete') }}</h1>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <p>{{ $t('check_your_email_to_reset_your_password') }}</p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t('remind_password_complete'),
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: this.$t('remind_password_complete')
        },
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: this.$t('remind_password_complete')
        }
      ]
    }
  }
}
</script>
