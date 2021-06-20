import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);


Vue.use(VueMaterial)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/HelloWorld.vue')
  },
  // {
  //   path: '/student',
  //   name: 'Student',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Student.vue')
  // }
  // {
  //   path: "/",
  //   alias: "/tutorials",
  //   name: "tutorials",
  //   component: () => import("./components/TutorialsList")
  // },
  // {
  //   path: "/tutorials/:id",
  //   name: "tutorial-details",
  //   component: () => import("./components/Tutorial")
  // },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/AddNew")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
