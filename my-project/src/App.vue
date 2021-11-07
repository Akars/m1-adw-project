<template>
    <div class="app">
      <Header/>
      <router-view :key ="$route.path" @add-to-panier="addToPanier"/>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      items: [],
      panier: {
        createdAt: null,
        updatedAt: null,
        items: [],
      }
    }
  },
  async mounted(){

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
      console.log(newItem)
      try {
        const res = await axios.post('api/panier', newItem)
        this.panier.items.push(newItem)
        this.panier.updatedAt = new Date()
      }
      catch (e) {
        alert("Error adding in cart")
      }
    }
  }
}

</script>

<style>
#app {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #EBF5FB;
}

.app {
  align-content: center;
}
</style>
