import Vue from 'vue'
import App from './App.vue'
import store from './store'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  router:router
}).$mount('#app')

