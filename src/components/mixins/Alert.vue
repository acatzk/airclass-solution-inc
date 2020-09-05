<template>
    <v-alert type="error">
        {{ message }}
    </v-alert>
</template>

<script>
    export default {
        name: 'alert',
        
        props: {
            message: {
                type: String,
                required: true
            }
        }
    }
</script>