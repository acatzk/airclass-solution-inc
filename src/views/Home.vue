<template>
  <div class="home">
    <home-nav-bar /> <!-- HOME NAVIGATION BAR -->
    
    <home-main-bar>

      <home-section /> <!-- HOME PAGE SECTION -->

      <about-section /> <!-- ABOUT PAGE SECTION -->

    </home-main-bar> <!-- HOME MAIN BAR -->

    <home-foot-bar /> <!-- HOME FOOTER BAR -->

  </div>
</template>

<script>
  export default {
    name: 'home',

    components: {

      HomeNavBar: () => import('@/components/layouts/HomeNavBar'),

      HomeMainBar: () => import('@/components/layouts/HomeMainBar'),

      HomeSection: () => import('@/components/pages/HomeSection'),

      AboutSection: () => import('@/components/pages/AboutSection'),

      HomeFootBar: () => import('@/components/layouts/HomeFootBar')
      
    }

  }
</script>