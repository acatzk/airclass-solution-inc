<template>

    <div class="home">
        
        <home-side-bar /> <!-- HOME SIDE BAR COMPONENT -->

    </div>

</template>

<script>
    export default {
        name: 'home',
        
        components: {
            HomeSideBar: () => import('@/components/layouts/HomeSideBar')
        }
    }
</script>