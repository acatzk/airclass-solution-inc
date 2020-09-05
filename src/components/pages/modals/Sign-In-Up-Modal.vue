<template>
  <v-dialog 
    v-model="show" 
    transition="dialog-bottom-transition" 
    width="500"
    
  >
    <v-card 
      flat
    >
      <v-toolbar flat>
        <v-toolbar-title>
          <v-img src="@/assets/a.png" max-width="60px" />
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn 
          icon 
          dark 
          @click="show = !show"
          color="black"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <v-tabs 
        color="basil"
        background-color="transparent"
        grow
      >
        <v-tab>
          Sign In
        </v-tab>
        <v-tab>
          Sign Up
        </v-tab>

        <v-tab-item>
          <v-card
            color="basil"
            flat
          >
            <v-container>

              <sign-in-form /> <!-- SIGN IN FORM VUE COMPONENT -->

            </v-container>
          </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card
            color="basil"
            flat
          >
            <v-container>
              
              <sign-up-form /> <!-- SIGN IN FORM VUE COMPONENT -->

            </v-container>
          </v-card>
        </v-tab-item>

      </v-tabs>

    </v-card>
  </v-dialog>
</template>

<script>

  export default {
    name: 'sign-in-up-modal',

    props: ['visible'],

    components: {
      SignInForm: () => import('@/components/pages/forms/SignInForm'),
      SignUpForm: () => import('@/components/pages/forms/SignUpForm')
    },

    computed: {
      show: {
        get () {
          return this.visible
        },
        set (value) {
          if (!value) {
            this.$emit('close')
          }
        }
      }
    }
    
  }
</script>

<style scoped>
  #contact {
      background-color: #f4f7f5;
  }
</style>