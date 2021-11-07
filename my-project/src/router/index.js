import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/HomePage'
import ProductPage from '@/pages/ProductPage'
import ContactPage from '@/pages/ContactPage'
import ShopPage from '@/pages/ShopPage'
import ProfilPage from '@/pages/ProfilPage'
import AlimentationPage from '@/pages/AlimentationPage'
import CasePage from '@/pages/CasePage'
import CoolingPage from '@/pages/CoolingPage'
import CpuPage from '@/pages/CpuPage'
import GraphicCardPage from '@/pages/GraphicCardPage'
import HddPage from '@/pages/HddPage'
import MotherBoardPage from '@/pages/MotherBoardPage'
import OtherProductPage from '@/pages/OtherProductPage'
import RamPage from '@/pages/RamPage'

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
    {
      path: '/alimentationPage',
      name: 'AlimentationPage',
      component: AlimentationPage
    },
    {
      path: '/casePage',
      name: 'CasePage',
      component: CasePage
    },
    {
      path: '/coolingPage',
      name: 'CoolingPage',
      component: CoolingPage
    },
    {
      path: '/cpuPage',
      name: 'CpuPage',
      component: CpuPage
    },
    {
      path: '/graphicCardPage',
      name: 'GraphicCardPage',
      component: GraphicCardPage
    },
    {
      path: '/hddPage',
      name: 'HddPage',
      component: HddPage
    },
    {
      path: '/motherBoardPage',
      name: 'MotherBoardPage',
      component: MotherBoardPage
    },
    {
      path: '/otherProductPage',
      name: 'OtherProductPage',
      component: OtherProductPage
    },
    {
      path: '/ramPage',
      name: 'RamPage',
      component: RamPage
    }
  ]
})
