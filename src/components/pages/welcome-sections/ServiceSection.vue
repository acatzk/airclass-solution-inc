<template>
    <section id="services">
        <v-layout>
            <v-container>
                <v-row class="goal-title">
                    <v-col>
                        <h1 
                            class="font-weight-bold pb-3 text-center" 
                            style="font-size: 1.8rem; color: #0a0a3a;"
                        >Achieve your goals with Airclass Solution</h1>
                        <p class="text-center grey--text">
                            Intensive with enjoyable teaching trainning
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </v-layout>

        <v-layout>
            <v-container>
                <v-row class="mx-12">
                    <v-col 
                        cols="12"
                        md="4"
                        sm=6
                        v-for="([src, title, description], i) in goals" :key="i"
                    >
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                class="mx-auto pa-3"
                                flat
                                outlined
                                :elevation="hover ? 10 : 0"
                                :class="{ up: hover }"
                                shaped
                            >
                                <v-img
                                    :src="src"
                                    max-width="150"
                                    class="d-block ml-auto mr-auto mt-5"
                                    :class="{ 'zoom-efect': hover }"
                                ></v-img>

                                <v-card-title class="text-center text-primary">{{ title }}</v-card-title>
                                
                                <v-card-text class="text--secondary text-center">
                                    {{ description }}
                                </v-card-text>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-container>
        </v-layout>

    </section>
</template>


<script>
    export default {
        name: 'goal-section',
        
        data () {
            return {
                goals: [
                    [require('@/assets/img/icon1.png'), 'English Learning', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.'],
                    [require('@/assets/img/icon2.png'), 'Secured Video Call', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.'],
                    [require('@/assets/img/icon3.png'), 'Creative Trainning', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.']
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
#services {
    min-height: 100vh;
}
.zoom-efect {
    transition: all .5s;
    -moz-transition: all .5s;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    -ms-transition: all .5s;


    transform : scale(1.2);
    -moz-transform : scale(1.2);
    -webkit-transform : scale(1.2);
    -o-transform : scale(1.2);
    -ms-transform : scale(1.2);
}
</style>