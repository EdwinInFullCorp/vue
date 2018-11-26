<template>
 <div class="container">
    <div class="profile">
      <img class="profile__logo" src="../assets/logo.svg" alt="logo 不見了">
      <h1 class="profile__h1-title">Health Cloud</h1>
      <form class="profile__form">
        <h2 class="profile__h2">Profile</h2>
        <input type="hidden" v-model="account._id " />
        <label class="profile__label">Full Name</label>
        <input class="profile__input" type="text" v-model="account.fullname " />
        <label class="profile__label">Phone</label>
        <input class="profile__input" type="text" v-model="account.phone" />
        <label class="profile__label">Email</label>
        <input class="profile__input" type="text" v-model="account.email" />
        <label class="profile__label">Password</label>
        <input class="profile__input" type="password" v-model="account.password" />
        <label class="profile__label">Confirm Password</label>
        <input class="profile__input" type="password" v-model="account.confirmPassword"/>
        <label class="profile__label">Create Time</label>         
        <p class="profile__text-message">
          {{ new Date(account.createTime).toLocaleString() }}
        </p>
        <label class="profile__label">Last Update</label>
        <p class="profile__text-message">
          {{ new Date(account.updateTime).toLocaleString() }}
        </p>
        <p class="profile__text-message">
          {{error}} {{info}}
        </p>
        <button class="profile__button-update" type="submit">Update</button>
      </form>
      <div class="other">
        <a class="other__link" href="javascript:history.back()">Back</a>|
        <a class="other__link" href="/#/logout">Logout</a>
      </div>
      <footer class="profile__footer">©Copyright 2018 Full Enterprise Corp. All rights reserved.</footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {
      account: {
        id: "awefawef",
        fullname: "afwjeoigawo",
        phone: "afwjeoigawo",
        email: "afwjeoigawo",
        password: "afwjeoigawo",
        confirmPassword: "afwjeoigawo",
        createTime: "2018-11-20",
        updateTime: "2018-11-20"
      }
    };
  },
  methods: {
    $_check() {
      if (this.password.length >= 6 && this.password === this.confirmPassword)
        this.isPass = true;
    },
    save() {
      this.$_check();
      if (this.isPass === true) {
        this.Axios({
          method: "post",
          url: `/profile`,
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
              this.isProfile = true;
              this.profileSuccessMessage =
                "恭喜! " + this.nickname + " 註冊成功";
            } else {
              this.isProfile = false;
            }
            this.profileMessage = response.data.info;
          })
          .catch(function(error) {});
      } else {
        alert("no!");
      }
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
.profile {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", "Microsoft JhengHei",
    sans-serif;
  color: #666;
  margin: auto;
  width: 320px;
  grid-area: 2/2/3/3;
}
.profile__logo {
  width: 100px;
  height: 100px;
  margin: auto;
  display: block;
}
.profile__h1-title {
  color: #f66;
  text-align: center;
  font-weight: 300;
  margin: 0;
  padding: 16px 0;
}
.profile__form {
  width: 280px;
  box-shadow: inset 0 0 0 1px #f66;
  padding: 20px;
  overflow: hidden;
  animation: onePxWidth 1s 1;
  transition: 0.3s;
  background-color: #fff;
  margin: auto;
}
.profile__h2 {
  margin: 0;
  font-weight: 300;
  font-size: 24px;
  line-height: 24px;
}
.profile__label {
  display: block;
  width: 100%;
  padding: 16px 0px 8px;
}
.profile__input {
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
.profile__input:focus {
  border-bottom-left-radius: 8px;
  box-shadow: inset 0 -1px 0 0 #f66;
}
.profile__type {
  height: 32px;
}
.profile__type * {
  display: block;
  float: left;
  line-height: 32px;
}
.profile__type-label {
  display: block;
  height: 32px;
  padding: 0 8px;
  line-height: 32px;
}
.profile__type-option {
  display: block;
  height: 24px;
  width: 24px;
  margin: 4px;
  line-height: 32px;
}

.profile__text-message {
  font-size: 16px;
  padding: 0;
  margin: 0;
}
.profile__button-update {
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
.profile__button-update:hover {
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
.profile__footer {
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
  .profile {
    display: block;
    position: unset;
  }
  .profile__logo {
    width: 100%;
    height: 50px;
    display: block;
    margin: auto;
  }
  .profile__h1-title {
    padding: 8px 0;
  }
}
</style>
