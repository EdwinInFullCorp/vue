<template>
  <div class="container">
		<div class="login">
			<img class="login__logo" src="../assets/logo.svg" alt="logo 不見了">
			<h1 class="login__h1-title">{{label.application_name}}</h1>
			<form class="login__form" v-if="isLoginSuccess === false">
				<h2 class="login__h2">{{label.form_title}}</h2>
				<label class="login__label">{{label.label_type}}</label>
				<div class="login__type">
					<input class="login__type-option" type="radio" v-model.number="payload.type" value="0" required checked />
					<label class="login__type-label">{{label.label_personal}}</label>
					<input class="login__type-option" type="radio" v-model.number="payload.type" value="1" required />
					<label class="login__type-label">{{label.label_group}}</label>          
				</div>
				<label class="login__label">{{label.label_username}}</label>
				<input class="login__input" type="text" v-model.trim="payload.username" required autofocus />
				<label class="login__label">{{label.label_password}}</label>
				<input class="login__input" type="password" v-model="payload.password" v-on:keyup.13="checkUser" required />
				<p class="login__text-message">{{ systemMessage }}</p>
				<button class="login__button-login" type="button" v-on:click="checkUser">{{label.button_login}}</button>
			</form>
			<div class="other" v-if="isLoginSuccess === false">
				<a class="other__link" href="/#/register">{{label.link_register}}</a> |
				<a class="other__link" href="/#/forgot">{{label.link_forgot}}</a>
			</div>
      <p class="login__text-message" v-if=" isLoginSuccess === true ">{{tip.loginSuccess}} &#x2713;</p>
			<footer class="login__footer">{{label.footer}}</footer>
		</div>
	</div>
</template>

<script>
export default {
  name: "login",
  props: {
    user: Object
  },
  data() {
    return {
      payload: {
        type: 0,
        username: "",
        password: ""
      },
      label: {
        application_name: "Health Cloud",
        form_title: "Login",
        label_type: "Account Type",
        label_personal: "Personal",
        label_group: "Group",
        label_username: "User Name",
        label_password: "Password",
        button_login: "Login",
        link_register: "Register",
        link_forgot: "Forgot Password?",
        footer: "©Copyright 2018 Full Enterprise Corp. All rights reserved."
      },
      tip: {
        welcome: "Hi! It's been a long time.",
        passwordEmpty: "Oops! Your password!",
        usernameEmpty: "Oops! Your user name!",

        delayTime: "Well, Server is busy. Try again.",

        loginFailed: "User name or password is wrong.",
        disconnect: "Service disconnect.",
        notFond: "We can't find this path.",
        loginSuccess: "Welcome back"
      },
      systemMessage: "",
      isLoginSuccess: false
    };
  },
  computed: {},
  created: function() {
    this.systemMessage = this.tip.welcome;
  },

  methods: {
    $_afterResponseAction(response) {
      this.isLoginSuccess = response.data.success || false;
      if (this.isLoginSuccess) {
        this.user = response.data;
        this.checkUserResult(this.user);
      }
    },
    $_errorCode(code) {
      switch (code) {
        case 404:
          this.systemMessage = this.tip.notFond;
          break;
        case 500:
          this.systemMessage = this.tip.disconnect;
          break;
        default:
          this.systemMessage = this.tip.delayTime;
          break;
      }
    },
    checkUser() {
      if (this.payload.username && this.payload.password) {
        this.axios
          .post("/login", this.payload)
          .then(response => {
            this.$_afterResponseAction(response);
          })
          .catch(error => {
            this.$_errorCode(error.response.status);
          });
      } else {
        this.systemMessage = this.tip.passwordEmpty;
      }
    },
    checkUserResult(value) {
      this.$emit("get-user-from-login", value);
    }
  }
};
</script>
<style scoped>
body {
  padding: 0;
  margin: 0;
  user-select: none;
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
.login {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Microsoft JhengHei",
    sans-serif;
  color: #666;
  margin: auto;
  width: 320px;
  grid-area: 2/2/3/3;
}
.login__logo {
  width: 100px;
  height: 100px;
  margin: auto;
  display: block;
}
.login__h1-title {
  color: #f66;
  text-align: center;
  font-weight: 300;
  margin: 0;
  padding: 16px 0;
}
.login__form {
  width: 280px;
  box-shadow: inset 0 0 0 1px #f66;
  padding: 20px;
  overflow: hidden;
  animation: onePxWidth 1s 1;
  transition: 0.3s;
  background-color: #fff;
  margin: auto;
}
.login__h2 {
  margin: 0;
  font-weight: 300;
  font-size: 24px;
  line-height: 24px;
}
.login__label {
  display: block;
  width: 100%;
  padding: 16px 0px 8px;
}
.login__input {
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
.login__input:focus {
  border-bottom-left-radius: 8px;
  box-shadow: inset 0 -1px 0 0 #f66;
}
.login__type {
  height: 32px;
}
.login__type * {
  display: block;
  float: left;
  line-height: 32px;
}
.login__type-label {
  display: block;
  height: 32px;
  padding: 0 8px;
  line-height: 32px;
}
.login__type-option {
  display: block;
  height: 24px;
  width: 24px;
  margin: 4px;
  line-height: 32px;
}
.login__text-message {
  font-size: 16px;
  padding: 16px 0 0;
  margin: 0;
}
.login__button-login {
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
.login__button-login:hover {
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
.login__footer {
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
    height: 520px;
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
  .login {
    display: block;
    position: unset;
  }
  .login__logo {
    width: 100%;
    height: 50px;
    display: block;
    margin: auto;
  }
  .login__h1-title {
    padding: 8px 0;
  }
}
</style>
