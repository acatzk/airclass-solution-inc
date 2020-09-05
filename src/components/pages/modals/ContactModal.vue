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
                <v-form 
                  ref="form"
                  v-model="valid"
                  :lazy-validation="lazy"
                  :disabled="loading"
                >
                  <v-text-field
                    label="Name"
                    :rules="[required('Name'), ]"
                    ref="name"
                    v-model="form.name"
                  ></v-text-field>

                  <v-text-field
                    label="E-mail"
                    v-model="form.email"
                    :rules="[required('Email'), emailRules('Email')]"
                    ref="name"
                  ></v-text-field>

                  <v-text-field
                    label="Phone"
                    v-model="form.contact"
                    :rules="[required('Phone')]"
                    ref="phone"
                  ></v-text-field>

                  <v-textarea
                    label="Message"
                    v-model="form.message"
                    :rules="[required('Message')]"
                    ref="message"
                  />

                  <v-row>
                    <v-col>
                      <v-btn
                        rounded
                        outlined
                        block
                        depressed
                        class="mt-3 grey--text"
                        @click="onClickResetForm"
                      >
                        cancel
                      </v-btn>
                    </v-col>
                    <v-col>
                      <v-btn
                        color="primary"
                        rounded
                        block
                        depressed
                        class="mt-3"
                        :loading="loading"
                        @click="onClickSubmitForm"
                      >
                        Send
                      </v-btn>
                    </v-col>
                  </v-row>
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

  import { ADD_INBOX_MUTATION } from '@/graphql/mutations'

  import { toastAlertStatus, required, emailRules } from '@/utils'

  export default {
    name: 'contact-modal',

    props: ['visible'],


    data () {
      return {
        loading: false,
        valid: true,
        lazy: false,
        form: {
          name: null,
          email: null,
          contact: null,
          message: null
        },
        required(propertyType) { 
            return required(propertyType)
        },
        emailRules(propertyType) {
            return emailRules(propertyType)
        }
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
    },


    methods: {

      onClickResetForm () {
        this.form = {}
        this.$refs.form.reset()
        this.loading = false
      },

      onClickSubmitForm () {

        if (this.$refs.form.validate()) {
          this.loading = true

          const {
            name,
            email,
            contact,
            message
          } = this.$data.form

          this
           .$apollo
           .mutate({
             mutation: ADD_INBOX_MUTATION,
             variables : { name, email, contact, message }
           })
           .then(() => {
              this.onClickResetForm()
              toastAlertStatus('success', 'You message successfully sent')
              this.show = !this.show
           })
           .catch(error => {
             toastAlertStatus('error', error)
             this.loading = false
           })

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