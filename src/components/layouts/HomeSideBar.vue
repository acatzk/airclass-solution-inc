<template>

  <v-navigation-drawer
    v-model="show"
    app
    temporary
    dark
    src="@/assets/img/bgDrawer.jpg"
  >

    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <img src="@/assets/a.png" alt="Logo" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">Airclass Solution</v-list-item-title>
          <v-list-item-subtitle>Official website</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list> <!-- BUSINESS LOGO AND SUBTITLE -->

    <v-divider />

    <v-list class="mt-2">
      <v-list-item
        v-for="([text, link], i) in items"
        :key="i"
        link
        @click="text === 'Contact' ? dialog = true  : $vuetify.goTo(link)"
      >
        <v-list-item-content>
          <v-list-item-title class="subtitile-1 text-center">{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-btn depressed text block large @click="authDialog = true">
          <span class="text-capitalize">Log In</span>
        </v-btn>
      </v-list-item>
        <v-list-item>
          <v-btn depressed color="primary" block large @click="authDialog = true">
            <span class="text-capitalize">Sign Up</span>
          </v-btn>
      </v-list-item>
    </v-list> <!-- SIDE NAVIGATION LINKS -->

    <contact-modal 
      :visible="dialog"
      @close="dialog = false"
    /> <!-- CONTACT FORM MODAL -->

    <sign-in-up-modal
      :visible="authDialog"
      @close="authDialog = false"
    />  <!-- SIGN IN / SING UP AUTH MODAL -->

  </v-navigation-drawer> <!-- NAVIGATION DRAWER -->

</template>

<script>
  export default {
    name: 'home-side-bar',

    data () {
      return {
        dialog: false,
        authDialog: false
      }
    },

    components: {
      ContactModal: () => import('@/components/pages/modals/ContactModal'),
      SignInUpModal: () => import('@/components/pages/modals/Sign-In-Up-Modal')
    },
    
    props: ['items', 'visible'],

    computed: {
        show: {
            get () {
                return this.visible
            },
            set (value) {
                if (!value) {
                    this.$emit('close')
                }
            }
        }
    }
  }
</script>