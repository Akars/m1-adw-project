<template>
  <div>
    <div class="hello">
      <img class= "img" src="../img/logo.png">
      <h1>All-In-One</h1>
      <button v-on:click="Panier"><img class="img1" src="../img/shopping.png" /></button>
    </div>
  <div class="menu">
          <div class="menu-item">
            <!-- <div [routerLink]="['/explore/brands']"> go to this location </div> -->
        <router-link tag="rl" active-class="active" to ="/">Accueil</router-link>
      </div>
      <div class="menu-item">
       <router-link tag="rl" active-class="active" to="/product"> Produit </router-link>
      </div>
      <div class="menu-item">
        <router-link tag="rl" active-class="active" to="/Profil"> Profil </router-link>
      </div>
      <div class="menu-item">
        <router-link tag="rl" active-class="active" to= '/contact'> Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.menu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    border: solid;
    border-width: 1px;
    border-color: blue;
    background-color: #00008B;
}

.menu-item {
    flex: 1;
    /* border: 1px solid black; */
    text-align: center;
    font-size: 20px;
    color: white;
    margin: 15px;

}

.menu-item:hover{
   background-color: white;
  position:relative;
  width: auto;
  display: block;
}

.menu-item:hover rl {
  color: #00008B;
    font-weight: bold;
    background-color: white;
    cursor:pointer;
}

.menu-item :hover {
  background-color: white;
  background: 1000px
}

button {
    background-color: #4682B4;
    border : none;
    color: white;
    margin-top: 35px;
    cursor: pointer;
    height: 50px;
}

.img {
    height: 120px;
    width: 120px;
}

.img1 {
    height: 50px;
    width: 50px;
}

.hello {
    padding-top: 10px;
    padding-bottom: 10px;
    margin-left: -10px;
    margin-right: -10px;
    margin-top: -10px;
    font-size: 20px;
    background-color: #4682B4;
    display: flex;
    justify-content: space-evenly;
    position: sticky;
}

router-link{
    text-decoration: none;
}

</style>
