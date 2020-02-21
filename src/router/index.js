import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Login = () => import('../views/Login/Login');
const Index = () => import('../views/Index/Index');

import Schedule from '../views/Index/Schedule/Schedule'
import Extend from '../views/Index/Extend/Extend'
import Profile from '../views/Index/Profile/Profile'

/*主页面子路由*/
const indexChildren = [
  {
    path: '/',
    component: Schedule
  },
  {
    path: 'schedule',
    component: Schedule
  },
  {
    path: 'extend',
    component: Extend
  },
  {
    path: 'profile',
    component: Profile
  }
];

/*配置路由*/
const routes = [
  {
    //配置默认
    path: '',
    redirect: '/index'
  },
  {
    //配置主页面
    path: '/index',
    component: Index,
    children: indexChildren
  },
  {
    //配置登录
    path: '/login',
    component: Login
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
