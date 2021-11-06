<template>
  <div>
    <h1>Tous nos produits</h1>
    <div class="mainContainer">
      <div class="products">
        <div class="product" v-for="product in products">
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
    </div>
  </div>
</template>

<script>
import products from '../../../server/data/products';

export default {
  components:{
  },
  data() {
    return {
      products,
    }
  }
};
</script>

<style scoped>
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
  padding: 25px;
  min-height: calc(90vh - 50px);
  height: fit-content;
  justify-items: center;
  @media (max-width: 640px) {
    width: 100%;
  }
}

.products {
  justify-items: center;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  margin: 40px;
  box-shadow: 0 0 10px #999;
}

.product {
  border-width: 2px;
  flex: 1;
  justify-items: center;
  margin: 30px;
  margin-bottom: 50px;
  max-width: 200px;
  max-height: 300px;
  min-width: 200px;
  min-height: 200px;
  @media (max-width: 1100px) {
    width: 100%;
    height: 300px;
    margin: 0px 0px 30px 0px;
  }
}

</style>
