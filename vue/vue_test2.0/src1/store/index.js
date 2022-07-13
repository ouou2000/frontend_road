// 该文件用于创建Vuex中的核心Store

// 引入vue
import Vue from "vue"
// 引入vuex
import Vuex from "vuex"
// 使用Vuex插件
Vue.use(Vuex)
// 用于响应组件中的动作
const actions={
    addOdd(context,value){
        if(context.state.sum % 2 !==0){
            context.commit("add",value)
        }
    },
    addWait(context,value){
        setTimeout(() => {
            context.commit("add",value)
        }, 500);
    }
}
// 用于操作数据（state）
const mutations={
    add(state,value){
        state.sum+=value
    },
    sub(state,value){
        state.sum-=value
    }
}
// 用于存储数据
const state={
    sum:0,
    frame:"vue",
    skill:"vuex"
}
const getters={
    bigSum(state){
        return state.sum*10
    }
}

// 创建并暴露Store
export default  new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})