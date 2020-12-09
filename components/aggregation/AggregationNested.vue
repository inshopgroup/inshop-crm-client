<template>
  <div>
    <h5 class="filter__ttl">{{ label }}</h5>

    <ul :class="{ 'tag-class': tagsStyle }">
      <li v-for="aggregation in aggregations">
        <aggregation-nested-option
          :name="name"
          :route="route"
          :aggregation="aggregation"
        ></aggregation-nested-option>
      </li>
    </ul>
  </div>
</template>

<script>
import AggregationNestedOption from './AggregationNestedOption'

export default {
  name: 'AggregationNested',
  components: { AggregationNestedOption },
  props: {
    name: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    aggregations: {
      type: Array,
      required: true,
    },
    tagsStyle: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
