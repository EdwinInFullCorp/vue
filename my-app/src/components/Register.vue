<template>
  <div>
    <span v-if="isRegister === true"> {{registerSuccessMessage}} </span>
    <form action="" v-else>
      <h1>{{ title }}</h1>
      <label for="">Nickname</label>
      <input type="text" v-model="nickname"/>
      <label for="">Account</label>
      <input type="text" v-model="account"/>
      <label for="">E-mail</label>
      <input type="text" v-model="email"/>
      <label for="">Phone</label>
      <input type="text" v-model="phone"/>
      <label for="">Password</label>
      <input type="password" v-model="password"/>
      <label for="">Confirm Password</label>
      <input type="password" v-model="confirmPassword"/>
      <p class="register-message" v-if="isRegister === false"> {{registerMessage}} </p>
      <button class="register-submit" type="button" v-on:click="submit">SUBMIT</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      title: "Register",
      nickname: "",
      account: "",
      password: "",
      confirmPassword: "",
      phone: "",
      email: "",
      isPass: false,
      isRegister: false,
      registerMessage: "",
      registerSuccessMessage: ""
    };
  },
  methods: {
    $_check() {
      if (this.password.length >= 6 && this.password === this.confirmPassword) this.isPass = true;
    },
    submit() {
      this.$_check();
      if (this.isPass === true) {
        this.axios({
          method: "post",
          url: `http://192.168.3.135:5000/register`,
          data: {
            nickname: this.nickname,
            account: this.account,
            password: this.password,
            phone: this.phone,
            email: this.email
          }
        })
          .then(response => {
            if (response.data.isSuccess === true) {
              this.isRegister = true;
              this.registerSuccessMessage =
                "恭喜! " + this.nickname + " 註冊成功";
            } else {
              this.isRegister = false;
            }
            this.registerMessage = response.data.info;
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        alert("no!");
      }
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
  display: block;
  height: 20px;
}
.register-submit {
  display: block;
  padding: 8px;
  outline: none;
  background-color: #6f6fff;
  border: 0;
  color: #ffffff;
  margin: 8px 0;
  height: 40px;
  float: right;
  transition: all 0.3s;
}
.register-submit:hover {
  box-shadow: 2px 3px 8px 0 #ccc;
  background-color: #5454c5;
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
.register-message {
  color: #ff4747;
}
</style>
