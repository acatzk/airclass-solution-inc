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


          <v-skeleton-loader
            ref="skeleton"
            type="list-item-avatar-two-line"
            class="mx-auto"
            v-if="$apollo.loading"
          ></v-skeleton-loader> <!-- ADDED SKELETON LOADING FOR FETCHING API -->

        <v-list-item 
          v-else
          v-for="(student, index) in students" :key="index"
          link
          class="profile-section"
          :to="`/v/profile/${student.id}`"
        >
            <v-list-item-icon>
                <v-img 
                    :src="getStudentProfile(student)" 
                    class="rounded-lg"
                    :lazy-src="getStudentProfile(student)"
                    max-width="35"
                ></v-img>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title class="font-weight-bold text-capitalize">
                  {{ `${student.firstname} ${student.lastname} ` }}
                </v-list-item-title>
                <v-list-item-subtitle class="lightgray--text font-weight-light">Student</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
      </v-list>


      <!-- ACTUAL NAVIGATION LINKS -->
      <v-list nav dense>
        
        <div 
          v-for="item in links"
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
                <v-list-item-title class="gray--text">
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

  export default {
    name: 'home-side-bar', 

    props: {
      links: {
        type: Array,
        required: true
      },
      students: {
        type: Array,
        required: true
      }
    },

    data () {
      return {
        drawer: true,
        isXs: false
      }
    },

    methods: {
        
      onResize () {
          this.isXs = window.innerWidth < 940;
      },

      onClickSignOut () {
        this.$emit('logout')
      },

      getStudentProfile (student) {
        if (student.profile_url === null || student.profile_url === '') {
          return 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzFk3tjuRRU5Hg5ARTScD-fgouLkRKzBQr7w&usqp=CAU'
        } else {
          return student.profile_url
        }
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