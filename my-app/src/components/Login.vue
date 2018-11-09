<template>
  <div>
    <span v-if="isLogin === true"> {{welcomeMessage}} </span>   
    <form action="" v-else>
      <h1>{{ title }}</h1>
      <label for="">Account</label>
      <input type="text" v-model="account"/>
      <label for="">Password</label>
      <input type="password" v-model="password"/>
      <p class="login-message" v-if="isLogin === false"> {{loginMessage}} </p>
      <button class="login-submit" type="button" v-on:click="submit">SUBMIT</button>
    </form>    
  </div>  
</template>

<script>
export default {
  name: "Login",
  props: {

  },
  data() {
    return {
      title: "Login",
      account: "",
      password: "",
      loginMessage: "",
      welcomeMessage: "",
      isLogin: false
    };
  },
  computed: {},
  methods: {
    submit() {
      this.axios({
        method: "post",
        url: `http://192.168.3.135:5000/login`,
        data: { account: this.account, password: this.password }
      })
        .then(response => {
          console.log(response.data);
          if(response.data.isSuccess === true){
            this.isLogin = true;
            this.welcomeMessage = "歡迎" + this.account + "";
          }else{
            this.isLogin = false;
          }          
          this.loginMessage = response.data.info;          
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
form {
  padding: 16px;
  box-shadow: 0 0 0 1px #6f6fff;
  font-size: 16px;
  margin: auto;
  display: inline-block;
}
label {
  color: #6f6fff;
  display:block;
  height:20px;
}
.login-submit {
  display: block;
  padding: 8px;
  outline: none;
  background-color: #6f6fff;
  border: 0;
  color: #ffffff;
  margin: 8px 0;
  height: 40px;
  float:right;
  transition: all 0.3s;
}
.login-submit:hover{
  box-shadow: 2px 3px 8px 0 #ccc;
  background-color:#5454c5;
  border-radius: 4px;
}
input {
  display: block;
  line-height: 40px;
  padding: 0 8px;
  border: 0;
  box-shadow: inset 0 -1px 0 0 #6f6fff;
  outline: none;
  background-color: rgba(0, 0, 0, 0);  
}
h1 {
  color: #6f6fff;
  margin: 8px 0;
  padding: 0;
}
.login-message{
  color:#ff4747;
}
</style>
