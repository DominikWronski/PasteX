import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Addpaste from '../views/Addpaste.vue'
import Paste from '../views/Paste.vue'

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
  },
  {
    path: '/paste/:id',
    name: 'Paste',
    component: Paste
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
