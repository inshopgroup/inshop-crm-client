<template>
  <b-row>
    <b-col cols="12">
      <ol class="breadcrumb">
        <li v-for="breadcrumb in breadcrumbs">
          <template v-if="breadcrumb.link">
            <a :href="breadcrumb.link">{{breadcrumb.name}}</a>
          </template>

          <template v-else>
            {{breadcrumb.name}}
          </template>
        </li>
      </ol>
    </b-col>
  </b-row>
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
