<template>
  <div>
    <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>


  <div class="card-body store-body">
    <div class="product-info">
      <div class="product-gallery">
        <div class="product-gallery-thumbnails">
          <ol class="thumbnails-list list-unstyled">
            <li><img src="https://via.placeholder.com/350x350/ffcf5b" alt=""></li>
            <li><img src="https://via.placeholder.com/350x350/f16a22" alt=""></li>
            <li><img src="https://via.placeholder.com/350x350/d3ffce" alt=""></li>
            <li><img src="https://via.placeholder.com/350x350/7937fc" alt=""></li>
            <li><img src="https://via.placeholder.com/350x350/930000" alt=""></li>
          </ol>
        </div>
        <div class="product-gallery-featured">
          <img src="https://via.placeholder.com/350x350/ffcf5b" alt="">
        </div>
      </div>
      <div class="product-seller-recommended">
        <!--<h3 class="mb-5">More products</h3>-->
        <!--<div class="recommended-items card-deck">-->
          <!--<div class="card">-->
            <!--<img src="https://via.placeholder.com/157x157" alt="" class="card-img-top">-->
            <!--<div class="card-body">-->
              <!--<h5 class="card-title">U$ 55.00</h5>-->
              <!--<span class="text-muted"><small>T-Shirt Size X - Large - Nickony Brand</small></span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="card">-->
            <!--<img src="https://via.placeholder.com/157x157" alt="" class="card-img-top">-->
            <!--<div class="card-body">-->
              <!--<h5 class="card-title">U$ 55.00</h5>-->
              <!--<span class="text-muted"><small>T-Shirt Size X - Large - Nickony Brand</small></span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="card">-->
            <!--<img src="https://via.placeholder.com/157x157" alt="" class="card-img-top">-->
            <!--<div class="card-body">-->
              <!--<h5 class="card-title">U$ 55.00</h5>-->
              <!--<span class="text-muted"><small>T-Shirt Size X - Large - Nickony Brand</small></span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="card">-->
            <!--<img src="https://via.placeholder.com/157x157" alt="" class="card-img-top">-->
            <!--<div class="card-body">-->
              <!--<h5 class="card-title">U$ 55.00</h5>-->
              <!--<span class="text-muted"><small>T-Shirt Size X - Large - Nickony Brand</small></span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!-- /.recommended-items-->
        <!--<p class="mb-5 mt-5"><a href="#">See all ads from this seller</a></p>-->
        <div class="product-description mb-5 mt-5">
          <h2 class="mb-5">Features</h2>
          <dl class="row mb-5">
            <dt class="col-sm-3">Brand</dt>
            <dd class="col-sm-9">Nickony</dd>
            <dt class="col-sm-3">Color</dt>
            <dd class="col-sm-9">Red</dd>
            <dt class="col-sm-3">Size</dt>
            <dd class="col-sm-9">XXL</dd>
            <dt class="col-sm-3">Fabric</dt>
            <dd class="col-sm-9">Cottom</dd>
          </dl>
          <h2 class="mb-5">Description</h2>
          <p>{{translation(product).description}}</p>
        </div>
        <!--<div class="product-faq mb-5">-->
          <!--<h2 class="mb-3">Questions and Answers</h2>-->
          <!--<p class="text-muted">What information do you need?</p>-->
          <!--<div class="main-questions d-inline" data-container="body" data-toggle="popover" data-placement="right" data-content="Are you in doubt? these shortcuts can help you!">-->
            <!--<a href="#" class="btn btn-outline-primary">Cost and Delivery time</a>-->
            <!--<a href="#" class="btn btn-outline-primary">Warranty</a>-->
            <!--<a href="#" class="btn btn-outline-primary">Payment options</a>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="product-comments">-->
          <!--<h5 class="mb-2">Or ask to David's Store</h5>-->
          <!--<form action="" class="form-inline mb-5">-->
            <!--<textarea name="" id="" cols="50" rows="2" class="form-control mr-4" placeholder="write a question"></textarea><button class="btn btn-lg btn-primary">Ask</button>-->
          <!--</form>-->
          <!--<h5 class="mb-5">Lastest Questions</h5>-->
          <!--<ol class="list-unstyled last-questions-list">-->
            <!--<li><i class="fa fa-comment"></i> <span>Hello david, can i pay with credit card?</span></li>-->
            <!--<li><i class="fa fa-comment"></i> <span>can i send it to another address?</span></li>-->
          <!--</ol>-->
        <!--</div>-->
      </div>
    </div>
    <div class="product-payment-details">
      <!--<p class="last-sold text-muted"><small>145 items sold</small></p>-->
      <h4 class="product-title mb-2">{{translation(product).name}}</h4>
      <h2 class="product-price display-4">$ 25.00</h2>
      <!--<p class="text-success"><i class="fa fa-credit-card"></i> 12x or  5x $ 5.00</p>-->
      <!--<p class="mb-0"><i class="fa fa-truck"></i> Delivery in all territory</p>-->
      <!--<div class="text-muted mb-2"><small>know more about delivery time and shipping forms</small></div>-->
      <label for="quant">Quantity</label>
      <input type="number" name="quantity" min="1" id="quant" class="form-control mb-5 input-lg" placeholder="Choose the quantity">
      <button class="btn btn-success btn-lg btn-block">Buy Now</button>

    </div>
  </div>
              <!--<div class="product">-->
                <!--<div class="single-product-wrapper clearfix">-->
                  <!--<div class="product-images-wrapper">-->
                    <!--&lt;!&ndash;<span class="onsale">Sale!</span>&ndash;&gt;-->
                    <!--<div class="images electro-gallery">-->
                      <!--<div class="thumbnails-single">-->
                        <!--&lt;!&ndash;<a href="~assets/images/product-2.jpg" class="zoom" title="" data-rel="prettyPhoto[product-gallery]">&ndash;&gt;-->
                          <!--&lt;!&ndash;&lt;!&ndash;<img src="~/assets/images/blank.gif" data-echo="~/assets/images/single-product/s1-1.jpg" class="wp-post-image" alt="">&ndash;&gt;&ndash;&gt;-->
                          <!--&lt;!&ndash;&lt;!&ndash;<img src="~assets/images/product-2.jpg" class="wp-post-image" alt="POLAR 115 EMC MONITOR">&ndash;&gt;&ndash;&gt;-->
                        <!--&lt;!&ndash;</a>&ndash;&gt;-->
                      <!--</div>&lt;!&ndash; .thumbnails-single &ndash;&gt;-->
                    <!--</div>&lt;!&ndash; .electro-gallery &ndash;&gt;-->
                  <!--</div>&lt;!&ndash; /.product-images-wrapper &ndash;&gt;-->

                  <!--<div class="summary entry-summary">-->

                    <!--<span class="loop-product-categories">-->
                        <!--<a href="product-category.html" rel="tag">После печатное оборудование</a>-->
                    <!--</span>&lt;!&ndash; /.loop-product-categories &ndash;&gt;-->

                    <!--<h1 itemprop="name" class="product_title entry-title">-->
                      <!--{{product.name}}-->
                    <!--</h1>-->

                    <!--<div class="brand">-->
                      <!--<a href="product-category.html">-->
                        <!--&lt;!&ndash;<img src="~assets/images/brand.png" alt="POLAR"/>&ndash;&gt;-->
                      <!--</a>-->
                    <!--</div>&lt;!&ndash; .brand &ndash;&gt;-->

                    <!--<div class="availability in-stock">-->
                      <!--Наличие: <span>В наличии</span>-->
                    <!--</div>&lt;!&ndash; .availability &ndash;&gt;-->

                    <!--<hr class="single-product-title-divider"/>-->

                    <!--<div itemprop="description">-->
                      <!--<ul>-->
                        <!--<li>Дата добавления в каталог: 2018-09-21</li>-->
                        <!--<li>Год: {{product.age}}</li>-->
                        <!--<li>Тип машины: После печатное оборудование/Гильотины</li>-->
                        <!--<li>Состояние: хорошее</li>-->
                      <!--</ul>-->

                      <!--<p>Номер: 5732094; TRANSOMAT; Новый монитор; В производстве; Доступен немедленно;</p>-->
                      <!--<p><strong>Номер рег.</strong>: {{product.ean}}</p>-->
                    <!--</div>&lt;!&ndash; .description &ndash;&gt;-->

                    <!--<div itemprop="offers" itemscope itemtype="http://schema.org/Offer">-->

                      <!--<p class="price"><span class="electro-price">-->
                        <!--<ins><span class="amount">&#8364;1,215.00</span></ins>-->
                        <!--<del><span class="amount"> &#8364;2,299.00</span></del></span>-->
                      <!--</p>-->

                      <!--<meta itemprop="price" content="1215"/>-->
                      <!--<meta itemprop="priceCurrency" content="USD"/>-->
                      <!--<link itemprop="availability" href="http://schema.org/InStock"/>-->

                    <!--</div>&lt;!&ndash; /itemprop &ndash;&gt;-->
                  <!--</div>&lt;!&ndash; .summary &ndash;&gt;-->
                <!--</div>&lt;!&ndash; /.single-product-wrapper &ndash;&gt;-->
              <!--</div>-->
  </div>
</template>

<script>
  import Header from '~/components/Header.vue'
  import Breadcrumb from '~/components/Breadcrumb.vue'
  import Translate from '~/mixins/Translate.vue'

  //  import WidgetProducts from '~/components/WidgetProducts.vue'
//  import BrandsCarousel from '~/components/BrandsCarousel.vue'
//   import Footer from '~/components/Footer.vue'

  export default {
    // head: {
    //   bodyAttrs: {
    //     class: 'single-product'
    //   }
    // },
    mixins: [Translate],

    components: {
      Header,
      Breadcrumb,
//      WidgetProducts,
//      BrandsCarousel,
//       Footer
    },
    // mounted () {
    //   this.$store.dispatch('products/getItem', 'conroy-plc')
    // },
    async asyncData (params) {
      await params.store.dispatch('products/getItem', params.params.productSlug)
    },
    computed: {
      breadcrumbs () {
        return [
          {
            name: 'Home',
            link: '/'
          },
          {
            name: 'Products',
          }
        ]
      },
      product () {
        return this.$store.getters['products/item']
      },
    }
  }
</script>
