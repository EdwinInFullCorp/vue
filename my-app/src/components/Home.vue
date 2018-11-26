<template>
   <div class="">
    <h1 class="title"><img class="logo" src="../assets/logo.svg" height="80">
      <span class="title__contant">Full Health Cloud</span>
    </h1>
    <div class="user">
      <span class="user__name">{{username}}</span>
      <button type="button" v-on:click="getProfile">Profile</button>
      <button type="button" v-on:click="logout">Logout</button>
    </div>
    <!-- <div class="health__education">
      <h2 class="health__education__title">Health Education Type</h2>
      <select class="health__education__options"><option value="2gj094gj0r9">2049gjeoaijg</option><option value="4wjyrhstrh">jthsdnmdtym</option><option value="234y5ghseth">jwyrsh355</option><option value="1542677338194">awefgaw</option><option value="1542677339793">awrgawrg</option></select>
      <ol class="health__education__list">
      <li class="health__education__type" id="2gj094gj0r9">
        <span class="health__education__type__name">2049gjeoaijg</span>
        <button class="health__education__remove__type" type="button" value="2gj094gj0r9">Delete</button>
      </li>
      <li class="health__education__type" id="4wjyrhstrh">
        <span class="health__education__type__name">jthsdnmdtym</span>
        <button class="health__education__remove__type" type="button" value="4wjyrhstrh">Delete</button>
      </li>
      <li class="health__education__type" id="234y5ghseth">
        <span class="health__education__type__name">jwyrsh355</span>
        <button class="health__education__remove__type" type="button" value="234y5ghseth">Delete</button>
      </li>
        <li class="health__education__type" id="1542677338194">
        <span class="health__education__type__name">awefgaw</span>
        <button class="health__education__remove__type" type="button" value="1542677338194">Delete</button>
      </li>
      <li class="health__education__type" id="1542677339793">
        <span class="health__education__type__name">awrgawrg</span>
        <button class="health__education__remove__type" type="button" value="1542677339793">Delete</button>
      </li>
      <li class="health__education__type__editor">
          <input type="text" class="health__education__text" placeholder="Create message type.">
          <button type="button" class="health__education__add">Add</button>
        </li>
      </ol>          
    </div>
    <table>
      <caption>Physio Log</caption>
      <tbody>
        <tr><th>#</th><th>type</th><th>name</th><th>deviceName</th><th>deviceMac</th><th>value</th><th>createTime</th></tr>
        <tr><td>1</td><td>0</td><td>oscar</td><td>aaa</td><td>000</td><td>0</td><td>2018/11/7 上午10:43:08</td></tr>
      </tbody>
    </table> -->
    <footer class="">©Copyright 2018 Full Enterprise Corp. All rights reserved.</footer>
  </div>
</template>
<script>
export default {
  name: "home",
  props: {
    username: String,
    userid: String
  },
  data() {
    return {};
  },
  created: function() {},
  methods: {
    logout() {
      this.axios
        .get("/logout")
        .then(response => {
          if (response.data.isLogout === true) {
            this.$emit("get-user-from-login", {
              success: false,
              name: "",
              id: ""
            });
          }
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    getProfile() {
      this.axios
        .get(`/profile/${this.userid}`)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>
<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Microsoft JhengHei",
    sans-serif;
  color: #666;
}
.title {
  color: #f66;
  font-weight: 300;
  font-size: 40px;
  margin: 0;
}
.logo {
  vertical-align: middle;
  padding: 20px;
  display: inline-block;
}
.title__contant {
  font-size: 40px;
  line-height: 40px;
  display: inline-block;
  vertical-align: middle;
}
table {
  box-shadow: 0 0 0 1px #f66;
  border-collapse: collapse;
  user-select: none;
}
caption {
  font-size: 32px;
  color: #f66;
  font-weight: 100;
  padding: 8px 0;
}
th {
  padding: 8px;
  text-transform: capitalize;
  font-weight: 100;
  font-size: 20px;
}
tr {
  box-shadow: inset 0 -1px 0 0#f66;
  transition: all 0.3s;
}
tr:not(:first-child):hover {
  background-color: #f66;
  color: #fff;
}
tr:last-child {
  box-shadow: none;
}
td {
  padding: 8px;
}
button {
  outline: none;
  background-color: #ff6060;
  color: #fff;
  border: 0;
  padding: 8px;
  cursor: pointer;
  transition: 0.3s;
  user-select: none;
}
button:hover {
  letter-spacing: 4px;
  background-color: #ae7bff;
}
.user {
  position: fixed;
  right: 0;
  top: 0;
  margin: 8px;
  z-index: 2;
}
.user__name {
  user-select: none;
}
footer {
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  font-size: 12px;
  padding: 4px;
  line-height: 12px;
  background-color: #fff;
}
.health__education__title {
  font-weight: 100;
  color: #ff6060;
}
.health__education__text {
  border: 0;
  line-height: 32px;
  box-shadow: 0 1px 0 0 #ff6060;
  padding: 0;
  outline: none;
}
.health__education__add {
  background-color: #60a1ff;
}
.health__education__list {
  width: 300px;
  box-shadow: 0 0 0 1px #ff6060;
  padding-top: 8px;
  padding-bottom: 8px;
}
.health__education__type {
  margin-bottom: 8px;
}
.health__education__type:first-child {
  margin-top: 8px;
}

.health__education__type__name {
  display: inline-block;
  width: 200px;
}
</style>
