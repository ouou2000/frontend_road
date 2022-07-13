<template>
<div>
   <h1>求和的结果是：{{sum}}</h1>
   <h2>放大十倍的结果是：{{bigSum}}</h2>
   <h3>学习的框架是{{frame}}，使用了{{skill}}技术</h3>
  <select v-model.number="n">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <button @click="add(n)">+</button>
  <button @click="sub(n)">-</button>
  <button @click="addOdd(n)">和为奇数的时候加</button>
  <button @click="addWait(n)">等一等再加</button>
</div>
</template>

<script>
// 导入映射函数
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
export default {
    name:"Count",
    data() {
      return {
        n:1
      }
    },
    computed:{
      ...mapState(["sum","frame","skill"]),
      ...mapGetters(["bigSum"])
    },
    methods: {
      // add(){
      //   this.$store.commit("add",this.n)
      // },
      // sub(){
      //   this.$store.commit("sub",this.n)
      // },
      ...mapMutations(["add","sub"]),
      ...mapActions(["addOdd","addWait"])
      // addOdd(){
      //   this.$store.dispatch("addOdd",this.n)
      // },
      // addWait(){
      //   this.$store.dispatch("addWait",this.n)
      // }
    },
}
</script>

<style>
  button{
    margin-left: 5px;
  }
</style>