import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {router} from './router.js'
import PusbSub from 'pubsub-js'
Vue.config.productionTip = false

Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router,
  PubSub,
}).$mount('#app')
