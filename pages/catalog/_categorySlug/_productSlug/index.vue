<template>
              <div class="product">
                <div class="single-product-wrapper clearfix">
                  <div class="product-images-wrapper">
                    <!--<span class="onsale">Sale!</span>-->
                    <div class="images electro-gallery">
                      <div class="thumbnails-single">
                        <!--<a href="~assets/images/product-2.jpg" class="zoom" title="" data-rel="prettyPhoto[product-gallery]">-->
                          <!--&lt;!&ndash;<img src="~/assets/images/blank.gif" data-echo="~/assets/images/single-product/s1-1.jpg" class="wp-post-image" alt="">&ndash;&gt;-->
                          <!--&lt;!&ndash;<img src="~assets/images/product-2.jpg" class="wp-post-image" alt="POLAR 115 EMC MONITOR">&ndash;&gt;-->
                        <!--</a>-->
                      </div><!-- .thumbnails-single -->
                    </div><!-- .electro-gallery -->
                  </div><!-- /.product-images-wrapper -->

                  <div class="summary entry-summary">

                    <span class="loop-product-categories">
                        <a href="product-category.html" rel="tag">После печатное оборудование</a>
                    </span><!-- /.loop-product-categories -->

                    <h1 itemprop="name" class="product_title entry-title">
                      {{product.name}}
                    </h1>

                    <div class="brand">
                      <a href="product-category.html">
                        <!--<img src="~assets/images/brand.png" alt="POLAR"/>-->
                      </a>
                    </div><!-- .brand -->

                    <div class="availability in-stock">
                      Наличие: <span>В наличии</span>
                    </div><!-- .availability -->

                    <hr class="single-product-title-divider"/>

                    <div itemprop="description">
                      <ul>
                        <li>Дата добавления в каталог: 2018-09-21</li>
                        <li>Год: {{product.age}}</li>
                        <li>Тип машины: После печатное оборудование/Гильотины</li>
                        <li>Состояние: хорошее</li>
                      </ul>

                      <p>Номер: 5732094; TRANSOMAT; Новый монитор; В производстве; Доступен немедленно;</p>
                      <p><strong>Номер рег.</strong>: {{product.ean}}</p>
                    </div><!-- .description -->

                    <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">

                      <p class="price"><span class="electro-price">
                        <ins><span class="amount">&#8364;1,215.00</span></ins>
                        <del><span class="amount"> &#8364;2,299.00</span></del></span>
                      </p>

                      <meta itemprop="price" content="1215"/>
                      <meta itemprop="priceCurrency" content="USD"/>
                      <link itemprop="availability" href="http://schema.org/InStock"/>

                    </div><!-- /itemprop -->
                  </div><!-- .summary -->
                </div><!-- /.single-product-wrapper -->
              </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Breadcrumb from '~/components/Breadcrumb.vue'
//  import WidgetProducts from '~/components/WidgetProducts.vue'
//  import BrandsCarousel from '~/components/BrandsCarousel.vue'
//   import Footer from '~/components/Footer.vue'

  export default {
    head: {
      bodyAttrs: {
        class: 'single-product'
      }
    },
    components: {
      Header,
      Breadcrumb,
//      WidgetProducts,
//      BrandsCarousel,
//       Footer
    },
    async asyncData (params) {
      await params.store.dispatch('getProduct', params.params.slug)
    },
    computed: {
      product () {
        return this.$store.getters['product']
      },
    }
  }
</script>
