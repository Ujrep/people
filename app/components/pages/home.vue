<style lang="scss">

  // css

</style>

<template>

  <div class="Home">
    Home
  </div>
  <sticky-footer></sticky-footer>

</template>

<script>
  import Footer from 'components/partials/footer.vue';

  export default {
    name: 'Home',
    data() {
      return {
      };
    },
    components: {
      'sticky-footer': Footer
    }
  };
</script>
