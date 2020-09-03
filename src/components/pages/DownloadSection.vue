<template>
    <section id="download">
        <v-layout>
            <v-container>
                <v-row>
                    <v-col>
                        <h1 
                            class="font-weight-bold pb-3 text-center" 
                            style="font-size: 1.8rem; color: #0a0a3a;"
                        >
                        Learn English easily and efficiently with us
                        </h1>
                    </v-col>
                </v-row>
            </v-container>
        </v-layout>

        <v-container>
            <horizontal-list :items="videos" class="mx-12">
                <template v-slot:default="{ item }">
                    <v-hover v-slot="{ hover }">
                        <v-card
                            flat
                            outlined
                            :class="{ up: hover }"
                            :elevation="hover ? 7 : 0"
                            class="mx-auto"
                        >
                            <v-img
                                height="200px"
                                :src="item.image"
                                :lazy-src="item.image"
                            >
                            </v-img>
                            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                            <v-card-text class="text--primary">
                            <div>Whitehaven Beach</div>

                            <div>Whitsunday Island, Whitsunday Islands</div>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn 
                                    block
                                    class="pa-0"
                                    depressed 
                                    color="primary"
                                >
                                    Free PDF Book
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-hover>
                </template>
            </horizontal-list>
        </v-container>

    </section>
</template>

<script>
    export default {
        name: 'english-video-section',
        
        components: {
            HorizontalList: () => import('vue-horizontal-list')
        },

        data () {
            return {
                videos: [
                    {
                        id: 0,
                        src: 'https://www.youtube.com/watch?v=mdu5lLpMH_w',
                        image: 'https://image.freepik.com/free-vector/happy-kids-illustration_23-2147531838.jpg'
                    },
                    {
                        id: 1,
                        src: 'https://www.youtube.com/watch?v=fYP-3q22too',
                        image: 'https://image.freepik.com/free-vector/young-teacher-with-joyful-kids_74855-6162.jpg'
                    },
                    {
                        id: 2,
                        src: 'https://www.youtube.com/watch?v=A8hjmsBKM5w',
                        image: 'https://image.freepik.com/free-vector/children-education_29937-3077.jpg'  
                    },
                    {
                        id: 3,
                        src: 'https://www.youtube.com/watch?v=A8hjmsBKM5w',
                        image: 'https://image.freepik.com/free-vector/hikers-walk-bridge-crossing-river-forest_107791-2695.jpg'  
                    },
                    {
                        id: 4,
                        src: 'https://www.youtube.com/watch?v=A8hjmsBKM5w',
                        image: 'https://image.freepik.com/free-vector/new-normal-summer-camps_23-2148589072.jpg'  
                    },
                    {
                        id: 5,
                        src: 'https://www.youtube.com/watch?v=A8hjmsBKM5w',
                        image: 'https://image.freepik.com/free-vector/new-normal-summer-camps_23-2148592701.jpg'  
                    }
                ]
            }
        }
    }
</script>