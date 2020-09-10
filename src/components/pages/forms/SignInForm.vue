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
                label="Email"
                filled
                rounded
                class="font-weight-light rounded-lg"
                v-model="form.email"
                :rules="[required('Email'), emailRules('Email')]"
            ></v-text-field>
            <v-text-field
                label="Password"
                class="font-weight-light rounded-lg"
                filled
                rounded
                :type="showPass ? 'text' : 'password'"
                :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="showPass = !showPass"
                v-model="form.password"
                :rules="[required('Password')]"
                @keyup.enter="onSubmitForm"
            ></v-text-field>
            <a href="#" class="forgot-pass">Forgot password?</a>
            <v-btn
                color="pink text-capitalize"
                depressed
                block
                large
                dark
                class="radius"
                @click="onSubmitForm"
                :loading="loading"
            >
                <v-icon left>mdi-check</v-icon> Sign In
            </v-btn>
        </v-flex>
    </v-form>
</template>

<script>

    import { auth } from '@/services'

    import { toastAlertStatus } from '@/utils'

    export default {
        name: 'sign-in-form',

        props: {
            form: {
                type: Object,
                required: true
            }
        },

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

                    const { email, password }  = this.form 

                    auth
                    .signInWithEmailAndPassword(email, password)
                    .then(() => {
                        this.onClickResetForm ()
                        toastAlertStatus('success', 'Welcome to Airclass')
                        this.$router.push('/v/dashboard')
                    })
                    .catch(error => { 
                        this.errorProvider (error)
                    })
                }

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

<style scoped>
.forgot-pass {
    text-decoration: none;
    font-weight: medium;
    color: #FF1976;
    font-size: 13px;
    float: right;
    position: relative;
    bottom: 15px;
}

.forgot-pass:hover {
    text-decoration: underline;
}
</style>