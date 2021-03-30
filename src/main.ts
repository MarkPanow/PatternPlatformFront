import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import './assets/scss/app.scss'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VTooltip from 'v-tooltip'
import VueBreadcrumbs from 'vue-2-breadcrumbs';

Vue.use(VTooltip)
Vue.use(Buefy)
Vue.use(VueAxios, axios)
Vue.use(VueBreadcrumbs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
