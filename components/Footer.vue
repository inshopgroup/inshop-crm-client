<template>
  <v-footer height="auto" color="#003145" dark class="caption pt-5">
    <v-container>
      <v-row no-gutters justify="space-between">
        <v-col xl="3" lg="4" md="3">
          <h5>About</h5>
          <v-divider class="mt-0 mb-2" color="white" width="25%"></v-divider>
          <p class="mb-0">
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
          </p>
        </v-col>

        <v-col xl="2" lg="2" md="2" class="mx-auto">
          <h5>Informations</h5>
          <v-divider class="mt-0 mb-2" color="white" width="25%"></v-divider>
          <ul class="list-unstyled pl-0">
            <li>
              <v-btn class="caption pl-0 pr-0 text-capitalize justify-start" small text to="/page/about">About</v-btn>
            </li>
            <li>
              <v-btn class="caption pl-0 pr-0 text-capitalize justify-start" small text to="/page/about">About</v-btn>
            </li>
            <li>
              <v-btn class="caption pl-0 pr-0 text-capitalize justify-start" small text to="/page/about">About</v-btn>
            </li>
            <li>
              <v-btn class="caption pl-0 pr-0 text-capitalize justify-start" small text to="/page/about">About</v-btn>
            </li>
          </ul>
        </v-col>

        <v-col xl="2" lg="2" md="3" class="mx-auto">
          <h5>Others links</h5>
          <v-divider class="mt-0 mb-2" color="white" width="25%"></v-divider>
          <ul class="list-unstyled pl-0">
            <li>
              <v-btn class="caption pl-0 pr-0 text-capitalize" small text to="/page/terms-of-use">Terms of use</v-btn>
            </li>
            <li>
              <v-btn class="caption pl-0 pr-0 text-capitalize" small text to="/page/terms-of-use">Terms of use</v-btn>
            </li>
            <li>
              <v-btn class="caption pl-0 pr-0 text-capitalize" small text to="/page/terms-of-use">Terms of use</v-btn>
            </li>
            <li>
              <v-btn class="caption pl-0 pr-0 text-capitalize" small text to="/page/terms-of-use">Terms of use</v-btn>
            </li>
          </ul>
        </v-col>

        <v-col xl="3" lg="3" md="4">
          <h5>Contact</h5>
          <v-divider class="mt-0 mb-2" color="white" width="25%"></v-divider>
          <ul class="list-unstyled pl-0">
            <li><i class="fa fa-home mr-2"></i> My company</li>
            <li><i class="fa fa-envelope mr-2"></i> email@example.com</li>
            <li><i class="fa fa-phone mr-2"></i> + 33 12 14 15 16</li>
            <li><i class="fa fa-print mr-2"></i> + 33 12 14 15 16</li>
          </ul>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col cols="12">
          <p>
            <span>Inshop ecommerce, v1.5.0, Powered by</span> 
            <a href="https://inshopgroup.com/" target="_blank">Inshop Group</a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {}
</script>
