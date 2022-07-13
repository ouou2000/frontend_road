<template>
  <ul class="todo-main">
    <!-- 给元素添加过渡效果，使用了第三方的动画集成库 -->
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeInDown"
      leave-active-class="animate__fadeOutDown"
    >
      <MyItem
        v-for="todoObj in todoList"
        :key="todoObj.id"
        :todoObj="todoObj"
      />
    </transition-group>
  </ul>
</template>

<script>
import "animate.css";
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: { MyItem },
  // 接受父组件传递的数据
  props: ["todoList"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
