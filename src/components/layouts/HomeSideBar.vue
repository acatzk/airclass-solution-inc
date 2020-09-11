<template>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      fixed
      :expand-on-hover="isXs ? true : false"
      app
    >
    
     <v-list style="position: relative; top: 20px; margin: 20px 0;">
        <v-list-item>
            <v-list-item-icon>
                <v-img src="@/assets/mascot.svg" max-width="39"/>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title class="font-weight-black primary--text">
                    <h1 style="font-size: 30px;">Airclass</h1>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
     </v-list> <!-- BUSINESS LOGO AND SUBTITLE -->

      <v-list nav>
        <v-list-item link>
            <v-list-item-icon>
                <v-img 
                    src="https://randomuser.me/api/portraits/men/85.jpg" 
                    class="rounded-lg"
                    max-width="35"
                ></v-img>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title class="font-weight-bold">Resamae R.</v-list-item-title>
                <v-list-item-subtitle class="lightgray--text font-weight-light">Student</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list nav dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
          class="darkblue--text"
        >
          <v-list-item-icon>
            <v-icon >{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title :class="$route.path === item.to ? 'font-weight-bold' : 'font-weight-medium'">
                {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
          
        </v-list-item>
      </v-list>
      
      <v-divider class="mx-3"></v-divider>

      <v-list nav dense>
        <v-list-item @click="onClickSignOut">
          <v-list-item-icon>
            <v-icon >mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
                Logout
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    
</template>

<script>

  import { auth } from '@/services'

  import { toastAlertStatus } from '@/utils'

  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/v/dashboard' },
          { title: 'My Classes', icon: 'mdi-poll', to: '/v/my-classes' },
          { title: 'Messages', icon: 'mdi-email', to: '/v/messages' },
          { title: 'Lessons', icon: 'mdi-cube', to: '/v/lessons' },
          { title: 'Rewards', icon: 'mdi-folder-plus', to: '/v/rewards' }
        ],
        isXs: false
      }
    },

    methods: {
        
      onResize () {
          this.isXs = window.innerWidth < 940;
      },

      onClickSignOut () {
          auth
          .signOut()
          .then(() => this.$router.push({ name: 'welcome' }))
          .catch(err => toastAlertStatus('error', err))
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
.active {
    font-weight: bold;
}
</style>