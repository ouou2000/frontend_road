<template>
  <div class="todo-footer" v-show="allTodo">
    <label>
      <!-- 双向数据绑定，此时v-model默认绑定的是checked属性 -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span> <span>已完成{{isComple}}</span> / 全部{{allTodo}} </span>
    <button class="btn btn-danger" @click="deleteComplete">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props:["todoList","deleteComplete"],
  computed:{
    // 计算所有事项
    allTodo(){
      return this.todoList.length
    },
    // 计算已完成的事项
    isComple(){
      return this.todoList.reduce((pre,current)=> pre+(current.done?1:0),0)
    },
    // 检查是否全部完成
    isAll:{
      get(){
        return this.isComple===this.allTodo && this.allTodo>0
      },
      set(value){
        // 使用自定义事件进行组件间通信
        this.$emit("checkAll",value)
      }
    }
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
