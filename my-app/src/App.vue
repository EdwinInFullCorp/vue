<template>
  <div id="app">
    <Login v-if="isLogin===false" v-on:get-user-from-login="changeUser"/>
    <Home v-else v-bind:username="user.name" v-bind:userid="user.id" v-on:get-user-from-login="changeUser"/>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";

export default {
  name: "app",
  components: {
    Login,
    Home
  },
  props: {},
  data() {
    return {
      isLogin: false,
      user: {
        success: false,
        id: "",
        name: ""
      }
    };
  },
  created: function() {
    this.axios
      .post("/check")
      .then(response => {
        Object(response.data.success)
          ? this.changeUser(response.data)
          : this.noUser();
      })
      .catch(error => {
        // console.log("inAppError");
        console.log(error.response);
      });
  },
  methods: {
    noUser() {
      this.user.success = false;
      this.user.id = "";
      this.user.name = "";
      this.isLogin = false;
    },
    changeUser(value) {
      this.user = value;
      this.user.success === true
        ? (this.isLogin = true)
        : (this.isLogin = false);
    }
  }
};
</script>

<style>
body,
input {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Microsoft JhengHei",
    sans-serif;
  font-size: 16px;
}
body {
  color: #666;
}
</style>
