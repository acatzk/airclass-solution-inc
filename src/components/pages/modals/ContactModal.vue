<template>
  <v-dialog 
    v-model="show" 
    transition="dialog-bottom-transition" 
    width="1000"
    fullscreen
  >
    <v-card flat style="background-color: #f4f7f5;">
      <v-container>
        <v-toolbar 
          flat 
          dense 
          style="background-color: #f4f7f5;"
        >
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
              <v-col cols="12" md="6">
                <h1 class="font-weight-bold display-1" style="color: #0a0a3a;">
                  Contact Us
                </h1> 
                <v-img
                  src="@/assets/img/contactsvg.svg"
                  width="290"
                  class="d-none d-md-flex d-sm-none"
                />
                <p style="color: #0a0a3a;">
                  For more information, inqueries and concern
                </p>
                <p style="color: #0a0a3a;">
                  <v-icon left color="#0a0a3a">mdi-phone-outline</v-icon> 09153246565
                </p>
                <p style="color: #0a0a3a;">
                  <v-icon left color="#0a0a3a">mdi-email-outline</v-icon> vicsolution@email.com
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <v-card flat elevation="7" style="border-radius: 10px;">
                  <v-container>
                    <v-form 
                      ref="form"
                      v-model="valid"
                      :lazy-validation="lazy"
                      :disabled="loading"
                      class="px-8 pt-5"
                    >
                      <v-text-field
                        label="Name"
                        :rules="[required('Name'), ]"
                        ref="name"
                        v-model="form.name"
                      ></v-text-field>

                      <v-text-field
                        label="Email"
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

                     <v-card-actions>
                       <v-spacer></v-spacer>
                       <v-btn
                          outlined
                          depressed
                          class="primary--text text-capitalize"
                          @click="onClickResetForm"
                          width="90"
                        >
                          cancel
                        </v-btn>
                        <v-btn
                          color="primary"
                          depressed
                          class="text-capitalize"
                          :loading="loading"
                          @click="onClickSubmitForm"
                          width="90"
                        >
                          Send
                        </v-btn>
                     </v-card-actions>
                    </v-form>
                  </v-container>
                </v-card>
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