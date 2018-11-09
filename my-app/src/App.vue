<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.svg" width="100">
    <ul>
      <li><router-link to="/">首頁</router-link></li>
      <li><router-link to="/register">註冊</router-link></li>
      <li><router-link to="/login">登入</router-link></li>
      <li><router-link to="/wish">願望清單</router-link></li>
      <li><router-link to="/profile">個人資料</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
img {
  margin: auto;
  display: block;
}
li {
  list-style: none;
}
</style>
