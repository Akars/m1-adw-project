import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('../components/Product.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../components/Contact.vue')
    }
  ]
})
