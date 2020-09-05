<template>
    <v-alert type="error" dismissible>
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