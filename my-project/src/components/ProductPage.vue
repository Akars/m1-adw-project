<template>
  <div>
    <h1>Tous nos produits</h1>
    <div class="mainContainer">
      <div class="products">
        <div class="product">
          <div class="center">Carte mère</div>
          <img class="img" src="../assets/carteMere.jpg" />
        </div>
        <div class="product">
          <div class="center">Carte graphique</div>
          <img class="img" src="../assets/cg.jpg" />
        </div>
        <div class="product">
          <div class="center">Processeur</div>
          <img class="img" src="../assets/processeur.jpg" />
        </div>
        <div class="product">
          <div class="center">Disque dur</div>
          <img class="img" src="../assets/disqueDur.jpg" />
        </div>
        <div class="product">
          <div class="center">Carte mémoire</div>
          <img class="img" src="../assets/ram.jpg" />
        </div>
        <div class="product">
          <div class="center">Alimentation</div>
          <img class="img" src="../assets/alimentation.jpg" />
        </div>
        <div class="product">
          <div class="center">Refroidisseur</div>
          <img class="img" src="../assets/refroidisseur.jpg" />
        </div>
        <div class="product">
          <div class="center">Boitier</div>
          <img class="img" src="../assets/boitier.jpg" />
        </div>
        <div class="product">
          <div class="center">Autres produits</div>
          <img class="img" src="../assets/autres.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  border: solid;
  border-width: 2px;
  flex: 1;
  border-color: #4682b4;
  justify-items: center;
  margin: 30px;
  margin-bottom: 50px;
  max-width: 200px;
  max-height: 200px;
  min-width: 200px;
  min-height: 200px;
  @media (max-width: 1100px) {
    width: 100%;
    height: 300px;
    margin: 0px 0px 30px 0px;
  }
}

.img {
  width: 195px;
  height: 160px;
  /* margin-right: auto; */
  justify-items: center;
}

.center {
  font-weight: bold;
  text-align: center;
  border-bottom: solid;
  border-bottom-color: #4682b4;
  border-width: 2px;
  padding-bottom: 10px;
  padding-top: 5px;
}
</style>
