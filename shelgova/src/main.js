import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import MainPage from './components/mainpage.vue'
import ListGoods from './components/listgoods.vue'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: MainPage },
  { path: '/list', component: ListGoods }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
