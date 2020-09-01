<template>
  <div class="home">
    <home-nav-bar /> <!-- HOME NAVIGATION BAR -->
    
    <home-main-bar>

      <home-section /> <!-- HOME PAGE SECTION -->

    </home-main-bar> <!-- HOME MAIN BAR -->

  </div>
</template>

<script>
  export default {
    name: 'home',

    components: {

      HomeNavBar: () => import('@/components/layouts/HomeNavBar'),

      HomeMainBar: () => import('@/components/layouts/HomeMainBar'),

      HomeSection: () => import('@/components/pages/HomeSection')
      
    }

  }
</script>