import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'
import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter)
Vue.use(VueResouce)

Vue.http.options.root = 'https://vuejs-stock-trader-4b68a.firebaseio.com/'

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
