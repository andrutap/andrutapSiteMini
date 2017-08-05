import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Lab from '@/pages/Lab'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/lab',
      name: 'Lab',
      component: Lab
    }
  ]
})
