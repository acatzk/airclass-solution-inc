<template>
    <div class="text-center">
        <h1>Navigation</h1>
        <v-btn
            x-large
            color="yellow"
            dark
            @click="onClickLogout"
        >
            Log out here idiot
        </v-btn>
    </div>
</template>

<script>

    import { auth } from '@/services'

    import { toastAlertStatus } from '@/utils'

    export default {
        name: 'home-side-bar',
        
        methods: {
            onClickLogout () {
                auth
                .signOut()
                .then(() => this.$router.push({ name: 'welcome' }))
                .catch(error => toastAlertStatus(error, 'error'))
            }
        }
    }
</script>