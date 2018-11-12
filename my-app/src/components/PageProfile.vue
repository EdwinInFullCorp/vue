<template>
  <div>
    <span v-if="isProfile === true"> {{profileSuccessMessage}} </span>
    <form action="" v-else>
      <h1>{{ title }}</h1>
      <label for="">Nickname</label>
      <input type="text" v-model="nickname"/>
      <label for="">Account</label>
      <input type="text" v-model="account" readonly/>
      <label for="">E-mail</label>
      <input type="text" v-model="email"/>
      <label for="">Phone</label>
      <input type="text" v-model="phone"/>
      <label for="">Password</label>
      <input type="password" v-model="password"/>
      <label for="">Confirm Password</label>
      <input type="password" v-model="confirmPassword"/>
      <p class="profile-message" v-if="isProfile === false"> {{profileMessage}} </p>
      <button class="profile-submit" type="button" v-on:click="save">SAVE</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Profile",
  data() {
    return {
      title: "Profile",
      nickname: "a",
      account: "a",
      password: "**********",
      confirmPassword: "**********",
      phone: "0987654321",
      email: "a@a.a",
      isPass: false,
      isProfile: false,
      profileMessage: "",
      profileSuccessMessage: ""
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
        this.axios({
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
.profile-submit {
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
.profile-submit:hover {
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
input[readonly] {
  background-color: #6f6fff;
  background-image: linear-gradient(to right, #6f6fff ,  #ffffff 40%);
  color: #ffffff;
  user-select: none;
}
h1 {
  color: #6f6fff;
  margin: 8px 0;
  padding: 0;
}
.profile-message {
  color: #ff4747;
}
</style>
