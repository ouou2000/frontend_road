// import { Swipe, SwipeItem } from 'vant';
import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false
// Vue.use(Swipe)
// Vue.use(SwipeItem)

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
