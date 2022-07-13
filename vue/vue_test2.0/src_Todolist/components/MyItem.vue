<template>
    <li>
        <label>
        
        <input type="checkbox"  :checked="todoObj.done" @change="handleCheck(todoObj.id)"/>
        <span v-show="!todoObj.isEdit">{{todoObj.name}}</span>
        <input type="text" 
        v-show="todoObj.isEdit" 
        :value="todoObj.name" 
        @blur="handleBlur(todoObj,$event)"
        ref="inputName"/>
        </label>

        <button class="btn btn-danger" @click="deleteObj(todoObj.id)">删除</button>
        <button class="btn btn-editor" @click="handleEdit(todoObj)">编辑</button>
        
    </li>
</template>

<script>
export default {
    name:'MyItem',
    props:["todoObj"],
    methods: {
      handleCheck(id){
        // 使用全局事件总线进行组件间通信
        this.$bus.$emit("handleCheck",id)
      },
      deleteObj(id){
         // 使用全局事件总线进行组件间通信
        this.$bus.$emit("deleteObj",id)
      },
      handleEdit(todoObj){
        if(todoObj.hasOwnProperty("isEdit")){
          todoObj.isEdit=true
        }else{
          this.$set(todoObj,"isEdit",true)
        }
        this.$nextTick(function(){
          this.$refs.inputName.focus()
        })
      },
      handleBlur(todo,e){
        todo.isEdit=false
        if(!e.target.value.trim()) return alert("输入不能为空")
        this.$bus.$emit("updateTodo",todo.id,e.target.value)
      }
    },
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
    background-color: darkgrey;
}
li:hover button{
    display:block;
}
</style>