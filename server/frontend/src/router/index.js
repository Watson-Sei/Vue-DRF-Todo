import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Animated from '../components/Animated-background'
import PollIndex from '../components/Poll/Index'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'PollIndex',
    component: PollIndex
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
  path: '/login',
  name: 'Login',
  component: Login
  },
  {
    path: '/animated',
    name: 'Animated',
    component: Animated
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
