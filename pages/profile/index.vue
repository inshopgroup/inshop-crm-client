<template>
  <div>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <h1>Personal info</h1>

    <form method="post" @submit.prevent="saveForm" v-if="item">
      <form-input
          :item="item"
          :property="'username'"
          :label="'email'"
          :type="'email'"
          :required="false"
          :errors="errors"
          :disabled="true"
          @formUpdated="updateValue"
      ></form-input>

      <form-input
          :item="item"
          :property="'name'"
          :label="'Name'"
          :required="true"
          :errors="errors"
          @formUpdated="updateValue"
      ></form-input>

      <form-input
          :item="item"
          :property="'plainPassword'"
          :label="'Password'"
          :required="false"
          :errors="errors"
          :type="'password'"
          @formUpdated="updatePassword"
      ></form-input>

      <form-input
          :item="item"
          :property="'repeatPassword'"
          :label="'Repeat password'"
          :required="false"
          :errors="errors"
          :type="'password'"
          @formUpdated="updatePassword"
      ></form-input>

      <button type="submit" size="lg" class="btn btn-success btn-lg">Update</button>
    </form>
  </div>
</template>

<script>
  import Breadcrumb from "../../components/Breadcrumb";

  export default {
    middleware: 'authenticated',
    components: {
      Breadcrumb,
    },
    mounted() {
      this.$store.dispatch('user/get')
    },
    computed: {
      breadcrumbs() {
        return [
          {
            name: 'Home',
            link: '/'
          },
          {
            name: 'Personal info',
          }
        ]
      },
      item() {
        return this.$store.getters['user/item']
      },
      errors() {
        return this.$store.getters['user/errors']
      },
    },
    methods: {
      saveForm() {
        if (this.errors && this.errors.repeatPassword) {
          return
        }

        this.$store.dispatch('user/update')
          .then(() => {
            this.$toast.success('Successfully saved')
          })
          .catch(() => {
            this.$toast.error('Some error! Please, check form')
          })
      },
      updateValue(property, value) {
        this.$store.commit('user/UPDATE_ITEM', {[property]: value})
      },
      updatePassword(property, value) {
        this.updateValue(property, value)

        if ((this.item.plainPassword || this.item.repeatPassword) && this.item.plainPassword !== this.item.repeatPassword) {
          this.$store.commit('user/SET_ERRORS', {repeatPassword: 'Passwords are not the same'})
        } else {
          this.$store.commit('user/SET_ERRORS', {})
        }
      },
    },
    beforeDestroy() {
      this.$store.commit('user/SET_ERRORS', {})
    },
  }
</script>
