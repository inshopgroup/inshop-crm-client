<template>
    <div class="row mb-2 mt-4">
      <div class="col">
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item" v-for="breadcrumb in breadcrumbs">
              <template v-if="breadcrumb.link">
                <a :href="breadcrumb.link">{{breadcrumb.name}}</a>
              </template>

              <template v-else>
                {{breadcrumb.name}}
              </template>
            </li>
          </ol>
        </nav>
      </div>
    </div>
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
