<template>
  <div>
    <h1>Vente de composants d'ordinateur</h1>
    <div class="mainContainer">
      <div class="container">
        <h2>Qui ciblons nous ?</h2>
        <div class="div1">
          <div class="img"><img src="../img/img.jpg" /></div>
          <div class="text">
            Vous êtes en train de créer votre propre PC gamer de rêve et avez
            besoin d'acheter en ligne les pièces détachées informatiques que
            vous avez choisies ? Vous voulez upgrader votre PC de bureau à petit
            prix tout en conservant sa garantie ? Vous avez besoin d'un nouveau
            disque dur interne ou d'un disque SSD afin de ne plus subir les
            écrans de chargement interminables ? Bienvenue sur la boutique de
            pièces informatiques de All-In-One ! Nous avons tous les composants
            PC dont vous avez besoin ! Avant tout, commencez par vous demander
            quel boitier PC choisir en fonction de votre utilisation. Que vous
            cherchiez à acquérir un boîtier PC gamer ou bien à monter un mini PC
            de salon, cette catégorie vous offrira les modèles les plus
            perfectionnés de tours PC !
          </div>
        </div>

        <h2>N'hésitez plus ! Commencez à commander !</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  props: {
    items: { type: Array, default: [] },
    panier: { type: Object },
  },
  components: {
    Header,
  },

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
  @media (max-width: 640px) : {
    width: "100%";
  }
}

.div1 img {
  width: 270px;
  height: 204px;
  margin-left: auto;
  margin-right: auto;
}

a {
  text-align: left;
  font-size: 30px;
}

.container {
  box-shadow: 0 0 10px #999;
  margin-top: 20px;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
}

h2 {
  text-align: center;
  padding-top: 20px;
}

.text {
  margin-left: 400px;
  margin-right: 50px;
  margin-top: -150px;
  text-align: justify;
}

img {
  margin-left: auto;
  margin-right: auto;
}
</style>
