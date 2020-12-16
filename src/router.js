import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import ('./components/Main.vue')
  }, {
    path: '/projects',
    Name: 'projects',
    component: () => import ('./components/Projects.vue')
  }, {
    path: '/about',
    Name: 'about',
    component: () => import ('./components/About.vue')
  }, {
    path: '/contact',
    Name: 'contact',
    component: () => import ('./components/Contact.vue')
  }
]

const router = new VueRouter({ mode: 'history', base: process.env.BASE_URL, routes })

export default router
