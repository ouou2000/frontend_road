<template>
  <div class="container">
    <Count/>
  </div>
</template>

<script>
import Count from './components/Count.vue'
export default {
  name: "App",
  // 注册组件
  components: {
   Count,
  },
}
</script>
