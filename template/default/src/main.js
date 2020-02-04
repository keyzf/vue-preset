
import 'amfe-flexible/index'
// import './utils/rem'
import Vue from 'vue'
import './plugins/vant'
import './plugins/cloud-stage'
import AppMixin from './AppMixin'
Vue.mixin(AppMixin)
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
