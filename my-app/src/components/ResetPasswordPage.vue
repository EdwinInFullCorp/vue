<template>
  	<div class="container">
		<div class="reset_password">
			<img class="reset_password__logo" src="../assets/logo.svg" alt="logo 不見了">
			<h1 class="reset_password__h1-title">Health Cloud</h1>
			<form class="reset_password__form" method="post" action="/users/reset">
        <div v-if=" success === true">
          <h2 class="reset_password__h2">Reset Password</h2>
          <p class="reset_password__text-message-title">Success &#x2713;</p>
          <p class="reset_password__text-message">{{ info }}</p>
        </div>
        <div v-else>
		      <h2 class="reset_password__h2">Reset Password</h2>
					<input type="hidden" name="token" value="<%= token %>" />
					<label class="reset_password__label">Password</label>
					<input class="reset_password__input" type="password" name="password" />
					<label class="reset_password__label">Confirm Password</label>
					<input class="reset_password__input" type="password" />
					<button class="reset_password__button-reset_password" type="submit">Reset</button>
					<p class="reset_password__text-message"> {{ error }} {{ info }}</p>
        </div>
			</form>
			<div class="other">
				<div v-if=" success === true">
					<a class="other__link" href="/#/login">Login</a>
				</div>
        <div v-else>
					<a class="other__link" href="/#/register">Create Account</a>
			  </div>
			</div>
			<footer class="reset_password__footer">©Copyright 2018 Full Enterprise Corp. All rights reserved.</footer>
		</div>
	</div>
</template>
<style scoped>
body{padding:0;margin:0;}
		.container{
			display: grid;
			grid-template-columns: auto 320px auto;
			grid-template-rows: auto auto auto;
			top:0;
			bottom:0;
			left:0;
			right:0;
			position: absolute;
		}
		.reset_password{
			font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue','Microsoft JhengHei', sans-serif;
			color: #666;
			margin:auto;			
			width:320px;
			grid-area: 2/2/3/3;
		}
		.reset_password__logo{
			width:100px;
			height:100px;
			margin: auto;
			display: block;
		}
		.reset_password__h1-title{
			color:#f66;
			text-align: center;			
			font-weight: 300;
			margin:0;
			padding:16px 0;
		}
		.reset_password__form{
			width:280px;
			box-shadow:inset 0 0 0 1px #f66;
			padding:20px;
			overflow: hidden;
			animation: onePxWidth 1s 1;			
			transition: 0.3s;
			background-color:#fff;
			margin: auto;
		}
		.reset_password__h2{
			margin:0;
			font-weight: 300;
			font-size:24px;
			line-height: 24px;
		}
		.reset_password__label{
			display: block;
			width:100%;
			padding:16px 0px 8px;
		}
		.reset_password__input{
			padding:0;
			margin:0;
			border:0;
			display: block;
			width:100%;
			box-shadow:inset  0 -1px 0 0 #f66;
			outline: none;
			line-height:32px;
			height:32px;
			text-indent: 8px;
			transition: 0.3s;
			background-color:#fff0;
		}
		.reset_password__input:focus{
			border-bottom-left-radius: 8px;
			box-shadow:inset  0 -1px 0 0 #f66;
		}
		.reset_password__type{
			height:32px;
		}
		.reset_password__type *{
			display: block;
			float:left;
			line-height:32px;
		}
		.reset_password__type-label{
			display: block;
			height:32px;
			padding:0 8px;
			line-height:32px;
		}
		.reset_password__type-option{
			display: block;
			height:24px;
			width:24px;
			margin: 4px;
			line-height:32px;
		}

		.reset_password__text-message{
			font-size: 16px;
			padding: 0;
			margin: 0;
		}
		.reset_password__text-message-title{
			font-size: 32px;
			color:#56ca73;
			font-weight: 900;
			text-align: center;
			padding: 16px 0;
			margin: 0;
		}
		.reset_password__button-reset_password{
			display: block;
			width:100%;
			outline: none;
			margin-top:16px;
			line-height:32px;
			background-color:#ff6060;
			color:#fff;
			border:0;
			padding:0;
			cursor: pointer;
			transition: 0.3s;
		}
		.reset_password__button-reset_password:hover {
			letter-spacing: 4px;
			background-color:#ae7bff;
		}
		.other{
			text-align: center;
		}
		.other__link{
			color:#f66;
			cursor: pointer;
			padding:8px;
			display: inline-block;
			text-decoration: none;
		}
		.reset_password__footer{
			text-align: center;
			font-size:12px;
			padding:4px;
			line-height: 12px;
		}
		@keyframes onePxWidth {
			0% {width: 1px;padding: 0;height:0;}
			50% {width: 1px;padding: 0;height:500px;}
			80% {width: 200px;padding: 0;height:auto;}
			100% {padding:16px;}
		}
		@media only screen and (max-width: 320px ) {
			.reset_password {
				display: block;
				position: unset;
			}
			.reset_password__logo{
				width:100%;
				height:50px;
				display: block;
				margin: auto;
			}
			.reset_password__h1-title{
				padding:8px 0;
			}
		}
</style>

