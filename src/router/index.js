import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/alert',
    name: 'Alert',
    component: () => import('../views/Alert.vue')
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import('../views/Modal.vue')
  },
  {
    path: '/spinner',
    name: 'Spinner',
    component: () => import('../views/Spinner.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import('../views/Button.vue')
  },
  {
    path: '/chip',
    name: 'Chip',
    component: () => import('../views/Chip.vue')
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import('../views/Card.vue')
  },
  {
    path: '/tab',
    name: 'Tab',
    component: () => import('../views/Tab.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
