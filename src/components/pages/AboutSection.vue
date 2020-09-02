<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <!-- <h1 class="font-weight-light display-2">👋</h1> -->
              <h1 class="font-weight-light display-1 mb-3">
                About Our Company 👋
              </h1> 
              <v-row>
                <v-col 
                    cols="12" 
                    class="d-flex align-center"
                    v-for="(detail, index) in details" :key="index"
                >
                  <v-img
                    :src="detail.src"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">{{ detail.description }}</p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/ill1.svg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
    export default {
        name: 'about-section',
        
        data () {
            return {
                details: [
                    {
                        id: 0,
                        src: require('@/assets/img/icon1.svg'),
                        description: 'A partnership of a two good friends Victor and Nicholas. An overseas workers, originally from the Philippines and the United States of America who met in the middle of war zone projects, working 7 days a week and 12-16 hours a day depends with the complexity of work to provide logistics and construction management support of NATO troops stationed in Middle East. '
                    },
                    {
                        id: 0,
                        src: require('@/assets/img/icon2.svg'),
                        description: "Our goal is to help other's dream come to reality, especially those who are living in the remote areas and small villages. Big Cities are too congested with business and workers fighting the agony of being far away from home."
                    },
                    {
                        id: 0,
                        src: require('@/assets/img/icon3.svg'),
                        description: "May 28, 2020 we developed a challenging plan to start with company 'Victors Air Class Solutions'. We provide teaching tools to qualified and teachers and other professionals who has the love and desire to teach online while enjoying their time home with families. We are dedicated to make partnership and teaching support in English and other courses that can be done remotely in a case to case basis."
                    }
                ]
            }
        }
    }
</script>

<style scoped>
#about {
  background-color: #f4f7f5;
  min-height: 100vh;
}
</style>