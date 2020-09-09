<template>
    <v-form
        ref="form"
        v-model="valid"
        :lazy-validation="lazy"
        :disabled="loading"
    >
        
        <alert 
            v-show="error"
            :message="`${error}`"
        /> <!-- ALERT ERROR MESSAGE -->

        <v-row>
            <v-col cols="12">
                <v-text-field
                    label="Email"
                    v-model="form.email"
                    :rules="[required('Email'), emailRules('Email')]"
                ></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field
                    @keyup.enter="onSubmitForm"
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
                    Login
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>

    import { auth } from '@/services'

    import { toastAlertStatus } from '@/utils'

    export default {
        name: 'sign-in-form',

        components: {
            Alert: () => import('@/components/mixins/Alert')
        },

        props: {
            form: {
                type: Object,
                required: true
            }
        },

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
        
        methods: {

            onClickResetForm () {
                this.$refs.form.reset()
                this.loading = false
                this.$emit('onResetForm')
            },

            onSubmitForm () {

                if (this.$refs.form.validate()) {

                    this.loading = true

                    const { email, password }  = this.form 

                    auth
                    .signInWithEmailAndPassword(email, password)
                    .then(() => {
                        this.onClickResetForm ()
                        toastAlertStatus('success', 'Welcome to Airclass')
                        this.$router.push('/v/dashboard')
                    })
                    .catch(error => { 
                        this.loading = false
                        this.error = error
                        toastAlertStatus('error', error)
                    })
                }

            }
        }
    }
</script>