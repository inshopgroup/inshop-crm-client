<template>
  <footer id="colophon" class="site-footer">

    <Newsletter />

    <div class="footer-bottom-widgets">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-8 col-md-push-4">
            <div class="columns">
              <div class="footer-address">
                <strong class="footer-address-title">{{ $t('footer.address_title') }}:</strong>
                <address>
                  Inshop ecommerce
                </address>
              </div><!-- /.footer-address -->
            </div><!-- /.columns -->
            <div class="columns">
              <div class="footer-social-icons">
                <ul class="social-icons list-unstyled">
                  <li><a class="fa fa-facebook" target="_blank" href="#"></a></li>
                  <!--<li><a class="fa fa-twitter" href="/"></a></li>-->
                </ul>
              </div>
            </div><!-- /.columns -->
          </div><!-- /.col -->

          <div class="footer-contact col-xs-12 col-sm-12 col-md-4 col-md-pull-8">
            <div class="footer-logo">
              <div class="logo-link">
                <h1 class="logo">
                  Inshop eCommerce
                </h1>
                <span class="slogan">
                New & Used <br>
                Graphic Machinery Dealer
              </span>
              </div>
            </div><!-- /.footer-contact -->
          </div>

        </div>
      </div>
    </div>

    <Copyright />

  </footer><!-- #colophon -->
</template>

<script>
  import Newsletter from '~/components/Newsletter.vue'
  import Copyright from '~/components/Copyright.vue'

  export default {
    components: {
      Newsletter,
      Copyright
    }
  }
</script>