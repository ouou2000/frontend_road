<template>
  <div class="container">
    <MySearch/>
    <MyList/>
  </div>
</template>

<script>
import MySearch from './components/MySearch.vue'
import MyList from './components/MyList.vue'
export default {
  name: "App",
  // 注册组件
  components: {
   MySearch,
   MyList
  },
}
</script>
