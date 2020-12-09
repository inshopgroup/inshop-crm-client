<template>
  <div class="primary-nav animate-dropdown">
    <div class="clearfix">
      <button
        class="navbar-toggler hidden-sm-up pull-right flip"
        type="button"
        data-toggle="collapse"
        data-target="#default-header"
      >
        &#9776;
      </button>
    </div>
    <div id="default-header" class="collapse navbar-toggleable-xs">
      <nav>
        <ul id="menu-main-menu" class="nav nav-inline yamm">
          <li class="menu-item">
            <nuxt-link :to="localePath('index')">Price</nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link :to="localePath('about')">About</nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link :to="localePath('contact')">Contacts</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
