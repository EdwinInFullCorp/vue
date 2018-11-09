import Vue from 'vue';
import VueRouter from 'vue-router';

import Test from './components/Test.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Profile from './components/Profile.vue';
import WishList from './components/WishList.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path: '/',
      name: 'test',
      component: Test
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
    }
  ]
});