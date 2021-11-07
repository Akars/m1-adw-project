// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    items: [],
    panier: {
      createdAt: null,
      updatedAt: null,
      items: [],
    }
  },

  methods: {
    async getPanier() {
      try {
        const res = await axios.get('/api/panier')
        this.panier = res.data
      }
      catch(e) {
        alert("Error to get the cart")
      }
    },

    async addToPanier(item) {
      const quantity = 1
      console.log("hey")
      const newItem = {
        product: item,
        quantity: quantity,
      }

      try {
        const res = await axios.post('/api/panier', newItem)
        this.panier.items.push(newItem)
        this.panier.updatedAt = new Date()
      }
      catch (e) {
        alert("Error adding in cart")
      }
    }
  }
})
