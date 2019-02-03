<template>
  <div class="custom-input-group">
    <div v-if="label" class="custom-input-group__ttl">
      {{ label }}
    </div>
    <div class="custom-input-group__input">
      <b-form-group>
        <no-ssr>
          <v-select
              :multiple="multiple"
              :id="path"
              :value="item[path]"
              :options="options"
              :class="['form-control-select2', isInvalid() ? 'is-invalid' : 'is-valid']"
              :label="searchField"
              @search="loadOptions"
              @input="$emit('fieldUpdated', path, $event)"
          ></v-select>
        </no-ssr>

        <b-form-invalid-feedback>{{ errors[path] }}</b-form-invalid-feedback>

        <div v-if="help" class="custom-input-group__help custom-input-group__help_default">
          {{ help }}
        </div>
      </b-form-group>
    </div>
  </div>
</template>

<style lang="scss">
  .v-select {
    margin-bottom: 0;
    .dropdown-toggle {
      .clear {
        visibility: hidden;
      }
      &::after {
        content: none;
      }
    }
  }

  .form-control-select2 {
    &.is-invalid ~ .invalid-feedback {
      display: block;
    }
    &.is-invalid .dropdown-toggle {
      border-color: #dc3545;
    }
    &.is-valid .dropdown-toggle {
      border-color: #28a745;
      border-radius: .25rem;
    }
    .form-control {
      height: calc(2.25rem - 8px)
    }
  }
</style>

<script>
  import _ from 'lodash'
  import pluralize from "pluralize";

  export default {
    name: 'FormVSelect',
    props: {
      multiple: {
        type: Boolean,
        default: () => false
      },
      autocomplete: {
        type: Boolean,
        default: () => false
      },
      item: {
        type: Object,
        default: () => {}
      },
      errors: {
        type: Object,
        default: () => {}
      },
      property: {
        type: String,
        required: true
      },
      searchField: {
        type: String,
        default: 'name'
      },
      optionProperty: {
        type: String,
        required: true
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
      options() {
        return this.$store.getters[this.optionProperty + '/items'] || []
      },
      path() {
        return this.multiple ? pluralize(this.property) : this.property;
      }
    },
    mounted() {
      this.getOptions()
    },
    methods: {
      getOptions() {
        if (!this.autocomplete) {
          this.$store.dispatch(this.optionProperty + '/getItems')
        }
      },
      loadOptions(keyword, loading) {
        if (this.autocomplete) {
          loading(true);
          this.search(loading, keyword, this);
        }
      },
      search: _.debounce((loading, keyword, vm) => {
        vm.$store.dispatch('loadingAllow', false)
        vm.$store.dispatch(vm.property + '/getItems', {[vm.searchField]: keyword})
        loading(false);
      }, 800),
      isInvalid() {
        return Object.keys(this.errors).length > 0 && this.errors[this.path]
      }
    }
  }
</script>
