<template>
  <div class="custom-input-group">
    <label v-if="label" class="custom-input-group__ttl" :for="property">
      {{ label }}
    </label>
    <div class="custom-input-group__input">
      <b-form-group>
        <b-form-input
            :id="property"
            :value="item[property]"
            :type="type"
            :placeholder="placeholder"
            :required="required"
            :disabled="disabled"
            :state="!isInvalid()"
            @input="$emit('fieldUpdated', property, $event)"
        ></b-form-input>
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
    name: 'FormInput',
    props: {
      item: {
        type: Object,
        default: () => {}
      },
      property: {
        type: String,
        default: null
      },
      type: {
        type: String,
        default: 'text'
      },
      label: {
        type: String,
        default: null
      },
      placeholder: {
        type: String,
        default: null
      },
      help: {
        type: String,
        default: null
      },
      required: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
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
