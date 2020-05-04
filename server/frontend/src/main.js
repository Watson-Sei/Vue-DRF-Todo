import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import api from './api'

import VueWait from "vue-wait";
import {BootstrapVue,SpinnerPlugin,AvatarPlugin,IconsPlugin,FormPlugin,CardPlugin, FormRadioPlugin,NavbarPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueWait)
Vue.use(BootstrapVue)
Vue.use(SpinnerPlugin)
Vue.use(AvatarPlugin)
Vue.use(IconsPlugin)
Vue.use(FormPlugin)
Vue.use(CardPlugin)
Vue.use(FormRadioPlugin)
Vue.use(api)
Vue.use(NavbarPlugin)

console.log(process.env.VUE_APP_API_ENDPOINT)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
