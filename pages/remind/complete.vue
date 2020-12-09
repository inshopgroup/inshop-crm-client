<template>
  <b-container>
    <b-row class="signup">
      <b-col xl="6" offset-xl="3" lg="8" offset-lg="2" md="10" offset-md="1">
        <b-row>
          <b-col cols="12">
            <div class="page-header">
              <h1>Remind password complete</h1>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <p>Please check your email to reset your password</p>
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
      title: 'Remind password complete',
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: 'Remind password complete',
        },
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'Remind password complete',
        },
      ],
    }
  },
}
</script>
