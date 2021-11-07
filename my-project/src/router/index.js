import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ContactPage from '@/pages/ContactPage'
import ShopPage from '@/pages/ShopPage'
import ProfilPage from '@/pages/ProfilPage'
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
      component: ProductPage
    },
    {
      path: '/contactPage',
      name: 'ContactPage',
      component: ContactPage
    },
    {
      path: '/shopPage',
      name: 'ShopPage',
      component: ShopPage
    },
    {
      path: '/profilPage',
      name: 'ProfilPage',
      component: ProfilPage
    },
  ]
})
