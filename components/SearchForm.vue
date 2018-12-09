<template>
  <form class="navbar-search" method="get" action="/">
    <label class="sr-only screen-reader-text" for="search">Search for:</label>
    <div class="input-group clearfix">
      <input type="text" id="search" class="form-control search-field" dir="ltr" value="" name="s" :placeholder="$t('search.placeholder')" />
      <div class="input-group-btn">
        <input type="hidden" id="search-param" name="post_type" value="product" />
        <button type="submit" class="btn btn-secondary"><i class="ec ec-search"></i></button>
      </div>
    </div>
  </form>
</template>
