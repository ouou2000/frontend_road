// 该文件用于创建Vuex中的核心Store

// 引入vue
import Vue from "vue"
// 引入vuex
import Vuex from "vuex"
// 使用Vuex插件
Vue.use(Vuex)
// 用于响应组件中的动作
const actions={}
// 用于操作数据（state）
const mutations={}
// 用于存储数据
const state={}

// 创建并暴露Store
export default  new Vuex.Store({
    actions,
    mutations,
    state
})