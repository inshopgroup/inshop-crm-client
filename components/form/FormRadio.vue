<template>
  <div class="custom-input-group">
    <div v-if="label" class="custom-input-group__ttl">
      {{ label }}
    </div>
    <div class="custom-input-group__input">
      <b-form-group>
        <b-form-radio-group
            :checked="checked"
            @input="$emit('fieldUpdated', property, $event)"
            stacked
        >
          <b-form-radio
              :name="property"
              v-for="option in options"
              :value="option"
              :key="option.id"
          >
            {{option.name}}
          </b-form-radio>
        </b-form-radio-group>

        <div v-if="help" class="custom-input-group__help custom-input-group__help_default">
          {{ help }}
        </div>
      </b-form-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormRadio',
    props: {
      item: {
        type: Object,
        required: true
      },
      property: {
        type: String,
        required: true
      },
      options: {
        type: Array,
        default: () => []
      },
      label: {
        type: String,
        default: null
      },
      help: {
        type: String,
        default: null
      }
    },
    computed: {
      checked () {
        let checked = null;

        if (this.item[this.property]) {
          this.options.some(option => {
            if (option['@id'] === this.item[this.property]['@id']) {
              checked = option
            }
          });
        }

        return checked
      }
    }
  }
</script>