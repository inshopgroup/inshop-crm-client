import Vue from 'vue'
import FormComponents from '@inshopgroup/vue-inshop-crm-form-components'
import '@inshopgroup/vue-inshop-crm-form-components/dist/vue-inshop-crm-form-components.css'

Object.keys(FormComponents).forEach(name => {
  Vue.component(name, FormComponents[name])
})
