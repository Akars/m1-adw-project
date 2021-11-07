<template>
  <div>
    <h1>Tous nos produits</h1>
    <div class="mainContainer">
      <button>
        <router-link tag="rl" active-class="active" to="ProductPage"
          >Retour</router-link
        >
      </button>
      <div class="products">
        <div class="product" v-for="cooling in coolings">
          <a href="#" class="card">
            <b-card
              :title="cooling.name"
              :img-src="cooling.img"
              img-top
              img-alt="Image"
              style="max-width: 20rem"
              class="mb-2"
            ></b-card>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coolings from "../../../server/data/coolings";

export default {
  components: {},
  data() {
    return {
      coolings,
    };
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
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease-out;
  text-decoration: none;
  color: #3d56b2;
}

.card:hover {
  transform: translateY(-5px) scale(1.005) translateZ(0);
}

.card:active {
  transform: scale(1) translateZ(0);
  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.11),
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
img {
  height: 170px;
  width: 190px;
  margin-top: 10px;

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
