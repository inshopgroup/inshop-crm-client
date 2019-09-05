<template>
  <v-container>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
    <v-row>
      <v-col cols="12">
        <h1>Checkout</h1>
      </v-col>
    </v-row>
    <form method="post" @submit.prevent="">
      <v-row justify="space-between">
        <v-col cols="5">
          <v-text-field
            auto-grow
            outlined
            color="success"
            :item="item"
            :required="true"
            :errors="errors"
            property="name"
            label="Name"
            @input="updateValue($event, 'name')"
          />
          <v-text-field
            auto-grow
            outlined
            color="success"
            :item="item"
            :required="true"
            :errors="errors"
            property="username"
            label="Email"
            type="email"
            @input="updateValue($event, 'username')"
          />
          <v-text-field
            auto-grow
            outlined
            color="success"
            :item="item"
            :required="true"
            :errors="errors"
            label="Phone"
            property="phone"
            type="tel"
            @input="updateValue($event, 'phone')"
          />
          <v-combobox
            outlined
            color="success"
            :items="countries"
            :errors="errors"
            property="country"
            option-store="country"
            label="Country"
          />
          <v-combobox
            outlined
            color="success"
            :items="cities"
            :errors="errors"
            property="city"
            option-store="city"
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
            @input="updateValue($event, 'postCode')"
          />
          <v-text-field
            auto-grow
            outlined
            color="success"
            :item="item"
            :errors="errors"
            property="street"
            label="Street"
            @input="updateValue($event, 'street')"
          />
        </v-col>

        <v-col cols="5" offset="2">
          <v-card 
            width="100%"
            raised
            color="grey lighten-3"
          >
            <v-card 
              width="100%"
              color="transparent"
              outlined
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
            </v-card>
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
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-btn text color="#0c5c6f" dark to="/cart">
            <v-icon left>mdi-keyboard-backspace</v-icon>
            Back
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="#0c5c6f" dark>
            <v-icon left>mdi-progress-upload</v-icon>
            Submit
          </v-btn>
          </v-col>
      </v-row>
    </form>
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
      updateValue(value, property) {
        this.$store.commit('user/UPDATE_ITEM', {[property]: value})
      },
    },
    beforeDestroy() {
      this.$store.commit('user/SET_ERRORS', {})
    },
  }
</script>
