<template>
  <div class="primary-nav animate-dropdown">
    <div class="clearfix">
      <button class="navbar-toggler hidden-sm-up pull-right flip" type="button" data-toggle="collapse" data-target="#default-header">
        &#9776;
      </button>
    </div>
    <div class="collapse navbar-toggleable-xs" id="default-header">
      <nav>
        <ul id="menu-main-menu" class="nav nav-inline yamm">
          <li class="menu-item">
            <nuxt-link :to="localePath('index')">{{$t('menu.price')}}</nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link :to="localePath('about')">{{$t('menu.about')}}</nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link :to="localePath('contact')">{{$t('menu.contacts')}}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
