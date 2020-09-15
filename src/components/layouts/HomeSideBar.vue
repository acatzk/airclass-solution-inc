<template>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      fixed
      :expand-on-hover="isXs ? true : false"
      app
    >
    

     <!-- BUSINESS LOGO AND SUBTITLE -->
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
     </v-list>


      <!-- STUDENT PROFILE LINK -->
      <v-list>
        <v-list-item link class="profile-section">
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


      <!-- ACTUAL NAVIGATION LINKS -->
      <v-list nav dense>
        
        <div 
          v-for="item in items"
          :key="item.title"
        >
          <v-list-item
            link
            :to="item.to"
            v-if="!item.subLinks"
          >
            <v-list-item-icon>
              <v-icon :class="$route.path === item.to ? 'darkblue--text' : 'gray--text'">{{ $route.path === item.to  ? item.icon : item.icon + '-outline' }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title :class="$route.path === item.to ? 'darkblue--text font-weight-bold' : 'font-weight-medium gray--text'">
                  {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group
              v-else
              :key="item.title"
              no-action
              :prepend-icon="item.icon"
              :value="false"
              class="gray--text"
          >
              <template v-slot:activator>
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </template>

              <v-list-item
                  v-for="sublink in item.subLinks"
                  :to="sublink.to"
                  :key="sublink.title"
              >
                  <v-list-item-icon>
                    <v-icon :class="$route.path === sublink.to ? 'darkblue--text' : 'gray--text'">
                      {{  $route.path === sublink.to  ? sublink.icon : sublink.icon + '-outline' }}
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-title :class="$route.path === sublink.to ? 'darkblue--text font-weight-bold' : 'font-weight-medium gray--text'">
                    {{ sublink.title }}
                  </v-list-item-title>

              </v-list-item>

          </v-list-group>
        </div>

      </v-list>
      
      <v-divider class="mx-3"></v-divider>


      <!-- SIGN OUT BUTTON LINK -->
      <v-list nav dense>
        <v-list-item @click="onClickSignOut">
          <v-list-item-icon>
            <v-icon >mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="gray--text">
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
          { title: 'Schedules', icon: 'mdi-calendar', to: '/v/schedules' },
          { title: 'Lessons', icon: 'mdi-book-open', to: '/v/lessons' },
          { 
            title: 'Settings', 
            icon: 'mdi-settings', 
            subLinks : [
              {
                  title : 'General Setting',
                  to    : '/v/settings',
                  icon  : 'mdi-settings'
              },
              {
                  title : 'Profile',
                  to    : `/v/profile/${auth.currentUser.uid}`,
                  icon  : 'mdi-account'
              }
            ]
          }
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
.profile-section {
  border-left: 4px solid #14C6FF;
}
</style>