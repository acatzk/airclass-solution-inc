<template>
    <section id="goal">
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
                        sm="12"
                        v-for="([src, title, description], i) in goals" :key="i"
                    >
                        <v-hover v-slot="{ hover }">
                            <v-card
                                class="mx-auto"
                                max-width="290"
                                flat
                                outlined
                                :elevation="hover ? 8 : 0"
                            >
                                <v-img
                                    height="230px"
                                    :src="src"
                                >
                                </v-img>

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
                    ['https://increasify.com.au/wp-content/uploads/2016/08/default-image.png', 'English Learning', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.'],
                    ['https://increasify.com.au/wp-content/uploads/2016/08/default-image.png', 'Secured Video Call', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.'],
                    ['https://increasify.com.au/wp-content/uploads/2016/08/default-image.png', 'Creative Trainning', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas.']
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
#goal {
    min-height: 100vh;
}
</style>