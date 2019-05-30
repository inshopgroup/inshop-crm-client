<template>
  <div class="custom-input-group">
    <label v-if="label" class="custom-input-group__ttl" :for="propertyFrom">
      {{ label }}
    </label>
    <div class="custom-input-group__input">
      <b-form-group>
        <b-row>
          <b-col md="2" :class="'text-right'">
            From:
          </b-col>
          <b-col md="4">
            <b-form-input
                :id="propertyFrom"
                :value="item[propertyFrom]"
                :type="'number'"
                :placeholder="placeholder"
                :required="required"
                :disabled="disabled"
                :state="!isInvalidFrom()"
                @input="$emit('fieldUpdated', propertyFrom, $event ? parseFloat($event) : null)"
            ></b-form-input>
            <b-form-invalid-feedback v-if="isInvalidFrom()">{{ errors[propertyFrom] }}</b-form-invalid-feedback>
          </b-col>
          <b-col md="2" :class="'text-right'">
            To:
          </b-col>
          <b-col md="4">
            <b-form-input
                :id="propertyTo"
                :value="item[propertyTo]"
                :type="'number'"
                :placeholder="placeholder"
                :required="required"
                :disabled="disabled"
                :state="!isInvalidTo()"
                @input="$emit('fieldUpdated', propertyTo, $event ? parseFloat($event) : null)"
            ></b-form-input>
            <b-form-invalid-feedback v-if="isInvalidTo()">{{ errors[propertyTo] }}</b-form-invalid-feedback>
          </b-col>
        </b-row>

        <div v-if="help" class="custom-input-group__help custom-input-group__help_default">
          {{ help }}
        </div>
      </b-form-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormRange',
    props: {
      item: {
        type: Object,
        default: () => ({})
      },
      propertyFrom: {
        type: String,
        required: true
      },
      propertyTo: {
        type: String,
        required: true
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
      isInvalidFrom() {
        return Object.keys(this.errors).length > 0 && this.errors[this.propertyFrom]
      },
      isInvalidTo() {
        return Object.keys(this.errors).length > 0 && this.errors[this.propertyTo]
      }
    }
  }
</script>
