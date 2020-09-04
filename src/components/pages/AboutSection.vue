<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" class="d-none d-md-flex mt-10">
              <v-img
                src="@/assets/img/ill1.svg"
                class="d-block ml-auto mr-auto"
                max-width="450px"
              />
            </v-col>
            <v-col cols="12" md="6">
              <v-container>
                <p class="text-uppercase font-weight-bold indigo--text darken-1">About Us</p>
                <h2 class="display-2 font-weight-bold pb-6" style="color: #313131;">We scratch, build and play together</h2>
                <p class="mt-2 grey--text line text-justify" style="line-height: 25px;">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor vero ad voluptatum iusto inventore ipsam quidem libero unde officiis! Magnam asperiores magni earum perspiciatis consequatur nobis ad veniam amet sequi!
                </p>
                <v-btn 
                  outlined 
                  color="indigo darken-1"
                  class="mt-5 text-capitalize font-weight-medium"
                  large
                >
                  Contact Us
                </v-btn>
              </v-container>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>