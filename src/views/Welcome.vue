<template>

  <div class="home">

    <scroll-indicator /> <!-- SCROLL INDOCATOR LENGTH -->

    <welcome-nav-bar /> <!-- WELCOME NAVIGATION BAR -->
    
    <welcome-main-bar>

      <welcome-section /> <!-- WELCOME PAGE SECTION -->

      <service-section /> <!-- SERVICES PAGE SECTION -->

      <download-section /> <!-- PDF FREEDOWNLOAD BOOK SECTION -->

      <about-section /> <!-- ABOUT PAGE SECTION -->

      <comfort-section /> <!-- COMFORT PAGE SECTION -->
      
      <testimony-section /> <!-- TESTIMONY CAROUSEL PAGE SECTION -->

      <join-community-section /> <!-- JOIN COMMUNITY PAGE SECTION -->

    </welcome-main-bar> <!-- WELCOME MAIN BAR -->

    <scroll-to-top /> <!-- SCROLL TO TOP BUTTON -->

    <welcome-foot-bar /> <!-- WELCOME FOOTER BAR -->

  </div>
  
</template>

<script>
  export default {
    name: 'home',

    components: {

      ScrollIndicator: () => import('@/components/mixins/ScrollIndicator'),

      WelcomeNavBar: () => import('@/components/layouts/WelcomeNavBar'),

      WelcomeMainBar: () => import('@/components/layouts/WelcomeMainBar'),

      WelcomeSection: () => import('@/components/pages/welcome-sections/WelcomeSection'),

      DownloadSection: () => import('@/components/pages/welcome-sections/DownloadSection'),

      AboutSection: () => import('@/components/pages/welcome-sections/AboutSection'),

      ServiceSection: () => import('@/components/pages/welcome-sections/ServiceSection'),

      ComfortSection: () => import('@/components/pages/welcome-sections/ComfortSection'),

      TestimonySection: () => import('@/components/pages/welcome-sections/TestimonySection'),

      JoinCommunitySection: () => import('@/components/pages/welcome-sections/JoinComSection'),

      ScrollToTop: () => import('@/components/mixins/ScrollToTop'),

      WelcomeFootBar: () => import('@/components/layouts/WelcomeFootBar')
      
    }

  }
</script>