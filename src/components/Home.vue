<template>
<header>
  <div class="hello">
    <img class= "img" src="../img/logo.jpg">
    <h1>{{ msg }}</h1>
    <button onclick="">Panier</button>
  </div>
</header>
  <div class="menu">
      <div class="menu-item">
        <a>Accueil</a>
      </div>
      <div class="menu-item">
       <a>Produit</a>
      </div>
      <div class="menu-item">
        <a>Profil</a>
      </div>
      <div class="menu-item">
        <a>Contact</a>
      </div>
  </div>

<div class="mainContainer">

  <div class="products">
      <div class="product">
        product 1
      </div>
      <div class="product">
        product 2
      </div>
      <div class="product">
        product 3
      </div>
      <div class="product">
        product 4
      </div>
      <div class="product">
        product 5
      </div>
      <div class="product">
        product 6
      </div>
  </div>

</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  text-align: center;
}

.hello {
font-size: 30px;
background-color: white;
display: flex;
justify-content: space-evenly;
margin-top: -30px;
position: sticky;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  flex-wrap: wrap;
}

.menu-item {
  flex: 1;
  /* border: 1px solid black; */
  text-align: center;
  font-size: 20px;
  color: #707070;
  margin: 30px;
}

.a:hover {
  text-decoration: underline;
  color: #223061;
}
 
.img {
  height: 130px;
  width: 130px;
}

button {
  background-color: #0B6BA8;
  border : none;
  color: white;
  margin: 30px;
  cursor: pointer;
  width: 100px;
  height: 50px;
  margin-top: 60px;
  margin-top: 50px;

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
    @media (max-width :640px): {
      width: '100%'
    }
  }

  .products {
    justify-items: center;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
  }

.product {
  flex:1;
  justify-content: center;
  margin: 20px;
}
</style>
