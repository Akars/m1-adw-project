import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/HomePage'


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
      component: () => import('../pages/ProductPage.vue')
    },
    {
      path: '/contactPage',
      name: 'ContactPage',
      component: () => import('../pages/ContactPage.vue')
    },
    {
      path: '/shopPage',
      name: 'ShopPage',
      component: () => import('../pages/ShopPage.vue')
    },
    {
      path: '/profilPage',
      name: 'ProfilPage',
      component: () => import('../pages/ProfilPage.vue')
    }
  ]
})
