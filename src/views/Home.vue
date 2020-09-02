<template>

  <div class="home">

    <scroll-indicator /> <!-- SCROLL INDOCATOR LENGTH -->

    <home-nav-bar /> <!-- HOME NAVIGATION BAR -->
    
    <home-main-bar>

      <home-section /> <!-- HOME PAGE SECTION -->

      <about-section /> <!-- ABOUT PAGE SECTION -->

      <service-section /> <!-- SERVICES PAGE SECTION -->

      <contact-section /> <!-- CONTACT PAGE SECTION -->

    </home-main-bar> <!-- HOME MAIN BAR -->

    <scroll-to-top /> <!-- SCROLL TO TOP BUTTON -->

    <home-foot-bar /> <!-- HOME FOOTER BAR -->

  </div>
  
</template>

<script>
  export default {
    name: 'home',

    components: {

      ScrollIndicator: () => import('@/components/mixins/ScrollIndicator'),

      HomeNavBar: () => import('@/components/layouts/HomeNavBar'),

      HomeMainBar: () => import('@/components/layouts/HomeMainBar'),

      HomeSection: () => import('@/components/pages/HomeSection'),

      AboutSection: () => import('@/components/pages/AboutSection'),

      ServiceSection: () => import('@/components/pages/ServiceSection'),

      ContactSection: () => import('@/components/pages/ContactSection'),

      ScrollToTop: () => import('@/components/mixins/ScrollToTop'),

      HomeFootBar: () => import('@/components/layouts/HomeFootBar')
      
    }

  }
</script>