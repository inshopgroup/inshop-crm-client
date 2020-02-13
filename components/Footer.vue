<template>
  <v-footer height="auto" color="#003145" dark class="caption pt-5">
    <v-container>
      <v-row no-gutters justify="space-between">
        <v-col cols="12" lg="4" md="5" sm="12">
          <h2>About</h2>
          <v-divider class="mt-0 mb-2" color="white" width="25%" />
          <p class="mb-3">
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression.
          </p>
        </v-col>

        <v-col cols="12" lg="2" md="2" sm="4">
          <h2>Informations</h2>
          <v-divider class="mt-0 mb-2" color="white" width="25%" />
          <ul class="list-unstyled pl-0">
            <li class="mb-2">
              <v-icon left>mdi-link</v-icon>
              <a class="white--text" href="/page/about">About</a>
            </li>
            <li class="mb-2">
              <v-icon left>mdi-link</v-icon>
              <a class="white--text" href="/page/about">About</a>
            </li>
            <li class="mb-2">
              <v-icon left>mdi-link</v-icon>
              <a class="white--text" href="/page/about">About</a>
            </li>
            <li class="mb-2">
              <v-icon left>mdi-link</v-icon>
              <a class="white--text" href="/page/about">About</a>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" lg="3" md="2" sm="4">
          <h2>Others links</h2>
          <v-divider class="mt-0 mb-2" color="white" width="25%" />
          <ul class="list-unstyled pl-0">
            <li class="mb-2">
              <v-icon left>mdi-link</v-icon>
              <a class="white--text" href="/page/terms-of-use">Terms of use</a>
            </li>
            <li class="mb-2">
              <v-icon left>mdi-link</v-icon>
              <a class="white--text" href="/page/terms-of-use">Terms of use</a>
            </li>
            <li class="mb-2">
              <v-icon left>mdi-link</v-icon>
              <a class="white--text" href="/page/terms-of-use">Terms of use</a>
            </li>
            <li class="mb-2">
              <v-icon left>mdi-link</v-icon>
              <a class="white--text" href="/page/terms-of-use">Terms of use</a>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" lg="3" md="3" sm="4">
          <h2>Contact</h2>
          <v-divider class="mt-0 mb-2" color="white" width="25%" />
          <ul class="pl-0">
            <li class="mb-2"><v-icon left>mdi-home</v-icon>My company</li>
            <li class="mb-2">
              <v-icon left>mdi-email-edit</v-icon>
              <a href="mailto:email@example.com" class="white--text"
                >email@example.com</a
              >
            </li>
            <li class="mb-2">
              <v-icon left>mdi-phone</v-icon>
              + 33 12 14 15 16
            </li>
            <li>
              <v-icon left>mdi-phone</v-icon>
              + 33 12 14 15 16
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-row
        justify="center"
        justify-xl="start"
        justify-lg="start"
        justify-md="start"
      >
        <v-col cols="auto">
          <p class="mb-0">
            <span>Inshop ecommerce, v0.2.0, Powered by</span>
            <a
              class="white--text"
              href="https://inshopgroup.com/"
              target="_blank"
              >Inshop Group</a
            >
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
