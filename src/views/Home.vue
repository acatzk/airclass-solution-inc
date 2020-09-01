<template>
  <div class="home">
    <home-nav-bar />
    
  </div>
</template>

<script>
  export default {
    name: 'home',

    components: {
      HomeNavBar: () => import('@/components/layouts/HomeNavBar')
    }

  }
</script>