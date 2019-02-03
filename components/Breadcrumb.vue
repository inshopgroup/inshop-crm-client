<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <!--<li class="breadcrumb-item"><a href="index.html">Home</a></li>-->
            <!--<li class="breadcrumb-item"><a href="category.html">Category</a></li>-->
            <!--<li class="breadcrumb-item active" aria-current="page">Sub-category</li>-->

            <li v-for="breadcrumb in breadcrumbs">
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
  </div>
  <!--<b-row>-->
    <!--<b-col cols="12">-->
      <!--<ol class="breadcrumb">-->
        <!--<li v-for="breadcrumb in breadcrumbs">-->
          <!--<template v-if="breadcrumb.link">-->
            <!--<a :href="breadcrumb.link">{{breadcrumb.name}}</a>-->
          <!--</template>-->

          <!--<template v-else>-->
            <!--{{breadcrumb.name}}-->
          <!--</template>-->
        <!--</li>-->
      <!--</ol>-->
    <!--</b-col>-->
  <!--</b-row>-->
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
