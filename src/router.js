import Vue from 'vue'
import Router from 'vue-router'
import main from './components/Main'
import about from './components/About'
import projects from './components/Projects'
import contact from './components/Contact'

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
