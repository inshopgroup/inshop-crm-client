<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-col cols="12">
        <h1 v-if="error.statusCode === 404" class="text-center overline">
          <span class="d-block mb-5">Oops! Page not found</span>
          <span class="d-flex justify-center align-center grey--text display-4 font-weight-black">404</span>
        </h1>
        <h1 v-else class="d-flex justify-center overline display-4 mb-5">An error occurred</h1>
        <p class="mb-5 text-center text-uppercase display-1">We are sorry, but the page you requested<br> was not found</p>
      </v-col>
       <v-col cols="12" class="text-center">
        <p class="mt-5 mb-0">Please try one the following pages</p>
        <v-btn 
          class="my-3" 
          color="#0c5c6f" 
          dark 
          to="/"
        >
          <v-icon left>mdi-home-circle</v-icon>
          Go to homepage
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>