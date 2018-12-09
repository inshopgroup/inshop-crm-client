<template>
  <div class="footer-newsletter">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-7">
          <h5 class="newsletter-title">{{ $t('newsletter.text') }}</h5>
          <span class="newsletter-marketing-text">...и получить <strong>Lorem ipsum dolor</strong></span>
        </div>
        <div class="col-xs-12 col-sm-5">
          <form>
            <div class="input-group">
              <input type="text" class="form-control" :placeholder="$t('newsletter.placeholder')">
              <span class="input-group-btn">
                  <button class="btn btn-secondary" type="button">{{ $t('newsletter.button') }}</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>