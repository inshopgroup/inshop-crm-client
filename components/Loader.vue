<template>
  <div class="ajax-loader" v-if="isLoading"></div>
</template>

<script>
export default {
  name: 'Loader',
  data () {
    return {
    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style>
  .ajax-loader {
    opacity: 0.5;
    position: fixed;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    background: #fff url("../assets/loader-eclipse.gif") no-repeat center;
    left:0;
    top:0;
    z-index: 999999;
  }
  .ajax-loader:after {
    content: '';
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: block;
  }
</style>
