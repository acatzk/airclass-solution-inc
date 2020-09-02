<template>
  <div>

    <v-app-bar
      app
      color="white"
      flat
      class="px-5"
    >
      <v-toolbar-title>
        <v-img src="@/assets/logo.png" max-width="150px" />
      </v-toolbar-title>

      <v-spacer />

      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#hero')" rounded>
          <v-icon small left>mdi-cube-outline</v-icon>
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#about')" rounded>
          <v-icon small left>mdi-information-outline</v-icon>
          <span class="mr-2">About</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#services')" rounded>
          <v-icon small left>mdi-folder-outline</v-icon>
          <span class="mr-2">Services</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#contact')" rounded>
          <v-icon small left>mdi-cellphone-dock</v-icon>
          <span class="mr-2">Contact</span>
        </v-btn>
        <v-btn rounded depressed outlined text color="primary darken-1">
          <v-icon small left>mdi-account-circle</v-icon>
          <span class="mr-2">Register</span>
        </v-btn>
      </div>
    </v-app-bar>

    <home-side-bar 
        :visible="drawer"
        :items="items"
        @close="drawer = false"
    />

  </div>
</template>

<script>
    export default {

        components: {
            HomeSideBar: () => import('./HomeSideBar')
        },

        data () {
            return {
                drawer: false,
                isXs: false,
                items: [
                    ["mdi-cube-outline", "Home", "#hero"],
                    ["mdi-information-outline", "About", "#about"],
                    ["mdi-folder-outline", "Services", "#services"],
                    ["mdi-cellphone-dock", "Contact", "#contact"]
                ]
            }
        },
        methods: {
            onResize () {
                this.isXs = window.innerWidth < 850;
            }
        },
        watch: {
            isXs (value) {
                if (!value) {
                    if (this.drawer) {
                        this.drawer = false;
                    }
                }
            }
        },
        mounted() {
            this.onResize()
            window.addEventListener("resize", this.onResize, { 
                passive: true 
            })
        }
    }
</script>

<style scoped>
    .v-toolbar {
        transition: 0.6s;
    }
    .expand {
        height: 80px !important;
        padding-top: 10px;
    }
</style>