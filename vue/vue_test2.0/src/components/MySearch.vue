<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button @click="clickSearch">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "MySearch",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    clickSearch() {
      //请求前更新List的数据
      this.$bus.$emit("searchUser", {
        isLoading: true,
        errMsg: "",
        users: [],
        isFirst: false,
      });
      axios
        .get(`https://api.github.com/search/users?q=${this.keyWord}`)
        .then((result) => {
          console.log("请求成功了");
          //请求成功后更新List的数据
          this.$bus.$emit("searchUser", {
            isLoading: false,
            errMsg: "",
            users: result.data.items,
            isFirst: false,
          });
        })
        .catch((err) => {
          //请求后更新List的数据
          this.$bus.$emit("searchUser", {
            isLoading: false,
            errMsg: err.message,
            users: [],
            isFirst: false,
          });
        });
    },
  },
};
</script>

<style lang="css"></style>
