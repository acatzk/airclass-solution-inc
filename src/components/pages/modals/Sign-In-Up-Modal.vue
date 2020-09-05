<template>
  <v-dialog v-model="show" transition="dialog-bottom-transition">
    <v-card flat>
      <v-container>
        <v-toolbar flat>
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
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row justify="center">
              <v-col cols="12" sm="6">
                sign in
              </v-col>
              <v-col cols="12" sm="6">
                sign up
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>

  export default {
    name: 'sign-in-up-modal',

    props: ['visible'],


    data () {
        return {

        }
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