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

        <v-row>
            <v-col cols="6">
                <v-text-field
                    label="Firstname"
                    v-model="form.firstname"
                    :rules="[required('Firstname')]"
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field
                    label="Lastname"
                    v-model="form.lastname"
                    :rules="[required('Lastname')]"
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field
                    label="Email"
                    v-model="form.email"
                    :rules="[required('Email'), emailRules('Email')]"
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field
                    label="Password"
                    v-model="form.password"
                    :rules="[required('Password')]"
                    :type="show ? 'text' : 'password'"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn 
                    outlined 
                    class="primary--text text-capitalize"
                    depressed
                    block
                    large
                    rounded
                    @click="onClickResetForm"
                >
                    Cancel
                </v-btn>
            </v-col>
            <v-col>
                <v-btn
                    color="primary text-capitalize"
                    depressed
                    block
                    large
                    rounded
                    :loading="loading"
                    @click="onSubmitForm"
                >
                    Register
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>

    import gql from 'graphql-tag'

    const ADD_STUDENT_MUTATION = gql`
        mutation AddStudentMutation($firstname: String, $lastname: String, $email: String, $password: String, $firebase_id: String!) {
            insert_students(objects: {firstname: $firstname, lastname: $lastname, email: $email, password: $password, firebase_id: $firebase_id}) {
                affected_rows
                returning {
                    id
                }
            }
        }  
    `

    import { auth } from '@/services'

    import { toastAlertStatus } from '@/utils'

    export default {
        name: 'sign-up-form',
        
        data () {
            return {
                show: false,
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
                        lastname,
                        email,
                        password
                    } = this.form

                    auth
                     .createUserWithEmailAndPassword(email, password)
                     .then((firebase) => {
                        this.saveStudentInHasura (firstname, lastname, email, password, firebase)
                     })
                     .catch(error => {
                        this.errorProvider(error)
                     })
                }
            },

            saveStudentInHasura (firstname, lastname, email, password, firebase) {
                this
                 .$apollo
                 .mutate({
                     mutation: ADD_STUDENT_MUTATION,
                     variables: {
                        firstname,
                        lastname,
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