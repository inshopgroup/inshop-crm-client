<template>
  <div>
    <h5 class="filter__ttl">{{ label }}</h5>

    <ul :class="{ 'tag-class': tagsStyle }">
      <li v-for="aggregation in aggregations">
        <aggregation-range-option
          v-if="aggregation.doc_count > 0"
          :name="name"
          :route="route"
          :aggregation="aggregation"
        ></aggregation-range-option>
      </li>
    </ul>
  </div>
</template>

<script>
import AggregationRangeOption from './AggregationRangeOption'

export default {
  name: 'AggregationRange',
  components: { AggregationRangeOption },
  props: {
    name: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    aggregations: {
      type: Array,
      required: true
    },
    tagsStyle: {
      type: Boolean,
      default: false
    }
  }
}
</script>
