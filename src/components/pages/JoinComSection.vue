<template>
  <section id="join">
    <v-container fluid>
        <v-row>
            <v-col>
                <v-container>
                <h2 
                    class="display-2 font-weight-medium text-center" 
                    style="color: #313131;"
                >Sign up to get more updates <br>  with our latest lessons</h2>
                </v-container>
            </v-col>
        </v-row>
        <v-form>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="3">
                    <v-text-field
                        label="Email Address"
                        solo
                        flat
                    ></v-text-field>
                </v-col>
                <v-btn 
                    depressed 
                    color="indigo darken-3" 
                    dark 
                    large
                    class="text-capitalize mb-7 font-weight-light"
                >
                    Join our community
                </v-btn>
                 <p class="description font-weight-light " style="font-size: 12px;">
                    By clicking "Primary action" you accept Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere dolorem nostrum, quasi molestiae maxime.
                </p>
            </v-row>
        </v-form>
    </v-container>
  </section>
</template>

<style scoped>
#join {
  background-color: #f4f7f5;
  padding: 100px 0;
}
.description {
    position: relative;
    bottom: 30px;
    margin: 0 390px;
}
</style>