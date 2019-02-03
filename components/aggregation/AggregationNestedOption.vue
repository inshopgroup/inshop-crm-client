<script>
  import AggregationOption from './AggregationOption'

  export default {
    name: 'AggregationNestedOption',
    mixins: [AggregationOption],
    computed: {
      id() {
        return this.aggregation.key.split('|')[0].toString()
      },
      value() {
        return this.aggregation.key.split('|')[1]
      }
    }
  }
</script>
