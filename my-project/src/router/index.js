import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/productPage',
      name: 'ProductPage',
      component: () => import('../components/ProductPage.vue')
    },
    {
      path: '/contactPage',
      name: 'ContactPage',
      component: () => import('../components/ContactPage.vue')
    }
  ]
})
