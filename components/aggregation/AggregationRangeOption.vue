<script>
import AggregationOption from './AggregationOption'

export default {
  name: 'AggregationRangeOption',
  mixins: [AggregationOption],
  computed: {
    id() {
      if (!this.aggregation.to) {
        return this.aggregation.from.toString()
      }

      return this.aggregation.from + '-' + this.aggregation.to
    },
    value() {
      return this.aggregation.key
    }
  }
}
</script>
