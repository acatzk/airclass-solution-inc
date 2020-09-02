<template>
  <section id="services" class="mt-12">
    <v-container fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" class="text-center">
                <h1 class="font-weight-light display-2">Services</h1>
                <h1 class="font-weight-light">Intensive with enjoyable teaching trainning</h1>
            </v-col>
            <v-col cols="10">
                <v-row align="center" justify="space-around">
                    <v-col
                        cols="12"
                        sm="4"
                        class="text-center"
                        v-for="(service, i) in services"
                        :key="i"
                    >
                        <v-hover v-slot:default="{ hover }">
                            <v-card
                                class="card"
                                shaped
                                :elevation="hover ? 10 : 4"
                                :class="{ up: hover }"
                            >
                            <v-img
                                :src="service.img"
                                max-width="100px"
                                class="d-block ml-auto mr-auto"
                                :class="{ 'zoom-efect': hover }"
                            ></v-img>
                            <h1 class="font-weight-regular">{{ service.title }}</h1>
                            <h4 class="font-weight-regular subtitle-1">
                                {{ service.text }}
                            </h4>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
  </section>
</template>

<script>
    export default {
        name: 'service-section',

        data () {
            return {
                services: [
                    {
                        img: require("@/assets/img/icon2.png"),
                        title: "English Learning",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        img: require("@/assets/img/icon1.png"),
                        title: "Secured Video Call",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        img: require("@/assets/img/icon3.png"),
                        title: "Cretive Trainning",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    }
                ]
            }
        }
    }
</script>

<style scoped>
#services {
    min-height: 100vh;
}
</style>