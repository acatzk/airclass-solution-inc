<template>
  <section id="hero">

      <v-layout class="hero-container">
        <v-row align="center" justify="center">
          <v-col cols="12" md="7" sm="12">
              <h1 class="display-2 font-weight-black pb-6" style="color: #313131;">Airclass Solution, Inc. </h1>
              <p class="grey--text">
                Learning English Language Through Video Calls.
                Putting Children First. Preparing children for success in life
              </p>
              <v-btn 
                x-large 
                class="mt-3 text-capitalize pa-7" 
                rounded 
                color="primary" 
                depressed
              >
                Sign Up for free
              </v-btn>
              <v-btn 
                fab 
                @click="$vuetify.goTo('#goal')"
                outlined
                text
                large
                class="mt-3 ml-5"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
          </v-col>
          <v-col cols="12" md="5" class="d-none d-md-flex">
            <img 
              src="@/assets/img/herosvg.svg" 
              alt="hero" 
              class="side-hero-img d-block ml-auto mr-auto"
            >
          </v-col>
        </v-row>
      </v-layout>

  </section>
</template>

<style scoped>
.hero-container {
  min-height: 100vh !important;
  margin: 0 100px;
}
.side-hero-img {
  position: relative;
  right: 250px;
}
</style>