<template>
  <div>

    <v-app-bar
      app
      color="white"
      flat
    >
      <v-toolbar-title class="d-flex">
        <v-img src="@/assets/a.png" max-width="50px" />
        <span class="mt-3 log-name">Airclass</span>
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
          @click="text === 'Contact' ? dialog = true  : $vuetify.goTo(link)"
        >
          <span class="text-capitalize">{{ text }}</span>
        </v-btn>
        <v-btn depressed text class="ml-10" @click="authDialog = true">
          <span class="text-capitalize">Log In</span>
        </v-btn>
        <v-btn depressed color="primary" @click="authDialog = true">
          <span class="text-capitalize">Sign Up</span>
        </v-btn>
      </div> <!-- NAVIGATION LINKS -->

    </v-app-bar>

    <welcome-side-bar 
        :visible="drawer"
        :items="items"
        @close="drawer = false"
    /> <!-- SIDE NAVIGATION BAR LINKS -->


    <contact-modal 
      :visible="dialog"
      @close="dialog = false"
    /> <!-- CONTACT FORM MODAL -->

    <sign-in-up-modal
      :visible="authDialog"
      @close="authDialog = false"
    /> <!-- SIGN IN / SING UP AUTH MODAL -->

  </div>
</template>

<script>
  export default {

    components: {
      WelcomeSideBar: () => import('./WelcomeSideBar'),
      ContactModal: () => import('@/components/pages/modals/ContactModal'),
      SignInUpModal: () => import('@/components/pages/modals/Sign-In-Up-Modal')
    },

    data () {
      return {
          drawer: false,
          dialog: false,
          authDialog: false,
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
          this.isXs = window.innerWidth < 940;
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
  .log-name  {
    font-weight: bold;
    color: #0a0a3a;
  }
</style>