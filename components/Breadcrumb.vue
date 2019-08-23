<template>

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
