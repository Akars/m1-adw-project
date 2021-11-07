<template>
  <div>
    <h1>Mon panier</h1>
    <div class="mainContainer"></div>
  </div>
</template>

<script>

export default {

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
</style>
