<template>

    <div class="home">
        
        <home-side-bar /> <!-- HOME SIDE BAR COMPONENT -->

        <v-main>

            <router-view></router-view> <!-- DYNAMIC PAGES LOADED -->

        </v-main>

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