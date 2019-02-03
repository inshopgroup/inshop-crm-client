<template>
  <div class="custom-input-group custom-input-group_single-checkbox">
    <div class="custom-input-group__input">
      <b-form-group>
        <b-form-checkbox
            :id="property"
            :name="property"
            :value="true"
            :uncheckedValue="false"
            :checked="item[property]"
            @input="$emit('fieldUpdated', property, $event)"
        ></b-form-checkbox>

        <label v-if="label" class="custom-input-group__ttl" :for="property">{{ label }}</label>

        <b-form-invalid-feedback v-if="isInvalid()">{{ errors[property] }}</b-form-invalid-feedback>
        <div v-if="help" class="custom-input-group__help custom-input-group__help_default">
          {{ help }}
        </div>
      </b-form-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormCheckboxSingle',
    props: {
      item: {
        type: Object,
        default: () => {}
      },
      property: {
        type: String,
        default: null
      },
      label: {
        type: String,
        default: null
      },
      help: {
        type: String,
        default: null
      },
      errors: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    methods: {
      isInvalid() {
        return Object.keys(this.errors).length > 0 && this.errors[this.property]
      }
    }
  }
</script>
