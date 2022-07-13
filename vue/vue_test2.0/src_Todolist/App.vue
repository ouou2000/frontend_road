<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <MyList :todoList="todoList" />
        <!-- 初始化组件并传递数据 -->
        <!--  @checkAll="checkAll"表示绑定一个自定义事件 -->
        <MyFooter
          :todoList="todoList"
          @checkAll="checkAll"
          :deleteComplete="deleteComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  // 注册组件
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      // 从本地存储上读取待办事项，没有则初始化一个空数组
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };
  },
  methods: {
    // 添加一个待办事项
    addTodo(todoObj) {
      this.todoList.unshift(todoObj);
    },
    // 勾选或者取消勾选一个待办事项
    handleCheck(objId) {
      this.todoList.forEach((todoObj) => {
        if (todoObj.id === objId) {
          todoObj.done = !todoObj.done;
        }
      });
    },
    // 删除一个待办事项
    deleteObj(objId) {
      this.todoList.forEach((todoObj, index) => {
        if (todoObj.id === objId) {
          this.todoList.splice(index, 1);
        }
      });
    },
    // 删除所有已完成的待办事项
    deleteComplete() {
      let comfirDele = confirm("你确定删除所有已完成事项吗？");
      if (comfirDele) {
        this.todoList = this.todoList.filter((todo) => {
          return !todo.done;
        });
      }
    },
    // 全选或者取消全选
    checkAll(value) {
      this.todoList.forEach((todoObj) => {
        todoObj.done = value;
      });
    },
    updateTodo(id, value) {
      this.todoList.forEach((todoObj, index) => {
        if (todoObj.id === id) {
          todoObj.name = value;
        }
      });
    },
  },
  watch: {
    // 监视todoList1的变化，将其加入到本地存储中去
    todoList: {
      deep: true,
      handler(value) {
        localStorage.setItem("todoList", JSON.stringify(value));
      },
    },
  },
  mounted() {
    // 使用自定义事件
    this.$on("checkAll", this.checkAll);
    this.$on("addTodo", this.addTodo);
    // 使用全局事件总线，绑定全局自定义事件
    this.$bus.$on("handleCheck", this.handleCheck);
    this.$bus.$on("deleteObj", this.deleteObj);
    this.$bus.$on("updateTodo", this.updateTodo);
  },
  beforeDestroy() {
    // 全局事件绑定后要记得销毁
    this.$bus.$off("handleCheck");
    this.$bus.$off("deleteObj");
    this.$bus.$off("updateTodo");
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-editor {
  color: #fff;
  background-color: rgb(11, 212, 239);
  border: 1px solid rgb(11, 125, 239);
  margin-right: 4px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn-editor:hover {
  color: #fff;
  background-color: rgb(11, 125, 239);
}
.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
