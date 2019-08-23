<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 v-if="error.statusCode === 404" class="text-center overline display-4">
          <span class="d-block display-1 mb-3">404</span>
          Page not found
        </h1>
        <h1 v-else>An error occurred</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="text-center">
        <v-btn 
          x-large
          outlined 
          rounded 
          class="my-5" 
          color="#0c5c6f" 
          dark 
          to="/">
          Home page
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