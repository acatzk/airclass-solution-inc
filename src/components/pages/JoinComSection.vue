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
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3" class="text-center">
                    <v-btn 
                        depressed 
                        block
                        color="#171b34" 
                        dark 
                        large
                        class="text-capitalize font-weight-light"
                    >
                        Join our community
                    </v-btn>
                </v-col>
            </v-row>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="6" class="text-center">
                    <p class="description font-weight-light">
                        By clicking "Primary action" you accept Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facere dolorem nostrum, quasi molestiae maxime.
                    </p>
                </v-col>
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
    font-size: 12px;
}
</style>