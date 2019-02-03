<template>
    <li class="product">
        <div class="product-outer">
            <div class="product-inner">
                <span class="loop-product-categories">
                    <a href="/" rel="tag">После печатное оборудование</a>
                </span>
                <nuxt-link :to="localePath({name: 'product-id', params: {id: product.id}})">
                    <h3>{{translation(product).name}}</h3>
                    <div class="product-thumbnail">
                        <!--<img class="wp-post-image" data-echo="~/assets/images/products/1.jpg" src="~/assets/images/blank.gif" alt="">-->
                        <!--<img class="wp-post-image" src="~/assets/images/product-1.jpg" alt="POLAR 115 EMC MONITOR">-->
                    </div>
                    <div class="product-short-description">
                        <ul>
                            <li><span class="a-list-item">Год: {{product.age}}</span></li>
                            <li><span class="a-list-item">Тип машины: {{translation(product).machineType}}</span></li>
                            <li><span class="a-list-item">Состояние: {{translation(product).condition}}</span></li>
                            <li><span class="a-list-item">Описание: {{translation(product).description}}</span></li>
                        </ul>
                    </div>
                    <div class="product-sku">Номер рег.: {{product.ean}}</div>
                </nuxt-link>
                <div class="price-add-to-cart">
                    <span class="price">
                        <span class="electro-price">
                            <ins><span class="amount">&#8364;1,999.00</span></ins>
                            <del><span class="amount"> &#8364;2,299.00</span></del>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
  import Translate from '../mixins/Translate'
  export default {
    mixins: [Translate],
    props: {
      product: {
        type: Object,
        default () {
          return {}
        }
      },
    }
  }
</script>
