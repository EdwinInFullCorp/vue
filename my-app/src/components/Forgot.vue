<template>
  <div class="container">
		<div class="forgot">
			<img class="forgot__logo" src="../assets/logo.svg" alt="logo 不見了" />
			<h1 class="forgot__h1-title">Health Cloud</h1>
			<form class="forgot__form" method="post" action="/users/forgot">
				<div v-if="success === true">
					<h2 class="forgot__h2">Forgot Password</h2>
					<p class="forgot__text-message-title">Success &#x2713;</p>
					<p class="forgot__text-message">{{info}}</p>
        </div>
        <div v-else>
					<h2 class="forgot__h2">Forgot Password</h2>
					<label class="forgot__label">Account Type</label>
					<div class="forgot__type">
						<input class="forgot__type-option" type="radio" name="type" value="0" required checked />
						<label class="forgot__type-label">Personal</label>
						<input class="forgot__type-option" type="radio" name="type" value="1" required />
						<label class="forgot__type-label">Group</label>
					</div>
					<label class="forgot__label">User Name</label>
					<input class="forgot__input" type="text" name="username" required />
					<label class="forgot__label">Email</label>
					<input class="forgot__input" type="text" name="email" required />
					<p class="forgot__text-message">{{info}}{{error}}</p>
					<button class="forgot__button-forgot" type="submit">Send mail</button>
        </div>
			</form>
			<div class="other">
				<a class="other__link" href="/#/login">Login</a>
			</div>
			<footer class="forgot__footer">©Copyright 2018 Full Enterprise Corp. All rights reserved.</footer>
		</div>
	</div>	
</template>
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
.forgot {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Microsoft JhengHei",
    sans-serif;
  color: #666;
  margin: auto;
  width: 320px;
  grid-area: 2/2/3/3;
}
.forgot__logo {
  width: 100px;
  height: 100px;
  margin: auto;
  display: block;
}
.forgot__h1-title {
  color: #f66;
  text-align: center;
  font-weight: 300;
  margin: 0;
  padding: 16px 0;
}
.forgot__form {
  width: 280px;
  box-shadow: inset 0 0 0 1px #f66;
  padding: 20px;
  overflow: hidden;
  animation: onePxWidth 1s 1;
  transition: 0.3s;
  background-color: #fff;
  margin: auto;
}
.forgot__h2 {
  margin: 0;
  font-weight: 300;
  font-size: 24px;
  line-height: 24px;
}
.forgot__label {
  display: block;
  width: 100%;
  padding: 16px 0px 8px;
}
.forgot__input {
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
.forgot__input:focus {
  border-bottom-left-radius: 8px;
  box-shadow: inset 0 -1px 0 0 #f66;
}
.forgot__type {
  height: 32px;
}
.forgot__type * {
  display: block;
  float: left;
  line-height: 32px;
}
.forgot__type-label {
  display: block;
  height: 32px;
  padding: 0 8px;
  line-height: 32px;
}
.forgot__type-option {
  display: block;
  height: 24px;
  width: 24px;
  margin: 4px;
  line-height: 32px;
}
.forgot__text-message-title {
  font-size: 32px;
  color: #56ca73;
  font-weight: 900;
  text-align: center;
  padding: 16px 0;
  margin: 0;
}
.forgot__text-message {
  font-size: 16px;
  padding: 0;
  margin: 0;
}
.forgot__button-forgot {
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
.forgot__button-forgot:hover {
  letter-spacing: 4px;
  background-color: #ae7bff;
}
.other {
  text-align: center;
  grid-column: 1/4;
  grid-row: 3/4;
}
.other__link {
  color: #f66;
  cursor: pointer;
  padding: 8px;
  display: inline-block;
  text-decoration: none;
}
.forgot__footer {
  text-align: center;
  align-self: end;
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
  .forgot {
    display: block;
    position: unset;
  }
  .forgot__logo {
    width: 100%;
    height: 50px;
    display: block;
    margin: auto;
  }
  .forgot__h1-title {
    padding: 8px 0;
  }
}
</style>

