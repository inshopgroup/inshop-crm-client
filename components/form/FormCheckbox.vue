<template>
  <div class="custom-input-group">
    <div v-if="label" class="custom-input-group__ttl">
      {{ label }}
    </div>
    <div class="custom-input-group__input">
      <b-form-group>
        <b-form-checkbox-group
            :checked="checked"
            @input="$emit('fieldUpdated', property, $event)"
            stacked
        >
          <b-form-checkbox
              name="property"
              v-for="option in options"
              :value="option['@id']"
              :key="option.id"
          >
            {{option.name}}
          </b-form-checkbox>
        </b-form-checkbox-group>

        <div v-if="help" class="custom-input-group__help custom-input-group__help_default">
          {{ help }}
        </div>
      </b-form-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormCheckbox',
    props: {
      label: {
        type: String,
        default: null
      },
      help: {
        type: String,
        default: null
      },
      property: {
        type: String,
        default: null
      },
      options: {
        type: Array,
        default: () => []
      },
      checked: {
        type: Array,
        default: () => []
      },
    }
  }
</script>