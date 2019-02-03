<template>
  <div class="custom-input-group">
    <div v-if="label" class="custom-input-group__ttl">
      {{ label }}
    </div>
    <div class="custom-input-group__input">
      <b-form-group>
        <datepicker
            :value="item[property]"
            :monday-first="true"
            :input-class="'form-control is-valid'"
            :state="!isInvalid()"
            @input="$emit('fieldUpdated', property, $event)"
        ></datepicker>
        <b-form-invalid-feedback v-if="isInvalid()">{{ errors[property] }}</b-form-invalid-feedback>
        <div v-if="help" class="custom-input-group__help custom-input-group__help_default">
          {{ help }}
        </div>
      </b-form-group>
    </div>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker';

  export default {
    components: {
      Datepicker
    },
    name: 'FormDatepicker',
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
