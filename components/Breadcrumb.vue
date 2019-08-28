<template>

  <v-row>
    <v-col cols="12">
      <v-breadcrumbs>
        <div v-for="breadcrumb in breadcrumbs">
          <template v-if="breadcrumb.link">
            <a :href="breadcrumb.link">{{breadcrumb.name}}</a>
          </template>

          <template v-else>
            {{breadcrumb.name}}
          </template>
        </div>
      </v-breadcrumbs>
    </v-col>
  </v-row>


</template>

<script>
  export default {
    name: 'Breadcrumb',
    props: {
      breadcrumbs: {
        type: Array,
        required: true
      },
    }
  }
</script>
