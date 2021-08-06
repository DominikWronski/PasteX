import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Addpaste from '../views/Addpaste.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-paste',
    name: 'Addpaste',
    component: Addpaste
  }
]

const router = new VueRouter({
  routes
})

export default router
