import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './lang/i18n'
import VueCookie from 'vue-cookie'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(VueCookie)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(BootstrapVue)

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})

export default app
