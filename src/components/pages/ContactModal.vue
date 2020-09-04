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
              <v-col cols="12" sm="5">
                <h1 class="font-weight-light display-1">
                  Contact Us
                </h1> 
                <h3 class="font-weight-light mt-3">
                  For more information, inqueries and concern
                </h3>
                <h3 class="font-weight-light mt-3">
                  <v-icon left>mdi-phone-outline</v-icon> 09153246565
                </h3>
                <h3 class="font-weight-light">
                  <v-icon left>mdi-email-outline</v-icon> vicsolution@email.com
                </h3>
              </v-col>
              <v-col cols="12" sm="7">
                <v-form ref="form">
                  <v-text-field
                    label="Name"
                  ></v-text-field>

                  <v-text-field
                    label="E-mail"
                  ></v-text-field>

                  <v-text-field
                    label="Phone"
                  ></v-text-field>

                  <v-textarea
                    label="Message"
                  />

                  <v-btn
                    color="primary"
                    rounded
                    block
                    depressed
                    class="mt-3"
                  >
                    Send
                  </v-btn>
                </v-form>
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
    name: 'contact-modal',

    props: ['visible'],

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
    .svg-border-waves .v-image {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3rem;
        width: 100%;
        overflow: hidden;
    }
</style>