import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Register from './components/PageRegister.vue';
import Login from './components/PageLogin.vue';
import Profile from './components/PageProfile.vue';
import WishList from './components/PageWishList.vue';
import User from './components/User.vue';
import SystemError from './components/PageSystemError.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/wish',
      name: 'wish',
      component: WishList
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/profile/:id',
      name: 'user',
      component: User
    },
    {
      path: '/error',
      name: 'error',
      component: SystemError
    }
  ]
});