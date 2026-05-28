import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import About from '../views/about.vue'
import Service from '../views/service.vue'
import Contact from '../views/contact.vue'



const routes = [

  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/service',
    name: 'Service',
    component: Service
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;