import Vue from 'vue'
import Router from 'vue-router'

import main from './components/main.vue'
import about from './components/about'
import projects from './components/projects'
import contact from './components/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },

    {
      path: '/about',
      Name: 'about',
      component: about
    },

    {
      path: '/projects',
      Name: 'projects',
      component: projects
    },

    {
      path: '/contact',
      Name: 'contact',
      component: contact
    }

  ]
})
