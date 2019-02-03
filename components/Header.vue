<template>

  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="index.html">Inshop Ecommerce</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
        <ul class="navbar-nav m-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="category.html">Categories <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="product.html">Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="cart.html">Cart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <div class="input-group input-group-sm">
            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search...">
            <div class="input-group-append">
              <button type="button" class="btn btn-secondary btn-number">
                <font-awesome-icon icon="search"/>
              </button>
            </div>
          </div>
          <a class="btn btn-success btn-sm ml-3" href="cart.html">
            <font-awesome-icon icon="shopping-cart"/> Cart
            <span class="badge badge-light">3</span>
          </a>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
  import Menu from '../components/Menu.vue'
  import LanguageSelect from '../components/LanguageSelect.vue'

  export default {
    components: {
      Menu,
      LanguageSelect
    }
  }
</script>