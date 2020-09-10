<template>
    <v-dialog 
        v-model="show" 
        centered
        fullscreen
    >
        <v-toolbar 
          flat 
          dense
        >
          <v-spacer></v-spacer>
          <v-btn 
            icon 
            @click="show = !show"
            color="black"
            dark
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card flat>
            
            <v-container fluid>
                <v-row align="center" justify="center">
                    <v-col cols="10">
                        <v-row align="center" justify="center">
                            <v-col cols="12" md="6">
                                <v-container>
                                    <h2 
                                        class="display-1 darkblue--text font-weight-bold pb-12"
                                    >Create an account</h2>

                                    <v-btn
                                        depressed
                                        class="darkblue--text text-lowercase btn-rounded"
                                        x-large
                                        block
                                        color="#fdf1fd"
                                    >
                                        <v-icon 
                                            right 
                                            class="mr-3 google-icon" 
                                        >mdi-google</v-icon> Or sign-in with google
                                    </v-btn>

                                    <p class="gray--text font-weight-light or pt-4">Or sign in with e-email</p>
                                    
                                    <sign-up-form 
                                        :form="form"
                                        @onResetForm="onResetForm"
                                    />

                                </v-container>

                                <div class="text-center">
                                    <p class="gray--text font-weight-light or mt-5">
                                        By Signing up, I agree to the <a href="#" target="_blank" class="text-decoration-underline gray--text font-weight-medium">Airclass Privacy <br>
                                        Policy</a> and <a href="#"  target="_blank" class="text-decoration-underline gray--text font-weight-medium">Terms of Service</a>
                                    </p>

                                    <h4 class="font-weight-light pt-1 gray--text">
                                        Have an account? <a href="#" class="text-decoration-none" @click="signUpDialog = true, show = false">Sign in</a>
                                    </h4>

                                    <p class="or lightgray--text mt-4 font-weight-light">
                                        2020 All rights Reserved. Airclass
                                    </p>
                                </div>
                            </v-col>

                            <v-col cols="12" md="6" class="d-none d-md-flex">
                                <v-row>
                                    <v-col cols="12">
                                        <v-img
                                            src="@/assets/img/sign-up-in.svg"
                                            class="d-block ml-auto mr-auto"
                                            max-width="400"
                                        />
                                    </v-col>
                                    <v-col cols="12" class="text-center">
                                        <h3 class="font-weight-medium darkblue--text">Learn english easier and faster</h3>
                                        <p class="lightgray--text my-3 font-weight-light">
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur incidunt rerum iste explicabo neque dolores.
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>

        <sign-in-modal 
            :visible="signUpDialog"
            @close="signUpDialog = false"
        /> <!-- SIGN UP MODAL VUE COMPONENT -->

    </v-dialog>
</template>

<script>
    export default {
        name: 'sign-up-modal',

        props: ['visible'],

        components: {
            SignInModal: () => import('./SignInModal'),
            SignUpForm: () => import('@/components/pages/forms/SignUpForm')
        },

        data () {
            return {
                signUpDialog: false,
                form: {
                    firstname: null,
                    email: null,
                    password: null
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
            onResetForm () {
                this.form = {}
            }
        }
    }
</script>

<style lang="scss" scoped>

.btn-rounded {
    border-radius: 15px;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    font-size: 14px;
    font-weight: bold;
}

.radius {
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
}

.or {
    text-align: center;
    font-size: 13px;
}

.forgot-pass:hover {
    text-decoration: underline;
}

.google-icon {
    background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
}
</style>