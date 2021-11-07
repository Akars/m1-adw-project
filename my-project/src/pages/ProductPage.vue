<template>
  <div>
    <h1>Tous nos produits</h1>
    <div class="mainContainer">
      <button v-if="selectedProduct !== null" v-on:click="backToProducts">Retour</button>
      <div class="products">
        <div v-if="selectedProduct === null" class="product" v-for="product in products" :key="product.id">
          <div class="card" v-on:click="selectProduct(product.id)">
            <b-card
              :title= product.name
              :img-src=product.img
              img-top
              img-alt="Image"
              style="max-width: 20rem;"
              class="mb-2"
            ></b-card>
          </div>
        </div>
        <div v-if="selectedProduct !== null" class="product" v-for="product in selectedProduct">
          <div class="card" v-on:click="showDetail(product)">
            <b-card
              :title= product.name
              :img-src=product.img
              img-top
              img-alt="Image"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <div v-if="selectedItem === product">
                <b-card-text>
                  sometext<br>
                  Price: dazdazdazd
                </b-card-text>

                <b-button v-on:click="addToPanier(product)">Ajouter dans le panier</b-button>
              </div>
            </b-card>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import products from '../../server/data/products'
import alimentations from '../../server/data/alimentations'
import cases from '../../server/data/cases'
import coolings from '../../server/data/coolings'
import cpus from '../../server/data/cpus'
import graphicCards from '../../server/data/graphicCards'
import hdds from '../../server/data/hdds'
import motherBoards from '../../server/data/motherBoards'
import others from '../../server/data/others'
import rams from '../../server/data/rams'

export default {
  props: {
    panier: { type: Object }
  },
  data() {
    return {
      products,
      alimentations,
      cases,
      coolings,
      cpus,
      graphicCards,
      hdds,
      motherBoards,
      others,
      rams,
      selectedProduct: null,
      selectedItem: null,
    }
  },

  methods: {
    backToProducts(){
      this.selectedProduct = null
    },
    selectProduct(productLabel){
      switch(productLabel) {
        case 1:
          this.selectedProduct = this.motherBoards
              break
        case 2:
          this.selectedProduct = this.graphicCards
              break
        case 3:
          this.selectedProduct = this.cpus
              break
        case 4:
          this.selectedProduct = this.hdds
              break
        case 5:
          this.selectedProduct = this.rams
              break
        case 6:
          this.selectedProduct = this.alimentations
              break
        case 7:
          this.selectedProduct = this.coolings
              break
        case 8:
          this.selectedProduct = this.cases
              break
        case 9:
          this.selectedProduct = this.others
              break
      }
    },
    showDetail(value){
      this.selectedItem = value
    },
    addToPanier(product){
      console.log("1")
      this.$emit('add-to-panier', product)
      console.log("2")
    },
  },
};
</script>

<style scoped>

.card {
  width: 220px;
  height: 321px;
  background: #fff;
  border-top-right-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 14px 26px rgba(0,0,0,0.04);
  transition: all 0.3s ease-out;
  text-decoration: none;
  color: #3D56B2;
}

.card:hover{
  transform: translateY(-5px) scale(1.005) translateZ(0);
}

.card:active {
  transform: scale(1) translateZ(0);
  box-shadow: 0 15px 24px rgba(0,0,0,0.11),
    0 15px 24px var(--box-shadow-color);
}

h1 {
  text-align: center;
  color: #4682b4;
  font-weight: bold;
}

.mainContainer {
  margin-top: 10vh;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  padding: 15px;
  min-height: calc(90vh - 50px);
  height: fit-content;
  justify-items: center;
  @media (max-width: 640px) {
    width: 100%;
  }
}

.mb-2 .card-title {
  border-top: black;
  border-top: solid;
  font-size: 1.4em;
  text-align: center;
}

.products {
  justify-items: center;
  display: flex;
  flex-wrap: wrap;
  margin: 40px;
  box-shadow: 0 0 10px #999;
}

.product {
  flex: 1;
  justify-items: center;
  margin: 30px;
  margin-bottom: 50px;
  max-width: 200px;
  max-height: 300px;
  min-width: 200px;
  min-height: 200px;
  font-size: 0.9em;
  @media (max-width: 1100px) {
    width: 100%;
    height: 300px;
    margin: 0px 0px 30px 0px;
  }
}

img{
  height: 200px;
  width: 190px;
}

button {
  background-color: black;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  color: white;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 40px;
}

</style>
