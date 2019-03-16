<template>
  <div>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>

    <b-row>
      <b-col cols="12">
        <div class="page-header">
          <h1>Personal info</h1>
        </div>
      </b-col>
    </b-row>
    <b-row v-if="item">
      <b-col md="6">
        <form method="post" @submit.prevent="saveForm">
          <b-row>
            <b-col cols="12">
              <form-input
                  :item="item"
                  :property="'username'"
                  :label="'email'"
                  :type="'email'"
                  :required="false"
                  :errors="errors"
                  :disabled="true"
                  @fieldUpdated="updateValue"
              ></form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <form-input
                  :item="item"
                  :property="'name'"
                  :label="'Name'"
                  :required="true"
                  :errors="errors"
                  @fieldUpdated="updateValue"
              ></form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <form-input
                  :item="item"
                  :property="'plainPassword'"
                  :label="'Password'"
                  :required="false"
                  :errors="errors"
                  :type="'password'"
                  @fieldUpdated="updatePassword"
              ></form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <form-input
                  :item="item"
                  :property="'repeatPassword'"
                  :label="'Repeat password'"
                  :required="false"
                  :errors="errors"
                  :type="'password'"
                  @fieldUpdated="updatePassword"
              ></form-input>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12">
              <b-button type="submit" size="lg" variant="success">Update</b-button>
            </b-col>
          </b-row>
        </form>
      </b-col>
      <b-col md="6">
        <b-row>
          <b-col lg="6">
            <b-row>
              <b-col cols="8">
                <div class="custom-input-group">
                  <div class="custom-input-group__ttl">
                    Currently photo
                  </div>
                  <div class="custom-input-group__input">
                    <div class="custom-input-group__foto">
                      <img :src="photoUrl" :alt="item.name">
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <!--<b-row v-if="item.image">-->
              <!--<b-col cols="12" style="margin: 8px 0;">-->
                <!--<b-button size="sm" variant="outline-success">Remove photo</b-button>-->
              <!--</b-col>-->
            <!--</b-row>-->
            <b-row>
              <b-col cols="12">
                <form-file
                    :label="'Upload new photo'"
                    :required="false"
                    :help="'Please upload new photo.'"
                    @imageSelected="imageSelected"
                ></form-file>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import FormTextarea from '../../components/form/FormTextarea'
  import FormInput from '../../components/form/FormInput'
  import Breadcrumb from "../../components/Breadcrumb";
  import FormFile from "../../components/form/FormFile";

  export default {
    middleware: 'authenticated',
    components: {
      FormFile,
      Breadcrumb,
      FormTextarea,
      FormInput
    },
    mounted() {
      this.$store.dispatch('user/get')
    },
    computed: {
      breadcrumbs () {
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
      photoUrl() {
        if (this.item.image) {
          return process.env.NUXT_ENV_API_URL + '/images/200/' + this.item.image.contentUrl
        }

        return '/images/no-image.png'
      }
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
      imageSelected(event) {
        let data = new FormData();
        data.append('image', event)

        let config = {
          header : {
            'Content-Type' : 'multipart/form-data'
          }
        }

        this.$axios.post(process.env.NUXT_ENV_API_URL + '/profile/images/user', data, config)
          .then(
            response => {
              this.$store.dispatch('user/get')
            }
          ).catch(
          error => {
            this.$toast.error('Some error occurred while uploading photo. Please, try later.')
          }
        )
      }
    },
    beforeDestroy() {
      this.$store.commit('user/SET_ERRORS', {})
    },
  }
</script>
