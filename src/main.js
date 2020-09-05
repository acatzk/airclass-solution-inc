import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import { auth, apolloProvider } from '@/services' 

import "@mdi/font/css/materialdesignicons.css"

Vue.config.productionTip = false

let app = ''

auth.onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      apolloProvider,
      render: h => h(App)
    }).$mount("#app")
  }
})
