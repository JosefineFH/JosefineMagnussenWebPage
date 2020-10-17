import Vue from 'vue'
import VueRouter from 'vue-router'
import main from './components/Main'
// import about from './components/about'
// import projects from './components/projects'
// import contact from './components/contact'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'main',
        component: main
    }, {
        path: '/projects',
        Name: 'projects',
        component: () => import ('./components/Projects')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// export default new Router({
// mode: 'history',
// base: process.env.BASE_URL,
// routes: [
//     {
//       path: '/',
//       name: 'main',
//       component: main
//     },

//     {
//       path: '/about',
//       Name: 'about',
//       component: about
//     },

//     {
//       path: '/projects',
//       Name: 'projects',
//       component: projects
//     },

//     {
//       path: '/contact',
//       Name: 'contact',
//       component: contact
//     }

// ]
// })
