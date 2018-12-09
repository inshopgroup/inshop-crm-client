<template>
  <aside class="widget widget_electro_products_filter">
    <div v-for="category in categories" :key="category.id">
      <aside class="widget woocommerce widget_layered_nav">
        <h3 class="widget-title">
          <nuxt-link
                  :to="localePath({name: 'category-id', params: {id: category.id}})"
                  active-class="active"
          >{{translation(category).name}}</nuxt-link>
        </h3>
        <ul v-if="category.subCategories">
          <li style="" v-for="subCategory in category.subCategories">
            <nuxt-link
                    :to="localePath({name: 'category-id', params: {id: subCategory.id}})"
                    active-class="active"
            >{{translation(subCategory).name}}</nuxt-link>
          </li>
        </ul>
      </aside>
    </div>
    <!--<aside class="widget woocommerce widget_price_filter">-->
      <!--<h3 class="widget-title">Цена</h3>-->
      <!--<form action="#">-->
        <!--<div class="price_slider_wrapper">-->
          <!--<div style="" class="price_slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">-->
            <!--<div class="ui-slider-range ui-widget-header ui-corner-all" style="left: 0%; width: 100%;"></div>-->
            <!--<span tabindex="0" class="ui-slider-handle ui-state-default ui-corner-all" style="left: 0%;"></span>-->
            <!--<span tabindex="0" class="ui-slider-handle ui-state-default ui-corner-all" style="left: 100%;"></span>-->
          <!--</div>-->
          <!--<div class="price_slider_amount">-->
            <!--<a href="#" class="button">Filter</a>-->
            <!--<div style="" class="price_label"><span class="from">$428</span> &mdash; <span class="to">$3485</span></div>-->
            <!--<div class="clear"></div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</form>-->
    <!--</aside>-->
  </aside>
</template>

<script>
  import Translate from '../mixins/Translate'

  export default {
    mixins: [Translate],
    computed: {
      categories () {
        return this.$store.state.categories
      }
    },
  }
</script>
