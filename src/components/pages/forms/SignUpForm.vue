<template>
    <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="lazy"
        :disabled="loading"
    >

        <v-alert
            outlined
            type="warning"
            border="bottom"
            v-show="error"
            dismissible
            class="text-capitalize"
            dense
        >
            <strong>{{ error.split('/')[1] }}</strong>
        </v-alert>
    
        <v-flex>
            <v-text-field
                label="Name"
                solo-inverted
                flat
                class="radius font-weight-light"
                :rules="[required('Name')]"
                v-model="form.firstname"
            ></v-text-field>
            <v-text-field
                label="Email"
                solo-inverted
                flat
                class="radius font-weight-light"
                :rules="[required('Email'), emailRules('Email')]"
                v-model="form.email"
            ></v-text-field>
            <v-text-field
                label="Password"
                class="radius font-weight-light"
                solo-inverted
                flat
                :type="showPass ? 'text' : 'password'"
                :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="showPass = !showPass"
                v-model="form.password"
                :rules="[required('Password')]"
            ></v-text-field>
            <v-btn
                color="pink text-capitalize"
                depressed
                block
                large
                dark
                class="radius"
                :loading="loading"
                @click="onSubmitForm"
            >
                <v-icon left>mdi-check</v-icon> Create Account
            </v-btn>
        </v-flex>
    </v-form>

</template>

<script>

    import gql from 'graphql-tag'

    import { auth } from '@/services'

    import { toastAlertStatus } from '@/utils'

    export default {
        name: 'sign-up-form',
        
        data () {
            return {
                showPass: false,
                loading: false,
                valid: true,
                lazy: false,
                error: '',
                required (propertyType) { 
                    return v => v && v.length > 0 || `${propertyType} is required.`
                },
                emailRules (propertyType) {
                    return v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || `${propertyType} address must be valid.`
                }
            }
        },

        props: {
            form: {
                type: Object,
                required: true
            }
        },

        methods: {

            onClickResetForm () {
                this.$refs.form.reset()
                this.loading = false
                this.error = ''
                this.$emit('onResetForm')
            },

            onSubmitForm () {
                if (this.$refs.form.validate()) {

                    this.loading = true

                    const {
                        firstname,
                        email,
                        password
                    } = this.form

                    auth
                     .createUserWithEmailAndPassword(email, password)
                     .then((firebase) => {
                        this.saveStudentInHasura (firstname, email, password, firebase)
                     })
                     .catch(error => {
                        this.errorProvider(error)
                     })
                }
            },

            saveStudentInHasura (firstname, email, password, firebase) {
                this
                 .$apollo
                 .mutate({
                     mutation: gql`
                        mutation AddStudentMutation($firstname: String, $email: String, $password: String, $firebase_id: String!) {
                            insert_students(objects: {firstname: $firstname, email: $email, password: $password, firebase_id: $firebase_id}) {
                                affected_rows
                                returning {
                                    id
                                }
                            }
                        }
                     `,
                     variables: {
                        firstname,
                        email,
                        password,
                        firebase_id: firebase.uid
                     }
                 })
                 .then(() => {
                    toastAlertStatus('success', 'Successfully Registered. Please Sign In.') 
                    this.onClickResetForm ()
                 })
                 .catch(error => {
                    this.errorProvider(error)
                 })
            },


            errorProvider (error) {
                this.loading = false
                let errorCode = error.code;
                let errorMessage = error.message;
                if (errorCode) {
                    toastAlertStatus('error', errorCode.split('/')[1])
                    return this.error = errorCode
                } else if (errorMessage) {
                    toastAlertStatus('error', errorMessage.split('/')[1])
                    return this.error = errorMessage
                } else {
                    toastAlertStatus('error', error.split('/')[1])
                    return this.error = error
                }
            }
        }
    }
</script>