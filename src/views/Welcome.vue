<template>

  <div class="home">

    <scroll-indicator /> <!-- SCROLL INDOCATOR LENGTH -->

    <home-nav-bar /> <!-- HOME NAVIGATION BAR -->
    
    <home-main-bar>

      <home-section /> <!-- HOME PAGE SECTION -->

      <service-section /> <!-- SERVICES PAGE SECTION -->

      <download-section /> <!-- PDF FREEDOWNLOAD BOOK SECTION -->

      <about-section /> <!-- ABOUT PAGE SECTION -->

      <comfort-section /> <!-- COMFORT PAGE SECTION -->
      
      <testimony-section /> <!-- TESTIMONY CAROUSEL PAGE SECTION -->

      <join-community-section /> <!-- JOIN COMMUNITY PAGE SECTION -->

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

      HomeSection: () => import('@/components/pages/welcome-sections/HomeSection'),

      DownloadSection: () => import('@/components/pages/welcome-sections/DownloadSection'),

      AboutSection: () => import('@/components/pages/welcome-sections/AboutSection'),

      ServiceSection: () => import('@/components/pages/welcome-sections/ServiceSection'),

      ComfortSection: () => import('@/components/pages/welcome-sections/ComfortSection'),

      TestimonySection: () => import('@/components/pages/welcome-sections/TestimonySection'),

      JoinCommunitySection: () => import('@/components/pages/welcome-sections/JoinComSection'),

      ScrollToTop: () => import('@/components/mixins/ScrollToTop'),

      HomeFootBar: () => import('@/components/layouts/HomeFootBar')
      
    }

  }
</script>