<template>
  <div class="custom-input-group">
    <div v-if="label" class="custom-input-group__ttl">
      {{ label }}
    </div>
    <div class="custom-input-group__input">
      <b-form-group>
        <b-form-file
             placeholder="Choose a file..."
             accept="image/jpeg, image/png"
             @input="$emit('imageSelected', $event)"
        ></b-form-file>
        <b-form-invalid-feedback>{{ 'some error' }}</b-form-invalid-feedback>
        <div v-if="help" class="custom-input-group__help custom-input-group__help_default">
          {{ help }}
        </div>
      </b-form-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormFile',
    props: {
      label: {
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
      errors: {
        type: Object,
        default: () => {}
      },
    },
    methods: {
      isInvalid() {
        return Object.keys(this.errors).length > 0 && this.errors[this.property]
      }
    }
  }
</script>