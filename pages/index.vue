<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          color="grey lighten-3"
          min-height="230"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <v-card-title>Banner 1</v-card-title>
          <v-card-text>
            <p v-html="translation(text).content"></p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card
          color="grey lighten-3"
          min-height="230"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <v-card-title>Banner 2</v-card-title>
          <v-card-text>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un peintre anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte...
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card
          color="grey lighten-3"
          min-height="230"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <v-card-title>Banner 3</v-card-title>
          <v-card-text>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie depuis les années 1500,
              quand un peintre anonyme assembla ensemble des morceaux de texte
              pour réaliser un livre spécimen de polices de texte...
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumb from '../components/Breadcrumb'
import Translate from '../mixins/Translate'

export default {
  components: { Breadcrumb },
  mixins: [Translate],
  async asyncData(params) {
    await Promise.all([params.store.dispatch('text/getItem', 'homepage-about')])
  },
  computed: {
    text() {
      return this.$store.getters['text/item']
    },
  },
  head() {
    return {
      title: 'Homepage title',
      meta: [
        {
          hid: `description`,
          name: 'description',
          content: 'Homepage title',
        },
        {
          hid: `keywords`,
          name: 'keywords',
          keywords: 'Homepage title',
        },
      ],
      bodyAttrs: {
        class: 'home-page',
      },
    }
  },
}
</script>
