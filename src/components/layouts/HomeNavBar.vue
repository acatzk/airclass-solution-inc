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
      </v-toolbar-title> <!-- BUSINESS LOGO -->

      <v-spacer />

      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-1"
        v-if="isXs"
      ></v-app-bar-nav-icon> <!-- HAMBURGER MENU -->

      <div v-else>
        <v-btn 
          text 
           v-for="([text, link], i) in items"
           :key="i"
          @click="$vuetify.goTo(link)"
        >
          <span class="text-capitalize">{{ text }}</span>
        </v-btn>
        <v-btn depressed text class="ml-10">
          <span class="text-capitalize">Log In</span>
        </v-btn>
        <v-btn depressed color="primary">
          <span class="text-capitalize">Sign Up</span>
        </v-btn>
      </div> <!-- NAVIGATION LINKS -->

    </v-app-bar>

    <home-side-bar 
        :visible="drawer"
        :items="items"
        @close="drawer = false"
    /> <!-- SIDE NAVIGATION BAR LINKS -->

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
                    ["Home", "#hero"],
                    ["About", "#about"],
                    ["Download", "#download"],
                    ["Services", "#services"],
                    ["Contact", "#contact"]
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