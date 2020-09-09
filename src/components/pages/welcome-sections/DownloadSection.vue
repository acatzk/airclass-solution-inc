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
            <horizontal-list :items="pdfs" class="mx-12">
                <template v-slot:default="{ item }">
                    <v-hover v-slot="{ hover }">
                        <v-card
                            flat
                            outlined
                            :class="{ up: hover }"
                            :elevation="hover ? 7 : 0"
                            class="mx-auto"
                            max-width="400"
                        >
                            <v-img
                                height="200px"
                                :src="item.image"
                                :lazy-src="item.image"
                            >
                            </v-img>
                            <v-card-text class="px-3">
                                <div class="text--primary font-weight-medium">
                                    {{ item.title }}
                                </div>
                                <div class="text-secondary pt-2">
                                    {{ item.description }}
                                </div>
                                <div class="text-secondary pt-2 ">
                                    <i class="font-weight-light">By {{ item.author }} ({{ item.publish_year }})</i>
                                </div>
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
                pdfs: [
                    {
                        id: 0,
                        title: "The Tale of Peter Rabbit",
                        description: "Beatrix Potter's first and one of her best.",
                        author: 'Beatrix Potter',
                        publish_year: '2003',
                        image: 'https://www.bigw.com.au/medias/sys_master/images/images/h15/h7a/11727109062686.jpg'
                    },
                    {
                        id: 1,
                        title: 'Harold and the Purple Crayon',
                        description: 'Imagination reigns in timeless classic about drawing boy.',
                        author: 'Crockett Johnson',
                        publish_year: '2012',
                        image: 'https://www.scholastic.com/content5/media/products/34/9780439132534_mres.jpg'
                    },
                    {
                        id: 2,
                        title: 'Goodnight Moon',
                        description: 'Ultimate going-to-bed book has stood the test of time.',
                        author: 'Margaret Wise Brown',
                        publish_year: '2004',
                        image: 'https://prodimage.images-bn.com/pimages/9780694003617_p0_v2_s1200x630.jpg'  
                    },
                    {
                        id: 3,
                        title: ' The Snowy Day',
                        description: "Classic captures a kid's delight in freshly fallen snow.",
                        author: 'Ezra Jack Keats ',
                        publish_year: '2003',
                        image: 'https://images-na.ssl-images-amazon.com/images/I/81DDpwd-T4L._RI_.jpg'  
                    },
                    {
                        id: 4,
                        title: 'The Very Hungry Caterpillar',
                        description: "Carle brings humor to caterpillar's development.",
                        author: 'Eric Carle',
                        publish_year: '2003',
                        image: 'https://target.scene7.com/is/image/Target/GUEST_ea6b5786-9f05-471b-8c0d-440e863a97fd?wid=488&hei=488&fmt=pjpeg'  
                    },
                    {
                        id: 5,
                        title: 'Where the Wild Things Are',
                        description: "Classic all-ages masterpiece wild imagination.",
                        author: 'Maurice Sendak',
                        publish_year: '2001',
                        image: 'https://images-na.ssl-images-amazon.com/images/I/61ulN35aErL.jpg'  
                    }
                ]
            }
        }
    }
</script>