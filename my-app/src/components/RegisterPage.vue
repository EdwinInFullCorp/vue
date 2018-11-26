<template>
  <div class="container">
		<div class="register">
			<img class="register__logo" src="../assets/logo.svg" alt="logo 不見了">
			<h1 class="register__h1-title">Health Cloud</h1>
			<form class="register__form">
				<h2 class="register__h2">Register</h2>
				<label class="register__label">Account Type</label>
				<div class="register__type">
					<input class="register__type-option" type="radio" value="0" required checked v-model="payload.type"/>
					<label class="register__type-label">Personal</label>
					<input class="register__type-option" type="radio" value="1" required v-model="payload.type"/>
					<label class="register__type-label">Group</label>
				</div>
				<label class="register__label">User Name</label>
				<input class="register__input" required type="text" name="username" v-model="payload.username"/>
				<label class="register__label">Full Name</label>
				<input class="register__input" type="text"  v-model="payload.fullname"/>
				<label class="register__label">email</label>
				<input class="register__input" required type="text" v-model="payload.email"/>
				<label class="register__label">phone</label>
				<input class="register__input" required type="text" v-model="payload.phone"/>
				<label class="register__label">password</label>
				<input class="register__input" required type="password" v-model="payload.password" v-bind:placeholder="tip.password"/>
				<label class="register__label">confirm Password</label>
				<input class="register__input" required type="password" v-model="confirmPassword" v-bind:placeholder="tip.confirmPassword"/>
				<span class="register__text-message">{{responseMessage}}</span>
				<button class="register__button-register" type="button" v-on:click="submitRegisterInfomation">Register</button>
			</form>
			<div class="other">
				<a class="other__link" href="/#/login">Login</a>
			</div>
			<footer class="register__footer">©Copyright 2018 Full Enterprise Corp. All rights reserved.</footer>
		</div>
	</div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      payload: {
        type: 0,
        fullname: "",
        username: "",
        password: "",
        phone: "",
        email: ""
      },
      tip: {
        password: "至少6個字元",
        confirmPassword: "輸入一樣的密碼"
      },
      confirmPassword: "",
      isValid: false,
      isRegister: false,
      responseMessage: "",
      registerMessage: ""
    };
  },
  methods: {
    $_checkFieldNotEmpty() {
      if (
        this.payload.password.length >= 6 &&
        this.payload.password === this.confirmPassword
      ) {
        return true;
      } else {
        return false;
      }
    },
    submitRegisterInfomation() {
      this.isValid = this.$_checkFieldNotEmpty();
      if (this.isValid) {
        this.$_requestAction();
      } else {
        alert("有些條件沒有達成!");
      }
    },
    $_requestAction() {
      this.axios({
        method: "post",
        url: `/register`,
        data: this.payload
      })
        .then(response => {
          this.$_responseAction(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    $_responseAction(response) {
      console.log(response.data);
      if (response.data.isSuccess === true) {
        this.isRegister = true;
        this.responseMessage = "恭喜! " + this.payload.username + " 註冊成功";
      } else {
        this.isRegister = false;
      }
      this.registerMessage = response.data.info;
    }
  }
};
</script>
<style scoped>
body {
  padding: 0;
  margin: 0;
}
.container {
  display: grid;
  grid-template-columns: auto 320px auto;
  grid-template-rows: auto auto auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}
.register {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Microsoft JhengHei",
    sans-serif;
  color: #666;
  margin: auto;
  width: 320px;
  grid-area: 2/2/3/3;
}
.register__logo {
  width: 100px;
  height: 100px;
  margin: auto;
  display: block;
}
.register__h1-title {
  color: #f66;
  text-align: center;
  font-weight: 300;
  margin: 0;
  padding: 16px 0;
}
.register__form {
  width: 280px;
  box-shadow: inset 0 0 0 1px #f66;
  padding: 20px;
  overflow: hidden;
  animation: onePxWidth 1s 1;
  transition: 0.3s;
  background-color: #fff;
  margin: auto;
}
.register__h2 {
  margin: 0;
  font-weight: 300;
  font-size: 24px;
  line-height: 24px;
}
.register__label {
  display: block;
  width: 100%;
  padding: 16px 0px 8px;
}
.register__input {
  padding: 0;
  margin: 0;
  border: 0;
  display: block;
  width: 100%;
  box-shadow: inset 0 -1px 0 0 #f66;
  outline: none;
  line-height: 32px;
  height: 32px;
  text-indent: 8px;
  transition: 0.3s;
  background-color: #fff0;
}
.register__input:focus {
  border-bottom-left-radius: 8px;
  box-shadow: inset 0 -1px 0 0 #f66;
}
.register__type {
  height: 32px;
}
.register__type * {
  display: block;
  float: left;
  line-height: 32px;
}
.register__type-label {
  display: block;
  height: 32px;
  padding: 0 8px;
  line-height: 32px;
}
.register__type-option {
  display: block;
  height: 24px;
  width: 24px;
  margin: 4px;
  line-height: 32px;
}

.register__text-message {
  font-size: 16px;
  padding: 0;
  margin: 0;
}
.register__button-register {
  display: block;
  width: 100%;
  outline: none;
  margin-top: 16px;
  line-height: 32px;
  background-color: #ff6060;
  color: #fff;
  border: 0;
  padding: 0;
  cursor: pointer;
  transition: 0.3s;
}
.register__button-register:hover {
  letter-spacing: 4px;
  background-color: #ae7bff;
}
.other {
  text-align: center;
}
.other__link {
  color: #f66;
  cursor: pointer;
  padding: 8px;
  display: inline-block;
  text-decoration: none;
}
.register__footer {
  text-align: center;
  font-size: 12px;
  padding: 4px;
  line-height: 12px;
}
@keyframes onePxWidth {
  0% {
    width: 1px;
    padding: 0;
    height: 0;
  }
  50% {
    width: 1px;
    padding: 0;
    height: 740px;
  }
  80% {
    width: 200px;
    padding: 0;
    height: auto;
  }
  100% {
    padding: 16px;
  }
}
@media only screen and (max-width: 320px) {
  .register {
    display: block;
    position: unset;
  }
  .register__logo {
    width: 100%;
    height: 50px;
    display: block;
    margin: auto;
  }
  .register__h1-title {
    padding: 8px 0;
  }
}
</style>
