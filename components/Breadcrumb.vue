<template>
  <v-row>
    <v-col cols="12">
      <v-breadcrumbs :items="breadcrumbs" class="pl-0">
        <template v-slot:item="props">
          <v-breadcrumbs-item
            :href="props.item.link"
            :class="[props.item.disabled && 'disabled']"
          >
            {{ props.item.name }}
          </v-breadcrumbs-item>
        </template>
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
