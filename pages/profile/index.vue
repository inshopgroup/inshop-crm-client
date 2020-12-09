<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
      </v-col>
    </v-row>

    <v-row justify="center" style="justify-content: center">
      <v-col cols="4" class="text-center">
        <h1 class="display-5 mb-5">Personal info</h1>

        <form v-if="item" method="post" @submit.prevent="saveForm">
          <v-text-field
            :item="item"
            :property="'username'"
            :label="'email'"
            :type="'email'"
            :required="false"
            :errors="errors"
            :disabled="true"
            @formUpdated="updateValue"
          ></v-text-field>

          <v-text-field
            :item="item"
            :property="'name'"
            :label="'Name'"
            :required="true"
            :errors="errors"
            @formUpdated="updateValue"
          ></v-text-field>

          <v-text-field
            :item="item"
            :property="'plainPassword'"
            :label="'Password'"
            :required="false"
            :errors="errors"
            :type="'password'"
            @formUpdated="updatePassword"
          ></v-text-field>

          <v-text-field
            :item="item"
            :property="'repeatPassword'"
            :label="'Repeat password'"
            :required="false"
            :errors="errors"
            :type="'password'"
            @formUpdated="updatePassword"
          ></v-text-field>

          <v-btn type="submit" color="#0c5c6f" dark class="mx-auto mt-1"
            >Update</v-btn
          >
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb'

export default {
  middleware: 'authenticated',
  components: {
    Breadcrumb,
  },
  computed: {
    breadcrumbs() {
      return [
        {
          name: 'Home',
          link: '/',
        },
        {
          name: 'Personal info',
        },
      ]
    },
    item() {
      return this.$store.getters['user/item']
    },
    errors() {
      return this.$store.getters['user/errors']
    },
  },
  mounted() {
    this.$store.dispatch('user/get')
  },
  beforeDestroy() {
    this.$store.commit('user/SET_ERRORS', {})
  },
  methods: {
    saveForm() {
      if (this.errors && this.errors.repeatPassword) {
        return
      }

      this.$store
        .dispatch('user/update')
        .then(() => {
          this.$toast.success('Successfully saved')
        })
        .catch(() => {
          this.$toast.error('Some error! Please, check form')
        })
    },
    updateValue(property, value) {
      this.$store.commit('user/UPDATE_ITEM', { [property]: value })
    },
    updatePassword(property, value) {
      this.updateValue(property, value)

      if (
        (this.item.plainPassword || this.item.repeatPassword) &&
        this.item.plainPassword !== this.item.repeatPassword
      ) {
        this.$store.commit('user/SET_ERRORS', {
          repeatPassword: 'Passwords are not the same',
        })
      } else {
        this.$store.commit('user/SET_ERRORS', {})
      }
    },
  },
}
</script>
