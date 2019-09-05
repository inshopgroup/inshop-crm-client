<template>
  <v-container>

    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <v-row>
      <v-col cols="12">
        <h1>Checkout</h1>
      </v-col>
    </v-row>

    <v-row justify="space-between">
      <v-col cols="5">
        <form method="post" @submit.prevent="" ref="form">
          <v-text-field
            auto-grow
            outlined
            color="success"
            :item="item"
            property="name"
            label="Name"
            :required="true"
            :errors="errors"
            @formUpdated="updateValue"
          />
          <v-text-field
            auto-grow
            outlined
            color="success"
            :item="item"
            :property="'username'"
            :label="'Email'"
            :type="'email'"
            :required="true"
            :errors="errors"
            @formUpdated="updateValue"
          />
          <v-text-field
            auto-grow
            outlined
            color="success"
            :item="item"
            :label="'Phone'"
            :type="'tel'"
            :required="true"
            :errors="errors"
            @formUpdated="updateValue"
          />
          <v-combobox
            :items="countries"
            outlined
            color="success"
            label="Country"
          />
          <v-combobox
            :items="cities"
            outlined
            color="success"
            label="City"
          />
          <v-text-field
            auto-grow
            outlined
            color="success"
            :item="item"
            :errors="errors"
            property="postCode"
            label="Post code"
            @formUpdated="updateValue"
          />
          <v-text-field
            auto-grow
            outlined
            color="success"
            :item="item"
            :errors="errors"
            property="street"
            label="Street"
            @formUpdated="updateValue"
          />
  
          <v-row justify="space-between">
            <v-col cols="6">
              <v-btn  outlined block color="error" @click="$refs.form.reset()">
                <v-icon left>mdi-trash-can-outline</v-icon>
                Reset Form
              </v-btn>
            </v-col>

            <v-col cols="6">
              <v-btn block color="primary">
                <v-icon left>mdi-progress-upload</v-icon>
                Submit
              </v-btn>
             </v-col>
          </v-row>

        </form>
      </v-col>

      <v-col cols="5" offset="2">
        <v-card 
          width="100%"
          raised
          color="grey lighten-3"
        >
          <v-row justify="space-between">
            <v-col cols="3">
              <v-img
                class="mx-3"
                src="https://via.placeholder.com/350x350/ffcf5b"
              ></v-img>
            </v-col>
            <v-col cols="9">
              <v-card-title class="py-2">
                <p class="text-primary mb-0">Wisozk, Blick and Stehr</p>
              </v-card-title>
              <v-card-text>
                <div class="d-flex justify-space-between">
                  <p class="pb-0">1 qty.</p>
                  <p class="pb-0">$200</p>
                </div>
              </v-card-text>
            </v-col>
          </v-row>

          <v-divider width="96%" class="mx-auto my-0"></v-divider>
          
          <v-row justify="space-between">
            <v-col cols="6">
              <v-card-text class="py-0">
                <p class="mb-0">Total</p>
              </v-card-text>
            </v-col>
             <v-col cols="6" class="text-right">
                <v-card-text class="py-0">
                  <p class="mb-0"><b>$200</b></p>
                </v-card-text>
             </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="auto" class="pt-0">
              <v-card-actions class="p-0">
                <v-btn
                  outlined
                  color="success"
                  to="/cart"
                >
                  <v-icon left>mdi-pencil-outline</v-icon>
                  Edit order
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>

        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
  import Breadcrumb from "../../components/Breadcrumb"

  export default {
    data() {
      return {
        countries: ['Ukrain', 'Poland', 'Usa'],
        cities: ['Poltava', 'Warsaw', 'Berlin']
      }
    },
    components: {
      Breadcrumb,
    },
    computed: {
      breadcrumbs() {
        return [
          {
            name: 'Home',
            link: '/'
          },
          {
            name: 'Checkout',
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
      updateValue(property, value) {
        this.$store.commit('user/UPDATE_ITEM', {[property]: value})
      },
    },
    beforeDestroy() {
      this.$store.commit('user/SET_ERRORS', {})
    },
  }
</script>
